import React from 'react';
import towingTruck from '../../assets/towing.svg';

export const FileInsuranceClaim = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center border border-black">
        <div className="w-6/8 h-3/4 border border-black">
            <h1 className="mt-24 text-[44px] font-thin">Need to file an insurance claim?</h1>
            <p className=" mt-12 text-center">Just 5-10 minutes and the basic details gets you started.</p>
            <div className=" mt-5 flex flex-row justify-center gap-x-3">
                <button className="w-[250px] h-[40px] border border-black rounded-sm shadow-lg hover:bg-[#0F6179] hover:text-white">File a claim</button>
                <button  className="w-[250px] h-[40px] border border-black rounded-sm shadow-lg hover:bg-[#0F6179] hover:text-white">Manage your claim</button>
            </div>
            
        </div>
        <div className="w-1/3 h-3/4 border border-black"><img className="w-full h-full" src={towingTruck} alt="" /></div>
    </div>
  )
}
