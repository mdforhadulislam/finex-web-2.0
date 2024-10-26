"use client";

import ShipmentTrackingBox from "@/components/Track/ShipmentTrackingBox";
import { ShipmentTrackingDetails } from "@/components/Track/ShipmentTrackingDetails";
import { useParams,  } from "next/navigation";


const ShipmentTrack = () => {
  const searchParams = useParams();
  const trackID:any = searchParams.trackID; // e.g., "12345" from /shipment?trackID=12345

  return <>
  <ShipmentTrackingBox />
  <ShipmentTrackingDetails trackID={trackID} />
  </>;
};

export default ShipmentTrack;
