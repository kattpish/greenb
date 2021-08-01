import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text, Link } from 'theme-ui'
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
        maxWidth: '450px',
        flexDirection: 'column',
        width: sectionSize,
        alignSelf: mobileAlign,
        wordBreak: 'keep-all',
      }}
    >
      <Box
        sx={{
          width: '35px',
          height: '5px',
          bg: 'primary',
        }}
      />
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
