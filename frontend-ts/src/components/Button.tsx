import type { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  "primary": "bg-primary text-white",
  "secondary": "bg-secondary text-primary",
};

const sizeStyles = {
  "sm": "py-1 px-2 text-sm rounded-sm",
  "md": "py-2 px-4 text-md rounded-md",
  "lg": "py-4 px-6 text-xl rounded-xl",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center cursor-pointer";

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} 
      {props.text}
      {props.endIcon}
    </button>
  );
}
