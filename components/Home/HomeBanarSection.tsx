import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SLIDERIMAGE1 from "../../public/slider-1.jpg";

const HomeBanarSection = () => {
  return (
    <div className="w-full h-auto py-14 bg-white px-5">
      <div className=" container h-auto m-auto p-10">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div
                  className="w-full h-[250px] md:h-[550px] p-2 bg-cover rounded-lg bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${SLIDERIMAGE1.src})` }}
                >
                  
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeBanarSection;
