import Link from 'next/link';
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className=" container p-2 flex flex-col-reverse md:flex-row justify-center align-middle items-center h-full m-auto py-14 pt-28">
      <div className="w-full md:w-[60%] lg:w-[50%] text-center flex md:block md:text-left justify-center align-middle items-center flex-col ">
        <h1 className="text-2xl md:text-3xl font-semibold text-defult mb-2">
          404. Error occured.
        </h1>
        <h1 className="text-2xl md:text-3xl font-semibold text-defult">
          Woops. Looks like this page doesn’t exist.
        </h1>
        <div className="w-full h-auto flex gap-4 pt-3 justify-center md:justify-start">
          <Link
            href={"/"}
            className="items-center   py-2 px-3 bg-defult  rounded-lg  text-white shadow-3xl  focus:outline-none"
          >
            back to home
          </Link>
          <Link
            href={"/contact"}
            className="items-center   py-2 px-5 bg-defult  rounded-lg  text-white shadow-3xl  focus:outline-none"
          >
            contact us
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[40%] lg:w-[50%] flex justify-center align-middle items-center">
        <h1 className="text-[120px] md:text-[130px] font-bold text-defult">
          404
        </h1>
      </div>
    </div>
  );
};


export default NotFoundPage