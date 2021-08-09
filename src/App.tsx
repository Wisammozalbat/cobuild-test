import React from 'react';
import './App.css';
import TaskState from './context/tasks/TaskState';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <TaskState>
        <Home />
      </TaskState>
    </div>
  );
}

export default App;
