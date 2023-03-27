type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export default function CustomButton({
  variant,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
}
