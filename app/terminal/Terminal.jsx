"use client"

import React, { useEffect, useState } from 'react'
import { FaTerminal } from 'react-icons/fa';
export default function Terminal() {


    const [Terminal, setTerminal] = useState(null);
    const [ContextProvider, setContextProvider] = useState(null);

    useEffect(() => {
        import("react-terminal").then((mod) => {
            setTerminal(() => mod.ReactTerminal);
            setContextProvider(() => mod.TerminalContextProvider);
        });
    }, []);

    // ✅ helper to render multi-line text properly
    const renderLines = (text) => (
        <div className="whitespace-pre-wrap font-mono">
            {text.split("\n").map((line, i) => (
                <p key={i}>{line || "\u00A0"}</p>
            ))}
        </div>
    );

    const commands = {
        test: () => renderLines("line1\nline2\nline3"),

        help: () => (
            <div className="font-mono">
                {[
                    "Available commands:",
                    "help        - Show this help message",
                    "about       - About Anthony Gomez",
                    "skills      - List technical skills",
                    "projects    - Show featured projects",
                    "contact     - Get contact information",
                    "education   - Educational background",
                    "experience  - Work experience",
                    "stack       - Tech stack details",
                    "clear       - Clear the terminal",
                    "date        - Show current date",
                    "whoami      - Current user info",
                    "echo [text] - Echo back text",
                ].map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>
        ),

        about: () => renderLines(`
Hi, I'm Rupon Anthony Gomez 👋
A passionate Web Developer focused on building modern, scalable applications.

I enjoy turning ideas into real-world projects using React, Next.js, and full-stack technologies.
`),

        skills: () => renderLines(`
Frontend:
- HTML, CSS, Tailwind CSS
- JavaScript (ES6+)
- React.js, Next.js

Backend:
- Node.js, Express.js
- MongoDB, Firebase

Other:
- Git, REST APIs, Responsive Design
`),

        projects: () => renderLines(`
- WWE Streaming Platform (Next.js, PlayerJS)
- E-commerce Website (MERN Stack + Stripe)
- Portfolio Website (Next.js + Tailwind)

Type 'contact' to get links.
`),

        contact: () => renderLines(`
Email: rupongomez@email.com
GitHub: https://github.com/rupongomez
Portfolio: ....
Phone/ Whatsapp: +8801998020978
Telegram: @rupongomez
`),

        education: () => renderLines(`
- Complete Web Development Course - Programming Hero
- Continuous learning through real-world projects
-
`),

        experience: () => renderLines(`
- Built multiple full-stack projects
- Experience with client requirements & UI/UX
`),

        stack: () => renderLines(`
Tech Stack:
- Next.js + React
- Tailwind CSS + DaisyUI
- Node.js + MongoDB
- Firebase
`),

        date: () => new Date().toString(),

        whoami: "Rupon Anthony Gomes",

        echo: (...text) => text.join(" "),

        cd: (directory) => `changed path to ${directory}`
    };

    if (!Terminal || !ContextProvider) return null;
    return (
        <div className='mx-32 mt-32 '>

            <div className='flex justify-between items-center pb-2 border-b-[1px] border-[#2D333A]'>
                <div className='text-fg-primary flex items-center gap-2'>
                    <FaTerminal className='text-blue-400' />
                    <h2>Interactive Terminal</h2>
                </div>
                <div className='border border-neutral px-2 text-neutral-500 items-center rounded-lg text-sm font-mono'>
                    terminal.sh
                </div>
            </div>

            <p className='font-mono'>
                Explore my portfolio through the command line.
            </p>

            <div className='mt-10'>
                <ContextProvider>
                    <Terminal
                        commands={commands}
                        themes={{
                            "my-custom-theme": {
                                themeBGColor: "#010409",
                                themeToolbarColor: "#DBDBDB",
                                themeColor: "#FFFEFC",
                                themePromptColor: "#a917a8"
                            }
                        }}
                        theme="my-custom-theme"
                    />
                </ContextProvider>
            </div>

            <p>
                Try commands:
                <span className='font-mono text-blue-600'> help</span>,
                <span className='font-mono text-blue-600'> about</span>,
                <span className='font-mono text-blue-600'> skills</span>
            </p>
        </div>
    )
}
