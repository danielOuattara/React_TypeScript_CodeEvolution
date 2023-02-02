type HeadingProps = {
  children: string | JSX.Element;
};

interface HeadingInterface {
  children: string | JSX.Element;
}

export const Heading = (props: HeadingProps) => {
  return <h3> {props.children}</h3>;
};

export const Heading2 = (props: HeadingInterface) => {
  return <h3> {props.children}</h3>;
};
