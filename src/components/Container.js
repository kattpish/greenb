import React from 'react'
import { Box } from 'theme-ui'

export default function Container (props) {
  return (
    <Box {...props} px={[3, null, null, 5]}>
      {props.children}
    </Box>
  )
}
