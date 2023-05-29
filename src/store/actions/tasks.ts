import { nanoid } from 'nanoid';
import { Dispatch } from 'redux';
import { Task } from '../../components/types/types';
import { ActionTypes } from './types';

export interface CreateTaskAction {
  type: ActionTypes.createTask;
  payload: Task;
}

export const createTask = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch<CreateTaskAction>({
      type: ActionTypes.createTask,
      payload: {
        id: nanoid(),
        data
      }
    });
  };
};