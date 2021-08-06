import React from 'react'
import PropTypes from 'prop-types'
import { Box, Divider, Flex, Image, Text, Card } from 'theme-ui'
import Fade from 'react-reveal/Fade'

import AboutSection from '../components/AboutSection'
import PrimaryContainer from '../components/PrimaryContainer'

import SecondaryHeading from '../components/SecondaryHeading'

const BackgroundSectionItem = ({ idx, title, children }) => (
  <Box>
    <Fade bottom opposite distance="50px">
      <Card
        sx={{
          maxWidth: 400,
          height: '100%',
          lineHeight: '1.5',
          textAlign: 'center',
          wordBreak: 'keep-all',
        }}
        mx="3"
      >
        <Flex sx={{ justifyContent: 'center', pt: '2' }}>
          <Image src={`../about/background-${idx}.png`} />
        </Flex>
        <Box px="3" py="3">
          <Box>
            <Text sx={{ fontSize: 3, fontWeight: 'bold' }}>{title}</Text>
          </Box>
          <Box mt="3">
            <Text sx={{ wordBreak: 'keep-all' }}>{children}</Text>
          </Box>
        </Box>
      </Card>
    </Fade>
  </Box>
)

BackgroundSectionItem.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
}

const BackgroundSection = () => (
  <Box bg="sectionBg" sx={{ width: '100%' }}>
    <PrimaryContainer paddingY={6}>
      <SecondaryHeading
        title="남다른 그린비의 생분해 플라스틱"
        subtitle="세계 생분해성 플라스틱 시장을 선도하기 위한 그린비의 노력"
      />
      <Flex
        sx={{
          justifyContent: 'space-between',
          flexDirection: ['column', null, null, null, 'row'],
          alignItems: ['center', null, null, null, 'stretch'],
        }}
      >
        <BackgroundSectionItem idx={1} title="환경오염의 주범, 플라스틱!">
          플라스틱은 편리하지만 분해가 되지 않고 소각할 때 유해가스를
          만들어냅니다. 지구의 골칫덩이가 되어버렸죠.
        </BackgroundSectionItem>
        <BackgroundSectionItem idx={2} title="생분해 플라스틱의 한계">
          땅에 묻었을 때 6개월 안에 완전히 분해되는 생분해 플라스틱의 탄생!
          그러나 저렴한 대신 품질이 좋지 못했고 좋은 품질은 가격이 높아 대중화가
          어려웠죠.
        </BackgroundSectionItem>
        <BackgroundSectionItem idx={3} title="한계를 넘어선 그린비">
          2018년, 그린비는 자체 제조 시설을 만들어 기술과 원가에서 경쟁력을 갖게
          되었습니다. 일반 플라스틱과 유사한 강도와 내구성을 갖춘 다양한 수지와
          제품을 생산하고 있죠.
        </BackgroundSectionItem>
      </Flex>
    </PrimaryContainer>
  </Box>
)

const FeatureCard = ({ idx, title, children }) => (
  <Card
    sx={{
      maxWidth: [300, null, null, null, 400, 450],
      height: '100%',
    }}
    my="4"
  >
    <Fade bottom opposite distance="50px">
      <Image src={`../about/feature-${idx}.jpg`} />
      <Box sx={{ width: '20px' }} pt={1}>
        <Image src={'../small-logo.png'} />
      </Box>
      <Flex sx={{ flexDirection: 'column' }} pt={1}>
        <Text
          sx={{
            color: 'text',
            fontSize: 4,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Text>
        <Text
          sx={{ lineHeight: '1.5', wordBreak: 'keep-all' }}
          variant="paragraph"
          color="paragraph"
          mt={2}
        >
          {children}
        </Text>
      </Flex>
    </Fade>
  </Card>
)

FeatureCard.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
}

const CITitle = ({ children }) => (
  <Flex sx={{ width: '100%', justifyContent: 'center' }} mb="3">
    <Text sx={{ fontSize: 3, fontWeight: 'medium' }}>{children}</Text>
  </Flex>
)

CITitle.propTypes = {
  children: PropTypes.node,
}

const LogoContainer = ({ children }) => (
  <Flex
    sx={{
      backgroundImage: 'url(../about/logo-bg.png)',
      justifyContent: 'center',
    }}
    py={5}
  >
    {children}
  </Flex>
)

LogoContainer.propTypes = {
  children: PropTypes.node,
}

const ColorCard = ({ idx, name, cymk, rgb, hex }) => (
  <Flex sx={{ flexDirection: 'column' }} mx="3" mb={[3, null, 0]}>
    <Image src={`../about/color-${idx}.png`} sx={{ width: '150px' }} />
    <Text sx={{ fontWeight: 'bold' }} py="2">
      {name}
    </Text>
    <Text>{cymk}</Text>
    <Text>{rgb}</Text>
    <Text>{hex}</Text>
  </Flex>
)

const CIandColorSystem = () => (
  <>
    <Box sx={{ bg: 'sectionBg' }}>
      <PrimaryContainer paddingY={6}>
        <SecondaryHeading title="CI & Color System" />
        <CITitle>로고타입 Logotype</CITitle>
        <LogoContainer>
          <Image src={'../about/logotype.png'} sx={{ width: '200px' }} />
        </LogoContainer>
        <Flex sx={{ width: '100%', justifyContent: 'center' }} my="5">
          <Divider sx={{ width: '100%' }} />
        </Flex>
        <CITitle>워터마크 & 심볼</CITitle>
        <LogoContainer>
          <Flex sx={{ alignItems: 'center' }}>
            <Box sx={{ width: '200px' }} mx="4">
              <Image src={'../about/watermark.png'} />
            </Box>
            <Box mx="4">
              <Image src={'../about/symbol.png'} sx={{ width: '100px' }} />
            </Box>
          </Flex>
        </LogoContainer>
        <Flex sx={{ width: '100%', justifyContent: 'center' }} my="5">
          <Divider sx={{ width: '100%' }} />
        </Flex>
        <CITitle>시그니처 Signature</CITitle>
        <LogoContainer>
          <Flex sx={{ alignItems: 'center' }}>
            <Box sx={{ width: '200px' }} mx="4">
              <Image src={'../about/signature-1.png'} />
            </Box>
            <Box mx="4">
              <Image src={'../about/signature-2.png'} sx={{ width: '100px' }} />
            </Box>
          </Flex>
        </LogoContainer>
      </PrimaryContainer>
    </Box>
    <PrimaryContainer paddingY={6}>
      <SecondaryHeading title="컬러 시스템 소개" />
      <Flex
        sx={{
          flexDirection: ['column', null, 'row'],
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ColorCard
          idx={1}
          name="Forest Green"
          cymk="C 70 / M 0 / Y 60 / K 0"
          rgb="R 63 / G 186 / B 141"
          hex="Web #3FBD8D"
        />
        <ColorCard
          idx={2}
          name="Leaf Green"
          cymk="C 30 / M 0 / Y 55 / K 0"
          rgb="R 184 / G 218 / B 146"
          hex="Web #B8DA92"
        />
        <ColorCard
          idx={3}
          name="Sky Blue"
          cymk="C 40 / M 15 / Y 0 / K 0"
          rgb="R 148 / G 189 / B 229"
          hex="Web #94BDE5"
        />
        <ColorCard
          idx={4}
          name="Earth Grey"
          cymk="C 0 / M 0 / Y 0 / K 50"
          rgb="R 147 / G 149 / B 151"
          hex="Web #939598"
        />
      </Flex>
    </PrimaryContainer>
  </>
)

export default function AboutPage() {
  return (
    <>
      <AboutSection
        title={['Be awesome for', 'earth & us']}
        subtitle={`자연을 위한 것이 우리를 위한 것! \r\n그린비는 지구의 자연과 생태계를 지키기 위한 멋진 일을 만들어 나갑니다.`}
        url="../about/company.jpg"
      />
      <CIandColorSystem />
      <BackgroundSection />
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ flexDirection: 'column' }}>
          <SecondaryHeading title="그린비가 걸어온 길" />
          <Fade bottom opposite distance="50px">
            <Flex sx={{ justifyContent: 'center' }}>
              <Image
                sx={{ display: ['none', null, null, 'block'] }}
                py={4}
                src={'../about/history.jpg'}
              />
            </Flex>
          </Fade>
          <Fade bottom opposite distance="50px">
            <Flex sx={{ justifyContent: 'center' }}>
              <Image
                sx={{ display: ['block', null, null, 'none'] }}
                py={4}
                src={'../about/history-mobile.jpg'}
              />
            </Flex>
          </Fade>
        </Flex>
      </PrimaryContainer>
      <Flex sx={{ justifyContent: 'center' }}>
        <Divider />
      </Flex>
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ flexDirection: 'column' }}>
          <SecondaryHeading title="그린비 6가지 특별함" subtitle={['', '']} />
          <Flex
            sx={{
              flexWrap: 'wrap',
              justifyContent: ['center', 'space-between'],
            }}
          >
            <FeatureCard idx={1} title="높은 생산성의 수직화 시스템">
              생분해 수지 생산은 물론 자체 컴파운딩 기술로 완제품 제작까지
              가능한 수직계열 구조는 높은 생산성을 자랑합니다.
            </FeatureCard>
            <FeatureCard idx={2} title="믿을 수 있는 품질과 높은 안전성">
              원재료를 직접 수입해 원가를 절감하면서도 품질이 높은 그린비
              제품들은 환경부 인증 및 환경 경영 품질 인증을 받고 있습니다.
            </FeatureCard>
            <FeatureCard idx={3} title="국내 유일의 다양한 수지와 제품들">
              자체 컴파운딩 기술을 갖고 있으며 여러가지 특허 및 제휴로 고객
              맞춤의 다양한 수지와 완제품을 만들고 있습니다.
            </FeatureCard>
            <FeatureCard idx={4} title="국내 유일의 원스탑 프로세스">
              생분해 수지 생산부터 압출, 인쇄, 가공까지 직접 운영해 안정된
              공급이 가능합니다.
            </FeatureCard>
            <FeatureCard idx={5} title="세계로 뻗어나가는 그린비의 수지">
              그린비는 국내는 물론 말레이시아, 태국 등 해외에 수지를 공급하고
              있습니다.
            </FeatureCard>
            <FeatureCard idx={6} title="대량 판매 및 고객 중심 서비스">
              물류 시스템을 갖춰 공급 일정을 준수하며 긴급 공급 요청 시 생산량
              확대 운영으로 응대가 가능합니다.
            </FeatureCard>
          </Flex>
        </Flex>
      </PrimaryContainer>
    </>
  )
}
