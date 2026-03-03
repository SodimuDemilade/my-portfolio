export const LandingView = () => {
    return (
        <main className="flex-1 lg:ml-64">
            <div className="max-w-4xl mx-auto px-6 py-8 pt-16 lg:px-12 lg:py-12">
                <div className="space-y-8 animate-fade-in">

                    {/* Hero Section */}
                    <div className="space-y-4">
                        <div className="text-5xl mb-2">👋</div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-[#37352f] dark:text-[#e3e2e0]">
                            Hi, I'm Demilade
                        </h1>

                        <p className="text-xl text-[#787774] dark:text-[#9b9a97] leading-relaxed">
                            Software Engineer
                        </p>
                    </div>

                    {/* About Section */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-[#37352f] dark:text-[#e3e2e0] leading-relaxed">
                            I'm a Software Engineer with experience building and maintaining complex web
                            applications. Proficient in React, TypeScript, and JavaScript,
                            with backend experience using Java (Spring Boot), Python (Django) and
                            JavaScript (Express). In my free time, I enjoy reading, watching movies, travelling and
                            spending time with friends.
                            Say hi!
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">

                        <StatCard
                            icon="💼"
                            title="Last Role"
                            main="Software Engineer"
                            sub="Qucoon • Lagos, Nigeria"
                        />

                        <StatCard
                            icon="🎓"
                            title="Education"
                            main="Computer Science"
                            sub="Covenant University"
                        />

                        <StatCard
                            icon="🚀"
                            title="Experience"
                            main="2+ Years"
                            sub="Software Engineering"
                        />

                    </div>

                    {/* Tech Stack */}
                    <div className="pt-4">
                        <h2 className="text-2xl font-bold text-[#37352f] dark:text-[#e3e2e0] mb-4">
                            Tech Stack
                        </h2>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "JavaScript",
                                "TypeScript",
                                "React",
                                "React Native",
                                "Next",
                                "Java",
                                "Spring Boot",
                                "Python",
                                "Django",
                                "Express",
                                "AWS",
                                "PostgreSQL",
                                "MongoDb",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 text-sm rounded-md bg-[#f7f6f3] dark:bg-[#1f1f1f] border border-[#e9e9e7] dark:border-[#2f2f2f] text-[#37352f] dark:text-[#e3e2e0] hover:border-[#2383e2] dark:hover:border-[#529cca] transition-colors"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-4 flex flex-wrap gap-4 text-sm">
                        <a
                            href="mailto:demisodimu@gmail.com"
                            className="flex items-center space-x-2 text-[#2383e2] dark:text-[#529cca] hover:underline"
                        >
                            <span>✉️</span>
                            <span>demisodimu@gmail.com</span>
                        </a>

                        <a
                            href="https://tomiwaola.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-[#2383e2] dark:text-[#529cca] hover:underline"
                        >
                            <span>🌐</span>
                            <span>tomiwaola.ca</span>
                        </a>
                    </div>

                </div>
            </div>
        </main>
    );
};

/* Reusable Stat Card Component */
const StatCard = ({icon, title, main, sub}: { icon: string, title: string, main: string, sub: string }) => (
    <div className="p-4 rounded-lg bg-[#f7f6f3] dark:bg-[#1f1f1f] border border-[#e9e9e7] dark:border-[#2f2f2f]">
        <div className="text-2xl mb-2">{icon}</div>
        <div className="text-sm text-[#787774] dark:text-[#9b9a97]">
            {title}
        </div>
        <div className="text-lg font-semibold text-[#37352f] dark:text-[#e3e2e0]">
            {main}
        </div>
        <div className="text-sm text-[#787774] dark:text-[#9b9a97]">
            {sub}
        </div>
    </div>
);