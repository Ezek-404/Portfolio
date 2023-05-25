import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import ProfilePic from '../../public/images/profile/profile.png';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() =>{
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>My Portfolio | About Page</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="About me" className='mb-16 !text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                    <div className='col-span-3 flex flex-col items-start justify-start dark:text-light xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='text-lg'>
                        Hello! Im <b>Ezekiel Flores</b>, A Web developer with expertise in building web applications that are user-friendly, responsive, and scalable. 
                        Proficient in both front-end and back-end technologies such as HTML, CSS, JavaScript, Java, PHP and MySQL. 
                        and constantly learning and keeping up-to-date with the latest technologies and best practices in the industry.
                        </p>
                        <p className='my-4 text-lg'>   
                        I believe that a website should not only look visually appealing but also provide an intuitive and delightful experience for its users. 
                        By carefully crafting each element and paying attention to details, I strive to create websites that engage and captivate visitors.
                        </p>
                        <p className='text-lg'>
                        Feel free to explore my portfolio, where you will find examples of my work that highlight my skills and creativity. 
                        If you have any questions or would like to discuss a potential project, please do not hesitate to get in touch. I look forward to creating exceptional web experiences together!
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' /> 
                             <Image src={ProfilePic} alt="Ezekiel Flores" className='w-full h-auto rounded-2xl' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/> 
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        
                        {/*<div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={10} />
                            </span>
                            <h2 className='text-xl capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={1} />
                            </span>
                            <h2 className='text-xl capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Year of Experience</h2>
                        </div>
                        
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={2} />
                            </span>
                            <h2 className='text-xl capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                        </div>*/}
                        
                    </div>
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about