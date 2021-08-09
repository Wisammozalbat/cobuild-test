import { createContext } from 'react';
import { ITask } from '../../components/task/Task';

interface ITaskContext {
  tasks: ITask[];
  currentTask: null | ITask;
  addNewTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
  editTask: (task: ITask) => void;
  getTasks: () => void;
  setCurrentTask: (task: ITask) => void;
}

const taskContext = createContext<ITaskContext>({
  tasks: [],
  currentTask: null,
  addNewTask: () => {},
  deleteTask: () => {},
  editTask: () => {},
  getTasks: () => {},
  setCurrentTask: () => {},
});

export default taskContext;
