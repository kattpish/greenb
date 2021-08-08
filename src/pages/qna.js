/** @jsxImportSource theme-ui */

import {
  Label,
  Input,
  Textarea,
  Text,
  Button,
  Flex,
  Box,
  Image,
} from 'theme-ui'
import emailjs from 'emailjs-com'
import PropTypes from 'prop-types'

import SecondaryHeading from '../components/SecondaryHeading'
import PrimaryContainer from '../components/PrimaryContainer'

const StyledInput = ({ ...props }) => (
  <Input
    {...props}
    sx={{
      bg: 'sectionBg',
      px: 2,
      py: 3,
      outline: 'none',
      border: 'none',
      ':focus,:active': {},
    }}
    p="2"
  />
)

StyledInput.propTypes = {
  children: PropTypes.node,
}

const StyledLabel = ({ children }) => (
  <Label sx={{ fontSize: 2, fontWeight: 'bold' }} py={2}>
    {children}
  </Label>
)

StyledLabel.propTypes = {
  children: PropTypes.node,
}

export default function ProductPage() {
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'greenb',
        'template_xz900zm',
        e.target,
        'user_xpTejzMGz7eQ87QF5EtAE'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Image src={'../qna/main.jpeg'} />
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
            <br />Q & A
          </Text>
        </PrimaryContainer>
      </Box>
      <PrimaryContainer paddingY={5}>
        <SecondaryHeading
          title="1:1 문의하기"
          subtitle="궁금한 점을 남겨주세요!
          그린비즈가 최선을 다해 친절히 상담해 드릴게요."
        />
        <Flex
          sx={{
            justifyContent: 'center',
            position: 'relative',
            bottom: '1rem',
          }}
        >
          <Text variant="paragraph" sx={{ textAlign: 'center' }}>
            *문의센터 :{' '}
            <Text
              sx={{
                color: 'primary',
                fontWeight: 'bold',
              }}
            >
              02) 337-3399{' '}
            </Text>
            (상담 시간 : 평일 9:00 – 18:00)
          </Text>
        </Flex>
        <Flex sx={{ justifyContent: 'center' }}>
          <Box sx={{ width: ['100%', null, '50%'] }}>
            <form className="contact-form" onSubmit={sendEmail}>
              <Flex>
                <StyledInput
                  type="text"
                  name="user_name"
                  mb={3}
                  mr={2}
                  placeholder="이름(상호)"
                />
                <StyledInput
                  type="text"
                  name="contact"
                  mb={3}
                  ml={2}
                  placeholder="연락처"
                />
              </Flex>
              <StyledInput
                type="email"
                name="user_email"
                mb={3}
                placeholder="이메일"
              />
              <StyledInput type="text" name="title" mb={3} placeholder="제목" />
              <Textarea
                sx={{
                  bg: 'sectionBg',
                  px: 2,
                  py: 3,
                  outline: 'none',
                  border: 'none',
                  ':focus,:active': {},
                  fontSize: 2,
                }}
                name="message"
                rows={6}
                mb={3}
                placeholder="문의 내용"
              />
              <Flex sx={{ justifyContent: 'flex-end' }}>
                <Button sx={{ width: '25%' }} my={2}>
                  전송
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </PrimaryContainer>
    </>
  )
}
