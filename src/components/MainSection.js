/** @jsxImportSource theme-ui */

import PropTypes from 'prop-types'
import { Flex, Image, Text, Box } from 'theme-ui'
import Fade from 'react-reveal/Fade'

import PrimaryContainer from '../components/PrimaryContainer'
import { StaticImage } from 'gatsby-plugin-image'

const MainHeading = (props) => (
  <>
    <Text
      sx={{
        fontFamily: 'heading',
        fontWeight: 'bold',
        fontSize: [5, null, null, 6, 7],
        color: 'background',
        wordSpacing: ['0px', null, null, null, '-4px'],
        position: 'relative',
        textAlign: ['center', null, 'left'],
        whiteSpace: ['normal', null, null, 'nowrap'],
      }}
    >
      {props.children}
    </Text>
  </>
)

MainHeading.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node,
}

export default function MainSection({ subtitle, image, bgColor, children }) {
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
            <MainHeading>
              <Text sx={{ color: 'secondary' }}>B</Text>e My Eco Friend,
            </MainHeading>
            <MainHeading primary>Green B</MainHeading>
            <Text
              sx={{
                fontSize: 2,
                color: 'background',
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
              position: 'relative',
              left: ['0', null, null, null, '5rem'],
              width: ['300px', null, '300px', null, '50%'],
            }}
            mb={[4, null, null, null, 0]}
          >
            <Fade bottom opposite distance="50px">
              <StaticImage src="../images/index/main.png" alt="main" />
            </Fade>
          </Box>
        </Flex>
      </PrimaryContainer>
    </Box>
  )
}

MainSection.propTypes = {
  subtitle: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
}
