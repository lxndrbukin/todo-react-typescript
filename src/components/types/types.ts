export interface Task {
  id: string;
  data: string;
}

export interface TasksProps {
  taskList: Task[];
  showButtons: boolean;
}

export interface AppProps {
  activeTasks: Task[];
  completedTasks: Task[];
  deletedTasks: Task[];
}
