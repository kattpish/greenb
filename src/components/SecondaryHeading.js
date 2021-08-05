import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from 'theme-ui'

const SecondaryHeading = ({ title, subtitle, children }) => (
  <>
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
      mb={5}
    >
      <Text
        sx={{
          color: 'text',
          fontSize: 5,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {title}
      </Text>
      <Text
        sx={{
          color: 'light',
          fontSize: 3,
          fontWeight: 'body',
          textAlign: 'center',
        }}
        mt={2}
      >
        {subtitle}
      </Text>
      {children}
    </Flex>
  </>
)

export default SecondaryHeading

SecondaryHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
}
