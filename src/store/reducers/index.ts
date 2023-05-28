import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { Task } from '../../components/types/types';

export interface StoreState {
  tasks: {
    activeTasks: Task[],
    completedTasks: Task[],
    deletedTasks: Task[];
  };
}

export const reducers = combineReducers<StoreState>({
  tasks: tasksReducer
});