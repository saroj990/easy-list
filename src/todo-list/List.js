/* eslint-disable react/prop-types */
import React from "react";
import Column from "./Column";
// import PropTypes from 'prop-types'; // ES6

const List = (props) => {
  const { todos } = props;
  return todos.columnOrder.map((columnId) => {
    const column = todos.columns[columnId];
    const tasks = column.taskIds.map((taskId) => todos.tasks[taskId]);
    return <Column key={column.id} column={column} tasks={tasks} />;
  });
};

// List.propTypes = {
//   tasks: PropTypes.objectOf(PropTypes.symbol).isRequired,
//   co
// }

export default List;
