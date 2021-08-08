/** @jsxImportSource theme-ui */

import { Box, Text } from 'theme-ui'

import ProductGallery from '../components/ProductGallery'
import SecondaryHeading from '../components/SecondaryHeading'
import PrimaryContainer from '../components/PrimaryContainer'
import { StaticImage } from 'gatsby-plugin-image'

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
        <StaticImage src={'../images/product/main.jpg'} alt="main" />
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
            biodegradable
            <br />
            plastic products
          </Text>
        </PrimaryContainer>
      </Box>
      <PrimaryContainer paddingY={5}>
        <SecondaryHeading title="그린비의 생분해성 플라스틱 제품" subtitle="">
          <Text
            sx={{
              color: 'light',
              fontSize: 3,
              fontWeight: 'body',
              textAlign: 'center',
            }}
            mt={2}
          >
            그린비의 생분해성 수지와 제품들을 소개합니다.
            <br />
            이미지를 클릭하시면 자세히 볼 수 있습니다.
          </Text>
        </SecondaryHeading>
        <ProductGallery />
      </PrimaryContainer>
    </>
  )
}
