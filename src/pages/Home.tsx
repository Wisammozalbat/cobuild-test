import React, { useContext, useEffect, useState } from 'react';
import Tasks from '../components/tasks/Tasks';
import HomeStyle from './HomeStyle';

import taskContext from '../context/tasks/taskContext';
import TaskInfo from '../components/taskInfo/TaskInfo';
import AddTaskModal from '../components/modals/AddTaskModal';

const Home = () => {
  const tasksContext = useContext(taskContext);

  const { currentTask, tasks, getTasks } = tasksContext;

  const [openInput, setOpenInput] = useState<boolean>(false);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <HomeStyle>
      <div className="tasks-list">
        <button onClick={() => setOpenInput(true)} className="add-task-button">
          Nueva Tarea
        </button>
        <AddTaskModal onClose={() => setOpenInput(false)} isOpen={openInput} />
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} />
        ) : (
          <p className="empty-message">Aun no se han seleccionado tareas</p>
        )}
      </div>
      <div className="task-detail">
        <TaskInfo currentTask={currentTask} />
      </div>
    </HomeStyle>
  );
};

export default Home;
