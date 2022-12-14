import React from 'react'
import Banner from '../banner/Banner'

export const Logout = () => {
  return (
    <div>
        <Banner/>
        <div className="w-full h-[650px] grid grid-cols-2 items-center border border-black">
            <div className="h-2/3 border-r-2 flex justify-center items-center order-grey-300 border border-black">
                <div className="w-3/4 border  h-3/4 border-black">
                    <p className=" font-thin text-6xl">You've successfully<br/>logged out.</p>
                    <p className="mt-11">Log out by mistake? Log back in to your account<br/>below.</p>
                    <button className=" mt-7 w-2/3 h-[50px] font-semibold border border-black rounded-sm border-b-4 border-b-[#007f8a] bg-[#99e5ea] hover:bg-[#007f8a] hover:text-white">Log in</button>
                </div>
            </div>
            
            <div className="h-2/3 border-r-2 flex justify-center items-center border border-black">
                <div className="w-2/3 border  h-3/4 border-black">
                <p className=" font-thin text-4xl">Thanks for coming!</p>
                    <p className="mt-11">Were you able to complete your task or find the information you<br/>needed?</p>
                    <p className=" mt-7 mb-4">If you're still looking for answers, visit our FAQs page to learn more about updating your contact and policy information online, answer claims questions, discounts eligibility, and much more.</p>
                    <a className=" text-[#007f8a] hover:underline" href='#'>Take me to FAQs</a>
                </div>
            </div>
        </div>
    </div>
  )
}
