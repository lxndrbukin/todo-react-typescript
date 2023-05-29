import React from 'react';
import { Task, TasksProps } from './types/types';
import TaskItem from './TaskItem';

class Tasks extends React.Component<TasksProps> {

  renderedList(): JSX.Element[] {
    return this.props.taskList.map((task: Task) => {
      return (
        <TaskItem
          task={task}
          key={task.id}
          showButtons={this.props.showButtons}
        />
      );
    });
  }

  render(): JSX.Element {
    return <div className='mt-2 relative z-10'>{this.renderedList()}</div>;
  }
}

export default Tasks;
