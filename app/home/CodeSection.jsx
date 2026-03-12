import React from 'react'
import * as motion from "motion/react-client"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { sunburst } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function CodeSection() {

    const box = {
        borderRadius: 5,
    }
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            style={box}
        >
            <div
                className="bg-[#1e1e1e] rounded-xl shadow-xl w-full max-w-2xl overflow-hidden border border-gray-700"
            >

                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d]">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                    <span className="ml-4 text-sm text-gray-400">Home.jsx</span>
                </div>

                {/* Code area */}
                <pre className=" text-sm text-gray-300 overflow-x-auto">
                    <SyntaxHighlighter language="javascript" style={sunburst}>
                        {`
import React, { useState,useEffect } from 'react'
                        
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const developer = {
    name: 'Rupon Anthony Gomes',
    role: 'Full Stack Developer',
    stack: 'Next.js', 'React', 'Node.js', 'MongoDB',
    passion: 'Building Scalable Web Applications',
  };

  useEffect(() => {
    setTimeout(() => {
    setIsLoading(false);
    }, 1000);
  }, []);

  return <Developer info={developer} />;
};`}
                    </SyntaxHighlighter>

                </pre>

            </div>

        </motion.div>
    )
}
