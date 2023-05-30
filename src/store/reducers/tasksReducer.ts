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

enum LocalStorage {
  activeTasks = 'activeTasks',
  deletedTasks = 'deletedTasks',
  completedTasks = 'completedTasks'
}

const initialState: TasksState = {
  activeTasks: JSON.parse(localStorage.getItem(LocalStorage.activeTasks)!) || [],
  completedTasks: JSON.parse(localStorage.getItem(LocalStorage.completedTasks)!) || [],
  deletedTasks: JSON.parse(localStorage.getItem(LocalStorage.deletedTasks)!) || [],
};

export const tasksReducer = (state: TasksState = initialState, action: Action): TasksState => {

  switch (action.type) {
    case ActionTypes.createTask:
      state.activeTasks.push(action.payload);
      localStorage.setItem(LocalStorage.activeTasks, JSON.stringify(state.activeTasks));
      return { activeTasks: [...state.activeTasks], completedTasks: [...state.completedTasks], deletedTasks: [...state.deletedTasks] };
    case ActionTypes.deleteTask:
      state.activeTasks = state.activeTasks.filter((task: Task) => task.id !== action.payload.id);
      localStorage.setItem(LocalStorage.activeTasks, JSON.stringify(state.activeTasks));
      state.deletedTasks.push(action.payload);
      localStorage.setItem(LocalStorage.deletedTasks, JSON.stringify(state.deletedTasks));
      return { activeTasks: [...state.activeTasks], completedTasks: [...state.completedTasks], deletedTasks: [...state.deletedTasks] };
    case ActionTypes.completeTask:
      state.activeTasks = state.activeTasks.filter((task: Task) => task.id !== action.payload.id);;
      localStorage.setItem(LocalStorage.activeTasks, JSON.stringify(state.activeTasks));
      state.completedTasks.push(action.payload);
      localStorage.setItem(LocalStorage.completedTasks, JSON.stringify(state.completedTasks));
      return { activeTasks: [...state.activeTasks], completedTasks: [...state.completedTasks], deletedTasks: [...state.deletedTasks] };
    case ActionTypes.editTask:
      const index = state.activeTasks.findIndex((task: Task) => task.id === action.payload.task.id);
      state.activeTasks[index] = {
        ...state.activeTasks[index],
        data: action.payload.update
      };
      localStorage.setItem(LocalStorage.activeTasks, JSON.stringify(state.activeTasks));
      return { activeTasks: [...state.activeTasks], completedTasks: [...state.completedTasks], deletedTasks: [...state.deletedTasks] };
    default:
      return state;
  }
};