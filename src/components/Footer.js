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
      <Box as="footer" bg="footerText" sx={{ width: '100%' }}>
        <PrimaryContainer paddingY={4}>
          <Flex
            sx={{
              flexDirection: ['column', null, null, null, 'row'],
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Image sx={{}} width="100px" src={'../../footer-logo.png'} />
            </Box>
            <FooterItem>
              <Text color="light">
                본사: 서울시 용산구 청파로 40 삼구빌딩 1812호 04373, 02)
                337-3399
                <br />
                공장: 경기도 김포시 통진읍 가현리 647-4 다동 10030, 031)
                996-8768
                <br />
              </Text>
              <Text color="light">hj.lim@komaglobal.com</Text>
            </FooterItem>
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
