import React from 'react'
import { Container } from 'theme-ui'

import ProductGallery from '../components/ProductGallery'
import SecondaryHeading from '../components/SecondaryHeading'

export default function ProductPage() {
  return (
    <>
      <Container px={[4, null, null, null, 7]} py={5}>
        <SecondaryHeading
          title={['Green B의 생분해성 플라스틱', '']}
          subtitle={['그린비의 생분해성 플라스틱 제품을 소개합니다.', '']}
        />
        <ProductGallery />
      </Container>
    </>
  )
}
