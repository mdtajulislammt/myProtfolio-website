import backround from "../assets/herobackroung.png"
import self from "../assets/selfImg.png"
import self2 from "../assets/myphoto.png"
import { FaDownload } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
const Hero = () => {
     return (
          <section id="home" className=" min-h-screen flex justify-center px-10  md:flex-row-reverse flex-col items-center bg-[#272727]">
               <div className="flex-1 mt-10">
                    <div className="  border-black  ">
                    <img src={backround} alt=""  className="z-[999]  md:w-[550px] mt-10   object-cover"/>
                    <img src={self2} alt=""  className=" absolute top-0   w-80  ml-32 mt-24  object-cover rounded-full  "/>
                    </div>
                    
               </div>
               <div className=" flex-1">
                    <h2 className=" text-4xl font-bold text-gray-400  ">Hi, Iam </h2>
                    <h1 className=" text-7xl font-bold text-white">MD Tajul Islam</h1>
                    <h3 className=" text-3xl font-semibold text-[#fe954c] my-4 uppercase ">Mern Stack Developer</h3>
                    <p className=" font-medium text-gray-200">Welcome to my world of MERN (MongoDB, Express.js, React.js, Node.js) magic! I'm a dynamic MERN Stack Developer on a mission to turn innovative ideas into stunning web applications. With a flair for frontend finesse and backend brilliance, I orchestrate seamless, high-performance experiences. Let's elevate your digital presence together! </p>
                    <div className=" flex items-center gap-2">
                    <button className=" text-[#fe954c] flex items-center gap-2 border border-[#fe954c] hover:bg-[#fe954c] hover:text-black duration-500 font-semibold  p-3 mt-3 rounded-2xl"> <FaDownload /><span>Download</span> </button>
                    <a href="https://www.linkedin.com/in/md-tajul-islam-9863751b0/"><FaLinkedin  className=" text-white text-5xl cursor-pointer mt-2 rounded-full p-2 border border-[#fe954c] "/></a>
                    <a href="https://github.com/mdtajulislammt"><IoLogoGithub className=" text-white text-5xl mt-2 cursor-pointer rounded-full p-2 border border-[#fe954c] " /></a>
                    </div>

               </div>
               
          </section>
     );
};

export default Hero;