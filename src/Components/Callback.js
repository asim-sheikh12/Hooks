import { Button } from 'antd'
import React from 'react'

 function Callback({multi}) {
  //  console.log("Callback Button 2");
    console.log("Callback Component")
  return (
    <div>
        <Button className="Button" type="primary" onClick={multi}>Multiply</Button>
    </div>
  )
}
export default React.memo(Callback)