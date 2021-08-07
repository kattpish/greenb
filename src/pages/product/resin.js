/** @jsxImportSource theme-ui */

import PropTypes from 'prop-types'
import { Flex, Image, Box, Text, Divider, Link } from 'theme-ui'

import PrimaryContainer from '../../components/PrimaryContainer'
import ImageSlide from '../../components/ImageSlide'
import SecondaryHeading from '../../components/SecondaryHeading'

const Feature = ({ idx, title }) => (
  <Flex sx={{ flexDirection: 'column', alignItems: 'center' }} px="5" py="4">
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

export default function ProductPage() {
  const LinkData = [
    { name: '생분해 에어캡', url: '/product/aircap' },
    { name: '생분해 쇼핑백', url: '/product/shopping-bag' },
    { name: '생분해 그릇', url: '/product/plate' },
    { name: '생분해 플라스틱 컵', url: '/product/cup' },
    { name: '생분해 커트러리', url: '/product/cutlery' },
    { name: '생분해 용기', url: '/product/container' },
    { name: '생분해 식탁보', url: '/product/tablecloth' },
    { name: '생분해 수지', url: '/product/resin' },
    { name: '생분해 롤백', url: '/product/rollbag' },
    { name: '생분해 캠핑용 수세미', url: '/product/sponge' },
    { name: '생분해 빨대', url: '/product/straw' },
    { name: '생분해 랩', url: '/product/wrap' },
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
            src={'../../product/resin/resin-1.png'}
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
              생분해성 수지
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
              더욱 멋진 미래를 위한 멋진 기술.
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
              그린비는 여러 용도에 맞는 친환경 생분해성 컴파운드 수지 생산기술을
              가지고 있습니다. 환경부 인증마크를 받은 컴파운드 수지로 6개월 이내
              100% 자연으로 돌아간답니다.
            </Text>
          </Flex>
        </Flex>
      </PrimaryContainer>
      <Box bg="sectionBg" sx={{ width: '100%' }}>
        <PrimaryContainer paddingY={6}>
          <Flex mb="5">
            <Flex sx={{ flexDirection: 'column', alignItems: 'center' }} p="2">
              <Image src={'../../product/resin/resin-2.jpg'} />
              <Text sx={{ fontSize: 3 }} pt="2">
                필름수지
              </Text>
            </Flex>
            <Flex sx={{ flexDirection: 'column', alignItems: 'center' }} p="2">
              <Image src={'../../product/resin/resin-3.jpg'} />
              <Text sx={{ fontSize: 3 }} pt="2">
                사출수지
              </Text>
            </Flex>
            <Flex sx={{ flexDirection: 'column', alignItems: 'center' }} p="2">
              <Image src={'../../product/resin/resin-4.jpg'} />
              <Text sx={{ fontSize: 3 }} pt="2">
                빨대수지
              </Text>
            </Flex>
            <Flex sx={{ flexDirection: 'column', alignItems: 'center' }} p="2">
              <Image src={'../../product/resin/resin-5.jpg'} />
              <Text sx={{ fontSize: 3 }} pt="2">
                기타수지
              </Text>
            </Flex>
          </Flex>
          <Flex sx={{ justifyContent: 'center' }}>
            <Text variant="paragraph" sx={{ textAlign: 'center' }}>
              그린비가 만드는 생분해성 컴파운드 수지에는 필름수지, 사출수지,
              빨대수지, 그리고 기타 수지들이 있습니다.
              <br />
              이 생분해성 컴파운드 수지를 가공해 빨대나 그릇, 쇼핑백, 랩 등을
              만드는 거죠.
              <br />
              그린비의 생분해성 컴파운드 수지는 강도, 내수성, 내열성, 성형
              가공성 등에서 일반 플라스틱과 다르지 않은 품질을 자신합니다.
            </Text>
          </Flex>
        </PrimaryContainer>
      </Box>
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ justifyContent: 'center', width: '100%' }}>
          <Box>
            <Flex sx={{ alignItems: 'center' }} py="4">
              <Text
                sx={{
                  fontSize: 5,
                  fontWeight: 'bold',
                }}
              >
                필름수지
              </Text>
              <Box sx={{ width: '5px', height: '70px', bg: 'text' }} mx="4" />
              <Text sx={{ fontSize: 3 }} mx="3">
                PBAT는 유연성이 좋아 부드럽고 강도도 우수합니다.
                <br /> 필름의 주원료로 사용되고 내열성과 유연성이 약한 PLA의
                개질제로 사용하기도 합니다.
                <br />
                필름을 생산할 때 PBAT가 많이 포함될수록 부드럽기 때문이죠.
              </Text>
            </Flex>
            <Flex sx={{ alignItems: 'center' }} py="4">
              <Text
                sx={{
                  fontSize: 5,
                  fontWeight: 'bold',
                }}
              >
                사출수지
              </Text>
              <Box sx={{ width: '5px', height: '70px', bg: 'text' }} mx="4" />
              <Text sx={{ fontSize: 3 }} mx="3">
                PLA는 식물 추출물로 생산되어 친환경적입니다.
                <br />
                PLA는 내열성과 유연성이 약해 다른 부드러운 특성을 가진 원료 또는
                무기물과 함께 혼용해서 사용된답니다.
              </Text>
            </Flex>
            <Flex sx={{ alignItems: 'center' }} py="4">
              <Text
                sx={{
                  fontSize: 5,
                  fontWeight: 'bold',
                }}
              >
                빨대수지
              </Text>
              <Box sx={{ width: '5px', height: '70px', bg: 'text' }} mx="4" />
              <Text sx={{ fontSize: 3 }} mx="3">
                PBS는 위의 PBAT와 PLA의 중간 성질을 가진 원료입니다.
                <br />
                사출용과 섬유용으로 사용되는 만큼 적당한 강도와 좋은 유연성을
                가지고 있죠.
                <br />
                테이크아웃 음료와 같이 주는 빨대를 제작할 때도 사용됩니다.
                시트를 만들기도 하고요.
              </Text>
            </Flex>
            <Flex sx={{ justifyContent: 'center' }} mt="4">
              <Text variant="paragraph" sx={{ textAlign: 'center' }}>
                이와 같이 다양한 생분해 수지들은 적용하고자 하는 용도와 특징에
                맞는 수지를 선택해 가공하게 됩니다.
              </Text>
            </Flex>
          </Box>
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
            src={'../../product/common/resin-result.svg'}
          />
          <Image
            sx={{ width: '80%', display: ['block', null, 'none'] }}
            src={'../../product/common/small-resin-result.svg'}
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
            <Image src={'../../product/common/resin-report-1.jpg'} />
            <Image src={'../../product/common/resin-report-2.jpg'} />
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
