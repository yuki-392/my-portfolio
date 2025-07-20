import Layout from "../components/Layout";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <Layout>
      <div className="bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Experience</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold mb-2 text-center">
                {experience.title}
              </h2>
              <p className="text-gray-400 text-center">{experience.year}</p>
              <p className="text-gray-400 text-center">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Experience;
