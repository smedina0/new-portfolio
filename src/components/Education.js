import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div>
        <h3 className='capitalize font-bold dark:text-light text-2xl sm:text-xl xs:text-lg'>
          {type}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='font-medium w-full dark:text-light md:text-sm'>{info}</p>
      </motion.div>
    </div>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Education
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <div className='w-full flex flex-col items-start justify-between ml-4 dark:text-light/75 xs:ml-2'>
          <Details
            type='Software Engineering Certificate'
            time='Nov 2022 - May 2023'
            place='General Assembly'
            info='24-week long 500 hours full-time and full-stack web development program conducted in a remote setting, providing experience with the latest front and back-end programming languages, tools, and methodologies including HTML, CSS, SASS, JavaScript, Node.JS, React.JS, MongoDB, Mongoose, SQL, Python, and Django.'
          />
          <Details
            type='Master of Arts - MA, Disability Studies'
            time='2021 - Present'
            place='CUNY School of Professional Studies'
            info='Coursework consisted of the social, cultural, technological, and historical aspects of disability, as well as the impact of disability on individuals, families, and communities.'
          />
          <Details
            type='Master of Science - MS, Integrated Digital Media'
            time='2018-2019'
            place='New York University'
            info='Relevant coursework includes: Creative Coding, UX/UI Research/Design, Physical Computing, Design Thinking, and Accessibility Courses.'
          />
          <Details
            type='Springboard, UX/UI Design Certificate'
            time='Jan 2017 - Jun 2017'
            place='Springboard'
            info='Intensive 6-month long online program that covered the fundamentals of UX/UI design, including user research, prototyping, and visual design.'
          />
          <Details
            type='Bachelor of Arts - BA, Neuroscience and Theatre Double Major'
            time='2013 - 2017'
            place='Middlebury College'
            info='Several years of coursework in the sciences, including: Biology, Chemistry, Physics, and Psychology. Several years of coursework in the arts, including: Acting, Directing, Playwriting, and Theatre History.'
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
