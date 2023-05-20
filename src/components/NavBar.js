import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }
          dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
      <button
        className='flex flex-col justify-center items-center hidden lg:flex'
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <ul className='list-none p-0 m-0'>
            <li className='inline-block'>
              <CustomLink href='/' title='Home' className='mr-4' />
            </li>
            <li className='inline-block'>
              <CustomLink href='/about' title='About' className='mx-4' />
            </li>
            <li className='inline-block'>
              <CustomLink href='/projects' title='Projects' className='mx-4' />
            </li>
            <li className='inline-block'>
              <CustomLink href='/articles' title='Articles' className='ml-4' />
            </li>
          </ul>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
        <nav
          className='flex items-center justify-center flex-wrap mt-2'
          aria-label='social media'
        >
          <ul className='list-none'>
            {/* <motion.li
              className='inline-block w-6 mr-3'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href='https://twitter.com' target={'_blank'}>
                <TwitterIcon />
              </a>
            </motion.li> */}
            <motion.li
              className='inline-block w-6 mx-3 bg-light dark:bg-dark  rounded-full'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href='https://github.com/smedina0' target={'_blank'}>
                <GithubIcon />
              </a>
            </motion.li>
            <motion.li
              className='inline-block w-6 mx-3'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href='https://www.linkedin.com/in/smedinaa11y/'
                target={'_blank'}
              >
                <LinkedInIcon />
              </a>
            </motion.li>
            {/* <motion.li
              className='inline-block w-6 mx-3 '
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href='https://twitter.com' target={'_blank'}>
                <PinterestIcon />
              </a>
            </motion.li> */}
            {/* <motion.li
              className='inline-block w-6 ml-3'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href='https://twitter.com' target={'_blank'}>
                <DribbbleIcon />
              </a>
            </motion.li> */}
            <motion.li
              className='inline-block'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
          
          `}
              >
                {mode === 'dark' ? (
                  <SunIcon className={'fill-dark'} />
                ) : (
                  <MoonIcon className={'fill-dark'} />
                )}
              </button>
            </motion.li>
          </ul>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opactity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
        >
          <nav className=''>
            <ul className='list-none p-0 m-0 flex items-center flex-col justify-center'>
              <li className='inline-block'>
                <CustomMobileLink
                  href='/'
                  title='Home'
                  className=''
                  toggle={handleClick}
                />
              </li>
              <li className='inline-block'>
                <CustomMobileLink
                  href='/about'
                  title='About'
                  className=''
                  toggle={handleClick}
                />
              </li>
              <li className='inline-block'>
                <CustomMobileLink
                  href='/projects'
                  title='Projects'
                  className=''
                  toggle={handleClick}
                />
              </li>
              <li className='inline-block'>
                <CustomMobileLink
                  href='/articles'
                  title='Articles'
                  className=''
                  toggle={handleClick}
                />
              </li>
            </ul>
          </nav>
          <div className='absolute left-[50%] top-2 translate-x-[-50%]'></div>
          <nav
            className='flex items-center justify-center flex-wrap'
            aria-label='social media'
          >
            <ul className='list-none'>
              {/* <motion.li
                className='inline-block w-6 mx-3 dark:bg-dark dark:outline outline-black rounded sm:mx-1'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href='https://twitter.com' target={'_blank'}>
                  <TwitterIcon />
                </a>
              </motion.li> */}
              <motion.li
                className='inline-block w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href='https://github.com/smedina0' target={'_blank'}>
                  <GithubIcon />
                </a>
              </motion.li>
              <motion.li
                className='inline-block w-6 mx-3 sm:mx-1'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href='https://www.linkedin.com/in/smedinaa11y/'
                  target={'_blank'}
                >
                  <LinkedInIcon />
                </a>
              </motion.li>
              {/* <motion.li
                className='inline-block w-6 mx-3 bg-light rounded-full sm:mx-1'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href='https://twitter.com' target={'_blank'}>
                  <PinterestIcon />
                </a>
              </motion.li> */}
              {/* <motion.li
                className='inline-block w-6 ml-3 sm:mx-1'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href='https://twitter.com' target={'_blank'}>
                  <DribbbleIcon />
                </a>
              </motion.li> */}
              <motion.li
                className='inline-block'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                  className={` w-6 h-6 flex items-center justify-center rounded-full p-1 pt-0 ml-0 sm:pt-0
    ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
    
    `}
                >
                  {mode === 'dark' ? (
                    <SunIcon className={'fill-dark w-6 h-6'} />
                  ) : (
                    <MoonIcon className={'fill-dark w-6 h-6'} />
                  )}
                </button>
              </motion.li>
            </ul>
          </nav>
        </motion.div>
      ) : null}
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
