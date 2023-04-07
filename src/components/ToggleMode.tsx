"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

type Props = {};

const ToggleMode = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <BsSunFill
        className={`${
          theme === "light" ? "hidden" : "object-contain h-8 w-8 cursor-pointer"
        }`}
        onClick={() => {
          setTheme("light");
        }}
      />
      <BsMoonFill
        className={`${
          theme === "dark" ? "hidden" : "object-contain h-8 w-8 cursor-pointer"
        }`}
        onClick={() => {
          setTheme("dark");
        }}
      />
    </div>
  );
};

export default ToggleMode;
