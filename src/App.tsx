import { useState } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import './global.css';
import { Tasks } from "./components/Tasks";

const tasksListData = [
  {
    content: 'Finalizar o desafio de fazer um "TODO" no curso do ignite',
    completed: false,
  },
  {
    content: 'Estudar inglês',
    completed: false,
  },
  {
    content: 'Ir para acadêmia e fazer o novo treino de bíceps',
    completed: true,
  },
];

interface Task {
  content: string;
  completed: boolean;
}

export function App() {

  const [ tasksList, setTasksList ] = useState(tasksListData);

  function addTask(newTask: Task) {
    setTasksList([...tasksList, newTask]);
  }

  function deleteTask(taskContent: string) {
    const tasksListWithouDeletedOne  = tasksList.filter((task) => {
      return task.content !== taskContent;
    });
  
    setTasksList(tasksListWithouDeletedOne);
  }

  function toggleTaskStatus(taskContent: string) {
    const newTaskList = [...tasksList];
    const taskToUpdate = newTaskList.findIndex((task => task.content == taskContent));
    newTaskList[taskToUpdate].completed = !newTaskList[taskToUpdate].completed;
    setTasksList(newTaskList);
  }

  return (
    <div>
      <Header />
      <NewTask addTask={addTask} />
      <Tasks tasksList={tasksList} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
    </div>
  )
}
