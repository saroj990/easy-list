/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = (props) => {
  const { column, tasks } = props;
  return (
    <div className="max-w-xs m-1 p-1 rounded-md border border-indigo-600">
      <div className="text-center text-lg font-normal">{column.title}</div>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
export default Column;
