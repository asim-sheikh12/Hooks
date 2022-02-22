import React, { useState, useMemo, useCallback } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import Callback from "./Callback";
export default function Memo() {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(100);
  const [call, setCall] = useState(1);

  const memoriseValue = useMemo(
    function Count() {
      console.log("Only Called when Increment Button is Clicked");
    },
    [inc]
  )
  ;

  const memorisedCall = useCallback(() => {
    console.log("Callback Button");
    return setCall((inc) => inc * 5);
  }, [inc, setInc]);

  function decrementCounter() {
    console.log("Decrement");
    return setDec(dec - 1);
  }

  return (
    <div>
      <h2 className="h1"><i>useMemo & useCallback Hooks in React🚀</i></h2>
      <div className="mainBody">
      <div className="increment">
      <h3>Increment ➮ {inc}</h3>
      <Button className="Button"
        type="primary"
        onClick={() => {
          setInc(inc + 1);
        }}
      >
        Increment 
      </Button><br/><br/>
      </div>
      <div className="decrement">
      <h3>Decrement  ➮ {dec}</h3>
      <Button className="Button" type="primary" onClick={decrementCounter}>
        Decrement 
      </Button><br/><br/>
      </div>
      <div className="multi">
      <h3>Multiplied Value  ➮  {call}</h3>
      <Callback multi={memorisedCall}/>
      </div>
      <div>{memoriseValue}</div><br/><br/>
      </div>
    </div>
  );
}
