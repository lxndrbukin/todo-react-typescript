import React from 'react';
import { Task } from './types/types';
import { GoPencil, GoTrashcan, GoFile } from 'react-icons/go';
import { MdDoneOutline } from 'react-icons/md';
import Button from './reusable/Button';

interface TaskItemProps {
  task: Task;
  showButtons: boolean;
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
  }

  handleUpdateTask = (): void => {}

  handleUpdateForm = () => {}

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
            onClick={() => {}}
            className='h-10 w-10'
          >
            <MdDoneOutline />
          </Button>
          <Button
            buttonType='danger'
            onClick={() => {}}
            className='h-10 w-10'
          >
            <GoTrashcan />
          </Button>
        </div>
      )
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

export default TaskItem;
