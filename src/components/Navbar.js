import React, { useCallback, useState } from 'react';
import { Flex, Text, Box, Link, Button } from 'theme-ui';
import { useTheme } from '@emotion/react';
import { DownloadOutlined } from '@ant-design/icons';

import Container from './Container';

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
);

export default function Navbar() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  return (
    <Container sx={{ position: 'fixed', width: '100%', bg: 'background', zIndex: '10000' }}>
      <Flex sx={{ flexDirection: ['column', null, null, 'row'], width: '100%', alignItems: 'center' }} color="black">
        <Text>
          <Link href="/">
            <img src={'/logo.png'} width="100" alt="Logo" />
          </Link>
        </Text>
        <Box
          sx={{
            display: [`${isVisible ? 'flex' : 'none'}`, null, null, 'flex'],
            flexDirection: ['column', null, null, 'row'],
            justifyContent: ['center', null, null, 'flex-end'],
            alignItems: ['center', null, null, 'center'],
            position: ['absolute', null, null, 'static'],
            width: '100%',
            left: '0',
            top: '5',
            py: '3',
            bg: 'background',
            boxShadow: ['0px 7px 22px 1px rgba(0,0,0,0.27)', null, null, 'none'],
          }}
        >
          <NavbarLink url="/about">그린비를 소개해요</NavbarLink>
          <NavbarLink url="/biodegradable">기술을 살펴봐요</NavbarLink>
          <NavbarLink url="/product">제품보기</NavbarLink>
          <NavbarLink url="/news">소식을 전해요</NavbarLink>
          <NavbarLink url="/qna">질문에 답해요</NavbarLink>
          <Button sx={{ borderRadius: 1, fontWeight: 'bold', ml: 3, fontSize: 1 }} color="white" bg="primary" px={4} py="12px">
            사업소개서 <DownloadOutlined style={{ paddingLeft: theme.space[2] }} />
          </Button>
        </Box>
        <Button color="black" bg="white" sx={{ display: ['block', 'block', 'block', 'none'], alignSelf: 'flex-end', position: 'absolute', top: '22px', right: '16px' }} onClick={handleClick}>
          <img src={'/bars.svg'} width="30" alt="Menu Bar" />
        </Button>
      </Flex>
    </Container>
  );
}
