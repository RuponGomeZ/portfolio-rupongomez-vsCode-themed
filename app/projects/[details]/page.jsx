import React from 'react'
import { BsFillFolderFill } from 'react-icons/bs'
import Link from 'next/link'
export function generateStaticParams() {
    return [
        { details: 'bistroboss' },
        { details: 'plantnet' },
        { details: 'car-doctor' },
        { details: 'medico' },
    ]
}
const projects = [
    {
        name: 'BistroBoss',
        slug: 'bistroboss',
        image: 'https://i.ibb.co.com/7dP9k425/bistroboss.webp',
        description:
            'A restaurant order management system with full payment gateway integration and role-based access including admin and seller dashboards.',
        technologies: [
            'React',
            'Node.js',
            'MongoDB',
            'Express',
            'Stripe',
            'SSLCommerz',
        ],
        live_url: 'https://stro-boss-3b7c5.web.app/',
        source_code:
            'https://github.com/RuponGomeZ/bistro-boss-resturent-management',
        features: [
            'Role-based dashboard for admins and sellers with secure authentication',
            'Integrated multiple payment gateways (Stripe and SSLCommerz)',
            'Dynamic order management system with real-time updates',
            'Responsive UI optimized for both desktop and mobile devices',
        ],
        challenges:
            'Handled integration of multiple payment gateways and ensured secure transaction flow while maintaining consistent UI/UX across different roles.',
        improvements:
            'Add more analytics for orders by time range, improve admin reporting, and optimize seller workflows for faster operations.',
    },
    {
        name: 'PlantNet',
        slug: 'plantnet',
        image: 'https://i.ibb.co.com/jZrxTGrS/new-2017-imac-pro-dark-grey-front.png',
        description:
            'A multi-vendor e-commerce platform with role-based access, featuring admin and seller dashboards, product management, and secure payment integration.',
        technologies: [
            'React',
            'Node.js',
            'MongoDB',
            'Express',
            'Stripe',
            'nodemailer',
        ],
        live_url: 'https://plantnet-d1f24.web.app',
        source_code: 'https://github.com/RuponGomeZ/PlantNet-Ecommerce-Website',
        features: [
            'Multi-vendor system allowing multiple sellers to manage products independently',
            'Admin dashboard for monitoring users, products, and transactions',
            'Secure authentication and authorization with protected routes',
            'End-to-end payment processing using Stripe',
        ],
        challenges:
            'Designed a scalable multi-vendor architecture and managed complex state handling between admin, seller, and user roles.',
        improvements:
            'Enhance search & filtering performance, add product comparison, and implement stronger order tracking notifications for sellers and buyers.',
    },
    {
        name: 'Car Doctor',
        slug: 'car-doctor',
        image:
            'https://i.ibb.co.com/rRYcCnpQ/nextjs-car-doctor-delta-vercel-app.png',
        description:
            'A car service booking platform where users can schedule and order services like engine oil changes, battery replacement, and full vehicle repair.',
        technologies: [
            'Next.js',
            'Node.js',
            'MongoDB',
            'Stripe',
            'Tailwind CSS',
            'NextAuth',
            'Vercel',
        ],
        live_url: 'https://nextjs-car-doctor-delta.vercel.app/',
        source_code: 'https://github.com/RuponGomeZ/nextjs-car-doctor',
        features: [
            'Service booking system with dynamic service selection',
            'Secure authentication using NextAuth',
            'Integrated Stripe for online payments',
            'Server-side rendering with Next.js for improved performance and SEO',
            'Responsive UI built with Tailwind CSS',
        ],
        challenges:
            'Integrated authentication, payment system, and database operations while maintaining performance and smooth user experience in a server-rendered Next.js application.',
        improvements:
            'Add real-time order status updates, expand service categories with better pricing rules, and improve customer support workflows.',
    },
    {
        name: 'Medico+',
        slug: 'medico',
        image:
            'https://i.ibb.co.com/RTztwPsp/medical-camp-management-dda87-web-app.png',
        description:
            'A medical camp management system with role-based access, allowing users to register for camps, make payments, cancel registrations, and manage participation.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
        live_url: 'https://medical-camp-management-dda87.web.app/',
        source_code: 'https://github.com/RuponGomeZ/Medical_Camp_Manage_System_Client',
        features: [
            'Camp registration and management system with user dashboard',
            'Secure payment and cancellation workflow',
            'Role-based access control for users and admins',
            'Real-time data handling for registrations and updates',
        ],
        challenges:
            'Managed complex user flows including registration, cancellation, and payment handling while ensuring data consistency across the system.',
        improvements:
            'Add admin analytics for camp participation, implement better seat availability logic, and extend reminders/notifications for users.',
    },
]

export default async function ProjectDetails({ params }) {
    const { details } = await params;

    console.log(details);

    const normalizedDetails = details.toLowerCase().trim();
    const project = projects.find((p) => p.slug === normalizedDetails);

    // Debug: helps confirm the route param is arriving as expected
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        // console.log('[projects/[details]] params.details =', details, 'normalized =', normalizedDetails)
    }

    if (!project) {

        return (
            <div className="mt-32 mx-32 min-h-screen">
                <div className="flex justify-between items-center pb-2 border-b-[1px] border-[#2D333A]">
                    <div className="text-fg-primary flex items-center gap-2">
                        <BsFillFolderFill className="text-blue-400" />
                        <h2>Projects</h2>
                    </div>
                    <div className="border border-neutral px-2 text-neutral-500 rounded-lg">
                        projects/[details].jsx
                    </div>
                </div>
                <div className="my-10 text-fg-secondary">Project not found.</div>
                <Link href="/projects" className="text-blue-400 hover:underline">
                    Back to projects
                </Link>
            </div>
        )
    }

    return (
        <div className="mt-32 mx-auto max-w-7xl px-6 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center pb-3 border-b border-[#2D333A]">
                <div className="flex items-center gap-2">
                    <BsFillFolderFill className="text-blue-400 text-xl" />
                    <h1 className="text-3xl font-semibold">{project.name}</h1>
                </div>

                <div className="border border-neutral px-3 py-1 rounded-md text-neutral-500">
                    projects/[details].jsx
                </div>
            </div>

            {/* Hero */}
            <div className="mt-10 grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <div className="overflow-hidden rounded-lg border border-[#2D333A]">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full object-cover"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        {project.name}
                    </h2>

                    <p className="text-fg-secondary leading-8">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-2 rounded-md border border-blue-500 text-blue-400 font-mono text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition"
                        >
                            Live Project
                        </a>

                        <a
                            href={project.source_code}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-3 rounded-md border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>
            </div>

            {/* Details */}
            <div className="mt-16 space-y-10">

                <section className="border border-[#2D333A] rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-blue-400 mb-5">
                        Main Technology Stack
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-2 rounded-md border border-[#2D333A]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="border border-[#2D333A] rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-blue-400 mb-5">
                        Brief Description
                    </h3>

                    <p className="text-fg-secondary leading-8">
                        {project.description}
                    </p>
                </section>

                <section className="border border-[#2D333A] rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-blue-400 mb-5">
                        Challenges Faced
                    </h3>

                    <p className="text-fg-secondary leading-8">
                        {project.challenges}
                    </p>
                </section>

                <section className="border border-[#2D333A] rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-blue-400 mb-5">
                        Potential Improvements & Future Plans
                    </h3>

                    <p className="text-fg-secondary leading-8">
                        {project.improvements}
                    </p>
                </section>
            </div>

            <div className="mt-12 mb-20">
                <Link
                    href="/projects"
                    className="inline-block border border-blue-500 px-6 py-3 rounded-md text-blue-400 hover:bg-blue-500/10 transition"
                >
                    ← Back to Projects
                </Link>
            </div>
        </div>
    )
}

