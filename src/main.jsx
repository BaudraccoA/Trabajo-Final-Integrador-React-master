import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import TaskList from './Components/Task/TaskList';
import TaskForm from './Components/Task/TaskForm';


const MainApp = () => {
  const [tasks, setTasks] = useState([
        { id: 1, description: 'Throw away my books' },
        { id: 2, description: 'Recycle my homework' },
        { id: 3, description: 'Do some stupid things' },
        { id: 4, description: 'Create a stunning app' },
        { id: 5, description: 'Design my webside' },  
        
        // ... otras tareas
      ]);
          

  const handleTaskComplete = (taskId, completed) => {
    
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = (newTaskDescription) => {
    // lógica para agregar una nueva tarea
    const newTask = {
      id: tasks.length + 1,
      description: newTaskDescription,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    // Filtrar las tareas para eliminar la tarea 
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <React.StrictMode>
      <TaskForm onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} onDeleteTask={handleDeleteTask} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<MainApp />);