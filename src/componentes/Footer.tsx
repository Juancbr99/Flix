import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center">

          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Aluraflix Logo" className="h-10" />
          </div>

          
          <p className="text-gray-400 text-sm text-center mb-4">
            © {new Date().getFullYear()} AluraFlix  By   Juan Camilo Bejarano Ramirez
          </p>

          <div className="flex space-x-4">
            <a
              href="https://github.com/Juancbr99" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-camilo-bejarano-ramirez-metanding/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

