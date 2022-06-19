import React,{ useState } from 'react';

//CSS
import styles from './App.module.css';

//components
import Header from './components/NavBar'
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//Interface
import {ITask} from './Interface/ITask'

function App() {

  const[taskList, setTaskList] = useState<ITask[]>([]);
  const[taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (title: string) => {
    setTaskList(
      taskList.filter((task) => {
        return task.title !== title
      })
    )
  }
  const hideOrShowModal = (display:boolean) => {
    const modal = document.querySelector("modal")
    if(display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id:number, title:string, difficulty:number) =>{

    const updatedTask : ITask = {id, title, difficulty};

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    })

    setTaskList(updatedItems)

    hideOrShowModal(false)

  }

  return (
    <div>
      <Modal 
      title="editar Tarefa"
      children={
      <TaskForm 
      btnText="Editar Tarefa" 
      taskList={taskList}  
      task={taskToUpdate}
      handleUpdate={updateTask}
      />
      }
      />
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>Oque você vai fazer</h2>
          <TaskForm 
            btnText='Cadastrar' 
            taskList={taskList} 
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList 
          taskList={taskList} 
          handleDelete={deleteTask} 
          handleEdit={editTask}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
