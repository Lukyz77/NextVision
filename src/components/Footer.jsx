import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 text-white py-12 md:py-16 overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full blur-3xl bg-[#05D33A]/10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        {/* Logo / Název */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-extrabold font-[outfit] text-[#05D33A]"
        >
          NextVison
        </motion.h3>

        {/* Navigace */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm md:text-base"
        >
          <li>
            <a href="#about" className="hover:text-[#05D33A] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#05D33A] transition-colors">
              What We Do
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-[#05D33A] transition-colors">
              Our Work
            </a>
          </li>
          <li>
            <a href="#research" className="hover:text-[#05D33A] transition-colors">
              Research
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#05D33A] transition-colors">
              Let’s Talk
            </a>
          </li>
        </motion.ul>

        {/* Sociální odkazy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex gap-6 text-gray-400"
        >
          <a
            href="mailto:hello@youragency.com"
            className="hover:text-[#05D33A] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#05D33A] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#05D33A] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#05D33A] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-gray-500 text-sm mt-8"
        >
          © {new Date().getFullYear()} Smartie Agency. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
