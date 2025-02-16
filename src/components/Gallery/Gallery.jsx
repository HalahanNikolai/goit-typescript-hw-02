import Notiflix from 'notiflix';
// import { RotatingLines } from 'react-loader-spinner';
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState, useCallback } from 'react';
import * as PixabayAPI from '../../services/pixabay-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import GalleryInfo from '../GalleryInfo/GalleryInfo';
import Button from '../Button/Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Gallery = ({ searchQuery }) => {
  const [query, setQuery] = useState(searchQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  const fetchImages = async (query, currentPage) => {
    try {
      const data = await PixabayAPI.getImages(query, currentPage);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const updateImages = useCallback(async () => {
    if (query.trim() === '') {
      return;
    }
    setStatus(Status.PENDING);
    try {
      const data = await fetchImages(query, currentPage);
      // If no images are found, show a warning notification.
      if (data.hits.length === 0) {
        Notiflix.Report.warning(
          'PixQuery Warning',
          'Sorry, but we could not find any photos for your search query. Please try changing your keywords or search for something else.',
          'Okay'
        );

        setStatus(Status.REJECTED);
      } else {
        setImages([...data.hits]);
        setTotalPages(Math.ceil(data.totalHits / 12));
        setStatus(Status.RESOLVED);
      }
    } catch (error) {
      Notiflix.Report.failure(
        'PixQuery Warning',
        `Error fetching images: ${error.message}`,
        'Okay'
      );
      setStatus(Status.REJECTED);
    }
  }, [query, currentPage]);

  const loadMore = useCallback(async () => {
    setStatus(Status.PENDING);
    const data = await fetchImages(query, currentPage);
    setImages(prevImages => [...prevImages, ...data.hits]);
    setStatus(Status.RESOLVED);
  }, [currentPage, query]);

  useEffect(() => {
    if (searchQuery !== query) {
      setQuery(searchQuery);
      setCurrentPage(1);
    }
  }, [searchQuery, query]);

  useEffect(() => {
    if (currentPage === 1) {
      updateImages();
    } else {
      loadMore();
    }
  }, [currentPage, loadMore, updateImages]);

  const handleButtonClick = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
  };

  if (status === Status.IDLE) {
    return <GalleryInfo />;
  }

  if (status === Status.PENDING) {
    return (
      <>
        {images.length > 0 && <ImageGallery images={images} />}
        <ClipLoader
          color="#82a38f"
          width='55px'
        />
      </>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery images={images} />
        {currentPage < totalPages && (
          <Button onClick={handleButtonClick}>Load More</Button>
        )}
      </>
    );
  }

  if (status === Status.REJECTED) {
    return (
      <div>
        Sorry, but we could not find any photos for your search query. Please
        try changing your keywords or search for something else.
      </div>
    );
  }
};

export default Gallery;
