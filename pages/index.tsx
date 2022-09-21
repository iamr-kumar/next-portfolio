import type { NextPage } from "next";
import About from "../components/About";
import HomeComponent from "../components/Home";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <About />
      <Testimonials />
    </>
  );
};

export default Home;
