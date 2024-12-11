import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/about/About";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
