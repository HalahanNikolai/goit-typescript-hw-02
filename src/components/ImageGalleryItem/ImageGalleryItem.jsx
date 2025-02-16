import React, { useState } from 'react';
import {
  GalleryItem,
  GalleryImage,
} from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

const ImageGalleryItem = props => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const {
    image: {
      webformatURL,
      largeImageURL,
      tags,
    },
  } = props;

  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        loading="lazy"
        onClick={toggleModal}
      />
      {showModal && (
        <Modal
          onClose={toggleModal}
          largeImageURL={largeImageURL}
          tags={tags}
        ></Modal>
      )}
    </GalleryItem>
  );
};

export default ImageGalleryItem;
