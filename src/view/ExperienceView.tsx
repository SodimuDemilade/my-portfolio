interface ExperienceItemProps {
    icon: string;
    company: string;
    title: string;
    location: string;
    period: string;
    bullets: string[];
    skills: string[];
}

function ExperienceItem({
                            icon,
                            company,
                            title,
                            location,
                            period,
                            bullets,
                            skills,
                        }: ExperienceItemProps) {
    return (
        <div className="relative pl-8 pb-8 border-l-2 border-[#e9e9e7] dark:border-[#2f2f2f] last:border-l-0 last:pb-0">

            {/* Timeline Dot */}
            <div
                className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-[#2383e2] dark:bg-[#529cca] border-2 border-white dark:border-[#191919]"/>

            <div className="space-y-4">

                <div className="flex items-start justify-between gap-4 flex-wrap">

                    <div className="flex-1 min-w-50">

                        <div className="flex items-center space-x-2 mb-1">
                            <span className="text-2xl">{icon}</span>
                            <h2 className="text-2xl font-bold text-[#37352f] dark:text-[#e3e2e0]">
                                {company}
                            </h2>
                        </div>

                        <div className="text-lg font-semibold text-[#37352f] dark:text-[#e3e2e0]">
                            {title}
                        </div>

                        <div className="text-sm text-[#787774] dark:text-[#9b9a97]">
                            {location}
                        </div>
                    </div>

                    <div className="text-sm text-[#787774] dark:text-[#9b9a97] font-medium">
                        {period}
                    </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2">
                    {bullets.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
              <span className="text-[#2383e2] dark:text-[#529cca] mt-1.5">
                •
              </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded bg-[#f7f6f3] dark:bg-[#1f1f1f] border border-[#e9e9e7] dark:border-[#2f2f2f]"
                        >
              {skill}
            </span>
                    ))}
                </div>

            </div>
        </div>
    );
}

export const ExperienceView = () => {
    return (
        <main className="flex-1 lg:ml-64">
            <div className="max-w-4xl mx-auto px-6 py-8 lg:px-12 lg:py-12">
                <div className="space-y-8 animate-fade-in">

                    {/* Header */}
                    <div className="space-y-2">
                        <div className="text-4xl mb-2">💼</div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#37352f] dark:text-[#e3e2e0]">
                            Experience
                        </h1>
                        <p className="text-lg text-[#787774] dark:text-[#9b9a97]">
                            My professional journey in software engineering
                        </p>
                    </div>

                    {/* Timeline Container */}
                    <div className="space-y-6 pt-4">

                        {/* Experience Card Component */}
                        <ExperienceItem
                            icon="🏦"
                            company="Qucoon"
                            title="Software Engineer"
                            location="Lagos, Nigeria"
                            period="January 2024 - December 2025"
                            bullets={[
                                "Developed scalable, high-performance web and mobile applications using TypeScript, and modern frameworks like React, Next.js, and React Native",
                                "Translated complex UI/UX designs into responsive and intuitive user interfaces",
                                "Optimized applications for speed and cross-browser compatibility",
                                "Collaborated across teams to deliver seamless user experiences",
                                "Co-facilitated React training sessions to support junior developers and enhanced team proficiency",
                            ]}
                            skills={[
                                "AWS",
                                "React",
                                "JavaScript",
                                "TypeScript",
                                "Next JS",
                                "React Native"
                            ]}
                        />

                        <ExperienceItem
                            icon="🏦"
                            company="PwC"
                            title="Data Analyst Intern"
                            location="Lagos, Nigeria"
                            period="March 2022 - September 2022"
                            bullets={[
                                "Built ETL pipelines using SSIS and developed on-premise data warehouses",
                                "Implemented Type 2 SCD for historical data tracking",
                                "Created insightful HR dashboards in Power BI using DAX",
                                "Automated reporting processes to drive data-informed decision-making and operational efficiency.",
                            ]}
                            skills={[
                                "SQL",
                                "Python",
                                "Power BI",
                                "Dataflow",
                                "SSIS"
                            ]}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}