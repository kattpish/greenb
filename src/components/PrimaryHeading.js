import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'theme-ui'

const PrimaryHeading = (props) => (
  <>
    <Text
      sx={{
        fontFamily: 'heading',
        fontWeight: 'bold',
        fontSize: [6, null, null, null, props.primary ? 8 : 7],
        color: props.primary ? 'primary' : 'text',
        wordSpacing: ['0px', null, null, null, '-4px'],
        position: 'relative',
        textAlign: ['center', null, 'left'],
      }}
    >
      {props.children}
    </Text>
  </>
)

export default PrimaryHeading

PrimaryHeading.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node,
}
