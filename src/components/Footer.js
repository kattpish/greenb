import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Image, Text, Heading } from 'theme-ui'

import PrimaryContainer from './PrimaryContainer'

function FooterItem({ title, children, ...props }) {
  return (
    <Box mb="4" sx={{ wordBreak: 'keep-all' }} mx="2" {...props}>
      <Heading color="footerText" mb="3" sx={{ fontSize: 3 }}>
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
      <Box as="footer" bg="footerBg" sx={{ width: '100%' }}>
        <PrimaryContainer paddingY={5}>
          <Flex
            sx={{
              flexDirection: ['column', null, null, null, 'row'],
              justifyContent: 'space-evenly',
            }}
          >
            <Flex
              sx={{
                flexDirection: 'column',
              }}
            >
              <Box mb="4">
                <Image sx={{}} width="200px" src={'../footer-logo.png'} />
              </Box>
              <FooterItem title="GreenB">
                <Text color="footerText">
                  그린비는 친환경 생분해성 플라스틱 기술을 보유한 녹색기업
                  <br /> (주)코마글로벌의 친환경 브랜드입니다.
                </Text>
              </FooterItem>
            </Flex>
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
            <FooterItem
              title="페이지 바로가기"
              sx={{ display: ['none', null, null, null, 'block'] }}
            >
              <Box mb="1">
                <Text color="footerText">그린비를 소개해요</Text>
              </Box>
              <Box mb="1">
                <Text color="footerText">기술을 살펴봐요</Text>
              </Box>
              <Box mb="1">
                <Text color="footerText">제품보기</Text>
              </Box>
              <Box mb="1">
                <Text color="footerText">소식을 전해요</Text>
              </Box>
              <Box mb="1">
                <Text color="footerText">질문에 답해요</Text>
              </Box>
            </FooterItem>
          </Flex>
        </PrimaryContainer>
      </Box>
      <Box
        as="footer"
        bg="footerText"
        sx={{ width: '100%', textAlign: 'center', color: 'light' }}
        py="3"
      >
        GreenB © All rights Reserved.
      </Box>
    </>
  )
}

Footer.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
}
