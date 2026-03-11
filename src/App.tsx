import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Audit from './pages/Audit';
import Book from './pages/Book';
import Insights from './pages/Insights';
import Dashboard from './pages/Dashboard';
import Chatbot from './components/Chatbot';
import StickyCtaBar from './components/StickyCtaBar';
import ExitIntentPopup from './components/ExitIntentPopup';

// Placeholder Pages for remaining links
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-32 pb-24 px-4 flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
      {title}
    </h1>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
      This page is currently under construction as we build out the Worklabs architecture.
    </p>
    <a href="/" className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-primary-500/20">
      Return Home
    </a>
  </div>
);

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Chatbot />
      <StickyCtaBar />
      <ExitIntentPopup />
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-surface text-gray-100">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/book" element={<Book />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="*" element={<PlaceholderPage title="404: Page Not Found" />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
