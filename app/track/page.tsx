import ShipmentTrackingBox from '@/components/Track/ShipmentTrackingBox'
import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const UserTrackSearchBook = () => {
  return (
<>
    <div
    className="w-full h-auto bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(/bg.png)` }}
  >
    {/* Inner container with padding and alignment */}
    <div className="lg:container h-auto m-auto sm:p-2 p-4 pb-10 sm:pb-8 py-20 sm:py-24">
      {/* English heading */}
      <IsEnglish className="">
        <h1 className="font-bold text-3xl sm:text-5xl text-white">
        SHIPPMENT TRACK
        </h1>
      </IsEnglish>

      {/* Bangla heading */}
      <IsBangla className="">
        <h1 className="font-bold text-5xl sm:text-6xl text-white bfont">
        শিপমেন্ট ট্র্যাক
        </h1>
      </IsBangla>

      {/* English breadcrumb navigation */}
      <IsEnglish className="">
        <span className="flex flex-row items-center align-middle justify-start text-[16px] sm:text-[20px] gap-[2px] sm:gap-2 font-normal py-2 text-white">
          <Link href={"/"}>HOME</Link>
          <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
          <Link href={"/"}>SHIPPMENT TRACK</Link>
        </span>
      </IsEnglish>

      {/* Bangla breadcrumb navigation */}
      <IsBangla className="">
        <span className="flex flex-row items-center align-middle justify-start gap-[2px] sm:gap-2 font-normal py-2 text-white">
          <Link href={"/"} className="bfont text-xl sm:text-3xl">
            হোম
          </Link>
          <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
          <Link
            href={"/about/why-finex"}
            className="bfont text-xl sm:text-3xl"
          >
             শিপমেন্ট ট্র্যাক
          </Link>
        </span>
      </IsBangla>
    </div>
  </div>
        <ShipmentTrackingBox isTrackPage={true} />
        </>
  )
}

export default UserTrackSearchBook