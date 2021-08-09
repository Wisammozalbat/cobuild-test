import React, { useCallback, useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import {
  GET_TASKS,
  SET_CURRENT_TASK,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from '../../types';
import { ITask } from '../../components/task/Task';

// const tasks = [
//   { id: 1, name: 'una tarea', description: 'Tarea numero 1', status: false },
//   { id: 2, name: 'una tarea', description: 'Tarea numero 2', status: true },
//   { id: 3, name: 'una tarea', description: 'Tarea numero 3', status: false },
//   { id: 4, name: 'una tarea', description: 'Tarea numero 4', status: false },
// ];

const TaskState = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const initialState = {
    tasks: [],
    currentTask: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const getTasks = useCallback(async () => {
    try {
      //   const resultado = await clienteAxios.get('/api/tareas', {
      //     params: { proyecto },
      //   });

      dispatch({
        type: GET_TASKS,
        payload: state.tasks,
      });
    } catch (error) {
      console.log(error);
    }
  }, [state.tasks]);

  const setCurrentTask = (task: ITask) => {
    dispatch({
      type: SET_CURRENT_TASK,
      payload: task,
    });
  };

  const addNewTask = (task: ITask) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const editTask = (task: ITask) => {
    dispatch({
      type: EDIT_TASK,
      payload: task,
    });
  };

  const deleteTask = (id: string) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  return (
    <taskContext.Provider
      value={{
        currentTask: state.currentTask,
        tasks: state.tasks,
        addNewTask,
        deleteTask,
        editTask,
        getTasks,
        setCurrentTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
