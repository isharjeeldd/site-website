import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar, ContactUs } from "./components";
import { AboutUsPage, BlogsDetailPage, BlogsPage, ConsultancyPage, ErrorPage, HomePage, ResearchPage } from "./pages";
import { AppRoutes } from "./constants";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={AppRoutes.homePath} element={<HomePage />} />
        <Route path={AppRoutes.aboutUsPath} element={<AboutUsPage />} />
        <Route path={AppRoutes.researchPath} element={<ResearchPage />} />
        <Route path={AppRoutes.consultancyPath} element={<ConsultancyPage />} />
        <Route path={AppRoutes.contactUsPath} element={<ContactUs />} />
        <Route path={AppRoutes.blogsListPath} element={<BlogsPage />} />
        <Route path={AppRoutes.blogsDetailsPath} element={<BlogsDetailPage />} />
        <Route path={AppRoutes.errorPath} element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
