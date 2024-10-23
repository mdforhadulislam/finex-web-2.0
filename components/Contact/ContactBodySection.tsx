import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import ContactBodyFromSection from "./ContactBodyFromSection";

const ContactBodySection = () => {
  return (
    <div className="w-full h-auto">
      {/* Main container for the contact section */}
      <div className="lg:container m-auto p-4 sm:p-2 sm:py-14">
        <div className="w-full h-auto flex gap-4 md:flex-row flex-col">
          {/* Left side - Contact form and introductory text */}
          <div className="w-full h-auto p-4 flex flex-col items-center align-middle justify-center">
            {/* English content */}
            <IsEnglish className="w-full h-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Get in Touch
              </h1>
              <p className="text-base font-normal text-justify py-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia ipsam in culpa laboriosam tempora provident ut officia
                deleniti laborum illo.
              </p>
            </IsEnglish>

            {/* Bangla content */}
            <IsBangla className="w-full h-auto">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bfont">
                যোগাযোগ করুন
              </h1>
              <p className="text-justify py-3 bfont text-2xl leading-6">
                আমাদের গ্রাহক পরিষেবা সেলগুলি আপনার সমস্ত প্রশ্নের জন্য দ্রুত
                প্রতিক্রিয়া প্রদান করে। আন্তঃনগর পিক-আপ এবং ডেলিভারিতে আমাদের
                গাড়ির বহর দ্রুত এবং নিরাপদ ডেলিভারি প্রদান করে।
              </p>
            </IsBangla>

            {/* Contact form component */}
            <div className="w-full h-auto py-3">
              <ContactBodyFromSection />
            </div>
          </div>

          {/* Right side - Google Maps embed */}
          <div className="w-full h-auto p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.214058578806!2d90.39848236952292!3d23.85923832515917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c50019ecfb45%3A0x97051f8809df19ce!2sRahman%20Villa!5e0!3m2!1sen!2sbd!4v1717447882392!5m2!1sen!2sbd"
              width={600}
              height={450}
              loading="lazy"
              className="w-full h-full"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBodySection;
