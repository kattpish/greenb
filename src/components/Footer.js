/** @jsxImportSource theme-ui */

import PropTypes from 'prop-types'
import { Flex, Box, Image, Text, Heading, Link } from 'theme-ui'

import PrimaryContainer from './PrimaryContainer'

function FooterItem({ title, children, ...props }) {
  return (
    <Box mb="4" sx={{ wordBreak: 'keep-all' }} {...props}>
      <Heading color="footerText" mb="3">
        {title}
      </Heading>
      {children}
    </Box>
  )
}

FooterItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default function Footer() {
  return (
    <>
      <Box as="footer" bg="footerText" sx={{ width: '100%' }}>
        <PrimaryContainer paddingY={4}>
          <Flex
            sx={{
              flexDirection: ['column', null, null, null, 'row'],
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Flex sx={{ flexDirection: 'column' }}>
              <Image sx={{}} width="100px" src={'../../footer-logo.png'} />
              <FooterItem>
                <Text color="light" sx={{ fontSize: 1 }}>
                  그린비는 친환경 생분해성 플라스틱 기술을 보유한
                  <br />
                  녹색기업 (주)코마글로벌의 친환경 브랜드입니다.
                  <br />
                  GreenB © All rights Reserved.
                </Text>
              </FooterItem>
            </Flex>
            <Flex sx={{ alignItems: 'center' }}>
              <FooterItem>
                <Text color="light" sx={{ fontSize: 1 }}>
                  본사 | 서울시 용산구 청파로 40 삼구빌딩 1812호 04373,
                  02-337-3399
                  <br />
                  공장 | 경기도 김포시 통진읍 가현리 647-4 다동 10030,
                  031-996-8768
                  <br />
                </Text>
                <Text color="light">hj.lim@komaglobal.com</Text>
              </FooterItem>
              <Box>
                <Link ml="4" href="https://blog.naver.com/komagreenb">
                  <Image width="30px" src={'../blog.png'} />
                </Link>
              </Box>
            </Flex>
          </Flex>
        </PrimaryContainer>
      </Box>
    </>
  )
}

Footer.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
}
