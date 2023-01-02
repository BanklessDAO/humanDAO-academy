/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import { LESSONS, QUESTS, GENERIC_ERROR_MESSAGE } from 'constants/index'
import { ONCHAIN_QUESTS } from 'components/Quest/QuestComponent'
import { validateOnchainQuest } from 'utils/index'
import { trackBE } from 'utils/mixpanel'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { address, quest, tx, distinct_id } = req.query
  const { embed } = req.cookies
  if (
    !address ||
    // TODO: replace quest with notionId?
    !quest ||
    typeof address === 'object' ||
    typeof distinct_id === 'object' ||
    typeof quest === 'object' ||
    !QUESTS.includes(quest)
  )
    return res.json({ isQuestValidated: false, error: 'Wrong params' })

  console.log('address', address)
  console.log('quest', quest)

  // Backend onchain quest verification
  if (ONCHAIN_QUESTS.includes(quest)) {
    if (!tx || typeof tx !== 'string') {
      return res.json({ isQuestValidated: false, error: 'Missing transaction' })
    }
    if (quest === 'DEXAggregators') {
      const isOnchainQuestCompleted = await validateOnchainQuest(
        quest,
        address,
        tx
      )
      if (!isOnchainQuestCompleted)
        return res.json({
          isQuestValidated: false,
          error: 'Onchain quest not completed',
        })
    }
  }

  try {
    const userId = await getUserId(address, embed)
    console.log(userId)
    if (!(userId && Number.isInteger(userId)))
      return res.json({ error: 'userId not found' })

    const notionId = LESSONS.find((lesson) => lesson.quest === quest)?.notionId
    if (!notionId) return res.json({ error: 'notionId not found' })

    const [credential] = await db(TABLES.credentials)
      .select('id')
      .where(TABLE.credentials.notion_id, notionId)
    if (!credential) return res.json({ error: 'credentialId not found' })

    let questStatus = ''
    const [questCompleted] = await db(TABLES.completions)
      .select(TABLE.completions.id, TABLE.completions.credential_claimed_at)
      .where(TABLE.completions.credential_id, credential.id)
      .where(TABLE.completions.user_id, userId)
    questStatus = 'Quest already completed'
    const lesson = LESSONS.find((lesson) => lesson.quest === quest)?.name
    if (questCompleted?.id) {
      trackBE(address, 'quest_already_completed', { lesson, embed })
      return res.json({ isQuestValidated: true, status: questStatus })
    } else {
      const [createQuestCompleted] = await db(TABLES.completions).insert(
        { credential_id: credential.id, user_id: userId },
        ['id']
      )

      if (createQuestCompleted?.id) {
        questStatus = 'Quest completed'
        trackBE(address, 'quest_completed', { lesson, embed })
      } else {
        questStatus = 'Problem while adding quest'
      }
      return res.json({
        isQuestValidated: !!createQuestCompleted?.id,
        status: questStatus,
      })
    }
  } catch (error) {
    console.error(error)
    return res.json({
      isQuestValidated: false,
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
