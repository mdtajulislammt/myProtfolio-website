
const Project = () => {
  return (
    <section id="projects" className="bg-[#272727] py-10">
      <h2 className=" text-6xl font-bold text-center text-white py-8  ">Projects</h2>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2  gap-5 mx-10 my-10">
        <div className=" bg-[#fc8d3f] p-4 rounded-lg">
          <img src="https://i.ibb.co/1mvJJvD/project3.png" className=" rounded-lg object-cover mb-2 w-full h-40" alt="" />
          <h1 className=" text-xl font-bold ">EverNest</h1>
          <p className=" text-lg font-medium">
            EverNest is a comprehensive real estate website designed to
            streamline property search and management. Here you can sell and
            sell property as an agent If the admin wants to make a user an
            agent, he can make a user again and again he can make a fraud You
            can see new reviews and newly posted properties on the home page
          </p>
          <p className=" my-4 font-bold text-md">Technology : React.js, Node.js, MongoDB, Express, Jwt, Firebase, Tailwind,TanStack Query</p>
          <div className=" flex items-center gap-4 my-4 bottom-0">
               <a href="https://eventnest-2e9c0.web.app/" className=" bg-white p-1 px-2 rounded-md font-semibold hover:text-[#fc8d3f]">Live Link</a>
               <a href="https://github.com/mdtajulislammt/real-estate-platform-client" className=" bg-white p-1 px-2 rounded-md font-semibold hover:text-[#fc8d3f]">FrontEnd Code</a>
               <a href="https://github.com/mdtajulislammt/real-estate-platform-server" className=" bg-white p-1 px-2 rounded-md font-semibold hover:text-[#fc8d3f]">FrontEnd Code</a>
          </div>

        </div>
        <div className=" bg-[#fc8d3f] p-4 rounded-lg">
          <img src="https://i.ibb.co/Y2JNxtW/project2.png" className=" rounded-lg object-cover mb-2 w-full h-40" alt="" />
          <h1 className=" text-xl font-bold ">Searching Jobs</h1>
          <p className=" text-lg font-medium">
          Searching Jobs is a job search platform that connects job seekers with potential employers

After login you can see the details of each job
You can post your job here if you want
You can delete your applied job later if you wante
You can update and delete your posting job as you wish
          </p>
          <p className=" my-4 font-bold text-md">Technology : React.js, Node.js, MongoDB, Express, Firebase, Tailwind.</p>
          <div className=" flex items-center gap-4 my-4 bottom-0">
               <a href="https://searching-jobs.web.app/" className=" bg-white p-1 px-2 rounded-md font-semibold hover:text-[#fc8d3f]">Live Link</a>
               <a href="https://github.com/mdtajulislammt/job-seeking-client-site" className=" bg-white p-1 px-2 rounded-md font-semibold hover:text-[#fc8d3f]">FrontEnd Code</a>
               <a href="https://github.com/mdtajulislammt/job-seeking-server-site" className=" bg-white p-1 px-2 rounded-md font-semibold hover:text-[#fc8d3f]">FrontEnd Code</a>
          </div>

        </div>
        <div className=" bg-[#fc8d3f] p-4 rounded-lg">
          <img src="https://i.ibb.co/GnpSRtn/project1.png" className=" rounded-lg object-cover mb-2 w-full h-40 " alt="" />
          <h1 className=" text-xl font-bold ">Limupa</h1>
          <p className=" text-lg font-medium">
          My website is Technology and Electronics About this website From this website you will find many types of Technology and Electronics items You can buy and sell these products etc...First visiting the website has an attractive homepage, this homepage has some popular brands and you will find items of each category.
          </p>
          <p className=" my-4 font-bold text-md">Technology : React.js, Node.js, MongoDB, Express, Firebase, Tailwind.</p>
          <div className=" flex items-center gap-4 my-4 bottom-0">
               <a href="https://limupa-dfa4f.web.app/" className=" bg-white p-1 px-2 rounded-md font-semibold hover:text-[#fc8d3f]">Live Link</a>
               <a href="https://github.com/mdtajulislammt/Technology-and-Electronics-client" className=" bg-white p-1 px-2 rounded-md font-semibold hover:text-[#fc8d3f]">FrontEnd Code</a>
               <a href="https://github.com/mdtajulislammt/Technology-and-Electronics-server" className=" bg-white p-1 px-2 rounded-md font-semibold hover:text-[#fc8d3f]">FrontEnd Code</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Project;
