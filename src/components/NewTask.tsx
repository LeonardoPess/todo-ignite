import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './NewTask.module.css';

import plusIcon from '../assets/plus.svg';

interface Task {
  content: string;
  completed: boolean;
}

interface NewTaskProps {
  addTask: (newTask: Task) => void;
}

export function NewTask({ addTask }: NewTaskProps) {
  const [ newTaskText, setNewTaskText ] = useState('');

  const isNewTaskEmpty = newTaskText.length === 0;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
    event.target.setCustomValidity('');
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setNewTaskText('');

    const newTask = {
      content: newTaskText,
      completed: false,
    };

    addTask(newTask);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.newTask}>
      <input
        value={newTaskText}
        onChange={handleNewTaskChange}
        type="text"
        placeholder='Adicione uma nova tarefa'
      />

      <button type='submit' disabled={isNewTaskEmpty}>Criar <img src={plusIcon} alt="ícone de adicionar" /></button>
    </form>
  );
}
