import React from 'react'

import ProductGallery from '../components/ProductGallery'
import SecondaryHeading from '../components/SecondaryHeading'
import PrimaryContainer from '../components/PrimaryContainer'

export default function ProductPage() {
  return (
    <>
      <PrimaryContainer paddingY={5}>
        <SecondaryHeading
          title={['그린비의 생분해성 플라스틱', '']}
          subtitle={['그린비의 생분해성 플라스틱 제품을 소개합니다.', '']}
        />
        <ProductGallery />
      </PrimaryContainer>
    </>
  )
}
