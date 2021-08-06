import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'theme-ui'
import { Helmet } from 'react-helmet'
import { FaArrowUp, FaQuestion } from 'react-icons/fa'
import './layout.css'

import Navbar from './Navbar'
import Footer from './Footer'

const FloatButton = () => (
  <Flex
    sx={{
      flexDirection: 'column',
      position: 'fixed',
      bottom: '8rem',
      right: '5rem',
      fontSize: 5,
      display: ['none', null, null, null, 'block'],
    }}
  >
    <Flex
      sx={{
        bg: 'background',
        borderRadius: '50%',
        boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.2)',
      }}
      p="3"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    >
      <FaArrowUp />
    </Flex>
    <Flex
      sx={{
        bg: 'background',
        borderRadius: '50%',
        boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.2)',
      }}
      mt="3"
      p="3"
    >
      <FaQuestion />
    </Flex>
  </Flex>
)

export default function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
      <FloatButton />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
