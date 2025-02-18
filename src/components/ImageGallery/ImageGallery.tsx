import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";
interface ImageGalleryProps {
  images: {
    id: number;
    webformatURL: string;
    largeImageURL: string;
    tags: string;
  }[];
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <GalleryList>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>
      ))}
    </GalleryList>
  );
};

export default ImageGallery;
