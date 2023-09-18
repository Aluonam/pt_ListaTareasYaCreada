# pt_ListaTareasYaCreada
Instrucciones:

El candidato debe crear una aplicación de lista de tareas básica utilizando React con componentes funcionales.
La aplicación debe permitir agregar tareas a una lista y marcarlas como completadas.
No se necesita ninguna interacción con el servidor, el estado puede ser gestionado localmente en los componentes funcionales.
Se proporciona un esqueleto básico de la aplicación con algunos componentes ya creados. El candidato debe completar y mejorar la aplicación.
jsx
Copy code
```javascript

import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
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

export default TodoApp;
```

Tareas:

Completar el código proporcionado para que la aplicación funcione correctamente.
Asegurarse de que las tareas se agreguen a la lista cuando se haga clic en el botón "Agregar".
Asegurarse de que las tareas se marquen como completadas cuando se haga clic en el botón "Completar".
Añadir cualquier estilo adicional o mejoras que considere necesarias.
El candidato puede utilizar cualquier enfoque que considere adecuado para resolver los problemas y mejorar la aplicación. Luego, el evaluador puede revisar el código y la funcionalidad para evaluar las habilidades del candidato en React con componentes funcionales.