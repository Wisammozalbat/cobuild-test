import React from 'react';
import Task from '../task/Task';
import { TasksStyle } from './TasksStyle';

interface ITasks {
  tasks: {}[];
}

const Tasks: React.FC<ITasks> = ({ tasks }) => {
  return (
    <TasksStyle>
      {tasks.map((task: any) => (
        <Task
          key={task.id}
          name={task.name}
          description={task.description}
          status={task.status}
          id={task.id}
        />
      ))}
    </TasksStyle>
  );
};

export default Tasks;
