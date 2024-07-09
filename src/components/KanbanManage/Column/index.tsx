import "./Column.css";
import Task from "../Task";
import { TaskItem, useKanBanSelector } from "../../../store/kanban-store";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Column = ({ status }: { status: string }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const tasks = useKanBanSelector.use
    .tasks()
    .filter((task: TaskItem) => task.status === status);
  const addTask = useKanBanSelector.use.addTask();
  const newUuid = uuidv4();

  const handleSubmit = (id: string, title: string, status: string) => {
    if (title.trim() === "") {
      return;
    }
    addTask(id, title, status);
    setText("");
    setOpen(false);
  };

  const handleCancel = () => {
    setText("");
    setOpen(false);
  };

  return (
    <div className="column">
      <div className="titleWrapper">
        <p> {status}</p>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Add
        </button>
      </div>

      {tasks.map((task: TaskItem) => (
        <Task title={task.title} key={task.id} />
      ))}

      {open && (
        <div className="modal">
          <div className="modalContent">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={() => handleSubmit(newUuid, text, status)}>
              Submit
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Column;
