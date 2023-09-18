import React, {useState} from 'react'

const BotonCompletarTarea = ({index, tasksList, setTasksList}) => {


    const handleCompleteTask = () => {
        //clono lista de tareas
        const updatedTasks = structuredClone(tasksList);
        //compruebo con .includes si ya hay check✅ (devuelve true o false)
        const isCompleted = updatedTasks[index].includes('✅')
        //si no tiene el check lo añado y sino nada
        // if(isCompleted === false){updatedTasks[index] = `✅ ${updatedTasks[index]}`}
        if(!isCompleted){
            updatedTasks[index] = `✅ ${updatedTasks[index]}`
            setTasksList(updatedTasks);
            }
      };

  return (
    <button onClick={() => handleCompleteTask()}>Completar</button>
  )
}

export default BotonCompletarTarea