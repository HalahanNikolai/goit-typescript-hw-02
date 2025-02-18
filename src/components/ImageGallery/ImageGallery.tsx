import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>
      ))}
    </GalleryList>
  );
};

export default ImageGallery;
