export const Contact = () => {
    return (
        <footer className="px-6 lg:px-20 py-32 bg-white text-black rounded-t-[3rem]">
            <div className="max-w-4xl">
                <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-12">
                    Let&#39;s build something intelligent together.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-xl md:text-2xl mt-16">
                    <a href="mailto:alexanderkolva15@gmail.com" className="hover:opacity-50 transition-opacity">alexanderkolva15@gmail.com</a>
                    <a href="tel:+310642286294" className="hover:opacity-50 transition-opacity">+31 06 4228 6294</a>
                    <a href="https://www.linkedin.com/in/oleksandr-kolva-961794209/" target="_blank" className="hover:opacity-50 transition-opacity underline underline-offset-8">LinkedIn</a>
                    <p className="text-gray-400">Zaandam, Netherlands</p>
                </div>
            </div>
        </footer>
    );
};