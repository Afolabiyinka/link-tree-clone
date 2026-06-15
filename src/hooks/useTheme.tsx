"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    document.body.classList.remove("light", "dark");
    document.body.classList.add(appliedTheme);
  }, [theme, setTheme]);

  localStorage.setItem("theme", theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    setTheme(storedTheme);
  }, []);
  return {
    setTheme,
    theme,
  };
};
