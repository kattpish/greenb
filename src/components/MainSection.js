import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Image, Text, Box } from 'theme-ui'
import Fade from 'react-reveal/Fade'

import PrimaryContainer from '../components/PrimaryContainer'
import PrimaryHeading from '../components/PrimaryHeading'

export default function MainSection({
  title,
  subtitle,
  url,
  imgStyle,
  children,
}) {
  return (
    <PrimaryContainer paddingY={6}>
      <Flex
        sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: ['column-reverse', null, null, null, 'row'],
          pb: 6,
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: ['center', null, null, null, 'start'],
            justifyContent: [null, null, null, null, 'center'],
          }}
        >
          {children ? (
            ''
          ) : (
            <Box
              sx={{
                width: '40px',
                height: '7px',
                bg: 'primary',
                display: ['none', null, null, null, 'block'],
              }}
            />
          )}
          <PrimaryHeading>{title[0]}</PrimaryHeading>
          <PrimaryHeading primary>{title[1]}</PrimaryHeading>
          <Text
            sx={{
              fontSize: 2,
              color: 'light',
              py: '3',
              textAlign: ['center', null, null, null, 'left'],
              width: '50%',
              wordBreak: 'keep-all',
            }}
          >
            {subtitle}
          </Text>
          {children}
        </Flex>
        <Box sx={{ width: '760px', position: 'relative', left: '2rem' }}>
          <Fade bottom opposite distance="50px">
            <Image sx={imgStyle} src={url} />
          </Fade>
        </Box>
      </Flex>
    </PrimaryContainer>
  )
}

MainSection.propTypes = {
  title: PropTypes.array,
  subtitle: PropTypes.string,
  url: PropTypes.string,
  imgStyle: PropTypes.object,
  children: PropTypes.node,
}
