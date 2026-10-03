import React from "react";
import { Button as HeroUIButton } from "@heroui/react";

export function Button({ children, variant="dark", className="", onClick, type="button", disabled=false, ...props }) {
  const color = variant === "light" ? "default" : "default";
  return (
    <HeroUIButton
      type={type}
      color={color}
      radius="lg"
      variant="solid"
      className={`button button-${variant} ${className}`.trim()}
      onClick={onClick}
      isDisabled={disabled}
      {...props}
    >
      {children}
    </HeroUIButton>
  );
}
