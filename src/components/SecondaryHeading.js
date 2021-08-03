import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from 'theme-ui'

const SecondaryHeading = ({ title, subtitle }) => (
  <>
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Text
        sx={{
          color: 'text',
          fontSize: 5,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {title[0]}
        <br />
        {title[1]}
      </Text>
      <Text
        sx={{
          color: 'light',
          fontSize: 3,
          fontWeight: 'body',
          textAlign: 'center',
        }}
        mt={2}
        mb={4}
      >
        {subtitle[0]}
        <br />
        {subtitle[1]}
      </Text>
    </Flex>
  </>
)

export default SecondaryHeading

SecondaryHeading.propTypes = {
  title: PropTypes.array.isRequired,
  subtitle: PropTypes.array,
}
