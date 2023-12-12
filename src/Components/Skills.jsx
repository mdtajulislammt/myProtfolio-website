import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className=" px-10 py-10 bg-[#fc8d3f] h-screen">
      <div>
        <h1 className=" text-5xl font-bold text-center py-5 pb-10">My Skills</h1>
      </div>
      <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 ">
        <div className=" py-4">
          <FaHtml5 className=" text-9xl mx-auto" />
          <p className="text-center font-semibold text-xl">Advance</p>
        </div>
        <div>
          <FaCss3 className=" text-9xl mx-auto" />
          <p className="text-center font-semibold text-xl">Advance</p>
        </div>
        <div>
          <SiTailwindcss className=" text-9xl mx-auto" />
          <p className="text-center font-semibold text-xl">Advance</p>
        </div>
        <div>
          <FaBootstrap className=" text-9xl mx-auto" />
          <p className="text-center font-semibold text-xl">Advance</p>
        </div>
        <div>
          <IoLogoJavascript className=" text-9xl mx-auto" />
          <p className="text-center font-semibold text-xl">Intermediate</p>
        </div>
        <div>
          <FaReact className=" text-9xl mx-auto" />
          <p className="text-center font-semibold text-xl">Intermediate</p>
        </div>
        <div>
          <IoLogoFirebase className=" text-9xl mx-auto" />
          <p className="text-center font-semibold text-xl">Intermediate</p>
        </div>
        <div>
          <FaNodeJs className=" text-9xl mx-auto" />
          <p className="text-center font-semibold text-xl">Beginner</p>
        </div>
        <div>
          <SiMongodb className=" text-9xl mx-auto" />
          <p className="text-center font-semibold text-xl">Beginner</p>
        </div>
        <div>
          <SiExpress className=" text-9xl mx-auto" />
          <p className="text-center font-semibold text-xl">Beginner</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
