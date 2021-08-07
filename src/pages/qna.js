import React from 'react'
import { Label, Input, Textarea, Text, Button, Flex, Box } from 'theme-ui'
import emailjs from 'emailjs-com'
import PropTypes from 'prop-types'

import SecondaryHeading from '../components/SecondaryHeading'
import PrimaryContainer from '../components/PrimaryContainer'

const StyledInput = ({ ...props }) => (
  <Input
    {...props}
    sx={{
      bg: 'sectionBg',
      borderColor: '#eaeaea',
      borderRadius: '0px',
      borderWidth: '2px',
      ':focus,:active': {
        borderColor: 'primary',
        outline: 'none',
      },
    }}
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
          <Box sx={{ width: '50%' }}>
            <form className="contact-form" onSubmit={sendEmail}>
              <StyledLabel>이름(상호)</StyledLabel>
              <StyledInput type="text" name="user_name" mb={3} />
              <StyledLabel>이메일</StyledLabel>
              <StyledInput
                type="email"
                name="user_email"
                mb={3}
                placeholder="ex) 010-1234-1234"
              />
              <StyledLabel>연락처</StyledLabel>
              <StyledInput type="text" name="contact" mb={3} />
              <StyledLabel>제목</StyledLabel>
              <StyledInput type="text" name="title" mb={3} />
              <StyledLabel>문의 내용</StyledLabel>
              <Textarea
                sx={{
                  bg: 'sectionBg',
                  borderColor: '#eaeaea',
                  borderRadius: '0px',
                  borderWidth: '2px',
                  ':focus,:active': {
                    borderColor: 'primary',
                    outline: 'none',
                  },
                }}
                name="message"
                rows={6}
                mb={3}
              />
              <Flex>
                <Button sx={{ width: '100%' }} my={2}>
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