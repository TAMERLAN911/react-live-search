import React from "react";
import style from "./form.module.css";

const Form = (props) => {
  return (
    <>
      <form>
        <input
          onChange={(e) => props.setText(e.target.value)}
          type="text"
          className={style.input}
          
        />
      </form>
    </>
  );
};

export default Form;
