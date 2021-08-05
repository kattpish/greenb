import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'theme-ui'

export default function PrimaryContainer({ children, paddingY, ...props }) {
  return (
    <Container {...props} px={[4, null, null, null, '200px']} py={paddingY}>
      {children}
    </Container>
  )
}

PrimaryContainer.propTypes = {
  children: PropTypes.node.isRequired,
  paddingY: PropTypes.number,
}
