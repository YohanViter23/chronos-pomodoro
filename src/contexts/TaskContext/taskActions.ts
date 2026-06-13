import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRRUPT_TASK = 'INTERRRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      parload: TaskModel;
    }
  | {
      type: TaskActionTypes.INTERRRUPT_TASK;
      parload: TaskModel;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    };
