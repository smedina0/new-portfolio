import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div>
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full dark:text-light md:text-sm'>{work}</p>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <div className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Accessibility Engineer'
            company='JPMorgan Chase & Co.'
            companyLink='https://www.chase.com'
            time='Jan 2022-Present'
            address='New York City'
            work='Performed all testing activities for initiatives across assigned projects, utilizing processes, methods and software that ensure accessibility for all customer-facing web pages and reviewed front-end code for WCAG compliance and provided code-based solutions. '
          />
          <Details
            position='Web Accessibility Specialist'
            company='The City University of New York'
            companyLink='https://www.cuny.edu'
            time='Mar 2019-Jan 2022'
            address='New York City'
            work='Audited CUNY websites for WCAG 2.1 AA compliance and made WAI-ARIA/HTML/CSS/JavaScript suggestions for ways to improve accessibility in collaboration with front end developers. '
          />
          <Details
            position='Accessibility UX Designer'
            company='New York Univeristy'
            companyLink='https://www.NYU.edu'
            time='Jan 2019-Jan 2020'
            address='New York City'
            work=' Executed all visual design stages from concept to final hand-off to the development team and verified that the development team implemented accessible HTML, CSS, and Javascript by testing different iterations of the product before providing the client with the final deliverable.'
          />
          <Details
            position='Document Accessibility Specialist'
            company='New York Univeristy'
            companyLink='https://www.NYU.edu'
            time='Feb 2018-Jan 2019'
            address='New York City'
            work='Ensured that electronic documents achieved Section 508, ADA, and WCAG 2.0 AA compliance by using screen readers such as NVDA, JAWS, and Voiceover.'
          />
          <Details
            position='Eye Tracking Operator'
            company='Eye Square'
            companyLink='https://www.eye-square.com/en/'
            time='Oct 2017-Jan 2018'
            address='New York City'
            work='Performed implicit market research using eye tracking technology and managed a database of recorded data.'
          />
          {/* <Details
            position='Software Engineer'
            company='Google'
            companyLink='www.google.com'
            time='2022-Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
