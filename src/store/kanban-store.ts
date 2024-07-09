import { create } from "zustand";
import { createSelectors } from "./create-selectors";

export type TaskItem = {
  id: string;
  title: string;
  status: string;
};

type KanBanStore = {
  tasks: Array<TaskItem>;
  addTask: (id: string, title: string, status: string) => void;
  deleteTask: (taskId: string) => void;
};

export const useKanBanStore = create<KanBanStore>((set) => ({
  tasks: [
    { id: "abcd", title: "TestTask1", status: "PLANNED" },
    { id: "efgh", title: "TestTask2", status: "DONE" },
  ],
  addTask: (id: string, title: string, status: string) =>
    set((state) => ({
      tasks: [...state.tasks, { id: id, title: title, status: status }],
    })),
  deleteTask: (taskId: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));

export const useKanBanSelector = createSelectors(useKanBanStore);
