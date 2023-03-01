import React, { useState } from 'react';
import { ToDoForm } from './ToDoForm/ToDoForm';
import { ToDoList } from './ToDoList/ToDoList';
import { ToDoModal } from './ToDoModal/ToDoModal';

export const ToDos = () => {
  const [toDos, setToDos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);

  const handleCreate = toDo => {
    setToDos([...toDos, { id: toDos.length + 1, ...toDo }]);
  };
  const handleChecked = id => {
    setToDos(
      toDos.map(item =>
        id === item.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  // const handleToggleModal = () => {
  //   setOpenModal(prev => !prev);
  // };
  const handleCloseModal = () => setOpenModal(!openModal);
  const handleOpenModal = ({ title, description, isDone }) => {
    setModalDetails({ title, description, isDone });
    setOpenModal(!openModal);
  };

  return (
    <>
      <ToDoForm onCreateToDo={handleCreate} />
      <ToDoList
        toDos={toDos}
        onChecked={handleChecked}
        onOpenModal={handleOpenModal}
      />
      {openModal && (
        <ToDoModal toDo={modalDetails} onCloseModal={handleCloseModal} />
      )}
    </>
  );
};
