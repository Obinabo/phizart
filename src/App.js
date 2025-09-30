import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/HeaderFooter'
import { Home } from './pages/Home';
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Graphicspack } from './pages/Graphicspack'
import { Portfolio } from './pages/Portfolio'
import { Expertise } from './pages/Expertise'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/graphics-pack' element={<Graphicspack />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/expertise' element={<Expertise />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
