import React from "react";

type ButtonProps = {
  handleClick?: () => void;
  handleClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickEventId?: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.handleClick}> Click</button>
      <button onClick={props.handleClickEvent}> Click Event</button>
      {/* <button onClick={(event) => props.handleClickEventId(event, 1)}> Click Event + Id</button> */}
      <br />
    </>
  );
};
