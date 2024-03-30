import React from 'react';
import Modal from 'react-modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const BookModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Add/Edit Book</h2>
    </Modal>
  );
};

export default BookModal;