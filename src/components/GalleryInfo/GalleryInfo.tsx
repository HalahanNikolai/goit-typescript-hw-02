import React from "react";
import { Information } from "./GalleryInfo.styled";
interface GalleryInfoProps {
  children?: React.ReactNode;
}
const GalleryInfo: React.FC<GalleryInfoProps> = () => {
  return (
    <Information>
      <h1> Welcome to the searchable image gallery! </h1>
    </Information>
  );
};

export default GalleryInfo;
