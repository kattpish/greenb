import React from 'react';
import { Box } from 'theme-ui';

export default function Container(props) {
  return (
    <Box {...props} px={4}>
      {props.children}
    </Box>
  );
}
