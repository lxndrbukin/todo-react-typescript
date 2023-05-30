import { nanoid } from 'nanoid';
import { Task } from '../../components/types/types';
import { ActionTypes } from './types';

export interface CreateTaskAction {
  type: ActionTypes.createTask;
  payload: Task;
}

export interface DeleteTaskAction {
  type: ActionTypes.deleteTask;
  payload: Task;
}

export interface CompleteTaskAction {
  type: ActionTypes.completeTask;
  payload: Task;
}

export interface EditTaskAction {
  type: ActionTypes.editTask;
  payload: {
    task: Task,
    update: string;
  };
}

export const createTask = (data: string): CreateTaskAction => {
  return {
    type: ActionTypes.createTask,
    payload: {
      id: nanoid(),
      data
    }
  };
};

export const deleteTask = (task: Task): DeleteTaskAction => {
  return {
    type: ActionTypes.deleteTask,
    payload: task
  };
};

export const completeTask = (task: Task): CompleteTaskAction => {
  return {
    type: ActionTypes.completeTask,
    payload: task
  };
};

export const editTask = (task: Task, update: string): EditTaskAction => {
  return {
    type: ActionTypes.editTask,
    payload: {
      task,
      update
    }
  };
};