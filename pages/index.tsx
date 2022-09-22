import type { NextPage } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import HomeComponent from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <About />
      <Testimonials />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
