import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
  { label: 'WHO WE ARE', href: '#about' },
  { label: 'WHAT WE DO', href: '#services' },
  { label: 'OUR WORK', href: '#work' },
  { label: 'RESEARCH', href: '#research' },
  { label: 'LET’S TALK', href: '#contact' },
];

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full  backdrop-blur-sm flex justify-between items-center px-5 py-3 z-[100] shadow-lg">
        <h1 className="text-[#05D33A] text-2xl font-bold p-2 select-none">NextVision</h1>
      </nav>

      {/* FIXED ICON */}
      <motion.div
        className="fixed top-5 right-5 text-white cursor-pointer z-[200]"
        onHoverStart={(e) => {
          e.target.animate(
            [
              { transform: "rotate(0deg)" },
              { transform: "rotate(360deg)" },
            ],
            { duration: 1000, easing: "ease-in-out" }
          )
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={35} /> : <Menu size={35} />}
      </motion.div>

      {/* MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[110]"
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding panel */}
            <motion.div
              key="menu"
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="
              fixed top-0 right-0 h-full w-3/3 md:w-2/3 lg:w-150 px-10 bg-black/90 md:bg-black/80
               backdrop-blur-sm  text-white font-[outfit] font-extrabold shadow-2xl flex flex-col
              justify-center space-y-12 z-[150]"
            >
              {navLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={ item.href }
                  initial={{ x:200 }}
                  animate={{ x:0 }}
                  exit={{ x:150 }}
                  transition={{
                    delay: index * 0.1, // ← TADY je ten trik — každá položka má jiný delay
                    duration: 0.4,
                    ease: "easeOut",
                }}
                onClick={() => setIsOpen(!isOpen)}
                  whileHover={{ scale: 1.05, color: '#05D33A', transition: { duration: 0.3} }}
                  className="text-5xl md:text-6xl font-[outfit] font-extrabold transition-colors duration-200"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
