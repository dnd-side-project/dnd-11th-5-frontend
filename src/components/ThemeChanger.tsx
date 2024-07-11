"use client";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="flex flex-col gap-2">
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>
    </>
  );
};

export default ThemeChanger;
