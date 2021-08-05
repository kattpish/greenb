import React from 'react'
import Carousel from 'react-multi-carousel'
import { Button } from 'theme-ui'
import PropTypes from 'prop-types'
import 'react-multi-carousel/lib/styles.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

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

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()}>sfee</button>
}

export default function ImageSlide({ children }) {
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={500}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      customRightArrow={<button>ㅅㅅ</button>}
    >
      {children}
    </Carousel>
  )
}

ImageSlide.propTypes = {
  children: PropTypes.node.isRequired,
}
