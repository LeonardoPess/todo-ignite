import styles from './Tasks.module.css';

import clipboardIcon from '../assets/clipboard.svg';
import checkIcon from '../assets/check.svg';
import checkedIcon from '../assets/checked.svg';
import trashIcon from '../assets/trash.svg';

interface Task {
  content: string;
  completed: boolean;
}

interface TasksProps {
  tasksList: Task[];
  deleteTask: (taskContent: string) => void;
  toggleTaskStatus: (taskContent: string) => void;
}

export function Tasks({ tasksList, deleteTask, toggleTaskStatus }: TasksProps) {

  const tasksCompletedLength = tasksList.filter((task) => task.completed === true).length;

  return (
    <div className={styles.tasks}>
      <header>
        <strong>Tarefas criadas <span>{tasksList.length}</span></strong>
        <strong>concluídas <span>{(tasksList.length) ? `${tasksCompletedLength} de ${tasksList.length}` : '0'}</span></strong>
      </header>

      <main>
        {(tasksList.length) ? (
          tasksList.map(({ content, completed }) => {
            return (
              <div className={styles.taskBox} key={content}>
                <img src={(completed) ? checkedIcon : checkIcon} alt="Status da tafera" onClick={() => toggleTaskStatus(content)}/>
                <p className={(completed) ? styles.completed : ''}>{content}</p>
                <img src={trashIcon} alt="Deletar tarefa" onClick={() => deleteTask(content)} />
              </div>
            );
          })
        ) : (
          <div className={styles.taskBoxEmpty}>
            <img src={clipboardIcon} alt="ícone de clipboard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </main>
    </div>
  );
}
