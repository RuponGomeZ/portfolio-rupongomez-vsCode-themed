import React from 'react'
import { BsCpuFill } from 'react-icons/bs'
import { FaCode, FaServer, FaTools } from 'react-icons/fa';
import AnimatedContent from './AnimatedContent'
import SplashCursor from './SplashCursor';

export const metadata = {
    title: "Skills | Rupon Anthony Gomez",
    description: "I can work as both frontend and backed developer. I love making the whole site but I can work based on the organizations requirements",
    keywords: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Firebase",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "SSLCommerz",
        "years",
        "based",
        "hire",
        "tailwind",
        "daisyUI",
        "shadcn ui"
    ]
}

export default function page() {

    const skills = [
        {
            title: "Frontend",
            tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Next.js"],
            icon: <FaCode />
        },
        {
            title: "Backend",
            tech: ["Node.js", "Express.js", "MongoDB", "Firebase"],
            icon: <FaServer />
        },
        {
            title: "Tools",
            tech: ["Git", "GitHub", "Vercel", "Firebase Hosting", "Postman", "VS Code", "MongoDB Compass", "Netlify", "Figma"],
            icon: <FaTools />

        }
    ];

    return (
        <div className='mt-32 mx-32 sticky top-40 overflow-y-hidden min-h-screen'>
            <div className='flex justify-between items-center pb-2 border-b-[1px] border-[#2D333A]'>
                <div className='text-fg-primary flex items-center gap-2'>
                    <BsCpuFill className='text-blue-400' />
                    <h2 className=''>Tech Stacks</h2>
                </div>
                <div className='border border-neutral px-2 text-neutral-500  rounded-lg '>skills.js</div>
            </div>

            <div>
                <p className='my-10 text-fg-secondary'>The tools and technologies I use to turn ideas into reality.</p>
            </div>

            <SplashCursor />

            <div className='grid grid-cols-1 xl:grid-cols-2  gap-16'>
                {skills.map(skill => (
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0}
                        className='group hover:border-blue-500 border-[1px] border-[#2D333A]  rounded-lg p-10 mb-10 ' key={skill.tech}>
                        <div className='flex text-fg-primary items-center justify-between border-[#2D333A] border-b-[1px]  mb-10 pb-4'>
                            <h2 className=' group-hover:text-blue-500'>{skill.title}</h2>
                            <div className='text-blue-500 border-[1px] border-[#2D333A] p-2 rounded-lg'>
                                {skill?.icon}
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-4'>{skill.tech.map(s => (
                            <div key={s}>
                                <p className='border hover:border-blue-500 hover:text-blue-500 text-fg-secondary px-2 py-1 rounded-md'>{s}</p>
                            </div >
                        ))}</div>
                    </AnimatedContent>
                ))}
            </div>
        </div>
    )
}
