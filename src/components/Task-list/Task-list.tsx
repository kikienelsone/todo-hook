import { FC } from 'react';

import Task from '../Task/Task';
import { TaskDTO } from '../logic';

interface TaskListProps {
  task: TaskDTO[];
  completeTask: (arg: number) => void;
  onRemove: (arg: number) => void;
}

const TaskList: FC<TaskListProps> = ({ task, completeTask, onRemove }) => {
  return (
    <ul className={'todo-list'}>
      {task.map((item) => {
        return <Task key={item.id} onClickedTask={() => onRemove(item.id)} task={item} completeTask={completeTask} />;
      })}
    </ul>
  );
};

export default TaskList;
