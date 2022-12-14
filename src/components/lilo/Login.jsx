import React from 'react';
import { Link } from 'react-router-dom';
import officialLogo from '../../assets/officialLogo.png'

export const Login = () => {
  return (
    <div className='w-full '>

        <div className="w-full grid grid-cols-2">
            

            <div className="w-[100%] h-[762px] border border-black">
            <img className=" w-1/3 p-8" src={officialLogo} alt=''/>
            <div className="w-2/3 h-3/4 border border-black">
                <form className="flex flex-col">
                    <h1 className="text-4xl ">Log In</h1>
                    <input className="w-2/3 h-[50px] border-2 border-gray-400 rounded-sm bg-[#E8F0FE] hover:border-[#28a3af]" name='email' type={'email'}/>
                    <input className="w-2/3 h-[50px] border-2 border-gray-400 rounded-sm bg-[#E8F0FE] hover:border-[#28a3af]" name='password' type={'password'}/>
                    <input className=" justify-start"type={'checkbox'}/>
                    <button className="w-2/3 h-[50px] border border-black rounded-sm bg-[#99e5ea]">Log in</button>
                </form>
                <p>By logging into eService you are agreeing to our <a>eService and Paperless Terms and Conditions </a>and consent to receive documents electronically.</p>
                <Link>Forgot your username/password?</Link>
                <br/>
                <Link>Create your account</Link>
                <br/>
                <Link>Business customer?</Link>
                <br/>
                <p>Protective Life customer? <Link>Access your policy here</Link></p>
            </div>
            </div>
            <div className="w-[100%] h-[762px] grid grid-col-1 justify-items-center items-center border border-black bg-[#EDFAFB]">
                <div className="w-[50%] h-2/3 border flex flex-col border-black bg-[#EDFAFB]">
                    <h1 className="bg-[#EDFAFB] text-5xl font-bold">Or, skip log in to...</h1>
                    <Link className="bg-[#EDFAFB] mt-10 text-[#007f8a] text-lg font-bold underline">Pay your bill online</Link>
                    <p className="bg-[#EDFAFB]">using your name and birthday</p>
                    <Link className="bg-[#EDFAFB] mt-10 text-[#007f8a] text-lg font-bold underline">File your auto claim</Link>
                    <p className="bg-[#EDFAFB]">Using your policy info and some basic info<br/>about the cause</p>
                </div>
            </div>
            
        </div>

    </div>
  )
}
