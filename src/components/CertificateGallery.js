import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Fade from 'react-reveal/Fade'

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

export default function CertificateGallery() {
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

  return (
    <div>
      <Fade bottom opposite distance="50px">
        <Gallery photos={photos} onClick={openLightbox} margin={10} />
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
    </div>
  )
}
