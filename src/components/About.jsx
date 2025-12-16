import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hey there! I’m Pranamika Kalita — a Full Stack Developer who loves building the bridge between imagination and innovation. I work with the MERN stack (MongoDB, Express.js, React, Node.js) to craft digital experiences that don’t just function — they flow.

I see code as a form of art — every component, API, and database connection is a brushstroke in creating something meaningful and interactive. My journey began with front-end magic, but soon I found myself diving deep into the world of back-end logic, cloud connections, and now, the thrilling universe of Artificial Intelligence.

As an AI beginner, I’m exploring how intelligent systems can elevate web experiences — from smarter user interactions to predictive insights. I love experimenting with Python, Hugging Face models, and Pytorch to add a spark of intelligence to everyday web apps.

When I’m not coding, I’m probably curating design ideas, sketching concepts, or binge-learning about the next big thing in tech. My mission? To merge creativity with code and build solutions that feel alive.
      </motion.p>

      

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
