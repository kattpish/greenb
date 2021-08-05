import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Text, Image, Link, Card } from 'theme-ui'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Fade from 'react-reveal/Fade'

import PrimaryBtn from '../components/PrimaryBtn'
import SectionContent from '../components/SectionContent'
import PrimaryContainer from '../components/PrimaryContainer'
import MainSection from '../components/MainSection'
import SecondaryHeading from '../components/SecondaryHeading'

const AboutSection = ({ children }) => (
  <Box sx={{ width: '100%' }}>
    <PrimaryContainer paddingY={6}>
      <Fade bottom opposite distance="50px">
        <Flex
          sx={{
            flexDirection: ['column', null, null, null, 'row'],
            justifyContent: ['center', null, null, 'space-between', null],
            alignItems: 'center',
          }}
        >
          <Image
            sx={{ pr: ['0', null, null, null, '5rem'] }}
            src={'./about.png'}
          />
          {children}
        </Flex>
      </Fade>
    </PrimaryContainer>
  </Box>
)

AboutSection.propTypes = {
  children: PropTypes.node,
}

const ProductSection = ({
  imageUrl,
  url,
  title,
  children,
  reverse,
  ...props
}) => {
  const rowObj = {
    direction: 'row',
    pl: 4,
    pr: 0,
    justifyDirection: 'center',
  }
  const rowReverseObj = {
    direction: 'row-reverse',
    pl: 0,
    pr: 4,
    justifyDirection: 'space-between',
  }
  const selectedObj = reverse ? rowReverseObj : rowObj
  return (
    <Fade bottom opposite distance="50px">
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: ['column', null, selectedObj.direction],
        }}
        py={4}
      >
        <Image
          sx={{ width: '400px', minWidth: '120px' }}
          src={`./product-${imageUrl}.png`}
        />
        <SectionContent
          pt={[5, null, 0]}
          pl={[0, null, 4]}
          title={title}
          size={4}
          url={url}
          sectionSize={['80%', '50%', null, null, '35%']}
          mobileAlign={['flex-start', null, 'center']}
        >
          {children}
        </SectionContent>
      </Flex>
    </Fade>
  )
}

ProductSection.propTypes = {
  imageUrl: PropTypes.number,
  url: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  reverse: PropTypes.bool,
}

const ProductCard = ({ idx, title, children }) => (
  <Fade bottom opposite distance="50px">
    <Card
      sx={{
        maxWidth: 450,
        bg: 'background',
      }}
    >
      <Image src={`../product-${idx}.jpg`} />
      <Box px="4" py="3">
        <Box pt="2">
          <Text sx={{ fontSize: 4, fontWeight: 'bold' }}>{title}</Text>
        </Box>
        <Box my="3">
          <Text variant="paragraph" sx={{ wordBreak: 'keep-all' }}>
            {children}
          </Text>
        </Box>
      </Box>
    </Card>
  </Fade>
)

ProductCard.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default function IndexPage() {
  return (
    <>
      <MainSection
        title={['Be My Eco Friend,', 'Green B']}
        subtitle="환경을 위해 노력하는 사람들의 곁에 있는 친구 같은 그린비"
        url="../main.png"
      >
        <PrimaryBtn>
          <Text>그린비를 소개해요</Text>
          <AiOutlineArrowRight />
        </PrimaryBtn>
      </MainSection>
      <AboutSection>
        <SectionContent
          pt={[4, null, 0]}
          title="자연으로 다시 되돌아가는
          생분해성 플라스틱"
          size={5}
          url="/about"
          sectionSize={['80%', null, null, '700px', '500px']}
        >
          그린비의 생분해성 플라스틱은 천연 식물성 소재로 만들어져 6개월 안에
          완전히 생분해되어 자연으로 되돌아갑니다. 연소 등의 다른 처리 과정이
          필요하지 않아 지구의 생태계를 보호할 수 있으며, 사람에게 유해한 물질은
          포함되어 있지 않습니다. 그린비의 플라스틱이 생분해되고 난 땅에는 다시
          작물을 재배할 수 있습니다.
        </SectionContent>
      </AboutSection>
      <Box sx={{ width: '100%', bg: 'sectionBg' }}>
        <PrimaryContainer paddingY={6}>
          <Flex sx={{ flexDirection: 'column' }}>
            <SecondaryHeading
              title="그린비가 만들어나가는 지속가능한 순환 경제"
              subtitle="그린비의 생분해성 플라스틱 제품을 소개합니다."
            >
              <Flex sx={{ justifyContent: 'center', mt: '4' }}>
                <Link href="/product">
                  <PrimaryBtn>더 알아보기</PrimaryBtn>
                </Link>
              </Flex>
            </SecondaryHeading>
            <Flex
              sx={{
                justifyContent: [
                  'space-between',
                  null,
                  null,
                  null,
                  null,
                  'space-evenly',
                ],
                flexDirection: ['column', null, null, null, 'row'],
                alignItems: 'center',
              }}
            >
              <ProductCard idx={1} title="생분해성 수지">
                생분해성 수지는~~
              </ProductCard>
              <ProductCard idx={2} title="생분해성 완제품">
                생분해성 수지를 이용한~~
              </ProductCard>
            </Flex>
          </Flex>
        </PrimaryContainer>
      </Box>
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <SecondaryHeading
            title={['그린비와 함께합니다.', '']}
            subtitle={['그린비의 클라이언트를 소개합니다.', '']}
          />
          {[
            [1, 2, 3, 4],
            [5, 6, 7, 8],
          ].map((row, key) => (
            <Flex
              sx={{
                justifyContent: ['center', null, null, 'space-between'],
                alignItems: 'center',
                width: ['80%', null, null, null, '100%'],
                flexWrap: 'wrap',
              }}
              key={key}
            >
              <Fade bottom opposite distance="50px">
                {row.map((col, key) => (
                  <Image
                    sx={{ width: '130px' }}
                    mx={['4', null, null, null, '0']}
                    py={4}
                    src={`./clients/client-${col}.png`}
                    key={key}
                  />
                ))}
              </Fade>
            </Flex>
          ))}
        </Flex>
      </PrimaryContainer>
    </>
  )
}
