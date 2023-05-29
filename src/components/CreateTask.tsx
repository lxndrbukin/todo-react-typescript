import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../store/actions';
import { GoPlus } from 'react-icons/go';
import Button from './reusable/Button';

interface CreateTaskProps {
  createTask: Function;
}

class CreateTask extends React.Component<CreateTaskProps> {
  state = {
    task: '',
  };

  handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    this.props.createTask(this.state.task);
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ task: e.target.value });
  };

  render(): JSX.Element {
    return (
      <form onSubmit={this.handleSubmit} className='relative'>
        <div className='bg-white h-14 p-2 flex flex-row justify-between rounded border shadow-sm'>
          <input
            className='w-full text-xl focus:outline-none m-auto'
            onChange={this.handleChange}
            value={this.state.task}
            placeholder='Create new task...'
          />
          <Button
            className='m-auto h-10 w-10'
            buttonType='primary'
            type='submit'
          >
            <GoPlus />
          </Button>
        </div>
      </form>
    );
  }
}

export default connect(null, { createTask })(CreateTask);
