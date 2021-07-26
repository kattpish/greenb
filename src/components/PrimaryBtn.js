import React from 'react'
import { Button } from 'theme-ui'

export default function PrimaryBtn ({ children }) {
  return (
    <Button
      sx={{
        borderRadius: '0px',
        fontWeight: 'bold',
        ml: 3,
        fontSize: 1,
        border: '1px solid #fff',
        ':hover': { borderWidth: '1px', borderStyle: 'solid', borderColor: 'primary', color: 'primary', bg: 'background' }
      }}
      color="white"
      bg="primary"
      px={4}
      py="12px"
    >
      {children}
    </Button>
  )
}
