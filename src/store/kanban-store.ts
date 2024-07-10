import { create } from "zustand";
import { createSelectors } from "./create-selectors";

export type TaskItem = {
  id: string;
  title: string;
  status: string;
};

type KanBanStore = {
  tasks: Array<TaskItem>;
  draggedTask: string | null;
  addTask: (id: string, title: string, status: string) => void;
  deleteTask: (taskId: string) => void;
  setDraggedTask: (taskId: string | null) => void;
  moveTask: (taskId: string | null, status: string) => void;
};

export const useKanBanStore = create<KanBanStore>((set) => ({
  tasks: [{ id: "abcd", title: "TestTask1", status: "PLANNED" }],
  draggedTask: null,
  addTask: (id: string, title: string, status: string) =>
    set((state) => ({
      tasks: [...state.tasks, { id: id, title: title, status: status }],
    })),
  deleteTask: (taskId: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  setDraggedTask: (taskId: string | null) => set({ draggedTask: taskId }),
  moveTask: (taskId: string | null, status: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: status } : task,
      ),
    })),
}));

export const useKanBanSelector = createSelectors(useKanBanStore);
