import React, { useState } from 'react';
import { Flex, Box, Link, Button, Container, useThemeUI} from 'theme-ui';
import { DownloadOutlined } from '@ant-design/icons';

import PrimaryBtn from './PrimaryBtn';

const NavbarLink = (props) => (
  <Link
    fontSize={2}
    fontWeight="body"
    px={3}
    color="text"
    sx={{
      textDecoration: 'none',
      cursor: 'pointer',
      pb: [4, null, null, 0],
      ':hover,:focus,.active': {
        color: 'primary',
      },
    }}
    href={props.url}
  >
    {props.children}
  </Link>
)

export default function Navbar() {
  const { theme } = useThemeUI();
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible)
    console.log(isVisible)
  }

  return (
    <Container 
    sx={{ position: 'fixed', width: '100%', bg: 'background', zIndex: '10000' }}
    px={[4, null, null, 5]}
    >
      <Flex 
      sx={{ width: '100%', justifyContent: 'space-between' }} 
      color="black">
        <Link 
        sx={{ alignSelf: ['flex-start', null, null, 'center'] }} 
        href="/">
          <img src={'/logo.png'} width="100" alt="Logo" />
        </Link>
        <Box
          sx={{
            display: ['none', null, null, 'flex'],
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            left: '0',
            top: '5',
            py: '3',
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
          <NavbarLink url="/biodegradable">기술을 살펴봐요</NavbarLink>
          <NavbarLink url="/product">제품보기</NavbarLink>
          <NavbarLink url="/news">소식을 전해요</NavbarLink>
          <NavbarLink url="/qna">질문에 답해요</NavbarLink>
          <PrimaryBtn>
            사업소개서{' '}
            <DownloadOutlined style={{ paddingLeft: theme.space[2] }} />
          </PrimaryBtn>
        </Box>
        <Button color="black" bg="white" px='0px' sx={{ display: ['block', null, null, 'none'] }} onClick={handleClick}>
          <img src={'/bars.svg'} width="30" alt="Menu Bar" />
        </Button>
      </Flex>
      <Box
          sx={{
            display: [isVisible ? 'flex' : 'none', null, null, 'none'],
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
          }}
          py={1}
        >
          <NavbarLink url="/about">그린비를 소개해요</NavbarLink>
          <NavbarLink url="/biodegradable">기술을 살펴봐요</NavbarLink>
          <NavbarLink url="/product">제품보기</NavbarLink>
          <NavbarLink url="/news">소식을 전해요</NavbarLink>
          <NavbarLink url="/qna">질문에 답해요</NavbarLink>
          <PrimaryBtn>
            사업소개서 <DownloadOutlined style={{ paddingLeft: theme.space[2] }} />
          </PrimaryBtn>
        </Box>
    </Container>
  )
}
