import { createContext } from "react"
import { useEffect, useState } from "react";
import { task as data } from "../data/task";

/* Creación de un objeto de contexto. */
export const TaskContext = createContext();


/**
 * La función TaskContextProvider es un componente que devuelve un componente TaskContext.Provider que
 * tiene un valor de 20
 * @returns Se devuelve el valor de num.
 */

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  const createTask = (task) => {
    setTask([...tasks, {
      id: tasks.length,
      title: task.title,
      description: task.description
    }]);
  }

  const deleteTask = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

