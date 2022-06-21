type HeadingProps = {
  children: string | JSX.Element;
};

export const Heading = (props: HeadingProps) => {
  return <h3> {props.children}</h3>;
};
