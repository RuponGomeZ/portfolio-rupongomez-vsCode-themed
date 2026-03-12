import React from 'react'
import CodeSection from './CodeSection'

export default function Index() {
    return (
        <div className='flex-1 grid grid-cols-2 gap-10 items-center justify-center min-h-screen mx-auto container w-10/12 mt-16'>
            <div className='w-full '>
                <h2 className=' font-bold text-5xl'>Rupon <span className='text-blue-400'>Anthony</span> <br /> Gomes</h2>
                <h4 className='text-xl font-semibold my-5 text-neutral-500'>Full Stack Developer</h4>
                <p className='border-l-4 border-gray-500 pl-5 text-neutral-500'>What I enjoy about my work is that I get to enjoy creating full web applications from scratch. Seeing an application go from an idea to a fully functional product is like creating digital art.</p>
            </div>
            <div className='w-full '>
                <CodeSection />
            </div>
        </div>
    )
}
