/* eslint-disable react/prop-types */

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div>
      <li className="TaskItem">
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
          onClick={onToggle}
        >
          {task.text}
        </span>
        <button onClick={onDelete}>Deletar</button>
      </li>
    </div>
  );
}

export default TaskItem;
