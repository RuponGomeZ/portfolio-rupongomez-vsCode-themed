import Link from 'next/link'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaCode, FaDownload, FaFileAlt, FaServer, FaTools } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { IoLogoWhatsapp } from 'react-icons/io5'
import AnimatedContent from '../skills/AnimatedContent'

export const metadata = {
    title: "Resume | Rupon Anthony Gomez",
    description: "Get a clear idea about who Rupon Anthony Gomes is what he does and what are his skills",
    keywords: [
        "skills",
        "get",
        "resume",
        "template",
        "free",
        "how",
        "make",
        "download",
        "easily",
        "fast",
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
        <div className='mx-32 mt-32 mb-20 min-h-screen'>
            <div className='flex justify-between items-center pb-2 border-b-[1px] border-[#2D333A]'>
                <div className='text-fg-primary flex items-center gap-2'>
                    <FaFileAlt className='text-blue-600' />
                    <h2>Resume</h2>
                </div>
                <div className='border border-neutral px-2 text-neutral-500 items-center rounded-lg text-sm font-mono'>
                    resume.pdf
                </div>
            </div>

            <h3 className='mt-5 text-fg-secondary'>Professional summary, skills, and experience.</h3>

            <div className='mt-10'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-4xl text-primary-foreground '>Rupon Anthony Gomez </h2>
                    <Link target='_blank' href={"https://drive.google.com/file/d/14Wa-Tpk8mGb9yXjdAwUbMgA20n3dhKAF/view?usp=sharing"} className='bg-blue-600  hover:bg-blue-700 px-4 py-1 rounded-md font-mono font-semibold flex items-center gap-1 text-sm text-primary-foreground w-36'><FaDownload />Download PDF</Link>
                </div>
                <h4 className='text-blue-400 text-lg text-opacity-95'>Junior Full-Stack Software Developer</h4>

                <div className='mt-6 xl:flex  gap-4'>
                    <p className='flex items-center gap-[1px]'><FaLocationDot className='text-red-500' /> Dhaka, Bangladesh</p>
                    <p className='flex items-center gap-[1px]'><IoLogoWhatsapp className='text-green-500' />
                        <a target='_blank' href="https://wa.me/+8801998020978">+880 1998 020978</a></p>
                    <p className='flex items-center gap-[1px]'><IoIosMail className='text-xl' /> <a className='underline text-blue-400' href="mailto:rupongomez@gmail.com">rupongomez@gmail.com</a></p>
                </div>

                <div className='flex gap-2 mt-4 '>
                    <Link className='border-b-2 border-dotted hover:text-blue-400' href='https://www.linkedin.com/in/rupongomez/'>LinkedIn</Link>
                    <Link className='border-b-2 border-dotted hover:text-blue-400' href={"https://github.com/RuponGomeZ"}>GitHub </Link>
                    <Link className='border-b-2 border-dotted hover:text-blue-400' href={"/"}>Portfolio</Link>
                </div>

                <div className='mt-10 border-y-[1px] border-neutral-500 text-blue-400 font-bold text-2xl'>
                    # Objectives
                </div>
                <p>Mern Full-stack developer focused on building scalable, user-centric web applications that ensures
                    smoothest user-engaging experiences. Looking for an opportunity to apply my skills, grow as a developer,
                    and contribute meaningful impact through clean, efficient code.
                </p>

                <div className='mt-10'>
                    <h2 className='border-b-[1px] border-neutral-500 text-blue-400 font-bold text-2xl'>#Skill</h2>
                    <div className='grid grid-cols-2  gap-5 mt-5'>
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
                                className='group hover:border-blue-500 border-[1px] border-[#2D333A]  rounded-lg p-3 bg-neutral-950 ' key={skill.tech}>
                                <div className='flex text-2xl text-primary-foreground items-center justify-between       pb-4'>
                                    <h2 className=' group-hover:text-blue-500'>{skill.title}</h2>
                                </div>
                                <div className='flex flex-wrap gap-4'>{skill.tech.map(s => (
                                    <div key={s}>
                                        <p className='border hover:border-blue-500 hover:text-blue-500  text-sm px-1 font-mono rounded-md'>{s}</p>
                                    </div >
                                ))}</div>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>

                <div className='mt-10 border-b-[1px] border-neutral-500 text-blue-400 font-bold text-2xl'>
                    # Experience
                </div>

                <h2 className='mt-5 text-xl font-semibold text-primary-foreground'>Junior Full-Stack Software Developer </h2>
                <p className='text-sm'>Growth Curve Agency - Dhaka, Bangladesh</p>
                <ul className='list-disc mt-5 font-mono ml-5'>
                    <li>Developed and deployed multiple e-commerce websites for clients using the MERN stack and Next.js</li>
                    <li>Built responsive and user-friendly interfaces using React.js and Tailwind CSS</li>
                    <li>Integrated payment systems including Stripe and SSLCommerz for secure transactions</li>
                    <li>Improved client visibility by collaborating with team members on SEO and digital marketing strategies</li>
                    <li>Customized website features based on client requirements, improving usability and performance</li>
                    <li>Managed deployment and updates using platforms like Vercel and Firebase</li>
                </ul>
            </div>

            <div className='mt-10 border-b-[1px] border-neutral-500 text-blue-400 font-bold text-2xl'>
                # Projects
            </div>
            <p className='mt-5 text-xl font-semibold text-primary-foreground '><span className='text-red-600'>Bistro Boss</span> - Resturant Management System</p>
            <ul className='list-disc font-mono mt-1 ml-5'>
                <li>
                    <a className='mr-2 text-blue-500 font-mono underline' href="https://stro-boss-3b7c5.web.app/">Live Demo </a><span className='mr-2'>|</span>
                    <a className='mr-2 text-blue-500 font-mono underline' href="https://github.com/RuponGomeZ/bistro-boss-resturent-management">GitHub</a>
                </li>
                <li>Built a full-stack restaurant ordering platform with menu management, cart, and order system</li>
                <li>Implemented authentication and role-based access using JWT and Firebase</li>
                <li>Integrated Stripe and SSLCommerz for secure multi-payment processing</li>
                <li>Tech: React.js, Node.js, Express.js, MongoDB, Tailwind CSS</li>
            </ul>

            <p className='mt-5 text-xl font-semibold text-primary-foreground '><span className='text-green-600'> PlantNet</span> - E-Commerce Website</p>
            <ul className='list-disc font-mono mt-1 ml-5'>
                <li>
                    <a className='mr-2 text-blue-500 font-mono underline' href="https://plantnet-d1f24.web.app/">Live Demo </a><span className='mr-2'>|</span>
                    <a className='mr-2 text-blue-500 font-mono underline' href="https://github.com/RuponGomeZ/PlantNet-Ecommerce-Website">GitHub</a>
                </li>
                <li>Built a full-stack online store with authentication, product management, and payment integration</li>
                <li>Tech: React.js, Node.js, Express.js, MongoDB, Stripe</li>
            </ul>
        </div>
    )
}
