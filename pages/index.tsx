import type { GetServerSideProps } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import HomeComponent from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

const Home = (props: { deviceType: string }) => {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <About />
      <Testimonials deviceType={props.deviceType} />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(UA?.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
};
