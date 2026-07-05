import React from 'react'
import * as motion from "motion/react-client"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { sunburst } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function ContactPageJsonCode() {

    const box = {
        borderRadius: 5,
    }
    return (

        <div
            className="text-neutral-200 bg-neutral-950 items-center rounded-xl shadow-xl w-full h-full min-h-[500px]"
        >

            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d]">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                <span className="ml-4 text-sm text-gray-400">Home.jsx</span>
            </div>

            {/* Code area */}
            <pre className=" text-sm text-gray-300 overflow-x-auto w-full  border-gray-700">
                <SyntaxHighlighter language="javascript" style={sunburst}>
                    {`
const contactInfo = {
  name:         "Rupon Anthony Gomez",
  role:         "Full Stack Developer",

  email:        "rupongomez@gmail.com",
  phone:        "+8801998020978",
  whatsapp:     "+8801998020978",

  location:     "Dhaka, Bangladesh",
  responseTime: "Within 24 hours",

  social: {
    github:   "https://github.com/RuponGomeZ",
    linkedin: "https://www.linkedin.com/in/rupongomez/",
    whatsapp: "https://wa.me/8801998020978"
  }
};
`}
                </SyntaxHighlighter>

            </pre>

        </div>
    )
}
