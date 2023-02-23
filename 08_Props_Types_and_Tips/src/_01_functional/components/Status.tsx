type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  const status = props.status;
  let message;

  if (status === "loading") {
    message = "...loading";
  } else if (status === "success") {
    message = "success";
  } else {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
