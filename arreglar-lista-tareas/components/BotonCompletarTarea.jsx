import React, {useState} from 'react'

const BotonCompletarTarea = ({index, tasksList, setTasksList}) => {


    const handleCompleteTask = () => {
        const updatedTasks = structuredClone(tasksList);
        updatedTasks[index] = `✅ ${updatedTasks[index]}`;
        setTasksList(updatedTasks);
      };

  return (
    <button onClick={() => handleCompleteTask()}>Completar</button>
  )
}

export default BotonCompletarTarea