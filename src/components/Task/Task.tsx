import { useState, useEffect, FC } from 'react';

import Input from '../input/Input';
import Button from '../Button/Button';
import { TaskDTO, timerFormatter } from '../logic';

interface TaskProps {
  task: TaskDTO;
  onClickedTask: () => void;
  completeTask: (arg: number) => void;
}

const Task: FC<TaskProps> = ({ task, onClickedTask, completeTask }) => {
  const [timerStatus, setStatus] = useState(false);
  const [currentTimer, setCurrentTimer] = useState(0);
  const [time, setTime] = useState(null);

  const classSelector = !task.active ? ' completed' : '';

  useEffect(() => {
    if (timerStatus) {
      const timer = setInterval(() => {
        setCurrentTimer((prevState) => prevState + 1);
      }, 1000);
      setTime(timer);
    } else {
      clearInterval(time);
    }
    return () => {
      clearInterval(time);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerStatus]);

  return (
    <li className={classSelector}>
      <div className="view">
        <Input makeActive={() => completeTask(task.id)} selector={task} />
        <label>
          <span className="title">{task.title}</span>
          <span className="description">
            <button className={'icon-play'} onClick={() => !timerStatus && setStatus(true)} />
            <button className={'icon-pause'} onClick={() => timerStatus && setStatus(false)} />
            <div>{timerFormatter(currentTimer)}</div>
          </span>
          <span className="description">{task.created}</span>
        </label>
        <Button classes={'icon-edit'} />
        <Button classes={'icon-destroy'} destroy={onClickedTask} />
      </div>
    </li>
  );
};

export default Task;
