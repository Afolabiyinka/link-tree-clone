"use client";
import Icon from "@/components/shared/Icon";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import * as LucideIcon from "lucide-react";
import { useState } from "react";

interface Props {
  icon: keyof typeof LucideIcon;
  placeholder: string;
  type: "email" | "password" | "text" | "number";
}

const CustomInput = ({ icon, placeholder, type }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <InputGroup>
      <InputGroupAddon>
        <Icon icon={icon} className="size-5" />
      </InputGroupAddon>

      <InputGroupInput
        placeholder={placeholder}
        type={isPassword && showPassword ? "text" : type}
      />

      {isPassword && (
        <InputGroupAddon
          align="inline-end"
          onClick={() => setShowPassword((prev) => !prev)}
          className="cursor-pointer"
        >
          <Icon icon={showPassword ? "EyeOff" : "Eye"} className="size-5" />
        </InputGroupAddon>
      )}
    </InputGroup>
  );
};

export default CustomInput;
