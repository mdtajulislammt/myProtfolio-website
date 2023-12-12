import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const Contact = () => {
     return (
          <section id="contact" className=" bg-[#fc8d3f] px-10 pb-14">
              <h2 className=" text-5xl  font-bold text-center py-8">Contact Me</h2> 
              <div className=" flex justify-between ">
               <div className=" flex-1">
                    <h2 className=" text-3xl font-semibold  ">Let's Connect  . . . </h2>
                    <div className=" flex items-center gap-5">
                    <a href="https://www.linkedin.com/in/md-tajul-islam-9863751b0/"><FaLinkedin  className=" text-white text-5xl cursor-pointer mt-2 rounded-full p-2 border border-[#1f2937] "/></a>
                    <a href="https://github.com/mdtajulislammt"><IoLogoGithub className=" text-white text-5xl mt-2 cursor-pointer rounded-full p-2 border border-[#1f2937] " /></a>
                    <a href="https://www.facebook.com/mdtajulislammt/"><FaFacebook className=" text-white text-5xl mt-2 cursor-pointer rounded-full p-2 border border-[#1f2937] " /></a>
                    </div>
               </div>
               <div className=" flex flex-col gap-3 w-full flex-1">
                    <h2 className=" text-3xl font-semibold  ">Let's Message me</h2>
               <input type="text" placeholder="Type here" className="input input-bordered input-md w-full  " />
               <input type="text" placeholder="Type here" className="input input-bordered input-md w-full " />
               <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full " ></textarea>

               </div>
              </div>
          </section>
     );
};

export default Contact;