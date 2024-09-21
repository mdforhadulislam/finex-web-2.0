"use client";
import HomeBanarSection from "@/components/Home/HomeBanarSection";
import HomeCustomerReview from "@/components/Home/HomeCustomerReview";
import HomeHeroSection from "@/components/Home/HomeHeroSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeBanarSection />
      <HomeCustomerReview />
    </>
  );
}
