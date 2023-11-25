import React from 'react';
import './TaskList.css';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onDeleteTask, onEditTask, editingTaskId }) => {
  return (
    <div className="task-list-container">
      <div className='vertical-line'></div>
      <div className="folder-sheet">
        <div className="empty-row"></div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskComplete={onTaskComplete}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;


