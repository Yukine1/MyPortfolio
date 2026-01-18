export const Contact = () => {
    return (
        <footer className="px-6 lg:px-20 py-32 bg-white text-black rounded-t-[3rem] relative z-10">
            <div className="max-w-4xl">
                <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-12 leading-[0.9]">
                    Let&#39;s build something intelligent together.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-16">
                    <a
                        href="mailto:alexanderkolva15@gmail.com"
                        className="w-fit text-sm md:text-base uppercase tracking-[0.2em] text-black/50 hover:text-black transition-colors duration-300"
                    >
                        alexanderkolva15@gmail.com
                    </a>
                    <a
                        href="tel:+310642286294"
                        className="w-fit text-sm md:text-base uppercase tracking-[0.2em] text-black/50 hover:text-black transition-colors duration-300"
                    >
                        +31 06 4228 6294
                    </a>
                    <a
                        href="https://www.linkedin.com/in/oleksandr-kolva-961794209/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit text-sm md:text-base uppercase tracking-[0.2em] text-black/50 hover:text-black transition-colors duration-300 underline underline-offset-8 decoration-black/20 hover:decoration-black"
                    >
                        LinkedIn
                    </a>
                    <p className="text-sm md:text-base uppercase tracking-[0.2em] text-gray-400">
                        Zaandam, Netherlands
                    </p>
                </div>
            </div>
        </footer>
    );
};