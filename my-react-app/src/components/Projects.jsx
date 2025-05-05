export default function Projects() {
    const projects = [
      {
        name: "Farmer Said",
        url: "https://farmersaid.netlify.app/",
        description: "A platform empowering farmers with resources and community support."
      },
      {
        name: "Elsie Jane",
        url: "https://happybirthdayelsie.netlify.app/",
        description: "A celebratory website for a special occasion."
      }
    ];
  
    return (
      <section id="projects" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3 text-gray-100">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Visit Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }