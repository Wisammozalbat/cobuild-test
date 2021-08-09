import React, { useContext } from 'react';
import { TaskStyle } from './TaskStyle';
import { AiFillCaretRight } from 'react-icons/ai';
import taskContext from '../../context/tasks/taskContext';

export interface ITask {
  name: string;
  description: string;
  status: boolean;
  id: string;
}

const Task: React.FC<ITask> = ({ description, status, id, name }) => {
  const tasksContext = useContext(taskContext);
  const { setCurrentTask } = tasksContext;
  return (
    <TaskStyle
      onClick={() => setCurrentTask({ description, status, id, name })}
    >
      <div className={['task-badge', status ? 'done' : ''].join(' ')} />
      <p>{name}</p>
      <div className="task-arrow">
        <AiFillCaretRight />
      </div>
    </TaskStyle>
  );
};

export default Task;
