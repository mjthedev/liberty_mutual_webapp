import React from "react";
import { Link } from "react-router-dom";
import officialLogo from "../../assets/officialLogo.png";

export const Login = () => {
  return (
    <div className="w-full ">
      <div className="w-full grid grid-cols-2">
        <div className="w-[100%] h-[762px] border border-black">
          <img className=" w-1/3 p-8" src={officialLogo} alt="" />
          <div className="w-full h-[4/6] flex flex-col justify-center items-center border border-red-400 ">
            <div className="w-2/3 h-5/6 border border-black">
              <form className="flex flex-col">
                <h1 className="text-4xl ">Log In</h1>
                <input
                  className="w-2/3 h-[50px] border-2 mt-9 border-gray-400 rounded-sm bg-[#E8F0FE] hover:border-[#28a3af]"
                  name="email"
                  type={"email"}
                />
                <input
                  className="w-2/3 h-[50px] border-2 mt-4 border-gray-400 rounded-sm bg-[#E8F0FE] hover:border-[#28a3af]"
                  name="password"
                  type={"password"}
                />
                <input className=" mt-2" type={"checkbox"} />
                <button className=" mt-7 w-2/3 h-[50px] border border-black rounded-sm bg-[#99e5ea] hover:bg-[#007f8a] hover:text-white">
                  Log in
                </button>
              </form>
              <p className="mt-6">
                By logging into eService you are agreeing to our <br />{" "}
                <Link className="text-[#007f8a] underline">
                  eService and Paperless Terms and Conditions{" "}
                </Link>
                and
                <br /> consent to receive documents electronically.
              </p>
              <p className="mt-8 text-[#007f8a] underline">
              <Link >
                Forgot your username/password?
              </Link>
              </p>
              <br />
              <p className=" mt-1 text-[#007f8a] underline">
              <Link>
                Create your account
              </Link>
              </p>
              
              <br/>
              <hr></hr>
              <p className="mt-4 text-[#007f8a] underline">
              <Link className="">
                Business customer?
              </Link>
              </p>
              <br/>
              <p className="text-sm">
                Protective Life customer?{" "}
                <Link className="text-[#007f8a] underline">
                  Access your policy here
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[762px] grid grid-col-1 justify-items-center items-center border border-black bg-[#EDFAFB]">
            
          <div className="w-[50%] h-1/2 border flex flex-col border-black bg-[#EDFAFB]">
            <h1 className="bg-[#EDFAFB] text-5xl font-bold">
              Or, skip log in to...
            </h1>
            <Link className="bg-[#EDFAFB] mt-10 text-[#007f8a] text-lg font-bold underline">
              Pay your bill online
            </Link>
            <p className="bg-[#EDFAFB]">using your name and birthday</p>
            <Link className="bg-[#EDFAFB] mt-10 text-[#007f8a] text-lg font-bold underline">
              File your auto claim
            </Link>
            <p className="bg-[#EDFAFB]">
              Using your policy info and some basic info
              <br />
              about the cause
            </p>
          </div>
        </div>
      </div>

      <div className="h-[350px] flex justify-center border border-black">
            <div className="w-2/3 h-full border border-black p-9">
                <hr></hr>
                <h1 className="text-xl font-bold mb-10">I filed a claim against a Liberty Mutual or Safeco customer</h1>
                <p className="text-lg">Did you file a claim against a Liberty Mutual or Safeco customer?</p>
                <ul className=" p-5">
                    <li className=" list-disc mt-3">If you created an account <strong>before September 13, 2021,</strong> log in above.</li>
                    <li className=" list-disc mb-8">If you created an account on or <strong>after September 13, 2021,</strong> <Link className="text-[#007f8a] underline">log in here.</Link></li>
                </ul>
                <p className="text-lg">If you don't have an account, create one <Link className="text-[#007f8a] underline">here.</Link></p>
                <hr></hr>
            </div>
      </div>


      <div className="h-[140px] bg-[#26477a] grid grid-row-2">
        <div className="bg-[#26477a] flex ">
        <Link className=" mr-8  ml-28 bg-[#26477a] text-white hover:underline">Privacy Policy</Link>
        <Link className=" mr-8 bg-[#26477a] text-white hover:underline">Security Policy</Link>
        <Link className=" mr-8 bg-[#26477a] text-white hover:underline">Terms & Conditions</Link>
        <Link className=" mr-8 bg-[#26477a] text-white hover:underline">Fraud Protection</Link>
        <Link className=" mr-8 bg-[#26477a] text-white hover:underline">eService Paperless Terms & Conditions</Link>
        </div>

        
            <p className="ml-28 bg-[#26477a] text-white">© 2022 Liberty Mutual Insurance Company, 175 Berkeley Street, Boston, MA 02116</p>
        
      </div>

      <div className="h-[140px] flex flex-col"></div>
    </div>


  );
};
