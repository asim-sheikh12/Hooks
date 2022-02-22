import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Input } from "antd";

export default function Ref() {
  const [value, setValue] = useState("");
  const input = useRef("");
  useEffect(() => {
    input.current = value;
  }, [value]);

  return (
    <div>
      <h2 className="h2">useRef Hook in React🚀</h2>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={input}
        style={{ width: "60%" }}
      /><br/><br/>
      <h2>Current Value: {value}</h2>
      <h2>Previous Value: {input.current}</h2>
    </div>
  );
}
