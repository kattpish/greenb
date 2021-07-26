import React from 'react';
import { Flex, Text, Button, Image, useThemeUI } from 'theme-ui';
import { ArrowRightOutlined } from '@ant-design/icons';

const Heading = (props) => (
  <Text
    sx={{
      fontFamily: 'heading',
      fontSize: [5, null, null, props.primary ? 8 : 7],
      color: props.primary ? 'primary' : 'text',
      fontWeight: props.primary ? 'bold' : 'medium',
      wordSpacing: ['0px', null, null, props.primary ? '0px' : '-8px'],
      position: 'relative',
      top: props.primary ? '-3' : '',
    }}
  >
    {props.children}
  </Text>
);

export default function IndexPage() {
  const { theme } = useThemeUI();
  return (
    <Flex sx={{ width: '100%', justifyContent: 'space-between', flexDirection: ['column', null, null, 'row'] }}>
      <Flex sx={{ flexDirection: 'column', alignItems: ['center', null, null, 'start'], justifyContent: [null, null, null, 'center'], pl: [null, null, null, 5] }}>
        <Heading>Be My Eco Friend,</Heading>
        <Heading primary>Green B</Heading>
        <Text sx={{ fontSize: 2, color: 'light', py: '3', wordBreak: 'keep-all', textAlign: ['center', null, null, 'left'], width: '60%' }}>
          환경을 위해 노력하는 사람들의 곁에 있는 친구 같은 그린비
        </Text>
        <Button sx={{ borderRadius: 1, fontWeight: 'bold' }} px={4} py="12px" mt={4}>
          그린비를 소개해요
          <ArrowRightOutlined style={{ paddingLeft: theme.space[2] }} />
        </Button>
      </Flex>
      <Image sx={{ maxWidth: ['350px', '600px', '800px', '800px'], alignSelf: ['flex-end', 'flex-end', 'flex-end', null], mt: [4, 4, 2, null] }} src={'./main.png'} />
    </Flex>
  );
}
