import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <>
      <input type="text" value={props.value} onChange={props.handleChange} />
      <br />
      <input type="text" value={props.value} onChange={handleInputChange} />

      <input type="text" value={props.value} onChange={props.handleChange} />
    </>
  );
}
