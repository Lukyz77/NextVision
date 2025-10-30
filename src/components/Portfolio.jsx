import { motion } from "framer-motion";
import projekt1 from '../assets/projekt1.png'
import projekt2 from '../assets/projekt2.png'
import projekt3 from '../assets/projekt3.png'



const Portfolio = () => {
    const projects = [
  {
    title: "Neuron AI Platform",
    category: "Web App / AI",
    desc: "Web platform eith interactive AI dashboard visualization.",
    image: projekt1, // 🖼️ uprav na vlastní cestu
  },
  {
    title: "Pulse Studio Rebrand",
    category: "Branding / Web",
    desc: "Complet visual identity and microsite for digital agency.",
    image: projekt2,
  },
  {
    title: "DataSense",
    category: "Analytics Tool",
    desc: "UX/UI and interactive components for data product.",
    image: projekt3,
  },
];

  return (
    <section
      id="work"
      className="relative bg-black py-24 md:py-32 text-white overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* 🟢 Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm md:text-lg uppercase tracking-[0.35em] text-[#05D33A]">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold font-[outfit]">
            Selected Projects & Collaborations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
            A glimpse into how we turn ideas into bold digital products.
          </p>
        </motion.div>

        {/* 🧠 Projects Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              {/* Obrázek */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-left">
                <div>
                  <p className="text-[#05D33A] text-sm uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                  <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Tlačítko */}
                <a
                  href="#"
                  className="mt-4 w-1/2 text-center inline-block border border-[#05D33A] text-[#05D33A] px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#05D33A] hover:text-black"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg">Want to see more of our work?</p>
          <a
            href="#contact"
            className="mt-6 inline-block border border-[#05D33A] text-[#05D33A] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#05D33A] hover:text-black"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
