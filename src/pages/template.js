import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Image, Box, Text, Divider } from 'theme-ui'

import PrimaryContainer from '../components/PrimaryContainer'
import ImageSlide from '../components/ImageSlide'
import SecondaryHeading from '../components/SecondaryHeading'

const Feature = ({ idx, title }) => (
  <Flex sx={{ flexDirection: 'column', alignItems: 'center' }} px="5" py="4">
    <Image sx={{ maxWidth: '8em' }} src={`../product/common/icon-${idx}.png`} />
    <Text sx={{ fontWeight: 'medium', fontSize: 3, color: 'text' }} pt={3}>
      {title}
    </Text>
  </Flex>
)

Feature.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string,
}

export default function ProductPage() {
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
          <Image sx={{ width: '45%' }} src={'../product/straw/straw-1.png'} />
          <Flex
            sx={{
              flexDirection: 'column',
              width: '40%',
              alignSelf: 'center',
            }}
            ml={['0', null, null, null, '5']}
            mt={['5', null, null, null, '0']}
          >
            <Box sx={{ bg: 'primary', width: '15px', height: '15px' }} />
            <Text
              sx={{
                color: '#000',
                fontSize: 5,
                fontWeight: 'bold',
                my: 2,
                letterSpacing: 1.3,
              }}
            >
              생분해 빨대
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
              형태가 바뀌지 않는 편리함.
            </Text>
            <Text
              sx={{
                color: '#8f8f8f',
                fontSize: 1,
                fontWeight: 'regular',
                letterSpacing: 1.1,
                lineHeight: 1.8,
              }}
              my={4}
            >
              그린비의 생분해 빨대는 국내 생분해성 수지 제품에 대한 인증을
              보유하고 있어 매장 내 사용이 가능한 친환경 인증 제품입니다. 게다가
              환경호르몬과 같은 유해물질에 대한 걱정도 없죠. 음료를 흡수해 쉽게
              흐물거리는 종이 빨대가 불편했다면 생분해 빨대를 사용해보세요.
              플라스틱과 사용감이 같아 편리함은 같지만, 생분해 빨대는 다시
              자연으로 돌아갈 수 있습니다.
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
            <Text sx={{ color: 'primary' }}>Green B</Text> 플라스틱의 6가지 특징
          </Text>
        </Flex>
        <Flex sx={{ justifyContent: 'center' }} pt={4}>
          <Flex
            sx={{
              flexWrap: 'wrap',
              maxWidth: '80%',
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
              <Box sx={{ bg: 'primary', width: '15px', height: '15px' }} />
              <Text
                sx={{
                  color: 'text',
                  fontSize: 3,
                  fontWeight: 'regular',
                  letterSpacing: 0.7,
                  lineHeight: 1.8,
                  wordBreak: 'keep-all',
                }}
                my={[1, null, null, null, 3]}
                mr={[0, null, null, null, 6]}
              >
                그린비는 고품질의 생분해 수지로 다양한 색상과 굵기의 인체에
                무해한 친환경 생분해 빨대를 만듭니다. 빨대에 종이 커버를 씌울
                수도 있죠. 원하는 로고나 문구를 새길 수도 있습니다. 편리하고
                환경에 가까운 생분해 빨대를 원한다면, 그린비입니다.
              </Text>
            </Flex>
            <Image src={'../product/straw/straw-2.jpg'} />
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
          <Image src={'../product/common/result.png'} />
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
            <Image src={'../product/common/report-1.jpg'} />
            <Image src={'../product/common/report-2.jpg'} />
          </Flex>
        </Flex>
      </PrimaryContainer>
      <PrimaryContainer paddingY={[5, null, null, null, 6]}>
        <SecondaryHeading title={['다른 제품 보기', '']} subtitle={['', '']} />
        <ImageSlide>
          {[...Array(6)].map((u, i) => (
            <Box key={i}>
              <Image src={`../technology/equipment-${i + 1}.jpg`} />
            </Box>
          ))}
        </ImageSlide>
      </PrimaryContainer>
    </>
  )
}
