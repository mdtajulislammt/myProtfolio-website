import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const About = () => {
     return (
          <section id="about" className="bg-[#fd8e3f]">
               <div className="lg:px-20 md:px-14 px-10 md:py-20 py-10 text-center ">
               <h2 className=" text-5xl font-bold mb-8">About <span>Me</span></h2>
               <p className=" text-lg font-semibold">Hello, I'm a MERN (MongoDB, Express.js, React.js, Node.js) Stack Developer with a passion for transforming ideas into powerful and scalable web solutions. From crafting dynamic user interfaces with React.js to architecting robust server-side applications, I thrive on the full-stack experience. My commitment to clean code and collaborative teamwork fuels my drive to create innovative and efficient digital experiences. Let's build something extraordinary together!</p>

               <div className=" md:flex justify-center lg:gap-10 gap-5 mt-20">
                    <div className=" bg-white p-3 rounded-md ">
                    <h2 className=" flex justify-center items-center gap-2  font-semibold text-2xl text-[#fd8e3f]"><FaLocationDot/><span > From</span></h2>
                    <h4 className=" text-lg font-medium text-[#fd8e3f] "><span>Tongi, Gazipur, Bangladesh</span></h4>
                    </div>
                    <div className=" bg-white p-3 rounded-md ">
                    <h2 className=" flex justify-center items-center gap-2  font-semibold text-2xl text-[#fd8e3f]"><FaUser/><span > Name</span></h2>
                    <h4 className=" text-lg font-medium text-[#fd8e3f] "><span>MD Tajul Islam</span></h4>
                    </div>
                    <div className=" bg-white p-3 rounded-md ">
                    <h2 className=" flex justify-center items-center gap-2  font-semibold text-2xl text-[#fd8e3f]"><MdEmail/><span > Email</span></h2>
                    <h4 className=" text-lg font-medium text-[#fd8e3f] "><span>mdtajulislam50599@gmail.com</span></h4>
                    </div>
               </div>
               </div>
               
          </section>
     );
};

export default About;