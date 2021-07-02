/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";

const Column = (props) => {
  const { column, tasks, index } = props;
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided1) => (
        <div
          className="border border-indigo-200 bg-white mx-4 py-4 rounded-md shadow-2xl"
          {...provided1.draggableProps}
          ref={provided1.innerRef}
        >
          <div
            {...provided1.dragHandleProps}
            className="text-center text-lg font-bold text-blue-500"
          >
            {column.title}
          </div>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
                className={`min-h-400 min-w-250 p-4 h-auto ${
                  snapshot.isDraggingOver ? "bg-indigo-100" : "bg-white"
                }`}
              >
                {tasks.map((task, idx) => (
                  <Task key={task.id} task={task} index={idx} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
export default Column;
