import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { Helmet } from 'react-helmet'
import './layout.css'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        <link rel="stylesheet" href="https://use.typekit.net/kcq0zin.css" />
      </Helmet>
      <Navbar />
      <Box sx={{ pt: '72px' }}>{children}</Box>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
