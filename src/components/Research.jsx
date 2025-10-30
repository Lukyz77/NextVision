import { motion } from "framer-motion";
import { Microscope, FlaskConical, LineChart } from "lucide-react";

const pillars = [
  {
    icon: Microscope,
    title: "Discovery & Analysis",
    desc: "We explore user behavior, emerging technologies, and market trends to identify meaningful opportunities.",
  },
  {
    icon: FlaskConical,
    title: "Experimentation",
    desc: "Rapid prototyping, usability testing, and A/B experimentation to validate assumptions and refine experiences.",
  },
  {
    icon: LineChart,
    title: "Insights & Strategy",
    desc: "Turning complex data into actionable strategies that empower brands to innovate with confidence.",
  },
];

const stats = [
  { value: "92%", label: "Clients improved engagement" },
  { value: "120+", label: "User interviews conducted" },
  { value: "48h", label: "Average prototype turnaround" },
];

const Research = () => {
  return (
    <section
      id="research"
      className="relative bg-black py-24 md:py-32 text-white overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm md:text-lg uppercase tracking-[0.35em] text-[#05D33A]">
            Research
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold font-[outfit]">
            Insights that power innovation.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
            We dive deep into data, behavior and emerging tech to uncover what truly drives engagement.
          </p>
        </motion.div>

        {/* Research Pillars */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#05D33A]/60 hover:shadow-[0_0_40px_#05D33A33]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 mb-4 group-hover:border-[#05D33A]/60 group-hover:bg-[#05D33A]/10 transition-colors duration-300">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <h4 className="text-5xl md:text-6xl font-extrabold text-[#05D33A] font-[outfit]">
                {stat.value}
              </h4>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-300 text-lg">
            Want to see our research in action?
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block border border-[#05D33A] text-[#05D33A] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#05D33A] hover:text-black"
          >
            View Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
