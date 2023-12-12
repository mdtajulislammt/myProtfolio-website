import { SiGooglemessages } from "react-icons/si";
const WhatsApp = () => {
     return (
          <div className=" fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-[#fe954c] text-4xl  w-16 h-16 flex items-center justify-center rounded-full animate-bounce duration-150">
               <SiGooglemessages className=" text-7xl" />
          </div>
     );
};

export default WhatsApp;