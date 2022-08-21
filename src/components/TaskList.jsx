import { useState, useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./tasklist.css";

export function TaskList() {
  const [isLoading, setIsLoading] = useState(true);

  const { tasks, deleteTask} = useContext(TaskContext);

  useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 2000);
  }, [])

  if (isLoading) {
    return <div className="spinner-border text-primary" role="status">
      <span className="sr-only"></span>
    </div>
  }
  if (tasks.length === 0) {
    return <p>No hay tareas</p>;
  }

  return (

    <div id="container-target">
      {tasks.map((task) => {
        return (
          <div className="card" key={task.id} id="tarjetas">
            <div className="card-body">
              <h3>Id: {task.id}</h3>
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">{task.description}.</p>
              <button type="button" className="btn btn-danger" onClick={() => {
                deleteTask(task.id)
              }}>Eliminar</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}