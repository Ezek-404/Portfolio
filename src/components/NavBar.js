import React, { UseState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {GithubIcon, LinkedInIcon, FacebookIcon, SunIcon, MoonIcon } from './Icons'
import {motion} from 'framer-motion'
import UseThemeSwitcher from './hooks/useThemeSwitcher'

        {/*--------------------------------------DESKTOP COMPONENT*----------------------------------------------*/}
const CustomLink = ({href, title, className=''}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}
           {/*--------------------------------------MOBILE COMPONENT----------------------------------------------*/}    
const CustomMobileLink = ({href, title, className='', toggle}) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }
    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </button>
    )
}

const navbar = () => {

    const [mode, setMode] = UseThemeSwitcher();
    const [isOpen, setIsOpen] = UseState(false)

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <header className='w-full px-32 py-8 text-lg flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
        <button className='flex-col justify-center items-center ml-2 hidden lg:flex'onClick={handleClick}> 
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        {/*--------------------------------------DESKTOP*----------------------------------------------*/}
        <div className='w-full flex justify-between items-center lg:hidden'>
        <nav className='flex items-center justify-center flex-wrap'>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")} 
                className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} mr-3`}>
                    {
                        mode === "dark" ? <SunIcon  className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
                    }
                </button>
                <motion.a href="https://www.facebook.com/ezekiel.flores1204" target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><FacebookIcon /></motion.a>
                <motion.a href="https://github.com/Ezek-404" target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><GithubIcon /></motion.a>
                <motion.a href="https://linkedin.com/in/ezek-flores/" target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><LinkedInIcon /></motion.a>
            </nav>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='mx-4'/>
            </nav>
        </div>
        
           {/*--------------------------------------MOBILE----------------------------------------------*/}         
       {
        isOpen ? 
        <motion.div initial={{scale:0, opacity:0, x: "-50%", y: '-50%'}} animate={{scale:1, opacity:1}} className='min-w-[70vw] flex flex-col justify-start z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
        <nav className='flex items-center flex-col justify-center'> 
            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick}/>
            <CustomMobileLink href="/about" title="About" className='' toggle={handleClick}/>
            <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick}/>
        </nav>

        <nav className='flex items-center justify-center flex-wrap mt-2'>
            <motion.a href="https://www.facebook.com/ezekiel.flores1204" target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'><FacebookIcon /></motion.a>
            <motion.a href="https://github.com/Ezek-404" target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'><GithubIcon /></motion.a>
            <motion.a href="https://linkedin.com/in/ezek-flores/" target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'><LinkedInIcon /></motion.a>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} 
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                {
                    mode === "dark" ? <SunIcon  className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
                }
            </button>
        </nav>
    </motion.div>
    : null
       }
    </header>
  )
}

export default navbar