import { motion } from "framer-motion";
import AboutImage from "../assets/robot2.png"; // nějaký futuristický obrázek AI/člověka

const WhoWeAre = () => {
  return (
    <section id="about" className="relative bg-black text-white py-32 px-6 md:px-16 overflow-hidden">
      {/* Dekorativní zelené světlo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05D33A]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Textová část */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-[#05D33A] text-5xl md:text-7xl font-extrabold mb-6 font-[Outfit]">
            Who We Are
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 font-[Outfit]">
            At <span className="text-[#05D33A] font-semibold">NextVision</span>,
            we’re a team of thinkers, developers, and designers passionate about
            pushing the limits of artificial intelligence.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed font-[Outfit]">
            We believe AI is not just a tool — it’s the next chapter of human
            creativity and problem-solving. Our mission is to connect innovation
            with real human needs through ethical, smart, and scalable
            solutions.
          </p>
        </motion.div>

        {/* Obrázek / vizuál */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={AboutImage}
            alt="AI illustration"
            className="w-full max-w-md rounded-2xl  hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
