import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const OurTeamMemberSection = () => {
  return (
    <div
    className="w-full h-auto bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(/bg.png)` }}
  >
    {/* Inner container with padding and alignment */}
    <div className="lg:container h-auto m-auto sm:p-2 p-4 py-20 sm:py-24">
      {/* English heading */}
      <IsEnglish className="">
        <h1 className="font-bold text-3xl sm:text-5xl text-white">
          OUR TEAM MEMBER
        </h1>
      </IsEnglish>

      {/* Bangla heading */}
      <IsBangla className="">
        <h1 className="font-bold text-5xl sm:text-6xl text-white bfont">
        আমাদের সদস্য
        </h1>
      </IsBangla>

      {/* English breadcrumb navigation */}
      <IsEnglish className="">
        <span className="flex flex-row items-center align-middle justify-start text-[16px] sm:text-[20px] gap-[2px] sm:gap-2 font-normal py-2 text-white">
          <Link href={"/"}>HOME</Link>
          <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
          <Link href={"/"}>ABOUT</Link>
          <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
          <Link href={"/about/our-team-member"}>OUR TEAM MEMBER</Link>
        </span>
      </IsEnglish>

      {/* Bangla breadcrumb navigation */}
      <IsBangla className="">
        <span className="flex flex-row items-center align-middle justify-start gap-[2px] sm:gap-2 font-normal py-2 text-white">
          <Link href={"/"} className="bfont text-xl sm:text-3xl">
            হোম
          </Link>
          <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
          <Link href={"/"} className="bfont text-xl sm:text-3xl">
            আমাদের সম্পর্কে
          </Link>
          <FaChevronRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
          <Link
            href={"/about/our-team-member"}
            className="bfont text-xl sm:text-3xl"
          >
            আমাদের সদস্য
          </Link>
        </span>
      </IsBangla>
    </div>
  </div>
  )
}

export default OurTeamMemberSection