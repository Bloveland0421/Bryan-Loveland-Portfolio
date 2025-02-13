import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/layout.jsx';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import Experience from './Pages/Experience.jsx';
import Mentoring from './Pages/Mentoring.jsx';
import Leadership from './Pages/Leadership.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="mentoring" element={<Mentoring />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;