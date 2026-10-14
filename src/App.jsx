import { BrowserRouter } from "react-router-dom";
import ScrollProgress from "./components/layout/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./routes/ScrollToTop";

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-[#171717] selection:bg-[#171717] selection:text-white flex flex-col font-sans">
        {/* Scroll restoration on route navigation */}
        <ScrollToTop />

        {/* Slim Scroll Progress Bar */}
        <ScrollProgress />

        {/* Sticky Editorial Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <AppRoutes />
        </main>

        {/* Editorial Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
