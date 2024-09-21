import BGIMAGE from '@/components/assets/video-to-gif-sample.gif'
import HomeHeroSectionTrackingBox from './HomeHeroSectionTrackingBox';
import HomeHeroSectionHedding from './HomeHeroSectionHedding';

const HomeHeroSection = () => {
  return <div className="w-full h-screen bg-cover bg-no-repeat flex justify-center align-middle items-center" style={{backgroundImage:`url(${BGIMAGE.src})`}}>

    <div className='w-full h-full sm:container flex-col sm:flex-row flex justify-center sm:justify-between align-middle items-center p-6 gpa-4 pt-20'>
      
    <HomeHeroSectionHedding />
    <HomeHeroSectionTrackingBox />
    </div>

  </div>;
};

export default HomeHeroSection;
