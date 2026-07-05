import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'Social Links | Rupon Anthony Gomez',
    description: 'Connect with Rupon on social media.',
}

const socials = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/rupongomez',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rupongomez/',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/RuponGomeZ',
    },
    {
        name: 'X (Twitter)',
        href: 'https://x.com/RuponGomeZ',
    },
]

export default function SocialPage() {
    return (
        <div className='mx-32 mt-32 min-h-screen'>
            <div className='flex justify-between items-center pb-2 border-b-[1px] border-[#2D333A]'>
                <div className='text-fg-primary flex items-center gap-2'>
                    <h2>Social Links</h2>
                </div>
                <div className='border border-neutral px-2 text-neutral-500 items-center rounded-lg text-sm font-mono'>
                    social.ts
                </div>
            </div>

            <p className='mt-6 text-neutral-400 max-w-2xl'>
                Follow and connect with me—GitHub, LinkedIn, X (Twitter), and Facebook.
            </p>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                {socials.map((s) => (
                    <Link
                        key={s.href}
                        href={s.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group'
                    >
                        <div className='rounded-xl border border-[#2D333A] bg-[#0D1117] p-5 hover:border-blue-400/60 transition-colors'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <div className='text-sm text-neutral-400 font-mono'>Connect on</div>
                                    <div className='text-xl font-semibold text-white group-hover:text-blue-400 transition-colors'>
                                        {s.name}
                                    </div>
                                </div>
                                <div className='text-blue-400 group-hover:translate-x-0.5 transition-transform'>
                                    ↗
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

