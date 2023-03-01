import React from 'react';
import css from './todoModal.module.scss';
export const ToDoModal = ({ onCloseModal, toDo }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={onCloseModal} className={css.modalCloseButton} />
        <h2 className={css.modalTitle}>{toDo.title}</h2>
        <h3 className={css.modalText}>Description:</h3>
        <p className={css.modalText}>{toDo.description}</p>
        <p className={css.modalText}>
          Status: <input type="checkbox" checked={toDo.isDone} readOnly />
        </p>
      </div>
    </div>
  );
};
