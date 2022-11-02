import { FC, useState } from 'react';

interface HeadeProps {
  addNewTask: (title: string, isNewTask?: boolean) => void;
}

const Header: FC<HeadeProps> = ({ addNewTask }) => {
  const [value, setValue] = useState({
    title: '',
  });

  function takeValue(e) {
    setValue({ title: e.target.value });
  }

  function sendTitle(e) {
    e.preventDefault();
    addNewTask(value.title, true);
    setValue({ title: '' });
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={sendTitle}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={takeValue}
          value={value.title}
        />
      </form>
    </header>
  );
};

export default Header;
