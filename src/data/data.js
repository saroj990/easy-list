const data = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out Garbage" },
    "task-2": { id: "task-2", content: "Bring some milk" },
    "task-3": { id: "task-3", content: "Go to gym" },
    "task-4": { id: "task-4", content: "Atttend the meeting" },
    "task-5": { id: "task-5", content: "Call mom" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};

export default data;
