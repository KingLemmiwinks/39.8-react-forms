import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function BoxList() {
  const INITIAL_STATE = {
    width: "",
    height: "",
    boxBackgroundColor: "",
  };
  const [boxesArr, setBoxesArr] = useState([]);
  const [formData, setFormData] = useState(INITIAL_STATE);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let newBox = { ...formData };
    setBoxesArr((oldBoxesArr) => [...oldBoxesArr, newBox]);
    setFormData(INITIAL_STATE);
  };

  const removeBox = (idx) => {
    setBoxesArr((oldBoxesArr) => {
      let newBoxesArr = [...oldBoxesArr];
      newBoxesArr.splice(idx, 1);
      return newBoxesArr;
    });
  };

  return (
    <div className="box-form">
      <h3>Color Boxes!</h3>
      <p>Enter box parameters to generate a box</p>
      <NewBoxForm
        formData={formData}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
      {boxesArr.map((box, idx) => (
        <Box
          idx={idx}
          removeBox={removeBox}
          width={box.width}
          height={box.height}
          boxBackgroundColor={box.boxBackgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;