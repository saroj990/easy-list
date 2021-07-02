/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { Draggable } from "react-beautiful-dnd";
// import classNames from "classnames";

const Task = (props) => {
  const { id, task, index } = props;
  return (
    <Draggable
      draggableId={task.id}
      index={index}
      isDragDisabled={task.id === "task-1"}
    >
      {(provided, snapshot) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          key={id}
          isDragging={snapshot.isDragging}
          className={`p-2 m-2 h-auto shadow-lg text-center rounded-md border border-black flex items-center justify-center ${
            snapshot.isDragging ? "bg-green-100" : "bg-blue-100"
          }`}
        >
          <div>{task.content}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
