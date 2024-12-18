import React from 'react'
import PriceCalCulatorSection from './PriceCalCulatorSection'
import PriceSubscriptionSection from './PriceSubscriptionSection'
import PriceCBMCalculatorSction from './PriceCBMCalculatorSction'

const PriceBodySection = () => {
  return (
    <div className=' w-full p-2 sm:container h-auto m-auto'>
        <PriceCalCulatorSection />
        <PriceSubscriptionSection />
        <PriceCBMCalculatorSction />
    </div>
  )
}

export default PriceBodySection