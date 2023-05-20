import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import profilePic from '../../public/images/profile/Medina_.png';
import AnimatedText from '@/components/AnimatedText';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Steven Medina</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image
                src={profilePic}
                alt='Steven Medina'
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px)100vw, (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text='Welcome to my portfolio!'
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                My name is Steven Medina. I am a fullstack developer based in
                New York City. I have experience utilizing different
                technologies to build web applications. I'm passionate about
                cutting-edge, accessible, beautiful interfaces and intuitively
                implemented UX.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='/Medina SEI Resume.pdf'
                  target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base sm:text-base sm:p-2 sm:px-4 xs:p-2 xs:px-4 xs:text-base'
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/smedinaa11y/'
                  target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='' className='w-full h-auto md:hidden' />
        </div>
      </main>
    </>
  );
}
