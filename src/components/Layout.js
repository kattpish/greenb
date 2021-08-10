/** @jsxImportSource theme-ui */

import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Link } from 'theme-ui'
import { Helmet } from 'react-helmet'
import { FaArrowUp, FaQuestion } from 'react-icons/fa'
import './layout.css'

import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'

const FloatButton = () => (
  <Flex
    sx={{
      flexDirection: 'column',
      position: 'fixed',
      bottom: ['2em', null, null, null, '3em'],
      right: ['2em', null, null, null, '4em'],
      fontSize: 4,
      display: ['none', null, null, null, 'block'],
    }}
  >
    <Flex
      sx={{
        bg: 'background',
        color: 'primary',
        borderRadius: '50%',
        boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
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
    <Link href="/qna">
      <Flex
        sx={{
          bg: 'background',
          color: 'primary',
          borderRadius: '50%',
          boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        }}
        mt="3"
        p="3"
      >
        <FaQuestion />
      </Flex>
    </Link>
  </Flex>
)

export default function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <SEO />
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        <link rel="stylesheet" href="https://use.typekit.net/kcq0zin.css" />
        <script
          async
          defer
          data-website-id="583cfa82-8086-4f71-abb5-d7fc2733b4bc"
          data-domains="greenb.co.kr,www.greenb.co.kr"
          src="https://umami.a1p4ca.com/umami.js"
        ></script>
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
