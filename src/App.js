import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

//Page component
import Home from "./Pages/Home";
import About from "./Pages/About";
import GetInvolved from "./Pages/GetInvolved";
import Resources from "./Pages/Resources";

// Global component
import Bannersection from "./Components/Global/BannerSection/BannerSection";
import Navbars from "./Components/Global/NavbarTop/NavbarTop";
import ContactSection from "./Components/Global/ContactSection/ContactSection";
import StoriesSection from "./Components/Global/StoriesSection/StoriesSection";
import FooterSection from "./Components/Global/FooterSection/FooterSection";
import Top from "./Components/Global/GoTop/GoTop";

//importing css files
import "./App.css";

//importing AOS library for animation (first install it by $ npm i aos)
import AOS from "aos";
import "aos/dist/aos.css";

// aos library initialising
AOS.init({
  duration: 1000, // here 1000 is millisecond for animation, more value more duration of animation
});

function App() {
  const [showHome, setShowHome] = useState(true);

  useEffect(() => {
    // Set a timer to hide the HomeComponent after 5 seconds
    const timer = setTimeout(() => {
      setShowHome(false);
    }, 5000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="App">
      {showHome ? (
        <Bannersection />
      ) : (
        <Router>
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
          <ContactSection />
          <StoriesSection />
          <FooterSection />
          <Top />
        </Router>
      )}
    </div>
  );
}

export default App;
