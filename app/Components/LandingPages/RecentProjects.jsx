import React from "react";

const projects = [
  {
    id: 1,
    title: "Lorem ipsum dolo",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sitLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sitLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sitLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sitLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit",
    img: "/33e587f7051a755a12924ff02714b828.jpg", // Replace with your actual image paths
    bgColor: "bg-purple-100",
  },
  {
    id: 2,
    title: "Lorem ipsum dolo",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    img: "/cd07e129bd606a5f1b38eb0f49e88e10.jpg",
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    title: "Lorem ipsum dolo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum...",
    img: "/df8ab2a7507f9f19331d52e50cf953e1.jpg",
    bgColor: "bg-pink-100",
  },
];

const RecentProjects = () => {
  return (
    <div className="w-[90%] m-auto px-4 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
        Our <span className="text-gray-800">Recent Projects</span>
      </h2>

      <div className="space-y-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`rounded-xl ${project.bgColor} shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center transition hover:scale-[1.02]`}
          >
            <img
              src={project.img}
              alt="Project"
              className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-8 shadow-md"
            />
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                {project.description}
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline text-sm"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
          Read More Case Studies
        </button>
      </div>
    </div>
  );
};

export default RecentProjects;
