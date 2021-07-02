import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { IconNotes, IconDotsVertical, IconBell } from "@tabler/icons";

import data from "./data/data";
import Column from "./todo-list/Column";
// import List from "./todo-list/List";

function App() {
  const [todos, setTodos] = useState(data);
  useEffect(() => {
    setTodos(data);
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(todos.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newTodos = {
        ...todos,
        columnOrder: newColumnOrder,
      };
      setTodos(newTodos);
      return;
    }

    const start = todos.columns[source.droppableId];
    const finish = todos.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newTodos = {
        ...todos,
        columns: {
          ...todos.columns,
          [newColumn.id]: newColumn,
        },
      };
      setTodos(newTodos);
    } else {
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };
      const newTodos = {
        ...todos,
        columns: {
          ...todos.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      setTodos(newTodos);
    }
  };

  return (
    <div className="App">
      <nav className="flex h-16 items-center justify-between w-full border border-gray-200 mb-12 p-4">
        <div className="flex text-indigo-600">
          <IconNotes size={25} />
          <div className="font-bold">Easy List</div>
        </div>
        <div className="font-bold flex justify-center items-center">
          <div className="mx-4">
            <IconBell
              size={32}
              className="text-indigo-500 transform rotate-12"
            />
          </div>
          <div className="rounded-full p-2 border border-gray-400 text-indigo-500">
            SS
          </div>
          <div>
            <IconDotsVertical className="text-indigo-500" />
          </div>
        </div>
      </nav>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div
              className="flex"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.columnOrder.map((columnId, index) => {
                const column = todos.columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => todos.tasks[taskId]
                );
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
