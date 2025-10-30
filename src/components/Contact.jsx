import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black py-24 md:py-32 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
        <div className="absolute -top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl bg-[#05D33A]/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#05D33A]">
            Let's Talk
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold font-[outfit]">
            Ready to build something extraordinary?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
            Tell us about your idea — we’ll help you turn it into reality.
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-[#05D33A]" />
              <p className="text-gray-300 text-lg">example@nextvision.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#05D33A]" />
              <p className="text-gray-300 text-lg">+420 123 456 789</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-[#05D33A]" />
              <p className="text-gray-300 text-lg">
                Prague, Czech Republic
              </p>
            </div>

            <div className="mt-8 text-gray-400">
              <p>
                We usually respond within 24 hours. Let’s create something
                outstanding together.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#05D33A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#05D33A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#05D33A] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto border border-[#05D33A] text-[#05D33A] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#05D33A] hover:text-black"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
