import type { GetServerSideProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HomeComponent from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

const Home = (props: { deviceType: string }) => {
  return (
    <>
      <Head>
        <title>Ritik Kumar - Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I am a full stack developer who can help you in creating stuff ranging from simple landing pages to complex web apps!"
        />
        <meta property="og:title" content="Ritik Kumar" />
        <meta
          property="og:description"
          content="A full stack developer who can help you in creating stuff ranging from simple landing pages to complex web apps!"
        />
        <meta
          name="keywords"
          content="Ritik, Kumar, Ritik Kumar, software developer, software engineer, freelance web developer, web developer, ritik kumar, ritik kumar upwork, devritik, developer ritik, full stack developer, frontend developer, backend developer"
        />
        <meta property="og:url" content="https://devritik.com" />
        <meta
          property="og:image"
          content="https://github.com/iamr-kumar/next-portfolio/blob/master/assets/meta-card-image.png"
        />

        <meta property="og:url" content="https://devritik.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ritik Kumar" />
        <meta
          property="og:description"
          content="A full stack developer who can help you in creating stuff ranging from simple landing pages to complex web apps!"
        />
        <meta
          property="og:image"
          content="https://github.com/iamr-kumar/next-portfolio/blob/master/assets/meta-card-image.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="devritik.com" />
        <meta property="twitter:url" content="https://devritik.com" />
        <meta name="twitter:title" content="Ritik Kumar" />
        <meta
          name="twitter:description"
          content="A full stack developer who can help you in creating stuff ranging from simple landing pages to complex web apps!"
        />
        <meta
          name="twitter:image"
          content="https://github.com/iamr-kumar/next-portfolio/blob/master/assets/meta-card-image.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      </Head>
      <Navbar />
      <HomeComponent />
      <About />
      <Testimonials deviceType={props.deviceType} />
      <Projects />
      <Contact />
      <Footer />
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
