"use client";

import ShipmentTrackingBox from "@/components/Track/ShipmentTrackingBox";
import { ShipmentTrackingDetails } from "@/components/Track/ShipmentTrackingDetails";
import { useParams,  } from "next/navigation";


const ShipmentTrack = () => {
  const searchParams = useParams();
  const trackID = searchParams.trackID; 

  return <>
  <ShipmentTrackingBox />
  <ShipmentTrackingDetails trackID={trackID} />
  </>;
};

export default ShipmentTrack;
