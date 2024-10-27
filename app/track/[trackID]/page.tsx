"use client";

import ShipmentTrackingBox from "@/components/Track/ShipmentTrackingBox";
import { ShipmentTrackingDetails } from "@/components/Track/ShipmentTrackingDetails";
import { useParams } from "next/navigation";

const ShipmentTrack = () => {
  const searchParams = useParams();
  const trackID = Array.isArray(searchParams.trackID) ? searchParams.trackID[0] : searchParams.trackID;

  return (
    <div className="px-2">
      <ShipmentTrackingBox />
      <ShipmentTrackingDetails trackID={trackID} />
    </div>
  );
};
export default ShipmentTrack;
