import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;