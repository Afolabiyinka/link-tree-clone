"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Theme, useTheme } from "@/hooks/useTheme";
import Icon, { IconName } from "./Icon";

const Themetoggle = () => {
  const { setTheme, theme } = useTheme();

  const options = [
    { label: "Light", value: "light", icon: "Sun" },
    { label: "Dark", value: "dark", icon: "Moon" },
    { label: "System", value: "system", icon: "Laptop" },
  ];

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg font-semibold">Theme</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Choose how the app looks and feels
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        {options.map((opt) => {
          const active = theme === opt.value;

          return (
            <button
              key={opt.value}
              onClick={() => setTheme(opt.value as Theme)}
              className={`
                w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl
                transition-all duration-200
                
                ${
                  active
                    ? "bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
                    : "bg-transparent border-transparent hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Icon icon={opt.icon as IconName} />
                <span className="text-sm font-medium">{opt.label}</span>
              </div>

              {active && (
                <span className="text-xs px-2 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black">
                  Active
                </span>
              )}
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Themetoggle;
