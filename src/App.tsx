import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import PaguinaPrincipal from './pages/PaguinaPrincipal'
import NuevoVideo from './pages/NuevoVideo';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={< PaguinaPrincipal />} />
            <Route path="/nuevo-video" element={<NuevoVideo />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

