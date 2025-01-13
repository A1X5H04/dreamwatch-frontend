"use client";
import { useContext } from "react";
import DisplayContext from "./State/Context";

export default function Section({ children, ...props }) {
  const display = useContext(DisplayContext);

  return (
    <section
      className={display.show ? "bg-[#E5EBF1]" : "bg-[#0B1622]"}
      {...props}
    >
      {children}
    </section>
  );
}
