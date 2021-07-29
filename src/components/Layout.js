import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import './layout.css'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box pt={[3, null, null, 5]}>{children}</Box>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
