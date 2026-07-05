import { FaFileCode } from "react-icons/fa";
import { BiSolidFileCss, BiSolidFileJs } from "react-icons/bi";
import { LuFileJson, LuFileTerminal } from "react-icons/lu";
import { BsFiletypeJsx } from "react-icons/bs";
import { TbFileCv } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";

export const tabs = [
    {
        name: "Home.jsx",
        tabName: "Home.jsx",
        route: "/",
        icon: FaFileCode,
        iconClass: "text-blue-400",
    },
    {
        name: "about",
        tabName: "about.css",
        route: "/about",
        icon: BiSolidFileCss,
        iconClass: "text-orange-400",
    },
    {
        name: "experience",
        tabName: "experience.json",
        route: "/experience",
        icon: LuFileJson,
        iconClass: "text-yellow-300",
    },
    {
        name: "skills",
        tabName: "skills.js",
        route: "/skills",
        icon: BiSolidFileJs,
        iconClass: "text-orange-300",
    },
    {
        name: "projects",
        tabName: "projects.jsx",
        route: "/projects",
        icon: BsFiletypeJsx,
        iconClass: "text-blue-300",
    },
    {
        name: "achievements",
        tabName: "achievements.json",
        route: "/achievements",
        icon: LuFileJson,
        iconClass: "text-yellow-300",
    },
    {
        name: "terminal",
        tabName: "terminal.sh",
        route: "/terminal",
        icon: LuFileTerminal,
        iconClass: "text-gray-300",
    },
    {
        name: "contact",
        tabName: "contact.css",
        route: "/contact",
        icon: FaFileCode,
        iconClass: "text-blue-300",
    },
    {
        name: "Social",
        tabName: "social.ts",
        route: "/social",
        icon: FaFileCode,
        iconClass: "text-blue-400",
    },
    {
        name: "resume",
        tabName: "resume.pdf",
        route: "/resume",
        icon: TbFileCv,
        iconClass: "text-red-400",
    },
    {
        name: "Settings",
        tabName: "Settings",
        route: "/settings",
        icon: FaGear,
        iconClass: "text-red-400",
    },
];
