import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Text, Image, Divider } from 'theme-ui'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Fade from 'react-reveal/Fade'

import PrimaryBtn from '../components/PrimaryBtn'
import SectionContent from '../components/SectionContent'
import PrimaryContainer from '../components/PrimaryContainer'
import MainSection from '../components/MainSection'
import SecondaryHeading from '../components/SecondaryHeading'

const AboutSection = ({ children }) => (
  <Box bg="sectionBg" sx={{ width: '100%' }}>
    <PrimaryContainer paddingY={6}>
      <Fade bottom opposite distance="50px">
        <Flex
          sx={{
            flexDirection: ['column', null, null, null, 'row'],
            justifyContent: ['center', null, null, 'space-evenly', null],
            alignItems: 'center',
          }}
        >
          <Image
            sx={{ width: ['80%', '50%', null, null, '30%'] }}
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
          생분해성 플라스틱."
          size={5}
          url="/about"
          sectionSize={['80%', '50%', null, null, '35%']}
        >
          그린비의 생분해성 플라스틱은 천연 식물성 소재로 만들어져 6개월 안에
          완전히 생분해되어 자연으로 되돌아갑니다. 연소 등의 다른 처리 과정이
          필요하지 않아 지구의 생태계를 보호할 수 있으며, 사람에게 유해한 물질은
          포함되어 있지 않습니다. 그린비의 플라스틱이 생분해되고 난 땅에는 다시
          작물을 재배할 수 있습니다.
        </SectionContent>
      </AboutSection>
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ flexDirection: 'column' }}>
          <SecondaryHeading
            title={['그린비가 만들어나가는', '지속가능한 순환 경제.']}
            subtitle={['그린비의 생분해성 플라스틱', '제품을 소개합니다.']}
          ></SecondaryHeading>
          <ProductSection imageUrl={1} url="/product" title="필름 제품">
            그린비의 필름 제품을 소개합니다.
          </ProductSection>
          <ProductSection imageUrl={2} url="/product" title="필름 제품" reverse>
            그린비의 필름 제품을 소개합니다.
          </ProductSection>
          <ProductSection imageUrl={3} url="/product" title="필름 제품">
            그린비의 필름 제품을 소개합니다.
          </ProductSection>
          <ProductSection imageUrl={4} url="/product" title="필름 제품" reverse>
            그린비의 필름 제품을 소개합니다.
          </ProductSection>
        </Flex>
      </PrimaryContainer>
      <PrimaryContainer sx={{ pb: 6 }}>
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Divider mb={5} />
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
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '80%',
                flexWrap: 'wrap',
              }}
              key={key}
            >
              <Fade bottom opposite distance="50px">
                {row.map((col, key) => (
                  <Image
                    sx={{ width: '130px' }}
                    px={2}
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
