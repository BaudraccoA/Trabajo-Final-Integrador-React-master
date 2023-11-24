import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({onAddTask}) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');


  //Para guardar en el Local Storage del navegador el valor.
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('tasks', newTaskDescription );
    setNewTaskDescription('');
    onAddTask(newTaskDescription)
  };

  // Con enter se agrega la tarea una vez escrita en el input
  /*const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };*/

  return (
    <div className="todo-list-container">
      <div className="header">
        <div className="title">Todo List</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nueva tarea"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
           // onKeyDown={handleKeyDown}
          />
          <button className="add-button" >
            +
          </button>
          </form>
        </div>
      </div>
 
  );
};

export default TaskForm;
