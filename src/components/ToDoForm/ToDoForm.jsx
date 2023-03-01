import React, { useState } from 'react';
import css from './todoForm.module.scss';

export const ToDoForm = ({ onCreateToDo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const actions = { title: setTitle, description: setDescription };

  const handleChange = e => {
    const { name, value } = e.target;
    actions[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const toDo = { title, description, isDone: false };
    onCreateToDo(toDo);
    handleReset();
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
            className={css.formInput}
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="css.formGroup">
          <label className={css.formLabel} htmlFor="description">
            Description:
          </label>

          <input
            className={css.formInput}
            type="text"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={handleChange}
            required
          />
        </div>
        <button className={css.formButton} type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
