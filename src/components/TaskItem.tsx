import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, completeTask, editTask } from '../store/actions';
import { Task } from './types/types';
import { GoPencil, GoTrashcan, GoFile } from 'react-icons/go';
import { MdDoneOutline } from 'react-icons/md';
import Button from './reusable/Button';

interface TaskItemProps {
  task: Task;
  showButtons: boolean;
  deleteTask: typeof deleteTask;
  completeTask: typeof completeTask;
  editTask: typeof editTask;
}

interface StateProps {
  showUpdateForm: boolean;
  taskData: string;
}

class TaskItem extends React.Component<TaskItemProps, StateProps> {
  constructor(props: TaskItemProps) {
    super(props);
    this.state = { showUpdateForm: false, taskData: this.props.task.data };
  }

  handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ taskData: e.target.value });
  };

  handleUpdateTask = (): void => {
    this.props.editTask(this.props.task, this.state.taskData);
    this.setState({ showUpdateForm: false });
  };

  handleDeleteTask = (): void => {
    this.props.deleteTask(this.props.task);
  };

  handleCompleteTask = (): void => {
    this.props.completeTask(this.props.task);
  };

  handleUpdateForm = (): void => {
    this.setState({ showUpdateForm: true });
  };

  renderButtons(): JSX.Element | null {
    if (this.props.showButtons) {
      return (
        <div className='flex flex-row my-auto'>
          <Button
            buttonType='primary'
            onClick={this.handleUpdateForm}
            className='h-10 w-10'
          >
            <GoPencil />
          </Button>
          <Button
            buttonType='success'
            onClick={this.handleCompleteTask}
            className='h-10 w-10'
          >
            <MdDoneOutline />
          </Button>
          <Button
            buttonType='danger'
            onClick={this.handleDeleteTask}
            className='h-10 w-10'
          >
            <GoTrashcan />
          </Button>
        </div>
      );
    }
    return null;
  }

  renderItem(): JSX.Element {
    if (this.state.showUpdateForm) {
      return (
        <React.Fragment>
          <input
            className='focus:outline-none border rounded w-full pl-0.5'
            onChange={this.handleChangeTask}
            value={this.state.taskData}
          />
          <Button
            buttonType='success'
            onClick={this.handleUpdateTask}
            className='h-10 w-10'
          >
            <GoFile />
          </Button>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className='break-words h-fit my-auto'>{this.props.task.data}</div>
        {this.renderButtons()}
      </React.Fragment>
    );
  }

  render(): JSX.Element {
    return (
      <div className='bg-white w-full my-1 px-2 py-1.5 border rounded flex flex-row justify-between h-14'>
        {this.renderItem()}
      </div>
    );
  }
}

export default connect(null, { deleteTask, completeTask, editTask })(TaskItem);
