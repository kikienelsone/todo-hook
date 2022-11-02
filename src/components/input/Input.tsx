import { FC } from 'react';

import { TaskDTO } from '../logic';

interface InputProps {
  makeActive: () => void;
  selector: TaskDTO;
}

const Input: FC<InputProps> = ({ makeActive, selector }) => {
  return <input defaultChecked={!selector.active} className={'toggle'} type={'checkbox'} onClick={makeActive} />;
};

export default Input;
