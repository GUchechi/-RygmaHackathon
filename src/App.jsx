import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/about/About";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Lyrics from "./pages/lyrics/Lyrics";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<ProfilePage />} />
        <Route path="/lyrics" element={<Lyrics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
