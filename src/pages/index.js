import Head from 'next/head'
import Layout from '@/components/Layout'
import ProfilePic from '../../public/images/profile/profile1.png'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Next JS Portfolio" />
        <link rel="icon" type="image/png" href="" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
          <Layout className='pt-0 md:pt-16 sm:pt-8'>
              <div className='flex items-center justify-between w-full lg:flex-col'>
                  <div className='w-1/2 flex flex-col items-center self-center md:w-full'>
                    <Image src={ProfilePic} alt="Ezekiel Flores" className='w-full h-auto lg:hidden md:inline-block md:w-full ' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                  </div>
                  <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                    <AnimatedText text="Ezekiel R. Flores" className='!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                    <p className='my-4 text-lg md:text-sm sm:text-xs'>Im a passionate web developer with expertise in creating interactive and visually appealing websites. 
                    I specialize in front-end development, crafting engaging user experiences with HTML, CSS, and JavaScript. 
                    With a keen eye for design and a strong foundation in coding principles, I strive to deliver websites that not only look great but also function flawlessly.
                      </p>

                      <div className='flex items-center self-start mt-2 lg:self-center'>
                        <Link href="/EzekielFloresCV.pdf" target={'_blank'} 
                        className='flex items-center bg-dark text-light p-2.5 px-6 
                        rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                        border-2 border-solid border-transparent hover:border-dark dark:bg-light
                       dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                       md:p-2 md:px-4 md:text-base'
                        download={true}>Resume<LinkArrow className={'w-6 ml-1'}/></Link>
                        <Link href="mailto:floresezekiel1@gmail.com" 
                        className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                        target={'_blank'}>Contact</Link>
                      </div>
                  </div>
              </div>
          </Layout> 
      </main>
    </>
  )
}
