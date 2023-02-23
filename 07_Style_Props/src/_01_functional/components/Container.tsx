type CSSProps = {
  styles: React.CSSProperties;
};

export const Container = (props: CSSProps) => {
  return <div style={props.styles}>Text content goes here</div>;
};
