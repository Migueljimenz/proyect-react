import { TaskList } from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
 
  return (
    <>
      <h1 className="text-center">Registra tu tarea</h1>
      <TaskForm />
      <TaskList />
    </>
  )
}

export default App
