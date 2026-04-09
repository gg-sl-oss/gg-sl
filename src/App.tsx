import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/Portfolio/ProjectDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/gg-sl" element={<Home />} />
        <Route path="/gg-sl/portfolio" element={<Portfolio />} />
        <Route path="/gg-sl/portfolio/:projectName" element={<ProjectDetail />} />
        <Route path="/gg-sl/about" element={<About />} />
        <Route path="/gg-sl/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
