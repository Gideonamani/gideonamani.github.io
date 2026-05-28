import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeCustomizer from './components/ThemeCustomizer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogCategory from './pages/BlogCategory';
import AwesomeLists from './pages/AwesomeLists';
import Talks from './pages/Talks';

export default function App() {
  return (
    <>
      <div className="ambient-glow ambient-glow-1"></div>
      <div className="ambient-glow ambient-glow-2"></div>
      <ThemeCustomizer />
      <div className="app">
        <Header />
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:categoryId" element={<BlogCategory />} />
            <Route path="/awesome-lists" element={<AwesomeLists />} />
            <Route path="/talks" element={<Talks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
