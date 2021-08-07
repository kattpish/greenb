/** @jsxImportSource theme-ui */

import { Box, Image, Text } from 'theme-ui'

import ProductGallery from '../components/ProductGallery'
import SecondaryHeading from '../components/SecondaryHeading'
import PrimaryContainer from '../components/PrimaryContainer'

export default function ProductPage() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Image src={'../product/copy.jpg'} />
        <PrimaryContainer>
          <Text
            sx={{
              fontFamily: 'heading',
              fontWeight: 'bold',
              fontSize: [4, null, null, null, 8],
              color: 'background',
              zIndex: 1,
              position: 'absolute',
              bottom: '15%',
              textShadow: [
                '',
                null,
                null,
                null,
                '0px 3px 7px rgba(0, 0, 0, 0.3)',
              ],
              wordBreak: 'break-word',
            }}
            mt="3"
          >
            <Text sx={{ color: 'primary' }}>Green B</Text>
            &apos;s
            <br />
            Biodegradable Plastic
          </Text>
        </PrimaryContainer>
      </Box>
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
