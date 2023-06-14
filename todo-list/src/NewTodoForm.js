import React from "react";
import "./NewTodoForm.css";

function NewTodoForm({ formData, changeHandler, submitHandler }) {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">What needs to be done?</label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={formData.todo}
        onChange={changeHandler}
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
}

export default NewTodoForm;
