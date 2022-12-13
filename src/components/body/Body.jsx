import React from 'react'
import OnlyPayForWhatYouNeed from '../onlypayforwhatyouneed/OnlyPayForWhatYouNeed'

export const Body = () => {
  return (
    <div className="grid grid-rows-4">
            <OnlyPayForWhatYouNeed/>
            <div className="h-[400px] border border-black"></div>
            <div className="h-[400px] border border-black"></div>
            <div className="h-[400px] border border-black"></div>
    </div>
  )
}
