import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./index";

const TextInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputNumber max={30} onChange={handleChange} name="value" value={value} />
  );
};

const setup = () => {
  const { container } = render(<TextInput />);
  const input = container.querySelector(`input.form-control[name='value']`);

  return {
    input,
  };
};

test("Should able to change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).toBe("23");
});

test("Should not be able to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe("");
});
