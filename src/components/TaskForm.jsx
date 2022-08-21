import { useState } from 'react';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import "./taskForm.css";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlerTitle = (e) => {
    setTitle(e.target.value);
  }

  const handlerDescription = (e) => {
    setDescription(e.target.value)
  }

  const { createTask } = useContext(TaskContext);

  const handlerSubmit = (e) => {
    e.preventDefault()
    createTask({ title, description })
    setTitle('');
    setDescription('');
  }


  return (
    <div id="formulario">
      <form onSubmit={handlerSubmit}>
        <div className="mb-3">
          <label htmlFor="tituloTarea" className="form-label">Titulo</label>
          <input type="text" className="form-control" id="tituloTarea" placeholder="Titulo tarea" onChange={handlerTitle} value={title} />
        </div>
        <div className="mb-3">
          <label htmlFor="desTarea" className="form-label">Descripcion</label>
          <textarea className="form-control" rows="3" required="required" placeholder="descripcion de la tarea" onChange={handlerDescription} value={description} id="textArea"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  )
}

export default TaskForm