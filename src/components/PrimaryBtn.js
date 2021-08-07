import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'theme-ui'

export default function PrimaryBtn(props) {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: '0px',
        fontWeight: 'bold',
        fontSize: 1,
        border: '1px solid #fff',
        cursor: 'pointer',
        wordBreak: 'keep-all',
        ':hover': {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'primary',
          color: 'primary',
          bg: 'background',
        },
      }}
      color="white"
      bg="primary"
      px={4}
      py="12px"
    >
      {props.children}
    </Button>
  )
}

PrimaryBtn.propTypes = {
  children: PropTypes.array,
}
