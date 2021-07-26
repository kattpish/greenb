import React from 'react'
import { Box } from 'theme-ui'
import './layout.css'

import Navbar from './Navbar'

export default function Layout ({ children }) {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
    </>
  )
}
