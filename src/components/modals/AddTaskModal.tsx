import React, { useState } from 'react';
import { AddTaskModalStyle } from './AddTaskModalStyle';
import taskContext from '../../context/tasks/taskContext';

import { IoMdClose } from 'react-icons/io';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IAddTaskModal {
  onClose: () => void;
  isOpen: boolean;
}

const AddTaskModal: React.FC<IAddTaskModal> = ({ onClose, isOpen }) => {
  const [values, setValues] = useState<{ name: string; description: string }>({
    name: '',
    description: '',
  });
  const [nameError, setNameError] = useState<boolean>(false);
  const [descError, setDescError] = useState<boolean>(false);

  const tasksContext = useContext(taskContext);
  const { addNewTask, tasks } = tasksContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.name === '') {
      setNameError(true);
      return;
    }
    setNameError(false);

    if (values.description === '') {
      setDescError(true);
      return;
    }
    setDescError(false);

    //operacion asincrona
    addNewTask({ ...values, status: false, id: uuidv4() });

    onCloseHandler();
  };

  const onCloseHandler = () => {
    setValues({ name: '', description: '' });
    setNameError(false);
    setDescError(false);
    onClose();
  };

  return (
    <AddTaskModalStyle isOpen={isOpen}>
      <div className="backdrop" />
      <div className="content">
        <div className="content-title">
          <h1>Crear Nueva Tarea</h1>
        </div>
        <div className="close-button" onClick={onCloseHandler}>
          <IoMdClose />
        </div>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
          <label htmlFor="name" className="content-label">
            Nombre de la tarea
          </label>
          <div className="content-input">
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />
          </div>
          {nameError && (
            <p className="error-text">
              Por favor ingresar un nombre para la tarea
            </p>
          )}
          <label htmlFor="description" className="content-label">
            Descripcion de la tarea
          </label>
          <div className="content-input">
            <input
              type="text"
              id="description"
              name="description"
              value={values.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
            />
          </div>
          {descError && (
            <p className="error-text">
              Por favor ingresar una descripcion para la tarea
            </p>
          )}
          <div className="content-buttons">
            <button className="button__accept" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </AddTaskModalStyle>
  );
};

export default AddTaskModal;
