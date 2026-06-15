import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { HelpCircle } from "lucide-react";

export type IconName = keyof typeof LucideIcons;

export type IconProps = {
  icon: IconName;
} & LucideProps;

const Icon = ({ icon, ...props }: IconProps) => {
  const IconComponent = LucideIcons[icon] as React.FC<LucideProps>;

  if (!IconComponent) {
    return <HelpCircle {...props} />;
  }

  return <IconComponent {...props} className="stroke-[1.5px]" />;
};

export default Icon;
