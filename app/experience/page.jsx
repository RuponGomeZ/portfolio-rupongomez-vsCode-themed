import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoBriefcase } from 'react-icons/io5'

export const metadata = {
    title: "Experience | Rupon Anthony Gomez",
    description: "I've learned html,css and javascript back in 2021 then I started learning the mern stack and then I've mastered the following technologies HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, Firebase, Node.js, Express.js, MongoDB, Stripe, SSLCommerz, bkash",
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
    ]
}

export default function page() {
    const techStack = [
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
        "SSLCommerz"
    ];
    return (
        <div className='mx-32 mt-32 min-h-screen'>
            <div className='flex items-center justify-between   pb-2 border-b-[1px] border-[#2D333A]'>
                <div className='flex  items-center gap-2 text-fg-primary'>
                    <IoBriefcase />
                    <h2>Professional Experience</h2>
                </div>
                <div>
                    <div className='border border-neutral px-2 text-neutral-500  rounded-lg '>experience.json</div>
                </div>
            </div>
            <div>
                <p className='text-fg-secondary mt-5 mb-10'>My journey as a developer and the impact I’ve created through my work.</p>
            </div>

            <div className='border  border-neutral-700 border-hover-color rounded-2xl w-full p-10'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='font-bold text-xl '>Software Developer</h2>
                        <p className='text-fg-secondary'>Growth Curve Agency</p>
                    </div>
                    <div>
                        <div className='border border-neutral px-2 text-neutral-500  rounded-lg flex items-center gap-1'><FaCalendarAlt className='text-sm' />
                            Nov 2025 - present</div>
                    </div>
                </div>

                <div className='mt-7 border-b-[1px] border-gray-600 pb-5 '>
                    <ul className="list-disc pl-5 space-y-1 marker:text-blue-500 text-fg-secondary">
                        <li>Developed and deployed multiple e-commerce websites for clients using the MERN stack and Next.js</li>
                        <li>Built responsive and user-friendly interfaces using React.js and Tailwind CSS</li>
                        <li>Integrated payment systems including Stripe and SSLCommerz for secure transactions</li>
                        <li>Improved client visibility by collaborating with team members on SEO and digital marketing strategies</li>
                        <li>Customized website features based on client requirements, improving usability and performance</li>
                        <li>Managed deployment and updates using platforms like Vercel and Firebase</li>
                    </ul>
                </div>

                <div className='flex gap-2 text-fg-secondary  flex-wrap mt-5'>{techStack.map(stack => (
                    <div className='border rounded-lg py-1 px-3 border-[#2D333A] bg-blue-300 text-blue-600' key={stack}>
                        {stack}
                    </div>
                ))}</div>
            </div>
        </div>
    )
}
