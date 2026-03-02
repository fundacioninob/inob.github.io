import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mission from './pages/Mission';
import OurWork from './pages/OurWork';
import News from './pages/News';
import About from './pages/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#fff5f8] text-[#111111] selection:bg-[#962241] selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


