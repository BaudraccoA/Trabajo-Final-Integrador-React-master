import React, { useState } from 'react';

const InputTask = ({ onAddTask, placeholder }) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTaskDescription.trim() !== '') {
      onAddTask(newTaskDescription);
      setNewTaskDescription('');
    }
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        placeholder={placeholder || 'Nueva tarea'}
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
      />
      <button className="add-button" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
};

export default InputTask;
