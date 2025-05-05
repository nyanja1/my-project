export default function Hero() {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-400">Elvis Amonde</h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">Software Developer Crafting Innovative Solutions</p>
          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
            Proficient in Python, JavaScript, and HTML, I build solutions that make a difference.
          </p>
          <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
            Explore My Work
          </a>
        </div>
      </section>
    );
  }