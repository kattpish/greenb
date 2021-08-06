import React, { useState, useCallback } from 'react'
import { Box, Image } from 'theme-ui'
import Fade from 'react-reveal/Fade'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const photos = [
  {
    src: '../technology/certificate-1.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-2.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-3.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-4.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-5.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-6.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-7.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-8.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-9.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-10.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-11.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '../technology/certificate-12.jpg',
    width: 3,
    height: 4,
  },
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export default function CertificateGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(
    (index) => {
      console.log(index)
      setCurrentImage(index)
      setIsOpen(true)
    },
    [setCurrentImage, setIsOpen]
  )

  const closeModal = () => {
    setCurrentImage(0)
    setIsOpen(false)
  }

  return (
    <div>
      <Fade bottom opposite distance="50px">
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          transitionDuration={500}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          customLeftArrow={<div />}
          customRightArrow={<div />}
        >
          {[...Array(19)].map((u, i) => (
            <Box key={i} onClick={() => openModal(i)}>
              <Image
                // sx={{ width: '100px' }}
                src={`../technology/certificate-${i}.jpg`}
              />
            </Box>
          ))}
        </Carousel>
      </Fade>
      {isOpen && (
        <Lightbox
          mainSrc={`../technology/certificate-${currentImage}.jpg`}
          onCloseRequest={() => closeModal}
        />
      )}
    </div>
  )
}
