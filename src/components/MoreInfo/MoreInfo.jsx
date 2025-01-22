import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal } from '../Modal/Modal.jsx';
import { BookLessonsForm } from '../BookLessonsForm/BookLessonsForm.jsx';

export const MoreInfo = () => {
  const location = useLocation();
  const { teacher } = location.state || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!teacher) {
    return <p>Teacher data not available. Please go back to the list.</p>;
  }
  return (
    <div>
      <p>{teacher.experience}</p>
      {teacher.reviews.map((review, index) => (
        <div key={index}>
          <p>{review.reviewer_name}</p>
          <p>⭐{review.reviewer_rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
      <p>{teacher.levels.join(', ')}</p>
      <button type="button" onClick={openModal}>
        Book trial lesson
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BookLessonsForm teacher={teacher} onClose={closeModal} />
      </Modal>
    </div>
  );
};
