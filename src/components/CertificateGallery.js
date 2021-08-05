import React, { useState, useCallback } from 'react'
import { Box, Image } from 'theme-ui'
import Fade from 'react-reveal/Fade'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Modal from 'react-modal'

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
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = useCallback((index) => {
    console.log(index)
    setCurrentImage(index)
    setModalIsOpen(true)
  }, [])

  const closeModal = () => {
    setCurrentImage(0)
    setModalIsOpen(false)
  }

  return (
    <div>
      <Fade bottom opposite distance="50px">
        <Carousel>
          {[...Array(19)].map((u, i) => (
            <Box key={i} onClick={() => openModal(i + 1)}>
              <Image
                sx={{ width: '100px' }}
                src={`../technology/certificate-${i + 1}.jpg`}
              />
            </Box>
          ))}
        </Carousel>
      </Fade>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
        <Image
          sx={{ width: '100px' }}
          src={`../technology/certificate-${currentImage + 1}.jpg`}
        />
      </Modal>
    </div>
  )
}
