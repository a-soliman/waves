import React from "react";
import FormField from "./FormField";
import Button from "./Button";

const Form = ({
  fields = [],
  onChangleHandler,
  onSubmitHandler,
  submitButtonTitle = "Submit"
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      {fields.map((field, i) => (
        <FormField key={i} field={field} onChangeHandler={onChangleHandler} />
      ))}

      <Button
        type="submitButton"
        title={submitButtonTitle}
        addStyles={{ width: "100%", textAlign: "center", border: "0" }}
      />
    </form>
  );
};

export default Form;
