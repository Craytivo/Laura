import React from "react";
import { Button as HeroUIButton } from "@heroui/react";
import type { ButtonProps as HeroUIButtonProps } from "@heroui/react";

export interface ButtonProps
  extends Omit<
    HeroUIButtonProps,
    "className" | "color" | "isDisabled" | "onClick" | "type" | "variant"
  > {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "dark",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <HeroUIButton
      {...props}
      type={type}
      color="default"
      radius="lg"
      variant="solid"
      className={`button button-${variant} ${className}`.trim()}
      onClick={onClick}
      isDisabled={disabled}
    >
      {children}
    </HeroUIButton>
  );
}
