import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-center lg:flex-col lg:py-6'>
            <div className='flex items-center dark:text-light'>           
            {new Date().getFullYear()}&copy; All Rights Reserved
            </div>
        </Layout>
    </footer>
  )
}

export default Footer