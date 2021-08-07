/** @jsxImportSource theme-ui */

import { Flex, Box, Link, Button } from 'theme-ui'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { FiDownload } from 'react-icons/fi'

import PrimaryBtn from './PrimaryBtn'
import PrimaryContainer from './PrimaryContainer'

const NavbarLink = (props) => (
  <Link
    fontSize={2}
    fontWeight="body"
    px={3}
    color="text"
    sx={{
      textDecoration: 'none',
      cursor: 'pointer',
      pb: [4, null, null, null, 0, null],
      ':hover,:focus,.active': {
        color: 'primary',
      },
      textAlign: 'center',
      wordBreak: 'keep-all',
    }}
    href={props.url}
  >
    {props.children}
  </Link>
)

NavbarLink.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
    console.log(isVisible)
  }

  return (
    <PrimaryContainer
      sx={{
        position: 'fixed',
        width: '100%',
        bg: 'background',
        zIndex: '10',
        boxShadow: '0px 2px 20px -10px rgba(0,0,0,0.2)',
      }}
      paddingY={3}
    >
      <Flex
        sx={{ width: '100%', justifyContent: 'space-between' }}
        color="black"
      >
        <Link
          sx={{ alignSelf: ['flex-start', null, null, null, 'center'] }}
          href="/"
        >
          <img src={'/logo.png'} width="120" alt="Logo" />
        </Link>
        <Box
          sx={{
            display: ['none', null, null, null, 'flex'],
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            left: '0',
            top: '5',
            bg: 'background',
            boxShadow: [
              '0px 7px 22px 1px rgba(0,0,0,0.27)',
              null,
              null,
              'none',
            ],
          }}
        >
          <NavbarLink url="/about">그린비를 소개해요</NavbarLink>
          <NavbarLink url="/technology">기술을 살펴봐요</NavbarLink>
          <NavbarLink url="/product">제품보기</NavbarLink>
          <NavbarLink url="/news">소식을 전해요</NavbarLink>
          <NavbarLink url="/qna">질문에 답해요</NavbarLink>
          <PrimaryBtn ml={4}>
            사업소개서 <FiDownload />
          </PrimaryBtn>
        </Box>
        <Button
          color="black"
          bg="white"
          px="0px"
          sx={{ display: ['block', null, null, null, 'none'] }}
          onClick={handleClick}
        >
          <img src={'/bars.svg'} width="30" alt="Menu Bar" />
        </Button>
      </Flex>
      <Box
        sx={{
          display: [isVisible ? 'flex' : 'none', null, null, null, 'none'],
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
        }}
        py={1}
      >
        <NavbarLink url="/about">그린비를 소개해요</NavbarLink>
        <NavbarLink url="/technology">기술을 살펴봐요</NavbarLink>
        <NavbarLink url="/product">제품보기</NavbarLink>
        <NavbarLink url="/news">소식을 전해요</NavbarLink>
        <NavbarLink url="/qna">질문에 답해요</NavbarLink>
        <PrimaryBtn sx={{ minWidth: '145px' }}>
          사업소개서 <FiDownload />
        </PrimaryBtn>
      </Box>
    </PrimaryContainer>
  )
}
