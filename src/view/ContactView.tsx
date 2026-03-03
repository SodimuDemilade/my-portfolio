export const ContactView = () => {
    return (
        <main className="flex-1 lg:ml-64">
            <div className="max-w-4xl mx-auto px-6 py-8 lg:px-12 lg:py-12">

                <div className="space-y-8 animate-fade-in">

                    {/* Header */}
                    <div className="space-y-2">
                        <div className="text-4xl mb-2">✉️</div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-[#37352f] dark:text-[#e3e2e0]">
                            Get in Touch
                        </h1>

                        <p className="text-lg text-[#787774] dark:text-[#9b9a97]">
                            Feel free to reach out!
                        </p>
                    </div>

                    {/* Contact Methods */}
                    <div className="space-y-4 pt-4">

                        {/* Email */}
                        <a
                            href="mailto:demisodimu@gmail.com"
                            className="group block p-6 rounded-lg border border-[#e9e9e7] dark:border-[#2f2f2f] bg-[#f7f6f3] dark:bg-[#1f1f1f] hover:border-[#2383e2] dark:hover:border-[#529cca] transition-all duration-200 cursor-pointer"
                        >
                            <div className="flex items-center space-x-4">

                                <div className="text-3xl">✉️</div>

                                <div className="flex-1">
                                    <div className="text-sm text-[#787774] dark:text-[#9b9a97]">
                                        Email
                                    </div>

                                    <div
                                        className="text-lg font-semibold text-[#37352f] dark:text-[#e3e2e0] group-hover:text-[#2383e2] dark:group-hover:text-[#529cca] transition-colors">
                                        demisodimu@gmail.com
                                    </div>

                                    <div className="text-sm text-[#787774] dark:text-[#9b9a97]">
                                        Best for professional inquiries
                                    </div>
                                </div>

                                <span
                                    className="w-5 h-5 text-[#787774] dark:text-[#9b9a97] group-hover:text-[#2383e2] dark:group-hover:text-[#529cca] transition-colors">
                  →
                </span>

                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/sodimuDemilade"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-6 rounded-lg border border-[#e9e9e7] dark:border-[#2f2f2f] bg-[#f7f6f3] dark:bg-[#1f1f1f] hover:border-[#2383e2] dark:hover:border-[#529cca] transition-all duration-200 cursor-pointer"
                        >
                            <div className="flex items-center space-x-4">

                                <div className="text-3xl">💼</div>

                                <div className="flex-1">
                                    <div className="text-sm text-[#787774] dark:text-[#9b9a97]">
                                        LinkedIn
                                    </div>

                                    <div
                                        className="text-lg font-semibold text-[#37352f] dark:text-[#e3e2e0] group-hover:text-[#2383e2] dark:group-hover:text-[#529cca] transition-colors">
                                        LinkedIn Profile
                                    </div>

                                    <div className="text-sm text-[#787774] dark:text-[#9b9a97]">
                                        Connect professionally
                                    </div>
                                </div>

                                <span
                                    className="w-5 h-5 text-[#787774] dark:text-[#9b9a97] group-hover:text-[#2383e2] dark:group-hover:text-[#529cca] transition-colors">
                  →
                </span>

                            </div>
                        </a>

                    </div>

                    {/* Location */}
                    <div
                        className="pt-4 p-6 rounded-lg bg-[#f7f6f3] dark:bg-[#1f1f1f] border border-[#e9e9e7] dark:border-[#2f2f2f]">
                        <h3 className="text-lg font-semibold text-[#37352f] dark:text-[#e3e2e0] mb-2">
                            Location
                        </h3>

                        <p className="text-[#787774] dark:text-[#9b9a97]">
                            Currently based in{" "}
                            <span className="font-medium text-[#37352f] dark:text-[#e3e2e0]">
                Acworth, GA
              </span>
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}