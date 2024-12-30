"use client"
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog";

const PriceCBMCalculatorSction = () => {
  const [weightCalculator,setWeightCalculator] = useState({
    width:"",
    height:"",
    length:"",
    acWeight:"",
  })
  const [isOpenPopup,setIsOpenPopup] = useState(false)
  // const [actualWeight, setActualWeight] = useState("")

  return (
    <div className=" container m-auto p-4 py-14">
      <IsEnglish className="w-full h-auto flex justify-center align-middle items-center">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-defult text-center uppercase">
          weight Calculator
        </h1>
      </IsEnglish>
      <IsBangla className="w-full h-auto flex justify-center align-middle items-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-defult bfont text-center">
          ওজন ক্যালকুলেটর
        </h1>
      </IsBangla>

      <div className="w-full h-auto py-8 border mt-8 border-defult shadow-3xl rounded-lg  px-3 flex flex-col gap-4 justify-end items-end">
        <div className="w-full h-auto flex flex-col sm:flex-row items-center align-middle gap-4">
          <Input placeholder="width in cm" value={weightCalculator.width} onChange={(e)=>setWeightCalculator({...weightCalculator,width:e.target.value})} />

          <Input placeholder="height in cm" value={weightCalculator.height} onChange={(e)=>setWeightCalculator({...weightCalculator,height:e.target.value})}  />

          <Input placeholder="length in cm" value={weightCalculator.length} onChange={(e)=>setWeightCalculator({...weightCalculator,length:e.target.value})}  />

          <Input placeholder="actual weight in kg" value={weightCalculator.acWeight} onChange={(e)=>setWeightCalculator({...weightCalculator,acWeight:e.target.value})}  />
        </div>

        <div>
          <Button className=" uppercase bg-defult hover:bg-defult/85" onClick={()=>{





          }}>
            Calculate weight
          </Button>
        </div>


        <AlertDialog open={isOpenPopup} onOpenChange={setIsOpenPopup}>
          
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>


      </div>
    </div>
  );
};

export default PriceCBMCalculatorSction;
