import React from "react";

interface Item {
  checkpoint_delivery_status?: string;
  checkpoint_date?: Date;
}

const isValidDate = (dateString: string) => {
  const date = new Date(dateString);
  return !isNaN(date.getTime()); // Check if date is valid
};

const ShipmentTrackParcelLocationBox: React.FC<{ item: Item | null }> = ({ item }) => {
  return (
    <div className="w-full h-auto grid grid-cols-12">
      {item ? (
        <>
          <div className="col-start-1 col-end-3 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1  bg-defult pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full  bg-defult shadow text-center">
              <i className="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div className=" bg-defult col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1">
              {item?.checkpoint_delivery_status == "pickup_bd"
                ? "Pickup Completed"
                : item?.checkpoint_delivery_status == "inforeceived"
                ? "Booking Completed"
                : item?.checkpoint_delivery_status == "transit"
                ? "On The Way"
                : item?.checkpoint_delivery_status == "delivered"
                ? "Delivery Completed"
                : ""}
            </h3>
            <p className="leading-tight text-justify w-full">MM-DD-YY</p>
            <p className="leading-tight text-justify w-full">
            {item?.checkpoint_date && isValidDate(item?.checkpoint_date)
    ? new Date(item?.checkpoint_date).toLocaleDateString()
    : ''}
            </p>
          </div>
        </>
      ) : (item as unknown as Item)?.checkpoint_delivery_status == "inforeceived" ? (
        <>
          <div className="col-start-1 col-end-3 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-28 w-1  bg-defult pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full  bg-defult shadow text-center">
              <i className="fas fa-check-circle text-white"></i>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShipmentTrackParcelLocationBox;
