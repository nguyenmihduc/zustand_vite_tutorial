import "./Task.css";
import classNames from "classnames";
import { useKanBanStore } from "../../../store/kanban-store";

const Task = ({ title }: { title: string }) => {
  const task = useKanBanStore((state) =>
    state.tasks.find((task) => task.title === title),
  );

  const deleteTask = useKanBanStore((state) => state.deleteTask);

  return (
    <div className="task">
      <div>{task?.title}</div>
      <div className="bottomWrapper">
        {/*<div>*/}
        <button onClick={() => deleteTask(task?.id as string)}>Delete</button>
        {/*</div>*/}
        <div className={classNames("status", task?.status)}>{task?.status}</div>
      </div>
    </div>
  );
};

export default Task;
