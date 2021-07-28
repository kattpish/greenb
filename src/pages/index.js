import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Flex, Text, Image, Divider } from 'theme-ui'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Fade from 'react-reveal/Fade'

import PrimaryBtn from '../components/PrimaryBtn'
import SectionContent from '../components/SectionContent'

const Heading = (props) => (
  <Text
    sx={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: [6, null, null, null, props.primary ? 8 : 7],
      color: props.primary ? 'primary' : 'text',
      fontWeight: 'bold',
      wordSpacing: ['0px', null, null, null, props.primary ? '0px' : '8px'],
      position: 'relative',
      textAlign: ['center', null, 'left'],
    }}
  >
    {props.children}
  </Text>
)

const AboutSection = ({ children }) => (
  <Box bg="sectionBg" sx={{ width: '100%' }}>
    <Container px={[4, null, null, null, 6]} py={6}>
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
    </Container>
  </Box>
)

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
    <Fade bottom opposite>
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
          sectionSize="400px"
          mobileAlign={['flex-start', null, '']}
        >
          {children}
        </SectionContent>
      </Flex>
    </Fade>
  )
}

export default function IndexPage() {
  return (
    <>
      <Container px={[4, null, null, null, 6]} py={6}>
        <Flex
          sx={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: ['column-reverse', null, null, null, 'row'],
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: ['center', null, null, null, 'start'],
              justifyContent: [null, null, null, null, 'center'],
            }}
          >
            <Heading>Be My Eco Friend,</Heading>
            <Heading primary>Green B</Heading>
            <Text
              sx={{
                fontSize: 2,
                color: 'light',
                py: '3',
                wordBreak: 'keep-all',
                textAlign: ['center', null, null, null, 'left'],
              }}
            >
              환경을 위해 노력하는 사람들의 곁에 있는 친구 같은 그린비
            </Text>
            <PrimaryBtn>
              <Text>그린비를 소개해요</Text>
              <AiOutlineArrowRight />
            </PrimaryBtn>
          </Flex>
          <Fade bottom opposite distance="50px">
            <Flex
              sx={{ justifyContent: ['center', null, null, 'flex-end', null] }}
            >
              <Image
                sx={{
                  width: ['350px', '400px', '80%', '90%', null],
                  mt: [4, 4, 2, null, null],
                }}
                src={'./main.png'}
              />
            </Flex>
          </Fade>
        </Flex>
      </Container>
      <AboutSection>
        <SectionContent
          pt={[4, null, 0]}
          title="자연으로 다시 되돌아가는
          생분해성 플라스틱."
          size={5}
          url="/about"
          sectionSize="30%"
        >
          그린비의 생분해성 플라스틱은 천연 식물성 소재로 만들어져 6개월 안에
          완전히 생분해되어 자연으로 되돌아갑니다. 연소 등의 다른 처리 과정이
          필요하지 않아 지구의 생태계를 보호할 수 있으며, 사람에게 유해한 물질은
          포함되어 있지 않습니다. 그린비의 플라스틱이 생분해되고 난 땅에는 다시
          작물을 재배할 수 있습니다.
        </SectionContent>
      </AboutSection>
      <Container px={[4, null, null, null, 6]} py={6}>
        <Flex sx={{ flexDirection: 'column' }}>
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text
              sx={{
                color: 'text',
                fontSize: 5,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              그린비가 만들어나가는
              <br />
              지속가능한 순환 경제.
            </Text>
            <Text
              sx={{
                color: 'light',
                fontSize: 3,
                fontWeight: 'body',
                textAlign: 'center',
              }}
              mt={2}
              mb={5}
            >
              그린비의 생분해성 플라스틱
              <br />
              제품을 소개합니다.
            </Text>
          </Flex>
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
      </Container>
      <Container px={[4, null, null, null, 6]} pb={6}>
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Divider />
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
            }}
            pt={5}
          >
            <Text
              sx={{
                color: 'text',
                fontSize: 5,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              그린비와 함께합니다.
            </Text>
            <Text
              sx={{
                color: 'light',
                fontSize: 3,
                fontWeight: 'body',
                textAlign: 'center',
              }}
              mt={2}
              mb={5}
            >
              그린비의 클라이언트를 소개합니다.
            </Text>
          </Flex>
          <Flex
            sx={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '80%',
              flexWrap: 'wrap',
            }}
          >
            <Fade bottom opposite distance="50px">
              <Image
                sx={{ width: '130px' }}
                px={2}
                py={4}
                src={'./clients/client-1.png'}
              />
              <Image
                sx={{ width: '130px' }}
                px={2}
                py={4}
                src={'./clients/client-2.png'}
              />

              <Image
                sx={{ width: '130px' }}
                px={2}
                py={4}
                src={'./clients/client-3.png'}
              />
              <Image
                sx={{ width: '130px' }}
                px={2}
                py={4}
                src={'./clients/client-4.png'}
              />
            </Fade>
          </Flex>
          <Flex
            sx={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '80%',
              flexWrap: 'wrap',
            }}
          >
            <Fade bottom opposite distance="50px">
              <Image
                sx={{ width: '130px' }}
                px={2}
                py={4}
                src={'./clients/client-5.png'}
              />
              <Image
                sx={{ width: '130px' }}
                px={2}
                py={4}
                src={'./clients/client-6.png'}
              />
              <Image
                sx={{ width: '130px' }}
                px={2}
                py={4}
                src={'./clients/client-7.png'}
              />
              <Image
                sx={{ width: '130px' }}
                px={2}
                py={4}
                src={'./clients/client-8.png'}
              />
            </Fade>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

Heading.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.string,
}

AboutSection.propTypes = {
  children: PropTypes.element,
}

ProductSection.propTypes = {
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
  reverse: PropTypes.string,
}
