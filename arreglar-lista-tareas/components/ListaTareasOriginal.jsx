import React, { useState } from 'react';

function ListaTareasOriginal() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

//
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
    console.log("funcion input",event.target.value)
  };

  const handleAddTask = () => {
    // if (newTask.trim() !== '') {
    //   setTasks((prevTasks) => [...prevTasks, newTask]);
    //   setNewTask('');
    // }
    setTasks([...tasks,newTask])
    setNewTask('')

  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = `✅ ${updatedTasks[index]}`;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleCompleteTask(index)}>Completar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareasOriginal;