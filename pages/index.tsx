import type { NextPage } from "next";
import About from "../components/About";
import HomeComponent from "../components/Home";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <About />
    </>
  );
};

export default Home;
