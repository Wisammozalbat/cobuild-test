import React, { useCallback, useEffect, useState } from 'react';
import { ITask } from '../task/Task';
import { TaskInfoStyle } from './TaskInfoStyle';
import taskContext from '../../context/tasks/taskContext';

import { CgTrashEmpty } from 'react-icons/cg';
import { useContext } from 'react';

interface ITaskInfo {
  currentTask: ITask | null;
}

const TaskInfo: React.FC<ITaskInfo> = ({ currentTask }) => {
  const [values, setValues] = useState<ITask>({
    description: '',
    status: false,
    id: 0,
    name: '',
  });
  const [hasChanged, setHasChanged] = useState<Boolean>(false);
  const [descError, setDescError] = useState<Boolean>(false);
  const tasksContext = useContext(taskContext);
  const { editTask, deleteTask } = tasksContext;

  const resetValues = useCallback(() => {
    if (currentTask) {
      setValues({
        name: currentTask.name,
        description: currentTask.description,
        status: currentTask.status,
        id: currentTask.id,
      });
    }
    setHasChanged(false);
    setDescError(false);
  }, [currentTask]);

  useEffect(() => {
    resetValues();
  }, [resetValues]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setHasChanged(true);
  };

  const handleStatusChange = (status: boolean) => {
    setValues({ ...values, status: status });
    setHasChanged(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.description === '') {
      setDescError(true);
      return;
    }
    setDescError(false);

    editTask(values);

    resetValues();
  };

  const deleteHandler = () => {
    //asincrono
    deleteTask(values.id);

    resetValues();
  };

  return (
    <TaskInfoStyle>
      <div className="heading-container">
        <h1 className="heading">
          {currentTask ? currentTask.name : 'Seleccione alguna tarea'}
        </h1>
        {currentTask && (
          <div className="delete-button" onClick={deleteHandler}>
            <p>Eliminar</p>
            <CgTrashEmpty />
          </div>
        )}
      </div>
      <div className="content">
        {currentTask ? (
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          >
            <div className="content-input__container">
              <textarea
                name="description"
                id="description"
                className="content-input"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  handleInputChange(e);
                }}
                value={values.description}
              />
            </div>

            {descError && (
              <p className="error-text">
                Por favor ingresar una descripcion para la tarea
              </p>
            )}

            <div
              className={[
                'status-container',
                values.status ? 'right' : 'left',
              ].join(' ')}
            >
              <button
                type="button"
                className="status-container__box"
                onClick={() => handleStatusChange(false)}
              >
                Pendiente
              </button>
              <button
                type="button"
                className="status-container__box"
                onClick={() => handleStatusChange(true)}
              >
                Terminado
              </button>
            </div>

            <div className="buttons">
              <button
                className="button button__cancel"
                onClick={resetValues}
                disabled={!hasChanged}
              >
                Cancelar
              </button>
              <button
                className="button button__save"
                disabled={!hasChanged}
                type="submit"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </div>
    </TaskInfoStyle>
  );
};

export default TaskInfo;
