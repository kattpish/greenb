/** @jsxImportSource theme-ui */

import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Flex, Text, Image, Link, Card, Button } from 'theme-ui'
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
          <StaticImage
            alt="about"
            src={'../images/index/about.jpg'}
            sx={{ maxWidth: ['100%', null, null, null, '600px'] }}
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
        <StaticImage
          sx={{ width: '400px', minWidth: '120px' }}
          src={`../images/index/product-${imageUrl}.png`}
          alt={`product-${imageUrl}`}
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

const ProductCard = ({ image, title, children, ...props }) => (
  <Flex sx={{ height: '100%' }}>
    <Card
      sx={{
        maxWidth: 450,
        bg: 'background',
        height: '100%',
      }}
      mx="4"
      {...props}
    >
      {image}
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
  </Flex>
)

ProductCard.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
}

const ClientImage = ({ width, idx, top }) => (
  <Flex
    sx={{
      width: '200px',
      justifyContent: 'center',
      position: 'relative',
      top: top,
    }}
  >
    <Image
      width={width}
      src={`../clients/client-${idx}.png`}
      mx={['4', null, null, null, '0']}
      py={4}
    />
  </Flex>
)

ClientImage.propTypes = {
  width: PropTypes.number,
  idx: PropTypes.number,
  top: PropTypes.string,
}

export default function IndexPage() {
  return (
    <>
      <MainSection
        subtitle="자연을 위해 노력하는 멋진 당신의 친구, 그린비"
        url="../main.png"
        bgColor="#3ab483"
      >
        <Button
          sx={{
            borderRadius: '0px',
            fontWeight: 'regular',
            fontSize: 1,
            cursor: 'pointer',
            ':hover': {
              color: 'primary',
              bg: 'background',
              fontWeight: 'bold',
            },
          }}
          color="primary"
          bg="white"
          px={4}
          py="12px"
        >
          <Text>그린비를 소개해요</Text>
        </Button>
      </MainSection>
      <AboutSection>
        <SectionContent
          pt={[4, null, 0]}
          title="자연으로 다시 돌아가는
          생분해성 플라스틱"
          size={5}
          url="/about"
          sectionSize={['80%', null, null, '700px', '1000px']}
          linkText="기술을 살펴봐요"
        >
          그린비의 생분해성 플라스틱은 완전히 생분해되어 다시 자연으로
          돌아갑니다. 천연 식물성 소재로 만들어 지구의 생태계를 보호합니다.
          생분해되고 난 땅에는 다시 작물을 키울 수 있답니다.
        </SectionContent>
      </AboutSection>
      <Box sx={{ width: '100%', bg: 'sectionBg' }}>
        <PrimaryContainer paddingY={6}>
          <Flex sx={{ flexDirection: 'column' }}>
            <SecondaryHeading
              title="그린비가 만드는 지속가능한 순환 경제"
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
                  'center',
                ],
                flexDirection: ['column', null, null, null, 'row'],
                alignItems: ['center', null, null, null, 'flex-start'],
              }}
            >
              <ProductCard
                image={
                  <StaticImage
                    alt={`product-1`}
                    src={`../images/index/product-1.jpg`}
                  />
                }
                title="생분해성 수지"
              >
                그린비는 여러 용도에 맞는 생분해성 수지를 생산합니다. 환경부
                인증마크를 받은 그린비의 생분해성 수지는 100% 다시 자연으로
                돌아갑니다.
              </ProductCard>
              <ProductCard
                image={
                  <StaticImage
                    alt={`product-2`}
                    src={`../images/index/product-2.jpg`}
                  />
                }
                title="생분해성 플라스틱 제품"
                mt={[5, null, null, null, 0]}
              >
                그린비는 다양한 생분해성 플라스틱 완제품을 생산합니다. 맞춤
                디자인은 물론 높은 강도와 내구성을 자랑합니다. 그린비의 생분해성
                제품은 100% 다시 자연으로 돌아갑니다.
              </ProductCard>
            </Flex>
          </Flex>
        </PrimaryContainer>
      </Box>
      <PrimaryContainer paddingY={6}>
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <SecondaryHeading
            title="그린비와 함께합니다"
            subtitle="그린비는 최고의 고객들과 함께하고 있습니다."
          />
          <Flex
            sx={{
              justifyContent: ['center', null, null, 'space-between'],
              alignItems: 'center',
              width: ['80%', null, null, null, '100%'],
              flexWrap: 'wrap',
            }}
          >
            <Fade bottom opposite distance="50px">
              <ClientImage width={90} idx={1} top="10px" />
              <ClientImage width={130} idx={2} top="-7px" />
              <ClientImage width={150} idx={3} />
              <ClientImage width={150} idx={4} />
            </Fade>
          </Flex>
          <Flex
            sx={{
              justifyContent: ['center', null, null, 'space-between'],
              alignItems: 'center',
              width: ['80%', null, null, null, '100%'],
              flexWrap: 'wrap',
            }}
          >
            <Fade bottom opposite distance="50px">
              <ClientImage width={130} idx={5} />
              <ClientImage width={130} idx={6} />
              <ClientImage width={110} idx={7} />
              <ClientImage width={110} idx={8} />
            </Fade>
          </Flex>
        </Flex>
      </PrimaryContainer>
    </>
  )
}
