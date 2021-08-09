import { ITask } from '../../components/task/Task';
import {
  GET_TASKS,
  SET_CURRENT_TASK,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from '../../types';

const taskReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: ITask) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
        currentTask: null,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task: ITask) => task.id !== action.payload),
        currentTask: null,
      };
    default:
      return state;
  }
};

export default taskReducer;
