import React from 'react'
import { useTheme, Global, css } from '@emotion/react'
import styled from '@emotion/styled'

import Navbar from './Navbar'

const Wrapper = styled('div')``

const ChildrenWrapper = styled('div')`
  position: relative;
  top: 90px;
`

export default function Layout ({ children }) {
  const theme = useTheme()

  return (
    <Wrapper>
      <Global
        styles={css`
          body {
            font-family: ${theme.fonts.body};
            margin: 0;
          }
        `}
      />
      <Navbar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  )
}
