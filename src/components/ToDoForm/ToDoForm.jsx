import React, { useState } from 'react';
import css from './todoForm.module.scss';

export const ToDoForm = ({ onCreateToDo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [isEmptyDesc, setIsEmptyDesc] = useState(false);
  const actions = { title: setTitle, description: setDescription };

  const handleChange = e => {
    const { name, value } = e.target;
    actions[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const toDo = { title, description, isDone: false };
    setIsEmpty(false);
    setIsEmptyDesc(false);
    if (title && description) {
      onCreateToDo(toDo);
      handleReset();
      return;
    }
    if (title === '') {
      setIsEmpty(true);
    }

    if (description === '') {
      setIsEmptyDesc(true);
    }
  };

  const handleReset = () => {
    Object.values(actions).forEach(item => {
      item('');
    });
  };

  return (
    <div className="css.container">
      <form className={css.form} onSubmit={handleSubmit}>
        <div className="css.formGroup">
          <label className={css.formLabel} htmlFor="title">
            Title:
          </label>

          <input
            className={isEmpty ? css.formInputError : css.formInput}
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={handleChange}
          />
          <p className={isEmpty ? css.formError : css.formNoError}>
            This field is empty
          </p>
        </div>
        <div className="css.formGroup">
          <label className={css.formLabel} htmlFor="description">
            Description:
          </label>

          <input
            className={isEmptyDesc ? css.formInputError : css.formInput}
            type="text"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={handleChange}
          />
          <p className={isEmptyDesc ? css.formError : css.formNoError}>
            This field is empty
          </p>
        </div>

        <button className={css.formButton} type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
