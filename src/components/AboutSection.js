/** @jsxImportSource theme-ui */

import PropTypes from 'prop-types'
import { Flex, Image, Text, Box } from 'theme-ui'
import Fade from 'react-reveal/Fade'

import PrimaryContainer from '../components/PrimaryContainer'
import PrimaryHeading from '../components/PrimaryHeading'
import { StaticImage } from 'gatsby-plugin-image'

export default function AboutSection({
  title,
  subtitle,
  url,
  imgStyle,
  bgColor,
  children,
}) {
  return (
    <Box sx={{ bg: bgColor }}>
      <PrimaryContainer paddingY={5}>
        <Flex
          sx={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: ['column-reverse', null, null, null, 'row'],
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: ['center', null, null, null, 'start'],
              justifyContent: [null, null, null, null, 'center'],
              minWidth: ['0', null, null, null, '600px'],
            }}
          >
            <PrimaryHeading>{title[0]}</PrimaryHeading>
            <PrimaryHeading primary>{title[1]}</PrimaryHeading>
            <Text
              sx={{
                fontSize: 2,
                color: 'light',
                py: '3',
                textAlign: ['center', null, null, null, 'left'],
                whiteSpace: 'pre-wrap',
                lineHeight: '1.5',
              }}
            >
              {subtitle}
            </Text>
            {children}
          </Flex>
          <Box
            sx={{
              maxWidth: ['100%', null, '300px', null, '800px'],
            }}
          >
            <Fade bottom opposite distance="50px">
              <StaticImage src="../images/about/company.jpg" />
            </Fade>
          </Box>
        </Flex>
      </PrimaryContainer>
    </Box>
  )
}

AboutSection.propTypes = {
  title: PropTypes.array,
  subtitle: PropTypes.string,
  url: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
}
