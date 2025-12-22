import type { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullwidth?: boolean;
  loading?: boolean;
}

const variantStyles = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-primary",
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm rounded-sm",
  md: "py-2 px-4 text-md rounded-md",
  lg: "py-4 px-6 text-xl rounded-xl",
};

const defaultStyles =
  "px-4 py-3 rounded-xl font-light flex items-center text-xl";

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        props.size ? sizeStyles[props.size] : ""
      } ${props.fullwidth ? " w-full flex justify-center items-center" : ""} ${
        props.loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={props.loading}
    >
      <div className="pr-2">{props.startIcon}</div>
      {props.text}
      {props.endIcon}
    </button>
  );
}
