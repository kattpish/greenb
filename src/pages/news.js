/** @jsxImportSource theme-ui */

import PropTypes from 'prop-types'
import { Box, Link, Card, Text, Image, Flex } from 'theme-ui'
import { AiFillCaretRight } from 'react-icons/ai'

import SecondaryHeading from '../components/SecondaryHeading'
import PrimaryContainer from '../components/PrimaryContainer'
import { StaticImage } from 'gatsby-plugin-image'

const webzineObj = [
  {
    title: '전세계 해변쓰레기 1위, 34년만에 처음으로 바뀌었다',
    date: '2020. 9. 24',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222098473320&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 1,
  },
  {
    title: `'친환경' 둔갑한 종이 아이스팩…"재활용 수거 안 된다"`,
    date: '2020. 8. 20',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222065835425&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 2,
  },
  {
    title: '썩지 않는 겔형태 아이스팩 2023년부터 폐기물 부담금',
    date: '2020. 8. 20',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222065829824&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 3,
  },
  {
    title: `'바이오 소재'로 탈바꿈...'必친환경' 플라스틱 생활용품 주목`,
    date: '2020. 6. 15',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222001420852&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 4,
  },
  {
    title: '[팩트체크]모르고 먹는 미세플라스틱 얼마나 될까',
    date: '2020. 6. 15',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222001348087&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 5,
  },
  {
    title: `'애물단지' 플라스틱의 변신`,
    date: '2020. 6. 10',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221996225369&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 6,
  },
  // {
  //   title: `롯데월드, '지구의 날 맞아' 필(必)환경 캠페인, 생분해성 쇼핑봉투 등 실천`,
  //   date: '2020. 4. 27',
  //   url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221932370638&categoryNo=7&parentCategoryNo=&from=thumbnailList',
  //   imgUrl: 7,
  // },
  // {
  //   title: `‘必환경’ 바람부는 유통가…친환경 정책사업 ‘우선’`,
  //   date: '2020. 4. 20',
  //   url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221918251888&categoryNo=7&parentCategoryNo=&from=thumbnailList',
  //   imgUrl: 8,
  // },
]

const NewsCard = ({ title, date, url, imgUrl }) => (
  <Card
    sx={{
      maxWidth: 300,
      color: 'text',
      px: 3,
      py: 3,
      mx: 1,
      mb: 5,
    }}
  >
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Flex sx={{ height: '170px', justifyContent: 'center' }}>
        <Image sx={{ height: '100%' }} src={`../news/news-${imgUrl}.jpg`} />
      </Flex>
      <Box>
        <Box mt="3">
          <Text sx={{ fontSize: 2, fontWeight: 'bold' }}>{title}</Text>
        </Box>
        <Box pt="1" pb="2">
          <Text variant="paragraph">{date}</Text>
        </Box>
        <Link
          sx={{
            color: 'primary',
            textDecoration: 'none',
            fontWeight: 'medium',
          }}
          href={url}
        >
          더 알아보기
          <Text
            sx={{
              position: 'relative',
              top: '2px',
              left: '2px',
              cursor: 'pointer',
              fontSize: 1,
            }}
          >
            <AiFillCaretRight />
          </Text>
        </Link>
      </Box>
    </Flex>
  </Card>
)

NewsCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  imgUrl: PropTypes.number,
}

const WebzineCard = ({ title, date, url, imgUrl }) => (
  <Card
    sx={{
      maxWidth: 300,
      color: 'text',
      px: 3,
      py: 3,
      height: '100%',
      mx: 1,
      mb: 5,
    }}
  >
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Flex sx={{ height: '170px', justifyContent: 'center' }}>
        <Image
          sx={{ width: '100%', height: '100%' }}
          src={`../news/webzine-${imgUrl}.jpg`}
        />
      </Flex>
      <Box>
        <Box mt="3">
          <Text sx={{ fontSize: 2, fontWeight: 'bold' }}>{title}</Text>
        </Box>
        <Box pt="1" pb="2">
          <Text variant="paragraph">{date}</Text>
        </Box>
        <Link
          sx={{
            color: 'primary',
            textDecoration: 'none',
            fontWeight: 'medium',
          }}
          href={url}
        >
          더 알아보기
          <Text
            sx={{
              position: 'relative',
              top: '2px',
              left: '2px',
              cursor: 'pointer',
              fontSize: 1,
            }}
          >
            <AiFillCaretRight />
          </Text>
        </Link>
      </Box>
    </Flex>
  </Card>
)

WebzineCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  imgUrl: PropTypes.number,
}

const SmallNewsCard = ({ title, date, url, imgUrl }) => (
  <Card
    sx={{
      minWidth: 350,
      color: 'text',
    }}
    mb="2"
  >
    <Flex sx={{ alignItems: 'flex-end' }}>
      <Image
        sx={{ width: '100px', height: '80px' }}
        src={`../news/news-${imgUrl}.jpg`}
        mx="2"
      />
      <Flex sx={{ flexDirection: 'column', width: '300px' }}>
        <Box mt="3">
          <Text sx={{ fontSize: 2, fontWeight: 'bold' }}>{title}</Text>
        </Box>
        <Box pt="1">
          <Text variant="paragraph">{date}</Text>
        </Box>
        <Link
          sx={{
            color: 'primary',
            textDecoration: 'none',
            fontWeight: 'medium',
          }}
          href={url}
        >
          더 알아보기
          <Text
            sx={{
              position: 'relative',
              top: '2px',
              left: '2px',
              cursor: 'pointer',
              fontSize: 1,
            }}
          >
            <AiFillCaretRight />
          </Text>
        </Link>
      </Flex>
    </Flex>
  </Card>
)

export default function NewsPage() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <StaticImage src={'../images/news/main.jpg'} alt="main" />
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
            Newsroom
          </Text>
        </PrimaryContainer>
      </Box>
      <PrimaryContainer paddingY={5}>
        <SecondaryHeading
          title="그린비 소식"
          subtitle="그린비의 소식을 전합니다."
        />
        <Flex
          sx={{
            width: '100%',
            flexDirection: ['column', null, null, 'row'],
            alignItems: ['center', null, null, 'flex-start'],
            justifyContent: 'center',
          }}
        >
          <NewsCard
            title='배달서비스에 친환경대책 도입..."친환경용기 20% 할인가격 공급"'
            date="2020. 9. 24"
            url="https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222098482426&categoryNo=9&parentCategoryNo=&from=thumbnailList"
            imgUrl={1}
          />
          <NewsCard
            title="크라프트 종이+생분해필름+100%물 친환경 아이스팩"
            date="2020. 8. 20"
            url="https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222065852499&categoryNo=9&parentCategoryNo=&from=thumbnailList"
            imgUrl={2}
          />
          <Flex sx={{ flexDirection: 'column' }} ml={[0, null, 4]}>
            <SmallNewsCard
              title="그린비 생분해 에어캡 (생분해 뽁뽁이) 출시!"
              date="2020. 8. 20"
              url="https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222065787086&categoryNo=9&parentCategoryNo=&from=thumbnailList"
              imgUrl={3}
            />
            <SmallNewsCard
              title="생분해성 멀칭 비닐 농가에서 써보니, “환경보호·노동력 절감 1석2조”"
              date="2020. 7. 27"
              url="https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222042962839&categoryNo=9&parentCategoryNo=&from=thumbnailList"
              imgUrl={4}
            />
            <SmallNewsCard
              title="“2년 동안 700톤 줄인다”...아모레퍼시픽, 플라스틱과의 전쟁 전략"
              date="2020. 6. 23"
              url="https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222009616725&categoryNo=9&parentCategoryNo=&from=thumbnailList"
              imgUrl={5}
            />
          </Flex>
        </Flex>
      </PrimaryContainer>
      <PrimaryContainer paddingY={5}>
        <SecondaryHeading
          title="어썸웹진"
          subtitle="세계의 친환경 이슈를 전합니다."
        />
        <Flex
          sx={{
            flexDirection: ['column', null, 'row'],
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image sx={{ maxWidth: '400px' }} src="../news/webzine-main.jpeg" />
          <Flex
            sx={{
              flexDirection: 'column',
              ml: [0, null, 5],
              maxWidth: '400px',
            }}
          >
            {webzineObj.map((webzine, idx) => (
              <Link
                sx={{
                  textDecoration: 'none',
                  color: 'text',
                  borderBottomColor: 'light',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1px',
                  ':hover': {
                    color: 'primary',
                  },
                }}
                key={idx}
                href={webzine.url}
                py="3"
              >
                {webzine.title}
              </Link>
            ))}
            <Link
              sx={{
                color: 'primary',
                textDecoration: 'none',
                fontWeight: 'medium',
                mt: '4',
              }}
              href="https://blog.naver.com/PostList.nhn?blogId=komagreenb&from=postList&categoryNo=7"
            >
              더 알아보기
              <Text
                sx={{
                  position: 'relative',
                  top: '2px',
                  left: '2px',
                  cursor: 'pointer',
                  fontSize: 1,
                }}
              >
                <AiFillCaretRight />
              </Text>
            </Link>
          </Flex>
        </Flex>
      </PrimaryContainer>
    </>
  )
}
