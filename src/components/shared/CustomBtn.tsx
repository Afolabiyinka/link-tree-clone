import React from "react";
import * as LucideIcon from "lucide-react";
import { buttonVariants, Button as ShadButton } from "../ui/button";

import type { VariantProps } from "class-variance-authority";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
interface ButtonProps {
  text: string;
  startIcon: keyof typeof LucideIcon;
  onclick?: () => void;
  variant?: ButtonVariantProps["variant"];
}
const CustomBtn = ({ startIcon, text, onclick, variant }: ButtonProps) => {
  const IconComponent = LucideIcon[startIcon] as React.FC<
    React.SVGProps<SVGSVGElement>
  >;
  return (
    <ShadButton
      size={`lg`}
      onClick={onclick}
      variant={variant}
      className="cursor-pointer"
    >
      {startIcon && <IconComponent className="h-4 w-4" />}
      <span>{text}</span>
    </ShadButton>
  );
};

export default CustomBtn;
