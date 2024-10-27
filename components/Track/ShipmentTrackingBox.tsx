import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import React from 'react'
import { IoLocation } from 'react-icons/io5'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const ShipmentTrackingBox = () => {
  return (
    <div className=' container m-auto pt-24 pb-10'>
        <div className="w-full sm:w-auto p-5 shadow-3xl bg-white rounded-lg border-defult">
        <div className="w-full h-auto">
          
            <IsEnglish className="flex justify-center align-middle items-center gap-1 text-defult pb-4">
            <IoLocation className="w-6 h-6" />
            <h3 className="text-xl font-semibold">Track a shipment</h3>
            </IsEnglish>
            <IsBangla className="flex justify-center align-middle items-center gap-1 text-defult pb-3">
            <IoLocation className="w-6 h-6" />
            <h3 className="text-[25px] font-semibold bfont ">চালান ট্র্যাক</h3>
            </IsBangla>
          <form className="w-full h-auto pb-4" >
            <Input
              className=" border-defult text-[18px] h-auto py-2 rounded-br-none rounded-bl-none w-full"
              placeholder="Enter Tracking Number "
            />
           <IsEnglish className="">
           <Button type="submit" className="w-full h-auto bg-defult hover:bg-defult/90 text-white rounded-tl-none rounded-tr-none text-lg">
              Track
            </Button>

           </IsEnglish>
           <IsBangla className="">
           <Button type="submit" className="w-full h-auto bg-defult hover:bg-defult/90 text-white rounded-tl-none rounded-tr-none text-[22px] bfont">
           ট্র্যাক
            </Button>

           </IsBangla>

          </form>

        </div>
      </div>
    </div>
  )
}

export default ShipmentTrackingBox