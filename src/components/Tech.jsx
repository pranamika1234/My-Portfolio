import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h3>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-14'>
        {technologies.map((technology, index) => (
          <div 
            className='w-28 h-28 flex flex-col items-center justify-center gap-2' 
            key={technology.name}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-[#915EFF] to-[#915EFF]/50 flex items-center justify-center p-4 transition-all duration-300 ${hoveredIndex === index ? 'scale-110 shadow-lg shadow-[#915EFF]/50' : ''}`}>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-full h-full object-contain'
              />
            </div>
            <p className='text-white text-[10px] text-center font-medium'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");