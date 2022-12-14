import React from 'react'
import libertymutuallogo from '../../assets/libertymutuallogo.png'

const Banner = () => {
  return (
    <div className=" w-full h-[110px] bg-[#ffd000]">
        <img className="w-1/8 h-full ml-20 bg-[#ffd000]"  src={libertymutuallogo} alt="" />
    </div>
  )
}

export default Banner