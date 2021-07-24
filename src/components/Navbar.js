import React from 'react';
import { Flex, Text, Box, Link, Button } from 'theme-ui';
import { MenuOutlined } from '@ant-design/icons';

const NavbarLink = (props) => (
  <Link
    fontSize={2}
    fontWeight="body"
    p={2}
    color="text"
    sx={{
      textDecoration: 'none',
      ':hover,:focus,.active': {
        borderBottomWidth: '2px',
        borderBottomColor: 'primary',
        borderBottomStyle: 'solid',
      },
      cursor: 'pointer',
    }}
    href={props.url}
  >
    {props.children}
  </Link>
);

export default function Navbar() {
  return (
    <Flex px={2} color="black" alignItems="center">
      <Text p={2} fontWeight="bold">
        <img src={'/logo.png'} width="100" alt="Logo" />
      </Text>
      <Box mx="auto" />
      <Flex sx={{ display: ['none', 'none', 'block'], flexDirection: ['column', 'column', 'row'] }}>
        <NavbarLink url="/about">그린비를 소개해요</NavbarLink>
        <NavbarLink url="/biodegradable">기술을 살펴봐요</NavbarLink>
        <NavbarLink url="/product">제품보기</NavbarLink>
        <NavbarLink url="/news">소식을 전해요</NavbarLink>
        <NavbarLink url="/qna">질문에 답해요</NavbarLink>
      </Flex>
      <Button color="black" bg="white" sx={{ display: ['block', 'block', 'none'] }}>
        <MenuOutlined />
      </Button>
    </Flex>
  );
}
