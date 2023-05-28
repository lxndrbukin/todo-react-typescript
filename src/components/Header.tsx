import React from 'react';
import { Link } from 'react-router-dom';
import Button from './reusable/Button';

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <header className='bg-gradient-to-r from-sky-600 to-sky-700 h-80 w-full absolute z-0 flex flex-col'>
        <h1 className='text-5xl font-bold text-white w-fit m-auto'>
          Task Manager
        </h1>
        <div className='m-auto flex'>
          <Link to='/'>
            <Button buttonType='light'>
              To Do ({this.props.activeTasks.length})
            </Button>
          </Link>
          <Link to='/completed'>
            <Button buttonType='success'>
              Completed ({this.props.completedTasks.length})
            </Button>
          </Link>
          <Link to='/deleted'>
            <Button buttonType='danger'>
              Deleted ({this.props.deletedTasks.length})
            </Button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
