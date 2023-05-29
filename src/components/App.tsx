import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProps } from './types/types';
import { connect } from 'react-redux';
import { StoreState } from '../store/reducers';
import { TasksState } from '../store/reducers/tasksReducer';
import { Header } from './Header';
import CreateTask from './CreateTask';
import Tasks from './Tasks';

class _App extends React.Component<AppProps> {

  render(): JSX.Element {
    return (
      <div className='w-screen h-screen flex flex-col'>
        <Header />
        <div className='col-span-5 w-1/2 mt-72 mx-auto'>
          <CreateTask />
          <Routes>
            <Route
              path='/'
              element={<Tasks taskList={this.props.activeTasks} showButtons />}
            />
            <Route
              path='/completed'
              element={
                <Tasks
                  taskList={this.props.completedTasks}
                  showButtons={false}
                />
              }
            />
            <Route
              path='/deleted'
              element={
                <Tasks taskList={this.props.deletedTasks} showButtons={false} />
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tasks}: StoreState): TasksState => {
  return {
    activeTasks: tasks.activeTasks,
    deletedTasks: tasks.deletedTasks,
    completedTasks: tasks.completedTasks,
  };
};

export const App = connect(mapStateToProps, {})(_App);
