import React from 'react'
import { BsFillFolderFill } from 'react-icons/bs'
import AnimatedContent from '../skills/AnimatedContent'


export const metadata = {
    title: "Projects | Rupon Anthony Gomez",
    description: "This are some projects I made for my clients or personal interest such as E-commerce, Restaurants management, campaign management, using HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, Firebase, Node.js, Express.js, MongoDB, Stripe, SSLCommerz, bkash",
    keywords: [
        "e-commerce",
        "ecommerce",
        "E-commerce",
        "website",
        "web application",
        "software",
        "full stack",
        "mern",
        "using",
        "react",
        "next.js",
        "nextjs",
        "NextJS",
        "JavaScript",
        "Html",
        "css",
    ]
}

export default function page() {
    const projects = [
        {
            "name": "BistroBoss",
            "role": "Full Stack Developer",
            "description": "A restaurant order management system with full payment gateway integration and role-based access including admin and seller dashboards.",
            "live_url": "https://stro-boss-3b7c5.web.app/",
            "source_code": "https://github.com/RuponGomeZ/bistro-boss-resturent-management",
            "technologies": ["React", "Node.js", "MongoDB", "Express", "Stripe", "SSLCommerz"],
            "features": [
                "Role-based dashboard for admins and sellers with secure authentication",
                "Integrated multiple payment gateways (Stripe and SSLCommerz)",
                "Dynamic order management system with real-time updates",
                "Responsive UI optimized for both desktop and mobile devices"
            ],
            "challenges": "Handled integration of multiple payment gateways and ensured secure transaction flow while maintaining consistent UI/UX across different roles."
        },
        {
            "name": "PlantNet",
            "role": "Full Stack Developer",
            "description": "A multi-vendor e-commerce platform with role-based access, featuring admin and seller dashboards, product management, and secure payment integration.",
            "live_url": "https://plantnet-d1f24.web.app",
            "source_code": "https://github.com/RuponGomeZ/PlantNet-Ecommerce-Website",
            "technologies": ["React", "Node.js", "MongoDB", "Express", "Stripe", "nodemailer"],
            "features": [
                "Multi-vendor system allowing multiple sellers to manage products independently",
                "Admin dashboard for monitoring users, products, and transactions",
                "Secure authentication and authorization with protected routes",
                "End-to-end payment processing using Stripe"
            ],
            "challenges": "Designed a scalable multi-vendor architecture and managed complex state handling between admin, seller, and user roles."
        },
        {
            "name": "Car Doctor",
            "role": "Full Stack Developer",
            "description": "A car service booking platform where users can schedule and order services like engine oil changes, battery replacement, and full vehicle repair.",
            "live_url": "https://nextjs-car-doctor-delta.vercel.app/",
            "source_code": "https://github.com/RuponGomeZ/nextjs-car-doctor",
            "technologies": [
                "Next.js",
                "Node.js",
                "MongoDB",
                "Stripe",
                "Tailwind CSS",
                "NextAuth",
                "Vercel"
            ],
            "features": [
                "Service booking system with dynamic service selection",
                "Secure authentication using NextAuth",
                "Integrated Stripe for online payments",
                "Server-side rendering with Next.js for improved performance and SEO",
                "Responsive UI built with Tailwind CSS"
            ],
            "challenges": "Integrated authentication, payment system, and database operations while maintaining performance and smooth user experience in a server-rendered Next.js application."
        },
        {
            "name": "Medico+",
            "role": "Full Stack Developer",
            "description": "A medical camp management system with role-based access, allowing users to register for camps, make payments, cancel registrations, and manage participation.",
            "live_url": "https://medical-camp-management-dda87.web.app/",
            "source_code": "https://github.com/RuponGomeZ/Medical_Camp_Manage_System_Client",
            "technologies": ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            "features": [
                "Camp registration and management system with user dashboard",
                "Secure payment and cancellation workflow",
                "Role-based access control for users and admins",
                "Real-time data handling for registrations and updates"
            ],
            "challenges": "Managed complex user flows including registration, cancellation, and payment handling while ensuring data consistency across the system."
        }
    ]
    return (
        <div className='mt-32 mx-32 min-h-screen'>
            <div className='flex justify-between items-center pb-2 border-b-[1px] border-[#2D333A]'>
                <div className='text-fg-primary flex items-center gap-2'>
                    <BsFillFolderFill className='text-blue-400' />
                    <h2 className=''>Projects</h2>
                </div>
                <div className='border border-neutral px-2 text-neutral-500  rounded-lg '>projects.jsx</div>
            </div>

            <div>
                <p className='my-10 text-fg-secondary'>A collection of projects I’ve worked on — from personal builds to small experiments where I explored new ideas and improved my skills.</p>
            </div>
            <div>
                <div className='grid grid-cols-1 xl:grid-cols-2  gap-16'>
                    {projects.map(p => (
                        <div

                            className='group hover:border-blue-500 border-[1px] border-[#2D333A]  rounded-lg p-10 mb-10 ' key={p.name}>
                            <div className='  items-center justify-between border-[#2D333A] border-b-[1px]  mb-10 pb-4'>
                                <div className='flex items-center justify-between mb-5'>
                                    <BsFillFolderFill className='text-3xl' />
                                    <div className=' '>
                                        <a target='_blank' href={p.live_url}>Live Demo</a> |
                                        <a target='_blank' href={p.source_code}> Source</a>
                                    </div>
                                </div>
                                <div>
                                    <h2 className=' group-hover:text-blue-500 text-fg-primary'>{p.name}</h2>
                                </div>
                            </div>

                            <div>
                                <p>{p.description}</p>
                            </div>

                            <div>

                                <div className=' my-10'>
                                    {p.features.map((list, i) => (
                                        <ul className='list-disc' key={i}>
                                            <li className='my-2 ml-4 font-mono'>{list}</li>
                                        </ul>
                                    ))}
                                </div>

                            </div>

                            <div className='flex flex-wrap gap-4 '>{p.technologies.map(s => (
                                <div key={s}>
                                    <p className='border hover:border-blue-500 hover:text-blue-500 font-mono px-2 py-1 rounded-md text-blue-600 text-sm'>{s}</p>
                                </div >
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
