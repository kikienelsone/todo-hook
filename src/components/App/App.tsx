import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TaskList from '../Task-list/Task-list';
import { TaskText, TaskDTO, countTask, checkboxChange, filterTask, addNewTask, taskData } from '../logic';

import './App.css';

const App = () => {
  const [task, setTask] = useState<TaskDTO[]>(taskData);
  const [stage, setStage] = useState<TaskText>('All');

  function addTask(item) {
    setTask([...task, item]);
  }

  const removeTask = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  function destroyCompletedTask() {
    setTask(task.filter((item) => item.active));
  }

  function newTaskHandle(title: string, newTasks: boolean) {
    return addTask(addNewTask(title, newTasks));
  }

  const newTask: TaskDTO[] = filterTask(stage, task);

  return (
    <section className={'todoapp'}>
      <Header addNewTask={newTaskHandle} />
      <section className={'main'}>
        {task.length ? (
          <TaskList
            task={newTask}
            onRemove={removeTask}
            completeTask={(id: number) => setTask(checkboxChange(task, id))}
          />
        ) : (
          <p className={'end-task'}>Task End</p>
        )}
      </section>
      <Footer count={countTask(task)} filterTask={(text) => setStage(text)} destroyAllComplete={destroyCompletedTask} />
    </section>
  );
};

export { App };
