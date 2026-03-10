export const ProjectView = () => {
    return (
        <main className="flex-1 lg:ml-64">
            <div className="max-w-4xl mx-auto px-6 py-8 lg:px-12 lg:py-12">
                <div className="space-y-8 animate-fade-in">

                    {/* Header */}
                    <div className="space-y-2">
                        <div className="text-4xl mb-2">🚀</div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#37352f] dark:text-[#e3e2e0]">
                            Projects
                        </h1>
                        <p className="text-lg text-[#787774] dark:text-[#9b9a97]">
                            Side projects and experiments
                        </p>
                    </div>

                    {/* Featured Projects */}
                    <div className="space-y-8 pt-4">
                        <ProjectCard
                            emoji="💻"
                            title="Jobbie"
                            description="This job portal is a modern web application designed to help job seekers discover opportunities and manage their job search more efficiently. The platform allows users to browse available job listings, filter roles by location, skills, and employment type, and view detailed job descriptions to better understand each opportunity."
                            image="/images/job.png"
                            gradient="from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600"
                            tags={["TypeScript", "React", "CSS"]}
                        />

                        <ProjectCard
                            emoji="🚀"
                            title="My Space"
                            description="A Django-based web platform for people who love space, astronomy, and everything cosmic. Users can connect with others who share their passion by joining or creating interest-based groups where they can post content and engage in discussions."
                            image="/images/space.jpg"
                            gradient="from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600"
                            tags={["Python", "Django", "Bootstrap", "HTML", "CSS", "SQLite"]}
                        />

                        <ProjectCard
                            emoji="💻"
                            title="DevBootcamp"
                            description="A Backend API for the DevBootcamp application to manage bootcamps, courses, reviews, users and authentication."
                            image="/images/bootcamp.png"
                            gradient="from-red-400 to-pink-500 dark:from-red-500 dark:to-pink-600"
                            tags={["JavaScript", "Express", "Node", "MongoDb"]}
                        />

                    </div>

                    {/* Other Projects */}
                    <div className="pt-4">
                        <h2 className="text-2xl font-bold text-[#37352f] dark:text-[#e3e2e0] mb-4">
                            Other Projects
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <SmallProjectCard
                                emoji="📝"
                                title="My Blog"
                                description="A blog platform where admin has full control to post content, manage (approve/delete) comments, and maintain the blog. Users can view published blog posts and leave comments (subject to admin approval)."
                                tags={["Python", "Django", "Bootstrap", "HTML", "CSS", "SQLite"]}
                                links={[
                                    {label: "GitHub", url: "https://github.com/SodimuDemilade/blog_project"},
                                ]}
                            />

                            <SmallProjectCard
                                emoji="⚙️"
                                title="OS Admin Dashboard"
                                description="Simple dashboard application built with React for managing users, analytics, and settings."
                                tags={["React", "TypeScript", "Node", "CSS"]}
                                links={[
                                    {label: "GitHub", url: "https://github.com/SodimuDemilade/OS-Admin-Dashboard"},
                                ]}
                            />

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

/* ===============================
   Components
=============================== */

interface ProjectCardProps {
    emoji: string;
    title: string;
    description: string;
    image: string;
    gradient: string;
    tags: string[];
    links?: { label: string; url: string }[];
}

function ProjectCard({
                         emoji,
                         title,
                         description,
                         image,
                         gradient,
                         tags,
                         links,
                     }: ProjectCardProps) {
    return (
        <div
            className="group p-6 rounded-lg border border-[#e9e9e7] dark:border-[#2f2f2f] bg-[#f7f6f3] dark:bg-[#1f1f1f] hover:border-[#2383e2] dark:hover:border-[#529cca] transition-all duration-200">

            <div className="flex flex-col md:flex-row gap-6">

                <div className="md:w-1/3 flex-shrink-0">
                    <div
                        className={`aspect-square rounded-lg overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                        <img src={image} alt={title} className="w-full h-full object-cover"/>
                    </div>
                </div>

                <div className="flex-1 space-y-4">

                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl">{emoji}</span>
                            <h2 className="text-2xl font-bold text-[#37352f] dark:text-[#e3e2e0] group-hover:text-[#2383e2] dark:group-hover:text-[#529cca] transition-colors">
                                {title}
                            </h2>
                        </div>

                        <p className="leading-relaxed">{description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {tags.map(tag => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded bg-white dark:bg-[#191919] border border-[#e9e9e7] dark:border-[#2f2f2f]"
                            >
                {tag}
              </span>
                        ))}
                    </div>

                    {links && (
                        <div className="flex flex-wrap gap-3 pt-2">
                            {links.map(link => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#2383e2] dark:text-[#529cca] hover:underline flex items-center space-x-1"
                                >
                                    <span>{link.label}</span>
                                </a>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

/* Small Project Card */

interface SmallProjectCardProps {
    emoji: string;
    title: string;
    description: string;
    tags: string[];
    links?: { label: string; url: string }[];
}

function SmallProjectCard({
                              emoji,
                              title,
                              description,
                              tags,
                              links,
                          }: SmallProjectCardProps) {
    return (
        <div
            className="group p-4 rounded-lg border border-[#e9e9e7] dark:border-[#2f2f2f] bg-[#f7f6f3] dark:bg-[#1f1f1f] hover:border-[#2383e2] dark:hover:border-[#529cca] transition-all duration-200">

            <div className="space-y-3">

                <div>
                    <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xl">{emoji}</span>
                        <h3 className="text-lg font-semibold group-hover:text-[#2383e2] dark:group-hover:text-[#529cca] transition-colors">
                            {title}
                        </h3>
                    </div>

                    <p className="text-sm">{description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded bg-white dark:bg-[#191919] border border-[#e9e9e7] dark:border-[#2f2f2f]"
                        >
              {tag}
            </span>
                    ))}
                </div>

                {links && (
                    <div className="flex flex-wrap gap-3">
                        {links.map(link => (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#2383e2] dark:text-[#529cca] hover:underline flex items-center space-x-1"
                            >
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}