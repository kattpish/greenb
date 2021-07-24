import React from 'react';
import { Flex, Text, Box, Link } from 'rebass';

export default function Navbar() {
  return (
    <Flex px={2} color="black" alignItems="center">
      <Text p={2} fontWeight="bold">
        <img src={'/logo.png'} width="200" alt="Logo" />
      </Text>
      <Box mx="auto" />
      <Link variant="nav" href="/about">
        그린비를 소개해요
      </Link>
      <Link variant="nav" href="/biodegradable">
        기술을 살펴봐요
      </Link>
      <Link variant="nav" href="/product">
        제품보기
      </Link>
      <Link variant="nav" href="/news">
        소식을 전해요
      </Link>
      <Link variant="nav" href="/qna">
        질문에 답해요
      </Link>
    </Flex>
  );
}
