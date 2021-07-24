import React from 'react';
import { useTheme, Global, css } from '@emotion/react';
import styled from '@emotion/styled';

import Navbar from './Navbar';

const Wrapper = styled('div')``;

export default function Layout({ children }) {
  const theme = useTheme();

  return (
    <Wrapper>
      <Global
        styles={css`
          body {
            font-family: ${theme.fonts.body};
          }
        `}
      />
      <Navbar />
      {children}
    </Wrapper>
  );
}
