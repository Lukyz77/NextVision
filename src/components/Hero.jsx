import Background from '../assets/robot.png'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect} from 'react'

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // převod myši na jemný pohyb obrázku
  const translateX = useTransform(x, [0, window.innerWidth], [16, -16]);
  const translateY = useTransform(y, [0, window.innerHeight], [8, -2]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
  <div className="relative min-h-screen flex justify-center overflow-hidden">
    
    {/* Přechodová vrstva */}
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
      className="fixed top-0 left-0 w-full h-full bg-black z-[100]"
    />

    {/* Hero obsah */}
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative min-h-screen flex justify-center"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          x: translateX,
          y: translateY,
        }}
        src={Background}
        alt="AI background"
        className="absolute inset-0 w-full h-full object-cover z-[0]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

      <motion.h1
        className="relative z-[10] mt-80 md:mt-60 text-[#05D33A] font-[outfit]
        tracking-tight text-6xl lg:text-[170px] font-extrabold text-center select-none"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        WE BUILD<br />AI SOLUTIONS.
      </motion.h1>
    </motion.div>
  </div>
);

}

export default Hero