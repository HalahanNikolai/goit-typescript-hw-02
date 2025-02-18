import React, { useState } from "react";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";
import Modal from "../Modal/Modal";

interface ImageGalleryItemProps {
  image: {
    webformatURL: string;
    largeImageURL: string;
    tags: string;
  };
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  const {
    image: { webformatURL, largeImageURL, tags },
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
