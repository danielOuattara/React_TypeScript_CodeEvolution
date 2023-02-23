type DanielProps = {
  children: React.ReactNode; // <-- for a React component
};

export const Daniel = (props: DanielProps) => {
  return <h2>{props.children}</h2>;
};
