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

export const tasksReducer = (state: TasksState = initialState, action: any): TasksState => {
  switch (action.type) {
    case 'CREATE_TASK':
      return { activeTasks: [...state.activeTasks, action.payload], completedTasks: [...state.completedTasks], deletedTasks: [...state.deletedTasks] };
    default:
      return state;
  }
};