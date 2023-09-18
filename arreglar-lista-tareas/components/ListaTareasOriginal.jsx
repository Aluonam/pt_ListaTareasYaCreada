import React, { useState } from 'react';
import BotonCompletarTarea from './BotonCompletarTarea';

function ListaTareasOriginal() {

  const [tasksList, setTasksList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleAddTask = () => {
    setTasksList([...tasksList,newTask])
    setNewTask('')
  }

  const listadoTareas = tasksList.map((actualElement, index)=>{
    return(
        <li>
            {actualElement}
            <BotonCompletarTarea index={index} tasksList={tasksList} setTasksList={setTasksList}></BotonCompletarTarea>
        </li>
    )

  })
 

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
            {listadoTareas}

      </ul>
    </div>
  );
}

export default ListaTareasOriginal;