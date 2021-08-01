import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Image, Text, Heading } from 'theme-ui'

import PrimaryContainer from './PrimaryContainer'

function FooterItem({ title, children }) {
  return (
    <Box mb="4">
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
    <Box as="footer" bg="footerBg" sx={{ width: '100%' }}>
      <PrimaryContainer paddingY={5}>
        <Flex sx={{ justifyContent: 'flex-start' }} mb="4">
          <Image sx={{}} width="200px" src={'../footer-logo.png'} />
        </Flex>
        <FooterItem title="GreenB">
          <Text color="footerText">
            그린비는 친환경 생분해성 플라스틱 기술을 보유한 녹색기업
            (주)코마글로벌의 친환경 브랜드입니다.
          </Text>
        </FooterItem>
        <FooterItem title="오시는 길">
          <Text color="footerText">
            본사: 서울시 용산구 청파로 40 삼구빌딩 1812호 04373
            <br />
            02) 337-3399
            <br />
            공장: 경기도 김포시 통진읍 가현리 647-4 다동 10030
            <br />
            031) 996-8768
            <br />
          </Text>
          <Text color="footerText" bt="2">
            hj.lim@komaglobal.com
          </Text>
        </FooterItem>
      </PrimaryContainer>
    </Box>
  )
}

Footer.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
}
