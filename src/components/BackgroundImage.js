import React from "react";
import pic from '../images/ron.jpg'

const BackgroundImage = () => {
  return (
    <div >
      <img src={pic} alt='ron' className='background-image'/>
    </div>
  )
}

export default BackgroundImage