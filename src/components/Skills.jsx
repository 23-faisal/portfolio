import { GiCompactDisc } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { TbMathFunction } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { PiLadderFill } from "react-icons/pi";

const Skills = () => {
  const reactDev = [
    {
      id: 1,
      name: "Proficient in developing robust and scalable web applications using React.js.",
    },
    {
      id: 2,
      name: "Experienced in implementing efficient state management solutions.",
    },
    {
      id: 3,
      name: "Skilled in designing and maintaining component-based architectures for seamless user interfaces.",
    },
    {
      id: 4,
      name: "Familiar with the latest advancements in React, including the effective use of hooks for functional components.",
    },
  ];

  const technicalExperience = [
    { id: 1, name: "React.js, JavaScript (ES6+), JSX" },
    { id: 2, name: "State Management: Redux, Context API" },
    { id: 3, name: "Component Libraries: Material-UI, Ant Design" },
    { id: 4, name: "React Router for navigation" },
    { id: 5, name: "Familiarity with Next.js for server-side rendering (SSR)" },
    {
      id: 6,
      name: "Understanding of Virtual DOM and reconciliation algorithms",
    },
    { id: 7, name: "Responsive design principles using CSS and media queries" },
  ];

  const problemSolving = [
    {
      id: 1,
      name: "Proven ability to tackle complex problems and implement efficient solutions.",
    },
    {
      id: 2,
      name: "Strong debugging skills for identifying and resolving issues in React applications.",
    },
    {
      id: 3,
      name: "Experience in optimizing application performance for enhanced user experience.",
    },
  ];

  const collaboration = [
    {
      id: 1,
      name: "Collaborative approach to development, working seamlessly with cross-functional teams.",
    },
    {
      id: 2,
      name: "Effective communication of technical concepts to both technical and non-technical stakeholders.",
    },
    {
      id: 3,
      name: "Experience in participating in code reviews and providing constructive feedback.",
    },
  ];

  const continuousLearning = [
    {
      id: 1,
      name: "Enthusiastic about staying updated with the latest trends and best practices in React development.",
    },
    {
      id: 2,
      name: "Actively engaged in the React community, participating in forums, conferences, and open-source projects.",
    },
  ];
  return (
    <section className="mt-8">
      <div className="shadow-lg rounded-lg pb-8">
        <h1 className="text-semibold text-4xl text-center mt-12 mb-6">
          Skills
        </h1>
        <div className="max-w-[700px] mx-auto">
          {/* React Dev Section Starts Here */}

          <div className="flex items-center gap-2 pb-4">
            <FaReact className="text-xl text-teal-600" />
            <span className="text-bold text-xl  font-titleFont ">
              React Development:
            </span>
          </div>
          <div className="md:px-4 py-1">
            {reactDev.map((item, index) => (
              <div key={index}>
                <div className="flex items-start md:items-start gap-2">
                  <GiCompactDisc className=" text-xl md:text-sm md:text-bold  text-slate-600 mt-1 md:mt-1 md:text-md" />
                  <p className=" md:text-md py-1">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* React Dev Section Ends Here */}

          {/* Technical Skills Section Starts Here */}
          <div className="flex items-center gap-2 pb-4 mt-8">
            <GrPersonalComputer className="text-xl text-teal-600" />
            <span className="text-bold text-xl  font-titleFont ">
              Technical Skills:
            </span>
          </div>
          <div className="md:px-4 py-1">
            {technicalExperience.map((item, index) => (
              <div key={index}>
                <div className="flex items-start md:items-start gap-2">
                  <GiCompactDisc className=" text-xl md:text-sm md:text-bold  text-slate-600 mt-1 md:mt-1 md:text-md" />
                  <p className=" md:text-md  py-1">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skill Section Ends Here */}

          {/* Problem Solving Section Starts Here  */}

          <div className="flex items-center gap-2 pb-4 mt-8">
            <TbMathFunction className="text-xl text-teal-600" />
            <span className="text-bold text-xl  font-titleFont ">
              Problem Solving:
            </span>
          </div>
          <div className="md:px-4 py-1">
            {problemSolving.map((item, index) => (
              <div key={index}>
                <div className="flex items-start md:items-start gap-2">
                  <GiCompactDisc className=" text-xl md:text-sm md:text-bold  text-slate-600 mt-1 md:mt-1 md:text-md" />
                  <p className=" md:text-md  py-1">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Problem Solving Section Ends Here  */}

          {/* Collaboration Section Starts Here */}

          <div className="flex items-center gap-2 pb-4 mt-8">
            <FaHandsHelping className="text-xl text-teal-600" />
            <span className="text-bold text-xl  font-titleFont ">
              Collaboration:
            </span>
          </div>
          <div className="md:px-4 py-1">
            {collaboration.map((item, index) => (
              <div key={index}>
                <div className="flex items-start md:items-start gap-2">
                  <GiCompactDisc className=" text-xl md:text-sm md:text-bold  text-slate-600 mt-1 md:mt-1 md:text-md" />
                  <p className=" md:text-md  py-1">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Collaboration Section Ends Here   */}

          {/* Learning Section Starts Here */}

          <div className="flex items-center gap-2 pb-4 mt-8">
            <PiLadderFill className="text-xl text-teal-600" />
            <span className="text-bold text-xl  font-titleFont ">
              Continuous Learning:
            </span>
          </div>
          <div className="md:px-4 py-1">
            {continuousLearning.map((item, index) => (
              <div key={index}>
                <div className="flex items-start md:items-start gap-2">
                  <GiCompactDisc className=" text-xl md:text-sm md:text-bold  text-slate-600 mt-1 md:mt-1 md:text-md" />
                  <p className=" md:text-md  py-1">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Section EndsHere */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
