import { useEffect, useState } from "react";
import "./styles.css";
import useMounted from "./useMounted";

export default function ChildA() {
  console.log("1. CHİLD A");

  useEffect(() => {
    console.log("CHİLD A useEffect");
  }, []);
  console.log("2. CHİLD A");

  return (
    <div>
      <h1>CHİLD A</h1>
    </div>
  );
}
