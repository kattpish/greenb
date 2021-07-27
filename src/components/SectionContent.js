import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text, Link } from 'theme-ui'
import { AiOutlineArrowRight } from 'react-icons/ai'

function SectionContent({ size = 2, title, children, url, ...props }) {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Box sx={{ width: '45px', height: '7px', bg: 'primary' }} />
      <Text
        {...props}
        sx={{
          color: 'text',
          fontSize: size,
          fontWeight: 'bold',
        }}
        mt={2}
        mb={1}
      >
        {title}
      </Text>
      <Text variant="paragraph" color="paragraph" my={3}>
        {children}
      </Text>
      <Box color="primary" sx={{ fontWeight: 'bold' }}>
        <AiOutlineArrowRight />
        <Link
          url={url}
          sx={{
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'primary',
          }}
        >
          더 알아보기
        </Link>
      </Box>
    </Flex>
  )
}

SectionContent.propTypes = {
  size: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.string,
  url: PropTypes.string,
}

export default SectionContent
