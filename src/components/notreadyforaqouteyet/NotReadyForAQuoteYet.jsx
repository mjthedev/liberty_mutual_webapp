import React from 'react'
import { Link } from 'react-router-dom'
export const NotReadyForAQuoteYet = () => {
  return (
    <div className="h-[580px] border border-black">
        <h1 className="text-center mt-24 text-5xl">Not ready for a quote yet?</h1>
        <p className="text-center mt-9 text-l">Here are some options to get started.</p>
        <div className="w-[80%] mt-7 flex flex-row shadow-sm shadow-black border border-red-500">
            <div className="w-3/4 h-[325px] flex flex-col items-center border border-black">
                <div className="w-[80px] h-20 mt-[60px]  justify-self-center border border-black"></div>
                <Link className="text-center text-2xl font-bold text-[#06748c] mt-[35px]" href='#'>Car insurance coverage<br/> calculator</Link>
                <p className="text-center mt-[30px]">Get an idea of what kind of auto coverage may<br/> be right for you. No contact info necessary.</p>
            </div>
            <div className="w-3/4 h-[325px] flex flex-col items-center border border-black">
                <div className="w-[80px] h-20 mt-[60px]  justify-self-center border border-black"></div>
                <Link className="text-center text-2xl font-bold text-[#06748c] mt-[35px]" href='#'>Car insurance coverage<br/> calculator</Link>
                <p className="text-center mt-[30px]">Get an idea of what kind of auto coverage may<br/> be right for you. No contact info necessary.</p>
            </div>
            <div className="w-3/4 h-[325px] flex flex-col items-center border border-black">
                <div className="w-[80px] h-20 mt-[60px]  justify-self-center border border-black"></div>
                <Link className="text-center text-2xl font-bold text-[#06748c] mt-[35px]" href='#'>Car insurance coverage<br/> calculator</Link>
                <p className="text-center mt-[30px]">Get an idea of what kind of auto coverage may<br/> be right for you. No contact info necessary.</p>
            </div>
        </div>
    </div>
  )
}
