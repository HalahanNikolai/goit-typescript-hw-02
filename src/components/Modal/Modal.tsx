import React from 'react';
import { useEffect, FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWrap } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

interface ImageModalProps {
  largeImageURL: string;
  onClose : () => void;
  tags: string;
}
  
const Modal: React.FC<ImageModalProps> = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    document.documentElement.style.overflowY = 'hidden';
    document.addEventListener('keydown', handleKeyClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      document.documentElement.style.overflowY = 'auto';
      document.removeEventListener('keydown', handleKeyClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyClose = (event:KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === ' ') {
      onClose();
    }
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

// interface ModalOverlayProps {
//   onClick: () => void;
// }
  
  return createPortal(
    <ModalOverlay onClick={handleOverlayClick} >
      <ModalWrap>
        <img src={largeImageURL} alt={tags} />
      </ModalWrap>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
