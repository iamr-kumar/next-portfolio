import type { NextPage } from "next";
import HomeComponent from "../components/Home";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomeComponent />
    </>
  );
};

export default Home;
