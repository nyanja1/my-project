export default function NavBar() {
    return (
      <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Elvis Amonde</h1>
          <div className="space-x-6">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition">Home</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>
    );
  }