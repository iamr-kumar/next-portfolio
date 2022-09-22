import React from "react";
import Divider, { Alignment } from "./Divider";
import { ImQuotesLeft } from "react-icons/im";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../utils/constants";

interface TestimonialType {
  from: string;
  position: string;
  text: string;
}

const testimonials: TestimonialType[] = [
  {
    from: "Andre Branton",
    position: "Upwork Client",
    text: "Ritik was great to work with, he's incredibly patient, quick to understand novel concepts and really reliable. We achieved a lot working together. Would definitely work with him again.",
  },
  {
    from: "Ankita Sinha",
    position: "CTO, Gravitas AI",
    text: "Ritik is a hardworking individual with a passion to find technical solutions to complex technical problems. His enthusiasm for learning is commendable and fits effortlessly in the tam. He goes above and beyond to help in tough situations and was a valuable asset to the company",
  },
  {
    from: "Colin A. White",
    position: "Upwork Client",
    text: "Despite his young age, Ritik is clearly an experienced and skilled developer. He grasps complex concepts quickly and can communicate ideas, solutions, and designs in a concise and logical manner. His work is well organized and his code is clean and concise. He has a promising career ahead of him. I would happily work with him again and wouldn't hesitate to recommend him to others.",
  },
  {
    from: "Vulko Mitev",
    position: "Upwork Client",
    text: "I was unsure about hiring this freelancer at first. However, I'm thrilled I gave him a chance in the end. I've worked with a few other freelancers, and Ritik's communication was second to none. His skills are adequate for what I needed, and despite facing a few challenges, he decided to learn and ultimately complete the job successfully. I wholeheartedly recommend Ritik to anyone!",
  },
  {
    from: "Daria Zieba",
    position: "Upwork Client",
    text: "Thank you very much for your work! I strongly recommend Mr Ritik Kumar. Work was delivered on time with very good quality. Good job!",
  },
];

const TestimonialCard = (props: TestimonialType) => {
  const { from, position, text } = props;
  return (
    <div className="bg-[#1e1e1e90] h-[90%] w-[350px] sm:w-[450px] md:w-[400px] lg:w-[400px] rounded-[12px] shadow-xl relative mx-4 my-4 self-stretch">
      <div className="bg-[#0885FF] p-4 w-4 h-4 rounded-full flex justify-center items-center font-openSans absolute -top-[8px] left-4">
        <span>
          <ImQuotesLeft />
        </span>
      </div>
      <div className="px-6 pt-12 pb-8 flex flex-col justify-between h-full">
        <p className="text-white text-sm font-openSans leading-5 italic tracking-wide">{text}</p>
        <div className="mt-4 font-openSans">
          <h4 className="text-lg text-[#0885FF] font-openSans">{from}</h4>
          <h6 className="font-normal italic text-sm text-gray-300">{position}</h6>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="relative">
      <Divider heading="Testimonials" alignment={Alignment.LEFT} />
      <div className="px-2 sm:px-6 md:px-12 lg:px-24 pt-12 sm:pt-20 md:mb-12 mb-8 lg:pb-4">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          keyBoardControl={true}
          transitionDuration={300}
          removeArrowOnDeviceType={["mobile"]}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              from={testimonial.from}
              position={testimonial.position}
              text={testimonial.text}
              key={index}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
