import React from 'react';
import { Task } from './types/types';
import { GoPencil, GoTrashcan, GoFile } from 'react-icons/go';
import Button from './reusable/Button';

interface TaskItemProps {
  task: Task;
  showButtons: boolean;
}

interface StateProps {
  showUpdateForm: boolean;
}

class TaskItem extends React.Component<TaskItemProps, StateProps> {
  constructor(props: TaskItemProps) {
    super(props);
    this.state = { showUpdateForm: false };
  }

  renderItem(): JSX.Element {
    if (this.state.showUpdateForm) {
      return (
        <React.Fragment>
          <input
            className='focus:outline-none border rounded w-full pl-0.5'
            onChange={handleChangeTask}
            value={updatedTask}
          />
          <Button
            buttonType='success'
            onClick={handleUpdateTask}
            className='h-10 w-10'
          >
            <GoFile />
          </Button>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className='break-words h-fit my-auto'>{task.data}</div>
        {buttons}
      </React.Fragment>
    );
  }

  render(): JSX.Element {
    return (
      <div className='bg-white w-full my-1 px-2 py-1.5 border rounded flex flex-row justify-between h-14'>
        {this.renderedItem()}
      </div>
    );
  }
}

export default TaskItem;
