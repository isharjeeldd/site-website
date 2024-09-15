import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar, ContactUs } from "./components";
import { AboutUsPage, ConsultancyPage, HomePage } from "./pages";
import ResearchPage from "./pages/ResearchPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/consultancy" element={<ConsultancyPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
