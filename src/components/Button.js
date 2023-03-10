import React, {useState, useEffect, useCallback} from "react";

const Button = ({text, handleOnClick}) => {

  return (
    <div className="buttons">              
      <div className="container">
          <button onClick={async ()=>{handleOnClick()}}>
            <span>{text}</span>
          </button>
      </div>
    </div>
  )
}

export default Button;