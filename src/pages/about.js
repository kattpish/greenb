import React from 'react'
import PropTypes from 'prop-types'
import { Box, Divider, Flex, Image, Text } from 'theme-ui'
import Fade from 'react-reveal/Fade'

import MainSection from '../components/MainSection'
import PrimaryContainer from '../components/PrimaryContainer'
import SectionContent from '../components/SectionContent'
import SecondaryHeading from '../components/SecondaryHeading'

const BackgroundSectionItem = ({ idx, title, children }) => (
  <Box mb={5}>
    <Fade bottom opposite distance="50px">
      <Flex
        sx={{
          flexDirection: ['column', null, null, null, 'row'],
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          sx={{ width: ['80%', '50%', null, null, '35%'] }}
          src={`../about/background-${idx}.jpg`}
          mr={[0, null, null, null, 4]}
          mb={[4, null, null, null, 0]}
        />
        <SectionContent
          pt={[4, null, 0]}
          title={title}
          size={4}
          sectionSize={['80%', '50%', null, null, '35%']}
          hideLink
        >
          {children}
        </SectionContent>
      </Flex>
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
        title={['환경을 살리는', '생분해성 ‘플라스틱’의 탄생']}
        subtitle={[
          '세계 생분해성 플라스틱 시장을',
          '선도하기 위한 GreenB의 노력',
        ]}
      />
      <BackgroundSectionItem idx={1} title="환경오염의 주범, 플라스틱">
        편리함으로 소비자들의 선호가 높은 플라스틱은 분해가 되지 않고 소각 시
        유해가스 배출로 환경오염의 주범으로 인식되었지만 대안이 없어 사용 제한을
        두기 어려웠습니다.
      </BackgroundSectionItem>
      <BackgroundSectionItem idx={2} title="고가의 생분해 플라스틱">
        단순 매립으로 6개월 안에 완전히 분해되는 기존 생분해 플라스틱은
        저렴하지만 가공성, 강도, 내수성, 성형성 등 품질이 우수하지 못하거나
        가격이 높아 대중화가 어려웠습니다.
      </BackgroundSectionItem>
      <BackgroundSectionItem idx={3} title="고강도의 생분해성 플라스틱">
        2018년 GreenB는 자체 제조 시설 구축으로 일반 플라스틱과 유사한 강도,
        내수성, 내열성, 성형 가공성 등을 갖춘 다양한 수지와 완제품으로 기술 및
        원가 경쟁력을 확보하게 되었습니다.
      </BackgroundSectionItem>
    </PrimaryContainer>
  </Box>
)

const FeatureCard = ({ idx, title, children }) => (
  <Flex sx={{ flexDirection: 'column', minWidth: '400px', padding: 4 }}>
    <Fade bottom opposite distance="50px">
      <Image src={`../about/feature-${idx}.png`} />
      <Box
        mt={3}
        sx={{
          width: '35px',
          height: '5px',
          bg: 'primary',
        }}
      />
      <Flex sx={{ flexDirection: 'column' }} pt={2}>
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
          sx={{ lineHeight: '1.5' }}
          variant="paragraph"
          color="paragraph"
          mt={2}
        >
          {children}
        </Text>
      </Flex>
    </Fade>
  </Flex>
)

FeatureCard.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default function AboutPage() {
  return (
    <>
      <MainSection
        title={['Be awesome for', 'earth & us']}
        subtitle="지구를 위한 것이 우리를 위한 것!
        지구의 자연을 지키는 멋진 일을 우리를 위해서
        실천하는 것이 그린비의 목적입니다."
        url="../about/company.jpg"
      />
      <BackgroundSection />
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ flexDirection: 'column' }}>
          <SecondaryHeading
            title={['그린비가 걸어온', '발자취']}
            subtitle={['', '']}
          />
          <Fade bottom opposite distance="50px">
            <Image
              sx={{ display: ['none', null, null, 'block'] }}
              py={4}
              src={'../about/history.jpg'}
            />
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
          <SecondaryHeading
            title={['편리함, 그 이상을 지향하는', 'GreenB의 특별함']}
            subtitle={['', '']}
          />
          <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            <FeatureCard idx={1} title="수직계열화 구조로 높은 생산성">
              생분해 수지 생산과 자체 컴파운딩 기술로 원단 압출부터 완제품
              제작까지 수직계열화를 통한 높은 생산성으로 가치를 높입니다.
            </FeatureCard>
            <FeatureCard idx={2} title="컴파운딩에 대한 자체 기술력">
              원재료 직접 수입을 통한 생산 원가절감과 재료 안정성을 확보하고
              직접 생산으로 다양한 제품 및 고객 맞춤 제품 생산이 가능합니다.
            </FeatureCard>
            <FeatureCard
              idx={3}
              title="국내 최초 다양한 수지
            및 완제품"
            >
              생분해성 플라스틱 수지 컴파운딩 기술 보유와 이전 및 특허 50여 가지
              제휴로 다양한 수지와 완제품을 생산합니다.
            </FeatureCard>
            <FeatureCard idx={4} title="직접 수입으로 믿을 수 있는 원재료">
              생분해 수지 생산 공장 및 생산시설을 직접 운영하며 생분해 재료
              합성에 대한 자체 기술력을 구축하고 있습니다.
            </FeatureCard>
            <FeatureCard idx={5} title="글로벌을 사로잡는 GreenB">
              국내와 말레이시아, 태국 등 해외에 수지를 공급합니다. 깨끗한 변화의
              중심에 GreenB가 있습니다.
            </FeatureCard>
            <FeatureCard idx={6} title="대량 판매 및 수출 가능">
              물류 시스템 구축을 통해 공급 일정을 준수하며 긴급 공급 요청 시
              생산량 확대 운영을 통한 요청 응대가 가능합니다.
            </FeatureCard>
          </Flex>
        </Flex>
      </PrimaryContainer>
    </>
  )
}
