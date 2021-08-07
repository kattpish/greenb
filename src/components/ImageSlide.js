/** @jsxImportSource theme-ui */

import Carousel from 'react-multi-carousel'
import { Box } from 'theme-ui'
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

export default function ImageSlide({ children }) {
  return (
    <Box sx={{ position: 'relative', transform: 'translateY(1px)' }}>
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
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {children}
      </Carousel>
    </Box>
  )
}

ImageSlide.propTypes = {
  children: PropTypes.node.isRequired,
}
