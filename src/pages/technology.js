import React from 'react'
import PropTypes from 'prop-types'
import { Box, Image, Text, Flex, Divider, Link, Button } from 'theme-ui'
import { AiOutlinePlus } from 'react-icons/ai'
import { CgMathEqual } from 'react-icons/cg'
import Fade from 'react-reveal/Fade'

import PrimaryContainer from '../components/PrimaryContainer'
import SecondaryHeading from '../components/SecondaryHeading'
import ImageSlide from '../components/ImageSlide'
import CertificateGallery from '../components/CertificateGallery'

const BioplasticSectionItem = ({ url, title }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <Image
      sx={{ maxHeight: '10rem' }}
      src={`../technology/bioplastic-${url}.png`}
    />
    <Text sx={{ fontSize: '3', fontWeight: 'bold' }} mt={4} mb={2}>
      {title}
    </Text>
  </Flex>
)

const BioplasticSection = () => (
  <Box bg="sectionBg" sx={{ width: '100%' }}>
    <PrimaryContainer paddingY={[5, null, null, null, 6]}>
      <SecondaryHeading
        title="생분해성 플라스틱이란?"
        subtitle="그린비의 생분해성 플라스틱을 소개합니다."
      />
      <Fade bottom opposite distance="200px">
        <Flex
          sx={{
            flexDirection: ['column', null, null, null, 'row'],
            alignItems: ['center', null, null, null, 'flex-start'],
            justifyContent: 'center',
          }}
        >
          <BioplasticSectionItem url={1} title="옥수수 전분" />
          <Flex sx={{ fontSize: '7', alignSelf: 'center' }} p="4">
            <AiOutlinePlus />
          </Flex>
          <BioplasticSectionItem url={2} title="생분해성 수지 및 첨가제" />
          <Flex sx={{ fontSize: '7', alignSelf: 'center' }} p="4">
            <CgMathEqual />
          </Flex>
          <BioplasticSectionItem url={3} title="생분해성 플라스틱" />
        </Flex>
      </Fade>
      <Fade bottom opposite distance="200px">
        <Flex
          variant="paragraph"
          sx={{
            justifyContent: 'center',
            color: 'paragraph',
            lineHeight: '1.8',
            pt: '5',
            textAlign: 'center',
          }}
        >
          생분해 플라스틱은 옥수수 전분에 생분해 플라스틱을 만드는 원료인 생분해
          수지를 특수혼련공법으로 결합한 소재입니다. <br />
          분해되는 데 500년이 걸리는 석유화학 플라스틱 제품과 달리 6개월만에
          분해돼 자연으로 돌아가는 자연순환형 소재라고 할 수 있습니다.
          <br />
          그린비는 두 가지 이상의 생분해 소재를 혼합해 가공하는 컴파운딩에 대한
          자체 기술로 국내 시장 경쟁력을 확보하고 있습니다.
          <br />
          원단 압출부터 완제품 제작까지 수직계열화해 생산성이 높고 다양한 제품을
          만들 수 있답니다.
        </Flex>
      </Fade>
    </PrimaryContainer>
  </Box>
)

const AdvantageCard = ({ url, title, children }) => (
  <Fade bottom opposite distance="50px">
    <Flex
      sx={{
        wordBreak: 'keep-all',
        justifyContent: 'center',
        flexDirection: ['column', null, null, null, 'row'],
        alignItems: 'center',
        textAlign: ['center', null, null, null, 'left'],
      }}
      mx="4"
      mb="5"
    >
      <Box>
        <Image
          src={`../technology/advantage-${url}.png`}
          sx={{ width: '100px' }}
          mx="4"
        />
      </Box>
      <Box>
        <Flex
          sx={{
            flexDirection: 'column',
            width: ['', '300px'],
          }}
        >
          <Text sx={{ fontWeight: 'bold', fontSize: '3' }} mb="2">
            {title}
          </Text>
          <Text variant="paragraph">{children}</Text>
        </Flex>
      </Box>
    </Flex>
  </Fade>
)

AdvantageCard.propTypes = {
  url: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default function TechPage() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Image src={'../technology/main.jpg'} />
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
      <BioplasticSection />
      <PrimaryContainer paddingY={6}>
        <SecondaryHeading title="생분해성 플라스틱의 4가지 장점" subtitle="" />
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Flex
            sx={{
              flexDirection: ['column', null, null, null, 'row'],
              justifyContent: 'space-between',
            }}
          >
            <AdvantageCard url={1} title="6개월 이내 완전히 생분해">
              생분해 플라스틱은 천연자원으로 만들어 3~6개월 이내 완전히 생분해
              돼 자연으로 돌아갑니다.
            </AdvantageCard>
            <AdvantageCard url={2} title="인체 유해물질 ZERO">
              그린비의 생분해 플라스틱은 한국 식약청 및 미국, 캐나다, 일본, 유럽
              등 해외의 관련 정부 기관에서 인체 무해한 원료로 승인받았습니다.
            </AdvantageCard>
          </Flex>
          <Flex
            sx={{
              flexDirection: ['column', null, null, null, 'row'],
              justifyContent: 'space-between',
            }}
          >
            <AdvantageCard url={3} title="이산화탄소 DOWN">
              별도의 처리 과정 없이 자연에서 완전 분해돼 토양과 해양 생태계를
              보호하고 소각을 할 때도 탄소 배출량이 적어 지구 온난화를 방지할 수
              있습니다.
            </AdvantageCard>
            <AdvantageCard url={4} title="지속 가능한 순환경제">
              천연식물성 소재를 사용해 완전히 자연으로 돌아가기 때문에 매립된
              땅에 다시 작물을 재배할 수 있어 자연의 선순환을 돕습니다.
            </AdvantageCard>
          </Flex>
        </Flex>
        <Text sx={{ display: 'none' }}>
          Icons made by
          <Link
            href="https://www.flaticon.com/authors/iconixar"
            title="iconixar"
          >
            iconixar
          </Link>
          from
          <Link href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </Link>
        </Text>
      </PrimaryContainer>
      <Flex sx={{ justifyContent: 'center' }}>
        <Divider />
      </Flex>
      <PrimaryContainer paddingY={6}>
        <SecondaryHeading
          title="생분해성 플라스틱이 만들어지려면?"
          subtitle="그린비의 생산 공정을 소개합니다"
        />
        <Flex
          sx={{
            flexDirection: ['column', null, null, null, 'row'],
            justifyContent: 'space-between',
            alignItems: ['center', null, null, null, 'flex-start'],
          }}
        >
          <Fade bottom opposite distance="50px">
            <Flex sx={{ flexDirection: 'column', maxWidth: '350px' }} p="3">
              <Button
                sx={{
                  bg: 'primary',
                  borderRadius: '0px',
                  py: 3,
                  fontWeight: 'bold',
                  wordBreak: 'keep-all',
                }}
              >
                생분해성 수지 생산공정
              </Button>
              <Box>
                <Image src={'../technology/process-1.jpg'} />
              </Box>
            </Flex>
          </Fade>
          <Fade bottom opposite distance="50px">
            <Flex
              sx={{
                flexDirection: 'column',
                maxWidth: '350px',
              }}
              p="3"
            >
              <Button
                sx={{
                  bg: 'primary',
                  borderRadius: '0px',
                  py: 3,
                  fontWeight: 'bold',
                  wordBreak: 'keep-all',
                }}
              >
                생분해성 봉투 생산공정
              </Button>
              <Flex>
                <Image
                  sx={{ width: '80%' }}
                  src={'../technology/process-2.jpg'}
                />
              </Flex>
            </Flex>
          </Fade>
          <Flex sx={{ alignSelf: 'center' }}>
            <Text variant="paragraph" mr="3">
              1. 생분해 수지 투입
              <br /> 2. 수지가열 / 압출
              <br /> 3. 링투입 / 버블공정
              <br /> 4. 냉각장치 / 온도조절
              <br /> 5. 에어 블로우
              <br /> 6. 중간케이지 / 필름홀드
              <br /> 7. 필름 평면 공정
            </Text>
            <Text variant="paragraph">
              8. 가젯보드 / 압출
              <br /> 9. 닙롤러/압출
              <br /> 10. 프린트 / 씨링 가공기
              <br /> 11. 개별 봉투 생산 / 재단
              <br /> 12. 검수 작업
              <br /> 13. 포장
            </Text>
          </Flex>
        </Flex>
      </PrimaryContainer>
      <Box bg="sectionBg" sx={{ width: '100%' }}>
        <PrimaryContainer paddingY={[5, null, null, null, 6]}>
          <SecondaryHeading
            title="그린비의 시설과 장비"
            subtitle="이곳에서 생분해성 플라스틱을 만들고 있습니다"
          />
          <ImageSlide>
            {[...Array(6)].map((u, i) => (
              <Box key={i}>
                <Image src={`../technology/equipment-${i + 1}.jpg`} />
              </Box>
            ))}
          </ImageSlide>
        </PrimaryContainer>
      </Box>
      <PrimaryContainer paddingY={[5, null, null, null, 6]}>
        <SecondaryHeading
          title="인증서 및 성적서"
          subtitle="그린비는 고품질의 친환경 생분해성 플라스틱을 생산합니다."
        />
        <CertificateGallery />
      </PrimaryContainer>
    </>
  )
}
