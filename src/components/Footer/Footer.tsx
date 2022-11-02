import { FC } from 'react';

import { TaskText } from '../logic';

interface FooterProps {
  filterTask: (arg: TaskText) => void;
  count: number;
  destroyAllComplete: () => void;
}

const Footer: FC<FooterProps> = ({ filterTask, count, destroyAllComplete }) => {
  function delegationListener(e) {
    e.currentTarget.childNodes.forEach((item) => {
      item.childNodes[0].classList.remove('selected');
    });
    e.target.classList.add('selected');
    filterTask(e.target.textContent);
  }

  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <ul className="filters" onClick={delegationListener}>
        <li>
          <button className={'selected'}>All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      <button className={'clear-completed'} onClick={destroyAllComplete}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
