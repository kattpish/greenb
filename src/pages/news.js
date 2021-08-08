/** @jsxImportSource theme-ui */

import PropTypes from 'prop-types'
import { Box, Link, Card, Text, Image, Flex } from 'theme-ui'
import { AiFillCaretRight } from 'react-icons/ai'

import SecondaryHeading from '../components/SecondaryHeading'
import PrimaryContainer from '../components/PrimaryContainer'
import { StaticImage } from 'gatsby-plugin-image'

const newsObj = [
  {
    title: '배달서비스에 친환경대책 도입..."친환경용기 20% 할인가격 공급"',
    date: '2020. 9. 24',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222098482426&categoryNo=9&parentCategoryNo=&from=thumbnailList',
    imgUrl: 1,
  },
  {
    title: '크라프트 종이+생분해필름+100%물 친환경 아이스팩',
    date: '2020. 8. 20',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222065852499&categoryNo=9&parentCategoryNo=&from=thumbnailList',
    imgUrl: 2,
  },
  {
    title: '그린비 생분해 에어캡 (생분해 뽁뽁이) 출시!',
    date: '2020. 8. 20',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222065787086&categoryNo=9&parentCategoryNo=&from=thumbnailList',
    imgUrl: 3,
  },
  {
    title: '생분해성 멀칭 비닐 농가에서 써보니, “환경보호·노동력 절감 1석2조”',
    date: '2020. 7. 27',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222042962839&categoryNo=9&parentCategoryNo=&from=thumbnailList',
    imgUrl: 4,
  },
  {
    title: '“2년 동안 700톤 줄인다”...아모레퍼시픽, 플라스틱과의 전쟁 전략',
    date: '2020. 6. 23',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=222009616725&categoryNo=9&parentCategoryNo=&from=thumbnailList',
    imgUrl: 5,
  },
]

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
    url: '"https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221996225369&categoryNo=7&parentCategoryNo=&from=thumbnailList"',
    imgUrl: 6,
  },
  {
    title: `롯데월드, '지구의 날 맞아' 필(必)환경 캠페인, 생분해성 쇼핑봉투 등 실천`,
    date: '2020. 4. 27',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221932370638&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 7,
  },
  {
    title: `‘必환경’ 바람부는 유통가…친환경 정책사업 ‘우선’`,
    date: '2020. 4. 20',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221918251888&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 8,
  },
  {
    title: '당신이 하던 분리수거 방법은 뼛속까지 틀렸다',
    date: '2020. 3. 26',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221874532982&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 9,
  },
  {
    title: `‘비닐봉투 퇴출’ 면세업계…정부는 ‘뒷짐’만`,
    date: '2020. 3. 23',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221868732687&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 10,
  },
  {
    title: `너도나도 플라스틱 줄이기…그린캠페인 실패 반복 않으려면`,
    date: '2020. 3. 16',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221856464661&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 11,
  },
  {
    title: `하와이 ‘플라스틱 금지’ 조례로 해양 보호`,
    date: '2020. 2. 24',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221822442386&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 12,
  },
  {
    title: `1인당 섭취 미세플라스틱, 매주 신용카드 1장 분량`,
    date: '2020. 2. 20',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221817111429&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 13,
  },
  {
    title: `에어리, 플라스틱병 재활용한 '리얼 굿 스윔' 콜렉션 선보여`,
    date: '2020. 2. 13',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221807671108&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 14,
  },
  {
    title: `플라스틱 사용 제한이 오히려 환경에 악영향`,
    date: '2020. 2. 12',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221806246361&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 15,
  },
  {
    title: `신세계면세점, ‘비닐 뽁뽁이’ 대신 재생지…친환경 물류 체계 구축`,
    date: '2020. 2. 6',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221798761425&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 16,
  },
  {
    title: `Biodegradable Shoes on Super Bowl Ad`,
    date: '2020. 2. 3',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221794564458&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 17,
  },
  {
    title: `두바이 공항, 2020년 1월1일부터 일회용 플라스틱 퇴출 개시`,
    date: '2020. 1. 30',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221790160009&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 18,
  },
  {
    title: `중국, 플라스틱・비닐쇼핑백 쓰레기와의 전쟁 나서`,
    date: '2020. 1. 30',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221790153229&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 19,
  },
  {
    title: `롯데마트, 생분해성 포장재 도입 '관심'`,
    date: '2020. 1. 30',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221789814851&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 20,
  },
  {
    title: `쓰레기? 땅에 묻으세요! 토마토 싹이 난답니다`,
    date: '2020. 1. 30',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221789789216&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 21,
  },
  {
    title: `스타벅스, ‘자원 포지티브’ 미래 청사진 제시`,
    date: '2020. 1. 29',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221789066912&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 22,
  },
  {
    title: `환경오염 방지, ‘바이오 플라스틱’이 답이다`,
    date: '2020. 1. 29',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221789034625&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 23,
  },
  {
    title: `청소년 300명의 다짐 “플라스틱에 오염된 지구를 구하자”`,
    date: '2020. 1. 29',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221788898952&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 24,
  },
  {
    title: `생분해 플라스틱이 된 '아보카도 씨앗'`,
    date: '2020. 1. 29',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221788796608&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 24,
  },
  {
    title: `플라스틱? NO…생분해수지제품? OK`,
    date: '2019. 12. 31',
    url: 'https://blog.naver.com/PostView.naver?blogId=komagreenb&logNo=221755407991&categoryNo=7&parentCategoryNo=&from=thumbnailList',
    imgUrl: 25,
  },
]

const NewsCard = ({ title, date, url, imgUrl }) => (
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
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Flex
            sx={{
              flexWrap: 'wrap',
              justifyContent: ['center', null, 'space-between'],
            }}
          >
            {newsObj.map((news) => (
              <NewsCard
                title={news.title}
                date={news.date}
                url={news.url}
                imgUrl={news.imgUrl}
                key={news.imgUrl}
              />
            ))}
            <Box sx={{ width: 300 }} />
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
            flexWrap: 'wrap',
            justifyContent: ['center', null, 'space-between'],
            alignItems: 'stretch',
          }}
        >
          {webzineObj.map((webzine) => (
            <WebzineCard
              title={webzine.title}
              date={webzine.date}
              url={webzine.url}
              imgUrl={webzine.imgUrl}
              key={webzine.imgUrl}
            />
          ))}
          <Box sx={{ width: 300 }} />
        </Flex>
      </PrimaryContainer>
    </>
  )
}
