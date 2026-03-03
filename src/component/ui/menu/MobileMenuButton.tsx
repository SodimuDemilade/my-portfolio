export const MobileMenuButton = ({onClick}: { onClick: () => void }) => {
    return (
        <button
            type="button"
            className="fixed top-4 left-4 z-50 inline-flex items-center p-2 text-sm rounded-lg lg:hidden bg-[#f7f6f3] dark:bg-[#1f1f1f] border border-[#e9e9e7] dark:border-[#2f2f2f] hover:bg-[#f1f1ef] dark:hover:bg-[#2f2f2f] shadow-sm"
            aria-label="Open sidebar"
            onClick={onClick}
        >
            <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
            </svg>
        </button>
    );
};

export const Backdrop = ({show, onClick}: { show: boolean, onClick: () => void }) => {
    if (!show) return null;

    return (
        <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
            onClick={onClick}
        />
    );
};