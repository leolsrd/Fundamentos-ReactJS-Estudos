import TaskItem from "./TaskItem";
/* eslint-disable react/prop-types */

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div>
      <ul className="TaskList">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => onToggle(task.id)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
