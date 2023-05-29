import { Action, ActionTypes } from '../actions';

interface Task {
  id: string;
  data: string;
}

export interface TasksState {
  activeTasks: Task[];
  completedTasks: Task[];
  deletedTasks: Task[];
}

const initialState: TasksState = {
  activeTasks: [],
  completedTasks: [],
  deletedTasks: [],
};

export const tasksReducer = (state: TasksState = initialState, action: Action): TasksState => {
  switch (action.type) {
    case ActionTypes.createTask:
      return { activeTasks: [...state.activeTasks, action.payload], completedTasks: [...state.completedTasks], deletedTasks: [...state.deletedTasks] };
    default:
      return state;
  }
};