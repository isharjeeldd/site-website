import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { AppRoutes } from "./constants";
import SplashScreen from "./components/SplashScreen";
import SEO from "./components/SEO";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ResearchPage = lazy(() => import("./pages/ResearchPage"));
const ConsultancyPage = lazy(() => import("./pages/ConsultancyPage"));
const ContactUs = lazy(() => import("./components/Contact"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const BlogsDetailPage = lazy(() => import("./pages/BlogsPage/components/BlogsDetailPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]" role="status" aria-label="Loading page">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-secondary border-t-transparent" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SITE - Strategic Institute of Technology Ethics",
  description: "Bridging the gap between AI potential and human values through cutting-edge research and expert consultancy.",
  url: "https://site-ethics.org",
  logo: "https://site-ethics.org/logo.png",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "English",
  },
};

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem("site-splash-shown");
  });

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("site-splash-shown", "true");
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  return (
    <>
      <SplashScreen isVisible={showSplash} />
      <Router>
        <SEO structuredData={organizationSchema} />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main">
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
