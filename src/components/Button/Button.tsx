import { FC } from 'react';

interface ButtonProps {
  classes?: string;
  text?: string;
  destroy?: () => void;
}

const Button: FC<ButtonProps> = ({ classes = '', text, destroy }) => {
  return (
    <button className={`icon ${classes}`} onClick={destroy}>
      {text ? text : ''}
    </button>
  );
};

export default Button;
