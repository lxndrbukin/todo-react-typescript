import { CreateTaskAction, DeleteTaskAction, CompleteTaskAction, EditTaskAction } from './tasks';

export enum ActionTypes {
  createTask,
  completeTask,
  deleteTask,
  editTask
}

export type Action = CreateTaskAction | DeleteTaskAction | CompleteTaskAction | EditTaskAction;