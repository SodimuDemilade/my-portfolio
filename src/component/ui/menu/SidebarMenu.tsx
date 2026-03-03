import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {RouteConstant} from "@/util/constants/routeConstant.ts";

const MenuItem = ({title, path, icon}: { title: string, path: string, icon: string }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const navLinkClass = (path: string) =>
        `flex items-center space-x-3 px-2 py-1.5 rounded-md text-sm transition-colors cursor-pointer ${
            location.pathname === path
                ? "bg-[#e9e9e7] dark:bg-[#2f2f2f] text-[#37352f] dark:text-[#e3e2e0]"
                : "text-[#787774] dark:text-[#9b9a97] hover:bg-[#f1f1ef] dark:hover:bg-[#2f2f2f] hover:text-[#37352f] dark:hover:text-[#e3e2e0]"
        }`;


    return (
        <div onClick={() => {
            navigate(path)
        }} className={navLinkClass(path)}>
            <span>{icon}</span>
            <span>{title}</span>
        </div>
    )
}

export default function Sidebar({isOpen}: { isOpen: boolean }) {

    // Initialize theme
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window === "undefined") return false;

        const stored = localStorage.getItem("theme");
        if (stored) return stored === "dark";

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleTheme = () => {
        const newTheme = darkMode ? "light" : "dark";
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0 bg-[#f7f6f3] dark:bg-[#1f1f1f]
      border-r border-[#e9e9e7] dark:border-[#2f2f2f]`}
        >
            <div className="h-full px-3 py-4 overflow-y-auto flex flex-col">

                {/* Header */}
                <div className="mb-6 px-2 flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="text-2xl">👨‍💻</div>
                        <div>
                            <h1 className="text-xs font-semibold text-[#37352f] dark:text-[#e3e2e0] group-hover:text-[#2383e2] dark:group-hover:text-[#529cca] transition-colors">
                                Oluwademilade Sodimu
                            </h1>
                            <p className="text-xs text-[#787774] dark:text-[#9b9a97]">
                                Software Engineer
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1">
                    <MenuItem icon={"🏠"} path={RouteConstant.dashboard.landing.path} title={"Home"}/>
                    <MenuItem icon={"💼"} path={RouteConstant.dashboard.experience.path} title={"Experience"}/>
                    <MenuItem icon={"🚀"} path={RouteConstant.dashboard.project.path} title={"Projects"}/>
                    <MenuItem icon={"✉️"} path={RouteConstant.dashboard.contact.path} title={"Contact"}/>
                </nav>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-[#e9e9e7] dark:border-[#2f2f2f]">
                    <div className="flex items-center justify-between px-2">

                        {/* Social Links */}
                        <div className="flex items-center space-x-3">
                            <a
                                href="https://github.com/SodimuDemilade"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e3e2e0] transition-colors"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sodimudemilade"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#787774] dark:text-[#9b9a97] hover:text-[#37352f] dark:hover:text-[#e3e2e0] transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? "🌙" : "☀️"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}