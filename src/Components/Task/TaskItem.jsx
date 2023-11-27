import React, { useState } from 'react';
import './TaskItem.css';

  const TaskItem = ({ task, onTaskComplete, onDeleteTask, onEditTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);

  const handleComplete = () => {
    onTaskComplete(task.id, !task.completed);
  };

  const handleEdit = () => {
    setIsEditing(true);
    // Set el valor inicial del campo de edición al valor actual de la tarea
    setEditedDescription(task.description);
  };

  const handleInputChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleSaveEdit = () => {
     // Guardar cambios al presionar el botón "+"
    onEditTask(task.id, editedDescription);
    setIsEditing(false);
  };

  const handleBlur = () => {
    // Guardar cambios al hacer clic fuera del campo de edición
    handleSaveEdit();
  };

  const handleKeyDown = (e) => {
    // Guardar cambios al presionar "Enter"
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
  };


  return (
   <div className={`task-row ${task.completed ? 'completed' : ''}`}>
      <div className="left-column">
        <div className="event-square" onClick={handleComplete}></div>
      </div>
      <div className="right-column">
        { isEditing ? (
          <>
            <input
              type="text"
              value={editedDescription}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
            
          </>
        ) : (
          <div onClick={handleEdit}>{task.description}</div>

        )}
      </div>
      <div className="delete-button" onClick={() => onDeleteTask(task.id)}>
        X
      </div>
    </div>
  );
};

export default TaskItem;



  
