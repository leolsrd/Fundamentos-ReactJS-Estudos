import PropTypes from "prop-types";

function Task({ task, onComplete }) {
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => onComplete(task.id)}>Marcar como concluída</button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.int.isRequired,
      text: PropTypes.string,
      // onComplete: PropTypes.bool,
    })
  ),
  onComplete: PropTypes.bool,
};

export default Task;
