import React, { useState, useCallback } from 'react'
import { Flex, Box, Image, Text } from 'theme-ui'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Fade from 'react-reveal/Fade'

const photos = [
  {
    src: '../product/thumbnail-1.jpg',
    width: 5,
    height: 3,
    title: '생분해 수지',
  },
  {
    src: '../product/thumbnail-2.jpg',
    width: 2,
    height: 3,
    title: '생분해 쇼핑백',
  },
  {
    src: '../product/thumbnail-3.jpg',
    width: 5,
    height: 3,
    title: '생분해 그릇',
  },
  {
    src: '../product/thumbnail-4.jpg',
    width: 5,
    height: 3,
    title: '생분해 플라스틱 컵',
  },
  {
    src: '../product/thumbnail-5.jpg',
    width: 5,
    height: 3,
    title: '생분해 커트러리',
  },
  {
    src: '../product/thumbnail-6.jpg',
    width: 5,
    height: 3,
    title: '생분해 용기',
  },
  {
    src: '../product/thumbnail-7.jpg',
    width: 5,
    height: 3,
    title: '생분해 식탁보',
  },
  {
    src: '../product/thumbnail-8.jpg',
    width: 2,
    height: 3,
    title: '생분해 롤백',
  },
  {
    src: '../product/thumbnail-9.jpg',
    width: 2,
    height: 3,
    title: '생분해 캠핑용 수세미',
  },
  {
    src: '../product/thumbnail-10.jpg',
    width: 5,
    height: 3,
    title: '생분해 빨대',
  },
  {
    src: '../product/thumbnail-11.jpg',
    width: 5,
    height: 3,
    title: '생분해 에어캡',
  },
  {
    src: '../product/thumbnail-12.jpg',
    width: 5,
    height: 3,
    title: '생분해 랩',
  },
]

export default function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const imageRenderer = useCallback(
    ({ index, photo, margin }) => (
      <Box
        sx={{
          width: photo.width,
          height: photo.height,
          position: 'relative',
          ':hover > :last-child': {
            color: 'background',
            background: 'rgba(0, 0, 0, 0.7)',
          },
        }}
        m="2px"
      >
        <Image sx={{ height: '100%' }} alt={photo.title} {...photo} />
        <Flex
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 9,
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'transparent',
            textAlign: 'center',
            transition: 'all .3s ease-out',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 3,
            cursor: 'pointer',
            fontWeight: 'medium',
          }}
        >
          <Text>{photo.title}</Text>
        </Flex>
      </Box>
    ),
    []
  )

  return (
    <>
      <Fade bottom opposite distance="50px">
        <Gallery
          photos={photos}
          onClick={openLightbox}
          renderImage={imageRenderer}
        />
      </Fade>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}