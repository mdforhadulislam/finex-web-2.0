import HomeCustomerReview from "../Home/HomeCustomerReview";
import PriceCalCulatorSection from "./PriceCalCulatorSection";

const PriceBodySection = () => {
  return (
    <div className=" w-full p-2 sm:container h-auto m-auto">
      <PriceCalCulatorSection />
      {/* <PriceSubscriptionSection /> */}
      <HomeCustomerReview />
    </div>
  );
};

export default PriceBodySection;
