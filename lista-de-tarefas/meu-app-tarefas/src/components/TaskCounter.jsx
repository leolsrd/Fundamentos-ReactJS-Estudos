/* eslint-disable react/prop-types */

function TaskCounter({ tasks }) {
  const pedingTasks = tasks.filter((task) => !task.completed).length;

  return <p>Você tem {pedingTasks} tarefas pendentes!</p>;
}

export default TaskCounter;
