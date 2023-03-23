type ButtonProps = {
  onClick?: () => void;
  handleClick?: () => void;
  handleClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickEventId?: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => void;
};

export default function ButtonComponent(props: ButtonProps) {
  return (
    <>
      {props.onClick && <button onClick={props.onClick}>Hello React</button>}

      <br />

      {props.handleClick && (
        <button onClick={props.handleClick}> hello TypeScript</button>
      )}

      <br />

      {props.handleClickEvent && (
        <button onClick={props.handleClickEvent}> Click Event</button>
      )}

      <br />

      {props.handleClickEventId && (
        <button onClick={(event) => props.handleClickEventId!(event, 1)}>
          Click Event + Id
        </button>
      )}

      <br />
    </>
  );
}
