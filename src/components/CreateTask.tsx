import React from 'react';
import { GoPlus } from 'react-icons/go';
import Button from './reusable/Button';

class CreateTask extends React.Component {
  handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  handleChange = (e: React.ChangeEvent): void => {};

  render(): JSX.Element {
    return (
      <form onSubmit={this.handleSubmit} className='relative'>
        <div className='bg-white h-14 p-2 flex flex-row justify-between rounded border shadow-sm'>
          <input
            className='w-full text-xl focus:outline-none m-auto'
            onChange={this.handleChange}
            value={task}
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

export default CreateTask;
