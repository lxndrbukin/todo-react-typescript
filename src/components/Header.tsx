import React from 'react';
import { connect } from 'react-redux';
import { TasksState } from '../store/reducers/tasksReducer';
import { Link } from 'react-router-dom';
import Button from './reusable/Button';
import { Task } from './types/types';

interface HeaderProps {
  activeTasks: Task[];
  completedTasks: Task[];
  deletedTasks: Task[];
}

class _Header extends React.Component<HeaderProps> {
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

const mapStateToProps = ({
  activeTasks,
  completedTasks,
  deletedTasks,
}: TasksState) => {
  return {
    activeTasks,
    deletedTasks,
    completedTasks,
  };
};

export const Header = connect(mapStateToProps, {})(_Header);
