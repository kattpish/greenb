import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Image, Container, Text, Heading } from 'theme-ui'

function FooterItem({ title, children }) {
  return (
    <Box mb="3">
      <Heading color="light" mb="3">
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
      {/* FIXME */}
      <Container px={[4, null, null, null, 6]} py="5">
        <Flex sx={{ justifyContent: 'center' }} mb="5">
          <Image sx={{}} width="200px" src={'./logo.png'} />
        </Flex>
        <FooterItem title="GreenB">
          <Text color="light">
            그린비는 친환경 생분해성 플라스틱 기술을 보유한 녹색기업
            (주)코마글로벌의 친환경 브랜드입니다.
          </Text>
        </FooterItem>
        <FooterItem title="오시는 길" />
      </Container>
    </Box>
  )
}

Footer.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
}
