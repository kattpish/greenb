/** @jsxImportSource theme-ui */

import { useState, useCallback } from 'react'
import { Box, Image } from 'theme-ui'
import Fade from 'react-reveal/Fade'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import Lightbox from 'react-image-lightbox'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import 'react-image-lightbox/style.css'

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

  const closeModal = useCallback(() => {
    setCurrentImage(0)
    setIsOpen(false)
  }, [setCurrentImage, setIsOpen])

  const onPrevClick = useCallback(
    (e) => {
      if (currentImage < 1) {
        setCurrentImage(0)
        return
      }
      setCurrentImage(currentImage - 1)
    },
    [currentImage]
  )

  const onNextClick = useCallback(
    (e) => {
      if (currentImage >= 18) {
        setCurrentImage(0)
        return
      }
      setCurrentImage(currentImage + 1)
    },
    [currentImage]
  )

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest
    // onMove means if dragging or swiping in progress.
    return (
      <Box
        sx={{
          position: 'fixed',
          top: '40%',
          left: '-6%',
          cursor: 'pointer',
          color: 'primary',
          fontSize: '6',
        }}
        onClick={() => onClick()}
      >
        <IoIosArrowBack />
      </Box>
    )
  }

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest
    // onMove means if dragging or swiping in progress.
    return (
      <Box
        sx={{
          position: 'fixed',
          top: '40%',
          right: '-6%',
          cursor: 'pointer',
          color: 'primary',
          fontSize: '6',
        }}
        onClick={() => onClick()}
      >
        <IoIosArrowForward />
      </Box>
    )
  }

  return (
    <Box sx={{ transform: 'translateY(1px)' }}>
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
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {[...Array(19)].map((u, i) => (
            <Image
              key={i}
              onClick={() => openModal(i)}
              src={`../technology/certificate-${i + 1}.jpg`}
            />
          ))}
        </Carousel>
      </Fade>
      {isOpen && (
        <Lightbox
          mainSrc={`../technology/certificate-${currentImage + 1}.jpg`}
          nextSrc={`../technology/certificate-${(currentImage + 1) % 19}.jpg`}
          prevSrc={`../technology/certificate-${(currentImage - 1) % 19}.jpg`}
          onCloseRequest={() => closeModal()}
          onMovePrevRequest={() => onPrevClick()}
          onMoveNextRequest={() => onNextClick()}
        />
      )}
    </Box>
  )
}
