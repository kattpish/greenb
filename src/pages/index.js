import React from 'react'
import PropTypes from 'prop-types'
import { Container, Flex, Text, Image, Box } from 'theme-ui'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Flip from 'react-reveal/Flip'

import PrimaryBtn from '../components/PrimaryBtn'
import SectionContent from '../components/SectionContent'

const Heading = (props) => (
  <Text
    sx={{
      fontFamily: 'Lexend, sans-serif',
      fontSize: [6, null, null, props.primary ? 8 : 7],
      color: props.primary ? 'primary' : 'text',
      fontWeight: 'bold',
      wordSpacing: ['0px', null, null, props.primary ? '0px' : '8px'],
      position: 'relative',
    }}
  >
    {props.children}
  </Text>
)

const Section = ({ children }) => (
  <Flex bg="sectionBg" sx={{ width: '100%', justifyContent: 'space-between' }}>
    <Image sx={{ maxWidth: '600px' }} src={'./about.jpg'} />
    {children}
  </Flex>
)

export default function IndexPage() {
  return (
    <Container px={[4, null, null, 6]} py={3}>
      <Flex
        sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: ['column-reverse', null, null, 'row'],
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: ['center', null, null, 'start'],
            justifyContent: [null, null, null, 'center'],
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
              textAlign: ['center', null, null, 'left'],
            }}
          >
            환경을 위해 노력하는 사람들의 곁에 있는 친구 같은 그린비
          </Text>
          <PrimaryBtn>
            <Text>그린비를 소개해요</Text>
            <AiOutlineArrowRight />
          </PrimaryBtn>
        </Flex>
        <Flip bottom>
          <Image
            sx={{
              maxWidth: ['350px', '400px', '600px', '600px'],
              mt: [4, 4, 2, null],
            }}
            src={'./main.png'}
          />
        </Flip>
      </Flex>
      <Section>
        <SectionContent
          title="자연으로 다시 되돌아가는
생분해성 플라스틱."
          size={5}
          url="/about"
        >
          그린비의 생분해성 플라스틱은 천연 식물성 소재로 만들어져 6개월 안에
          완전히 생분해되어 자연으로 되돌아갑니다. 연소 등의 다른 처리 과정이
          필요하지 않아 지구의 생태계를 보호할 수 있으며, 사람에게 유해한 물질은
          포함되어 있지 않습니다. 그린비의 플라스틱이 생분해되고 난 땅에는 다시
          작물을 재배할 수 있습니다.
        </SectionContent>
      </Section>
    </Container>
  )
}

Heading.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.string,
}

Section.propTypes = {
  children: PropTypes.element,
}
