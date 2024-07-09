import "./Kanban.css";
import Column from "./Column";

const KanbanManage = () => {
  return (
    <div className="kanban">
      <Column status="PLANNED" />
      <Column status="ONGOING" />
      <Column status="DONE" />
    </div>
  );
};
export default KanbanManage;
