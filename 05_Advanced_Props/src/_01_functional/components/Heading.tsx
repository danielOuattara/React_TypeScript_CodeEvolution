type HeadingProps = {
  children: string | JSX.Element | React.ReactNode;
};

interface HeadingInterface {
  children: string | JSX.Element | React.ReactNode;
}

export const Heading = (props: HeadingProps) => {
  return <h3> {props.children}</h3>;
};

export const Heading2 = (props: HeadingInterface) => {
  return <h3> {props.children}</h3>;
};
