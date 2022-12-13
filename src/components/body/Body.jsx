import React from 'react'
import { NotReadyForAQuoteYet } from '../notreadyforaqouteyet/NotReadyForAQuoteYet'
import OnlyPayForWhatYouNeed from '../onlypayforwhatyouneed/OnlyPayForWhatYouNeed'

export const Body = () => {
  return (
    <div className="grid grid-rows-4">
            <OnlyPayForWhatYouNeed/>
            <NotReadyForAQuoteYet/>
            <div className="h-[400px] border border-black"></div>
            <div className="h-[400px] border border-black"></div>
    </div>
  )
}
