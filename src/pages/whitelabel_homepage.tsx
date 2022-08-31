import { Box, Container, Image, Link, useMediaQuery } from '@chakra-ui/react'
import styled from '@emotion/styled'

import Modules from 'components/Modules'
import {
  HOMEPAGE_BACKGROUND,
  PROJECT_NAME,
  IS_WHITELABEL,
} from 'constants/index'
import MODULES from 'constants/whitelabel_modules'

const StyledImage = styled(Image)`
  width: 100%;
  max-height: 85vh;
  object-fit: cover;
`

const HomePage = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
  return (
    <>
      <StyledImage src={HOMEPAGE_BACKGROUND} />
      <Box bgColor="#1F2023" p="4" overflow="hidden">
        <Container maxW="container.lg">
          {/* Top modules */}
          <Modules modules={MODULES.filter((m) => !m.parentModule)} />
        </Container>
        {/* TODO: save in separate whitelabel file */}
        <footer>
          <Box
            display={IS_WHITELABEL && isSmallScreen ? 'block' : 'flex'}
            justifyContent={IS_WHITELABEL ? 'center' : 'space-around'}
            w="100%"
            maxW="800px"
            mx="auto"
            mt="16"
          >
            {' '}
            <Box textAlign="center">{PROJECT_NAME}</Box>
            <Box textAlign="center">
              <span hidden={isSmallScreen}>&nbsp;|&nbsp;</span>
              powered by&nbsp;
              <Link
                target="_blank"
                href="https://whitelabel.banklessacademy.com/?utm_source=BanklessAcademyWhiteLabel&utm_medium=website&utm_campaign=WhiteLabel"
              >
                Bankless Academy
              </Link>
            </Box>
            <Box textAlign="center">
              <span hidden={isSmallScreen}>&nbsp;|&nbsp;</span>
              <Link
                target="_blank"
                href="https://superficial-laser-083.notion.site/humanDAO-Academy-FAQs-4628fc82891a48fb9f3bb28a5ea89456"
              >
                FAQ
              </Link>
            </Box>
          </Box>
        </footer>
      </Box>
    </>
  )
}

export default HomePage
