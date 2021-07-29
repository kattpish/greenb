import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Image, Container } from 'theme-ui'

export default function Footer() {
  return (
    <Box bg="footerBg" sx={{ width: '100%' }}>
      <Container px={[4, null, null, null, 6]} py={6}>
        <Flex>
          <Image
            sx={{ width: ['80%', '50%', null, null, '30%'] }}
            src={'./logo.png'}
          />
        </Flex>
      </Container>
    </Box>
  )
}

Footer.propTypes = {
  url: PropTypes.string,
  children: PropTypes.element,
}
