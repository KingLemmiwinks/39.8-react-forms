import React from "react";
import "./TodoItem.css";

function TodoItem({
  item = { todo: "Example Todo", isComplete: false },
  idx = 1,
  completeTodo,
  deleteTodo,
}) {
  return (
    <div className="todo-item" id={idx}>
      <button type="button" className="complete-btn" onClick={completeTodo}>
        {item.isComplete ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <p className={item.isComplete ? "complete" : "incomplete"}>{item.todo}</p>
      <button type="button" className="delete-btn" onClick={deleteTodo}>
        Remove X
      </button>
    </div>
  );
}

export default TodoItem;
