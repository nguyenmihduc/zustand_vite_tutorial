import "./Task.css";
import classNames from "classnames";
import { useKanBanStore } from "../../../store/kanban-store";
import trashIcon from "../../../assets/icon-trash.svg";
// import { useEffect } from "react";

const Task = ({ title }: { title: string }) => {
  const task = useKanBanStore((state) =>
    state.tasks.find((task) => task.title === title),
  );
  const deleteTask = useKanBanStore((state) => state.deleteTask);
  const setDraggedTask = useKanBanStore((state) => state.setDraggedTask);

  const handleOnDragStart = (taskId: string) => {
    setDraggedTask(taskId);
  };

  return (
    <div
      className="task"
      draggable
      onDragStart={() => handleOnDragStart(task?.id as string)}
    >
      <div>{task?.title}</div>
      <div className="bottomWrapper">
        <div>
          <img
            src={trashIcon}
            onClick={() => deleteTask(task?.id as string)}
            alt="Delete"
          />
        </div>
        <div className={classNames("status", task?.status)}>{task?.status}</div>
      </div>
    </div>
  );
};

export default Task;
