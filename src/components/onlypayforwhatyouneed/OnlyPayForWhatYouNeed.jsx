import React from 'react'
import OPFWYN_LOGO from '../../assets/doug-limu-liberty-cruiser_size-888x592.webp';
import { Link } from 'react-router-dom';


const OnlyPayForWhatYouNeed = () => {
  return (
    <div className="grid grid-cols-2 h-[550px] border border-black items-center justify-items-center">
        <div className="flex items-center justify-center w-[480px] h-[352px] border border-black shadow-md shadow-black rounded-lg">

          <div className="w-[90%] h-[90%] border border-black">
            <p>You could save up to 12% when you buy customized car insurance online</p>
            <div className="flex gap-3 justify-center w-[100%] h-[100px] border border-black">
              <div className="flex justify-center items-center w-[90px] h-[95px] border border-black rounded-md"><p>Auto</p></div>
              <div className="flex justify-center items-center w-[90px] h-[95px] border border-black rounded-md"><p>Home</p></div>
              <div className="flex justify-center items-center w-[90px] h-[95px] border border-black rounded-md"><p>Condo</p></div>
              <div className="flex justify-center items-center w-[90px] h-[95px] border border-black rounded-md"><p>Renters</p></div>
            </div>
            <Link className="underline">See all our insurance products</Link>
            <div className="grid gap-2 justify-center items-center w-[100%] h-[70px] border border-black">
              <form>
                <input className="w-[40%] h-[80%] border border-gray-500" name='ZIP' type={'text'} placeholder='ZIP code'/>
                <button className="w-[40%] h-[80%] border border-gray-500">Get my price</button>
              </form>
            </div>
            <p className="text-center">Or call <a href='#'>1-800-295-2723</a> for a quote</p>
          </div>

        </div>
        <div className="w-[720px] h-[500px] border border-black"><img className='w-full h-full' src={OPFWYN_LOGO}/></div>
    </div>
  )
}

export default OnlyPayForWhatYouNeed