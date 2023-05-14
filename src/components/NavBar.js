import React from 'react';
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
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <ul className='list-none p-0 m-0'>
          <li className='inline-block'>
            <CustomLink href='/' title='Home' className='mr-4' />
          </li>
          <li className='inline-block'>
            <CustomLink href='/about' title='About' className='mx-4' />
          </li>
          <li className='inline-block'>
            <CustomLink href='/projects' title='Project' className='mx-4' />
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
        className='flex items-center justify-center flex-wrap'
        aria-label='social media'
      >
        <ul className='list-none'>
          <motion.li
            className='inline-block w-6 mx-3'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href='https://twitter.com' target={'_blank'}>
              <TwitterIcon />
            </a>
          </motion.li>
          <motion.li
            className='inline-block w-6 mx-3'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href='https://twitter.com' target={'_blank'}>
              <GithubIcon />
            </a>
          </motion.li>
          <motion.li
            className='inline-block w-6 mx-3'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href='https://twitter.com' target={'_blank'}>
              <LinkedInIcon />
            </a>
          </motion.li>
          <motion.li
            className='inline-block w-6 mx-3'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href='https://twitter.com' target={'_blank'}>
              <PinterestIcon />
            </a>
          </motion.li>
          <motion.li
            className='inline-block w-6 ml-3'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href='https://twitter.com' target={'_blank'}>
              <DribbbleIcon />
            </a>
          </motion.li>
         

        </ul>
        <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className='ml-3 flex items-center justify-center rounded-full p-1'
            >
              {mode === 'dark' ? 
                <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />
              }
            </button>
      </nav>
    </header>
  );
};

export default NavBar;
