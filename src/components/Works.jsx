import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-3'>
          {source_code_link && (
            <a
              href={source_code_link}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#915EFF] text-white px-4 py-2 rounded-xl text-[14px] font-semibold hover:bg-[#7a4dd7] transition-colors duration-200'
            >
              GitHub
            </a>
          )}
          {live_site_link && (
            <a
              href={live_site_link}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white text-secondary px-4 py-2 rounded-xl text-[14px] font-semibold hover:bg-slate-200 transition-colors duration-200'
            >
              Live Site
            </a>
          )}
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px] text-justify'
        >
         Every project I create starts with curiosity — a small spark that turns into lines of code and, eventually, a living digital experience. I love taking ideas that exist only in my imagination and shaping them into something people can actually use. From building sleek, responsive interfaces with React to crafting powerful backends with Node.js and FastAPI, each project tells a story of learning, experimentation, and growth. Lately, I’ve been exploring how AI can make web apps smarter — whether it’s a fitness tracker that recommends workouts or a chatbot that understands emotions. For me, projects aren’t just tasks; they’re little adventures that push me to think deeper, code better, and build something that truly connects with people.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
