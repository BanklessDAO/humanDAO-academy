import { MetaData } from 'components/Head'
import { WHITELABEL } from './whitelabel'
import DEFAULT_LESSONS from './lessons'
import WHITELABEL_LESSONS from './whitelabel_lessons'

export const IS_WHITELABEL = !!WHITELABEL?.project_name

export const LESSONS = IS_WHITELABEL ? WHITELABEL_LESSONS : DEFAULT_LESSONS

export const PROJECT_NAME = WHITELABEL?.project_name || 'Bankless Academy'

export const DOMAIN_PROD = WHITELABEL?.domain_prod || 'app.banklessacademy.com'

export const DOMAIN_URL =
  process.env.VERCEL_URL && process.env.VERCEL_ENV !== 'production'
    ? `https://${process.env.VERCEL_URL}`
    : `https://${DOMAIN_PROD}`

export const DEFAULT_METADATA: MetaData = {
  title: PROJECT_NAME,
  description:
    WHITELABEL?.default_metadata_description ||
    'Level up your knowledge of Web3 and DeFi',
  image: `${DOMAIN_URL}${
    WHITELABEL?.default_metadata_image || '/images/bankless_academy_v3.jpg'
  }`,
}

export const FAVICON = WHITELABEL?.favicon || '/favicon.png'

export const LOGO = WHITELABEL?.logo || '/images/BanklessAcademy.svg'
export const LOGO_SMALL =
  WHITELABEL?.logo_small || '/images/BanklessAcademy_Logo.svg'

export const HOMEPAGE_BACKGROUND =
  WHITELABEL?.homepage_background || '/images/homepage_background_v3.jpg'

export const UMAMI_PROD =
  WHITELABEL?.umami_prod || '62d1cf48-425d-4658-9b86-3eea78ac9714'

export const TOKEN_ADDRESS = {
  1: '0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
  5: '0xab8b6fFA66E1f2CD8938f1df14104600367de257',
}

export const MERKLE_DISTRIBUTOR_ADDRESS = {
  1: [
    '0x9D1f1847582261bE41F5a54e8b60CAD21400C74f',
    '0xb9fce340e39e6fdfc641564922c1ef2716f70f04',
  ],
  5: [
    '0x2abF2d32aCF29551eCa2097BE2E49e3249c6E08e',
    '0xEaf539042bcFF43d8340eb5673A9ce726fFb498A',
  ],
}

export const DefaultProviderName = 'DEFAULT'

export const INFURA_ID = '18533a1dfcd146b8994f38b8e6af372c'

export const POAP_EVENT_IDS: string[] = LESSONS.filter(
  (lesson) => lesson.poapEventId
).map((lesson) => lesson.poapEventId?.toString())

export const KUDOS_IDS: number[] = LESSONS.filter(
  (lesson) => lesson.kudosId
).map((lesson) => lesson.kudosId)

export const OLD_POAP_EVENT_IDS: string[] = ['6454', '6455', '16394', '21670']

export const POAP_QUESTS = {}
LESSONS.filter((lesson) => lesson.poapEventId && lesson.quest).map((lesson) => {
  POAP_QUESTS[lesson.poapEventId.toString()] = lesson.quest
})

export const QUESTS: string[] = LESSONS.filter((lesson) => lesson.quest).map(
  (lesson) => lesson.quest
)

export const POAP_EMAIL_CONTACT = 'poap@banklessacademy.com'

export const GENERIC_ERROR_MESSAGE = `Something went wrong ... please contact ${POAP_EMAIL_CONTACT}`

// TODO: move KUDOS to dedicated file

export const MINTKUDOS_API = process.env.NEXT_PUBLIC_MINTKUDOS_API

export const IS_MINTKUDOS_SANDBOX =
  MINTKUDOS_API === 'https://sandbox-api.mintkudos.xyz'

export const MINTKUDOS_URL = IS_MINTKUDOS_SANDBOX
  ? 'https://sandbox.mintkudos.xyz/'
  : 'https://mintkudos.xyz/'

export const MINTKUDOS_EXPLORER = IS_MINTKUDOS_SANDBOX
  ? 'https://mumbai.polygonscan.com/'
  : 'https://polygonscan.com/'

export const MINTKUDOS_CHAIN_ID = IS_MINTKUDOS_SANDBOX ? 80001 : 137

export const MINTKUDOS_DOMAIN_INFO = {
  name: 'Kudos',
  version: '7',
  // Mumbai | Polygon
  chainId: MINTKUDOS_CHAIN_ID,
  verifyingContract: IS_MINTKUDOS_SANDBOX
    ? '0xB876baF8F69cD35fb96A17a599b070FBdD18A6a1'
    : '0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6',
}

export const MINTKUDOS_COMMUNITY_ID =
  process.env.NEXT_PUBLIC_MINTKUDOS_COMMUNITY_ID

export const MINTKUDOS_KEY = process.env.MINTKUDOS_KEY

const btoa = function (str) {
  return Buffer.from(str).toString('base64')
}

export const MINTKUDOS_ENCODED_STRING = btoa(
  MINTKUDOS_COMMUNITY_ID + ':' + MINTKUDOS_KEY
)
