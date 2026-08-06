import React, { memo } from 'react'

const Child = (props) => {
  console.log("hehehe");
  
  // console.log(props.check);
  // console.log(props.text)
  
  return (
    <div>
      {/* {props.check} */}
    </div>
  )
}

export default memo(Child)
