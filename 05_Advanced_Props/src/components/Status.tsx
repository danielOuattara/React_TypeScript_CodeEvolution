type StatusProps = {
  status: "loading" | "success" | "error";
  // only strings among --> 'loading' | 'success' | 'erorr
};

export const Status = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = "...loading";
  } else if (props.status === "success") {
    message = "Success";
  } else {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
};
