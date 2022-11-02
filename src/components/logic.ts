import { formatDistance } from 'date-fns';

export function checkboxChange(task, id) {
  return [...task].reduce((acc, item) => {
    if (item.id === id) {
      item.active = !item.active;
    }
    return [...acc, item];
  }, []);
}

export function countTask(task) {
  return [...task].filter((item) => item.active).length;
}

export const timerFormatter = (value) => {
  const minutes = Math.floor(value / 60);
  const seconds = value - minutes * 60;
  const secFormat = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minutesFormat = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${minutesFormat}:${secFormat}`;
};

export type TaskText = 'All' | 'Active' | 'Completed';

export function filterTask(status: TaskText, task) {
  if (status === 'Active') {
    return task.filter((item) => item.active);
  } else if (status === 'Completed') {
    return task.filter((item) => !item.active);
  }
  return task;
}

export interface TaskDTO {
  title: string;
  id: number;
  created: string;
  active: boolean;
}

export function randomDate(isNewTask) {
  const dateCreated = isNewTask ? Date.now() : new Date(Date.now() - Math.floor(Math.random() * 10000000));
  return formatDistance(dateCreated, Date.now(), { includeSeconds: true, addSuffix: true });
}

export function addNewTask(title: string, isNewTask?: boolean): TaskDTO {
  return {
    title,
    id: Math.floor(Math.random() * 1000),
    created: randomDate(isNewTask),
    active: true,
  };
}

export const taskData: TaskDTO[] = [addNewTask('Drink'), addNewTask('Eat'), addNewTask('Sleep'), addNewTask('Walk')];
