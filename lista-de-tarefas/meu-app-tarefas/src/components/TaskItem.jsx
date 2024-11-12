/* eslint-disable react/prop-types */

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        onClick={onToggle}
      >
        {task.text}
      </span>
      <button onClick={onDelete}>Deletar</button>
    </li>
  );
}

export default TaskItem;
