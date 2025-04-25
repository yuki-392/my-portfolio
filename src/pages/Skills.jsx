import Layout from "../components/Layout";
import { skills } from "../data/skills";

function Skills() {
  return (
    <Layout>
      <div className="bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4 text-center">{skill.icon}</div>
              <h2 className="text-2xl font-bold mb-2 text-center">
                {skill.name}
              </h2>
              <p className="text-gray-400 text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Skills;
