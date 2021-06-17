/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = (props) => {
  const { id, task, index } = props;
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          key={id}
          className="p-2 m-2 h-auto bg-blue-200 shadow-lg text-center rounded-md border border-black flex items-center justify-center"
        >
          <div>{task.content}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
