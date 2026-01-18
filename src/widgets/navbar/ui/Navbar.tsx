'use client';
import { motion } from 'framer-motion';
import {Link} from "lucide-react";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-20 py-6 mix-blend-difference"
        >
            <span className="text-white font-medium tracking-tighter">OK.</span>
            <div className="flex gap-8 text-sm uppercase tracking-widest text-white/70">
                <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
                <Link href="#stack" className="hover:text-white transition-colors">Stack</Link>
                <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
        </motion.nav>
    );
};