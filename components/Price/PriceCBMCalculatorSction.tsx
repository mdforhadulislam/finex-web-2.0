"use client";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";

const PriceCBMCalculatorSction = () => {
  const [weightCalculator, setWeightCalculator] = useState({
    width: "",
    height: "",
    length: "",
    acWeight: "",
  });
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [actualWeight, setActualWeight] = useState<number | string>("");
  const [cbmWeight, setCbmWeight] = useState<number | string>("");

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
          <Input
            placeholder="width in cm"
            value={weightCalculator.width}
            onChange={(e) =>
              setWeightCalculator({
                ...weightCalculator,
                width: e.target.value,
              })
            }
          />

          <Input
            placeholder="height in cm"
            value={weightCalculator.height}
            onChange={(e) =>
              setWeightCalculator({
                ...weightCalculator,
                height: e.target.value,
              })
            }
          />

          <Input
            placeholder="length in cm"
            value={weightCalculator.length}
            onChange={(e) =>
              setWeightCalculator({
                ...weightCalculator,
                length: e.target.value,
              })
            }
          />

          <Input
            placeholder="actual weight in kg"
            value={weightCalculator.acWeight}
            onChange={(e) =>
              setWeightCalculator({
                ...weightCalculator,
                acWeight: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Button
            className=" uppercase bg-defult hover:bg-defult/85"
            onClick={() => {
              const width = parseFloat(weightCalculator.width);
              const height = parseFloat(weightCalculator.height);
              const length = parseFloat(weightCalculator.length);
              const acWeight = parseFloat(weightCalculator.acWeight);
              const cbm = Math.round((width * height * length) / 5000 + 0.5);
              const weight = Math.max(cbm, acWeight);
              setActualWeight(weight);
              setCbmWeight(cbm);
              setIsOpenPopup(true);
            }}
          >
            Calculate weight
          </Button>
        </div>

        <AlertDialog open={isOpenPopup} onOpenChange={setIsOpenPopup}>
          <AlertDialogContent>
            <AlertDialogTitle></AlertDialogTitle>

            <AlertDialogDescription>
              <h1 className="text-xl font-bold pb-8 uppercase text-defult text-center">
                weight Calculator
              </h1>
              <Table className="">
                <TableBody>
                  <TableRow>
                    <TableCell>Actual Weight</TableCell>
                    <TableCell>{weightCalculator.acWeight} kg</TableCell>
                  </TableRow>

                  <TableRow className="broder-b">
                    <TableCell>CBM Weight</TableCell>
                    <TableCell>{cbmWeight} kg</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Price Counting Weight</TableCell>
                    <TableCell>{actualWeight} kg</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AlertDialogDescription>

            <AlertDialogFooter>
              <AlertDialogAction className="bg-defult hover:bg-defult/85">
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default PriceCBMCalculatorSction;
