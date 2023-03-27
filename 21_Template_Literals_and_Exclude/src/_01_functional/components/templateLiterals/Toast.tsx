/**
 *
 *  Position prop cab be one of :
 *  "left-center" | " left-top" | "left-bottom" |
 *  "center" | "center-top" | "center-bottom" |
 *  "right-center" | right-top | right-bottom
 *
 *  */

type HorizontalPositionType = "left" | "center" | "right";
type VerticalPositionType = "top" | "center" | "bottom";
type ToastPropsType = {
  position:
    | Exclude<
        `${HorizontalPositionType}-${VerticalPositionType}`,
        "center-center"
      >
    | "center";
};

export function Toast({ position }: ToastPropsType) {
  return <div>Toast Notification position - {position}</div>;
}
