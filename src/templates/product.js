import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Image, Box, Text, Divider, Link } from 'theme-ui'
import { graphql } from 'gatsby'

import PrimaryContainer from '../components/PrimaryContainer'
import ImageSlide from '../components/ImageSlide'
import SecondaryHeading from '../components/SecondaryHeading'

const Feature = ({ idx, title }) => (
  <Flex sx={{ flexDirection: 'column', alignItems: 'center' }} px="4" py="4">
    <Image
      sx={{ maxWidth: '8em' }}
      src={`../../product/common/icon-${idx}.png`}
    />
    <Text sx={{ fontWeight: 'medium', fontSize: 3, color: 'text' }} pt={3}>
      {title}
    </Text>
  </Flex>
)

Feature.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string,
}

export default function ProductPage({ data }) {
  const product = data.allSitePage.edges[0].node.context

  const LinkData = [
    { name: '생분해성 에어캡', url: '/product/aircap' },
    { name: '생분해성 쇼핑백', url: '/product/shopping-bag' },
    { name: '생분해성 그릇', url: '/product/plate' },
    { name: '생분해성 플라스틱 컵', url: '/product/cup' },
    { name: '생분해성 커트러리', url: '/product/cutlery' },
    { name: '생분해성 용기', url: '/product/container' },
    { name: '생분해성 식탁보', url: '/product/tablecloth' },
    { name: '생분해성 수지', url: '/product/resin' },
    { name: '생분해성 롤백', url: '/product/rollbag' },
    { name: '생분해성 캠핑용 수세미', url: '/product/sponge' },
    { name: '생분해성 빨대', url: '/product/straw' },
    { name: '생분해성 랩', url: '/product/wrap' },
  ]
  return (
    <>
      <PrimaryContainer paddingY={6}>
        <Flex
          sx={{
            width: '100%',
            flexDirection: ['column', null, null, null, 'row'],
            alignItems: 'center',
          }}
        >
          <Image
            sx={{ width: ['80%', null, null, null, '45%'] }}
            src={product.mainImage}
          />
          <Flex
            sx={{
              flexDirection: 'column',
              width: ['80%', null, null, null, '40%'],
              alignSelf: 'center',
            }}
            ml={['0', null, null, null, '5']}
            mt={['5', null, null, null, '0']}
          >
            <Box
              sx={{
                width: '35px',
                height: '5px',
                bg: 'primary',
              }}
            />
            <Text
              sx={{
                color: '#000',
                fontSize: 5,
                fontWeight: 'bold',
                my: 2,
                letterSpacing: 1.3,
              }}
            >
              {product.name}
            </Text>
            <Text
              sx={{
                color: '#666',
                fontSize: 3,
                fontWeight: 'medium',
                letterSpacing: 1.1,
              }}
              my={2}
            >
              {product.subtitle}
            </Text>
            <Text variant="paragraph" my={4}>
              {product.firstText}
            </Text>
          </Flex>
        </Flex>
      </PrimaryContainer>
      <Flex sx={{ justifyContent: 'center' }}>
        <Divider />
      </Flex>
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ justifyContent: 'center' }}>
          <Text
            sx={{
              color: 'text',
              fontSize: 5,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            <Text sx={{ color: 'primary' }}>그린비</Text> 생분해성 플라스틱의
            6가지 특징
          </Text>
        </Flex>
        <Flex sx={{ justifyContent: 'center' }} pt={4}>
          <Flex
            sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Feature idx={1} title="맞춤 사이즈와 디자인" />
            <Feature idx={2} title="매장 내 사용 가능" />
            <Feature idx={3} title="환경표지 인증서 획득" />
            <Feature idx={4} title="높은 강도와 내구성" />
            <Feature idx={5} title="100% 자연 생분해" />
            <Feature idx={6} title="친환경 수성잉크 인쇄" />
          </Flex>
        </Flex>
      </PrimaryContainer>
      <Flex sx={{ justifyContent: 'center' }}>
        <Divider />
      </Flex>
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ justifyContent: 'center' }}>
          <Flex
            sx={{
              justifyContent: 'space-between',
              flexDirection: ['column-reverse', null, null, null, 'row'],
              width: ['80%', null, '50%', null, '100%'],
            }}
          >
            <Flex
              sx={{
                flexDirection: 'column',
                width: ['', null, null, null, '50%'],
                alignSelf: 'center',
              }}
              ml={['0', null, null, null, '5']}
              mt={['5', null, null, null, '0']}
            >
              <Box
                sx={{
                  width: '35px',
                  height: '5px',
                  bg: 'primary',
                }}
              />
              <Text
                sx={{
                  color: 'text',
                  fontSize: 3,
                  fontWeight: 'bold',
                  wordBreak: 'keep-all',
                }}
                mt="3"
              >
                {product.secondSubtitle}
              </Text>
              <Text
                variant="paragraph"
                my={[1, null, null, null, 3]}
                mr={[0, null, null, null, 6]}
              >
                {product.secondText}
              </Text>
            </Flex>
            <Image src={product.subImage} sx={{ maxWidth: '500px' }} />
          </Flex>
        </Flex>
      </PrimaryContainer>
      <Flex sx={{ justifyContent: 'center' }}>
        <Divider />
      </Flex>
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text
            sx={{
              color: 'text',
              fontSize: 5,
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 4,
            }}
          >
            <Text sx={{ color: 'primary' }}>생분해성</Text> 플라스틱 시험 결과
          </Text>
          <Image
            sx={{ width: '80%', display: ['none', null, 'block'] }}
            src={'../../product/common/result.svg'}
          />
          <Image
            sx={{ width: '80%', display: ['block', null, 'none'] }}
            src={'../../product/common/small-result.svg'}
          />
        </Flex>
      </PrimaryContainer>
      <Flex sx={{ justifyContent: 'center' }}>
        <Divider />
      </Flex>
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text
            sx={{
              color: 'text',
              fontSize: 5,
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 4,
            }}
          >
            Test Report
          </Text>
          <Flex sx={{ width: ['100%', null, null, null, '60%'] }}>
            <Image src={'../../product/common/report-1.jpg'} />
            <Image src={'../../product/common/report-2.jpg'} />
          </Flex>
        </Flex>
      </PrimaryContainer>
      <PrimaryContainer paddingY={[5, null, null, null, 6]}>
        <SecondaryHeading title={['다른 제품 보기', '']} subtitle={['', '']} />
        <ImageSlide>
          {LinkData.map((u, i) => (
            <Flex
              key={i}
              sx={{ flexDirection: 'column', alignItems: 'center' }}
            >
              <Box
                sx={{
                  width: ['150px', null, '250px'],
                  height: ['150px', null, '250px'],
                  backgroundImage: `url(../../product/link/link-${i + 1}.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></Box>
              <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text my="2" sx={{ fontWeight: 'medium', fontSize: 3 }}>
                  {u.name}
                </Text>
                <Link
                  href={u.url}
                  sx={{
                    color: 'primary',
                    ':hover,:focus,.active': {
                      color: 'primary',
                      fontWeight: 'bold',
                    },
                    textDecoration: 'none',
                  }}
                >
                  더 알아보기
                </Link>
              </Flex>
            </Flex>
          ))}
        </ImageSlide>
      </PrimaryContainer>
    </>
  )
}

export const query = graphql`
  query ($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            url
            subtitle
            mainImage
            firstText
            subImage
            secondSubtitle
            secondText
          }
        }
      }
    }
  }
`
