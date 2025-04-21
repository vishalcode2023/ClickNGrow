import React from "react";

const projects = [
  {
    title: "Minituture sized food safety product",
    description:
      "Minituture sized food safety product which can scan packed products and give nutrients and food quality",
    image: "/c2cc255579b9d8980cf8916ab9e970f1.jpg",
  },
  {
    title: "Digital Taxi Top",
    description:
      "Digital Taxi Top with collaboration with VVCE and BloomBuz",
    image: "/126462bdc6d31e29d48ff081379159af.png",
  },
  {
    title: "Know Your KID AI powered tracking",
    description:
      "KnowYourKID AI powered tracking and automatic revision and Test conducts based on student preparation level and ranks the student among all schools",
    image: "/9c9d647e77f3cee2c1ddc3f4b8530473.png",
  },
];

export default function OngoingProjects() {
  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-blue-700 mb-12">
        Ongoing Projects within <span className="text-blue-500">ClickNGro</span>
      </h2>

      <div className="space-y-20">
        {/* Project 1 */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="rounded-2xl w-full sm:w-1/2 object-cover shadow-md"
          />
          <div className="sm:ml-10">
            <h3 className="text-3xl font-bold text-blue-700  mb-2">
              {projects[0].title}
            </h3>
            <p className="text-gray-600 max-w-md">{projects[0].description}</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-6">
          <img
            src={projects[1].image}
            alt={projects[1].title}
            className="rounded-2xl w-full sm:w-1/2 object-cover shadow-md"
          />
          <div className="sm:mr-10">
            <h3 className="text-3xl font-bold text-blue-700 mb-2">
              {projects[1].title}
            </h3>
            <p className="text-gray-600 max-w-md">{projects[1].description}</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={projects[2].image}
            alt={projects[2].title}
            className="rounded-2xl w-full sm:w-1/2 object-cover shadow-md"
          />
          <div className="sm:ml-10">
            <h3 className="text-3xl font-bold text-blue-700 mb-2">
              {projects[2].title}
            </h3>
            <p className="text-gray-600 max-w-md">{projects[2].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
