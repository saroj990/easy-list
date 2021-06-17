import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import data from "./data/data";
import List from "./todo-list/List";

function App() {
  const [todos, setTodos] = useState(data);
  useEffect(() => {
    setTodos(data);
  }, []);
  // console.log("data: ", data);

  const onDragEnd = (result) => {
    // const { destination, source, draggableId } = result;
    // if (!destination) {
    //   return;
    // }

    // TODO:
    console.log(result);
  };

  return (
    <div className="App">
      <div> Welcome to the Easy List App</div>
      <DragDropContext onDragEnd={onDragEnd}>
        <List todos={todos} />
      </DragDropContext>
    </div>
  );
}

export default App;
