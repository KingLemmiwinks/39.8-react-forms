import React from "react";
import "./NewBoxForm.css";

function NewBoxForm({ formData, submitHandler, changeHandler }) {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="width">Box Width (in pixels):</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={changeHandler}
      />
      <label htmlFor="height">Box Height (in pixels):</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={changeHandler}
      />
      <label htmlFor="boxBackgroundColor">
        Box Background Color(hex code or valid css color name):
      </label>
      <input
        type="text"
        id="boxBackgroundColor"
        name="boxBackgroundColor"
        value={formData.boxBackgroundColor}
        onChange={changeHandler}
      />
      <button>Create Box</button>
    </form>
  );
}

export default NewBoxForm;
