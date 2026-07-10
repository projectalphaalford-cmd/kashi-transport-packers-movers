import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteData } from '../data/siteData'
import ScrollTo from './ScrollTo'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg shadow-primary/10'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container-max mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#home"
            className="text-xl md:text-2xl font-bold text-primary hover:text-secondary transition-colors"
            aria-label={`${siteData.shortName} - Home`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {siteData.shortName}
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            <motion.nav
              role="navigation"
              aria-label="Main navigation"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              <ul className="flex items-center gap-1" role="menubar">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
                    }}
                    role="none"
                  >
                    <ScrollTo
                      as="a"
                      href={link.href}
                      className="relative text-gray-700 font-medium text-sm hover:text-secondary transition-colors duration-200 py-2 px-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
                      role="menuitem"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </ScrollTo>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.a
              href={`tel:${siteData.phone.replace(/\D/g, '')}`}
              className="btn-primary hidden sm:inline-flex"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-label={`Call ${siteData.phoneDisplay}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Get Quote</span>
            </motion.a>
          </div>

          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-6 space-y-4"
              >
                <nav aria-label="Mobile main navigation">
                  <ul className="space-y-2" role="menubar">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                        role="none"
                      >
                        <ScrollTo
                          as="a"
                          href={link.href}
                          className="block py-3 px-4 text-gray-700 font-medium text-base rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"
                          role="menuitem"
                          onClick={closeMobileMenu}
                        >
                          {link.label}
                        </ScrollTo>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <motion.a
                    href={`tel:${siteData.phone.replace(/\D/g, '')}`}
                    className="btn-primary text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`Call ${siteData.phoneDisplay}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call {siteData.phoneDisplay}</span>
                  </motion.a>
                  <motion.a
                    href={`https://wa.me/${siteData.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Chat on WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.369-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 3.43 3.43 0 01-.922-.556 3.857 3.857 0 01-1.018-1.128 4.07 4.07 0 01-.285-1.161c0-.388.099-.749.285-1.08.186-.33.42-.584.685-.789.265-.204.552-.364.86-.47.309-.106.633-.198.98-.279.347-.08.681-.146 1.03-.194.348-.047.707-.068 1.078-.068.372 0 .73.022 1.078.068.348.048.682.114 1.03.194.347.08.672.172.98.279.308.105.595.265.86.47.266.204.5.459.686.789.187.33.287.69.287 1.08 0 .371-.08.732-.285 1.109-.19.372-.418.7-.725.994-.262.25-.554.41-.88.47-.371.068-.74.104-1.11.104-.172 0-.343-.01-.514-.018-.417-.021-1.22-.207-2.018-.729a20.698 20.698 0 01-1.927-2.05c-.342-.507-.562-1.127-.65-1.793" />
                    </svg>
                    <span>WhatsApp</span>
                  </motion.a>
                  <ScrollTo
                    as="a"
                    href="#contact"
                    className="btn-outline text-center border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={closeMobileMenu}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free Quote
                  </ScrollTo>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
