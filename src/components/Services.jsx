import { motion } from "framer-motion";
import { Cpu, Sparkles, LineChart } from "lucide-react";

// Dark & Bold "What We Do" section
// - TailwindCSS styling
// - Framer Motion scroll-in animations
// - Lucide icons
// Drop this into your project and import <WhatWeDo /> where needed.



const Services = () => {
    const services = [
  {
    icon: Cpu,
    title: "AI Development",
    desc:
      "We design and ship custom AI systems that automate workflows and enhance decision making — from prototypes to production.",
  },
  {
    icon: Sparkles,
    title: "Creative Design",
    desc:
      "Brand-first digital experiences with a focus on clarity, emotion, and conversion. Interfaces that feel alive.",
  },
  {
    icon: LineChart,
    title: "Data & Research",
    desc:
      "We turn data into strategy: discovery, UX research, insights and measurement to guide what really matters.",
  },
];

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.5, ease: "easeOut" },
  },
};


  return (
    <section id="services" className="relative bg-black py-24 md:py-32 text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
        <div className="absolute -top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl bg-[#05D33A]/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15, duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1, ease: "easeOut" } }
            className="inline-block text-sm md:text-lg uppercase tracking-[0.35em] text-[#05D33A]"
          >
            What We Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1, ease: "easeOut" } }
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold font-[outfit]"
          >
            We build intelligent digital experiences.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1, ease: "easeOut" } }
            className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-gray-400"
          >
            Our mission is to combine human creativity with AI-driven technology to deliver
            products that redefine innovation.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 md:mt-20 grid gap-6 md:gap-8 md:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ duration: 1, ease: "easeOut" } }
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#05D33A]/70 hover:shadow-[0_0_40px_#05D33A33]"
            >
              {/* Accent corner */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-[#05D33A]/40" />

              <div className="flex items-start gap-4">
                <div className="flex  items-center justify-center rounded-xl  transition-colors duration-300 ">
                  <Icon size={30} className="text-[#05D33A]"/>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-400">{desc}</p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#05D33A]/60" />

              {/* Sub-features (optional) */}
              <ul className="mt-4 grid grid-cols-2 gap-2 text-xs md:text-sm text-gray-400">
                {i === 0 && (
                  <>
                    <li>Custom models</li>
                    <li>RAG & agents</li>
                    <li>MLOps & evals</li>
                    <li>Integrations</li>
                  </>
                )}
                {i === 1 && (
                  <>
                    <li>Brand systems</li>
                    <li>Design systems</li>
                    <li>UX/UI for web</li>
                    <li>Interactive motion</li>
                  </>
                )}
                {i === 2 && (
                  <>
                    <li>Discovery</li>
                    <li>UX research</li>
                    <li>Analytics</li>
                    <li>Experimentation</li>
                  </>
                )}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-300 text-lg">Ready to build something extraordinary?</p>
          <div className="mt-6 inline-flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-full border border-[#05D33A] px-7 py-3 text-sm md:text-base font-semibold text-[#05D33A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05D33A] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#05D33A]/60"
            >
              Let’s Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;