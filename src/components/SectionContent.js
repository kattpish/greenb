import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text, Link, Image } from 'theme-ui'
import { AiOutlineArrowRight } from 'react-icons/ai'

function SectionContent({
  size = 2,
  title,
  children,
  url,
  sectionSize,
  mobileAlign,
  minWidth,
  hideLink,
  ...props
}) {
  return (
    <Flex
      {...props}
      sx={{
        flexDirection: 'column',
        maxWidth: sectionSize,
        alignSelf: mobileAlign,
        wordBreak: 'keep-all',
      }}
    >
      <Box sx={{ width: '30px' }}>
        <Image src={'../small-logo.png'} />
      </Box>
      <Text
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
      {hideLink ? (
        ''
      ) : (
        <Box color="primary" sx={{ fontWeight: 'bold' }}>
          <AiOutlineArrowRight />
          <Link
            href={url}
            sx={{
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'primary',
              textDecoration: 'none',
              color: 'primary',
              cursor: 'pointer',
              ml: '2',
            }}
          >
            더 알아보기
          </Link>
        </Box>
      )}
    </Flex>
  )
}

SectionContent.propTypes = {
  size: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.string,
  url: PropTypes.string,
  sectionSize: PropTypes.array,
  mobileAlign: PropTypes.array,
  minWidth: PropTypes.number,
  hideLink: PropTypes.bool,
}

export default SectionContent
