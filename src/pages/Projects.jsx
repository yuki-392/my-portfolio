import Layout from "../components/Layout";
import { projects } from "../data/projects";

function Projects() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-500"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
