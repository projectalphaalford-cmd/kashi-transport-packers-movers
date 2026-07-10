import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'
import ScrollTo from './ScrollTo'

export default function Hero() {
  const stats = [
    { value: '1000+', label: 'Moves Completed' },
    { value: '8+', label: 'Years Experience' },
    { value: 'Pan India', label: 'Service Coverage' },
    { value: '5\u2605', label: 'Customer Rating' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, transparent 50%, rgba(255,255,255,0.1) 50%),
            radial-gradient(circle at 80% 20%, transparent 50%, rgba(255,255,255,0.1) 50%),
            radial-gradient(circle at 40% 80%, transparent 50%, rgba(255,255,255,0.1) 50%)
          `,
          backgroundSize: '200px 200px, 300px 300px, 150px 150px',
          backgroundPosition: '0 0, 100px 100px, 50px 50px',
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0 0, 100px 100px, 50px 50px', '200px 200px, 400px 400px, 200px 200px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, transparent 50%, rgba(255,255,255,0.1) 50%),
              radial-gradient(circle at 80% 20%, transparent 50%, rgba(255,255,255,0.1) 50%),
              radial-gradient(circle at 40% 80%, transparent 50%, rgba(255,255,255,0.1) 50%)
            `,
            backgroundSize: '200px 200px, 300px 300px, 150px 150px',
          }}
        />

        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0 0', '100px 100px'],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.03) 50%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.03) 50%, transparent 52%)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-primary/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        aria-hidden="true"
      />

      <div className="relative container-max mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
            aria-hidden="true"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full bg-secondary"
            />
            <span>Trusted by 1000+ Families Across India</span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Your Trusted <span className="text-secondary">Packers & Movers</span> in Delhi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Professional relocation services for homes, offices & vehicles. Safe, affordable & stress-free moving across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href={`tel:${siteData.phone.replace(/\D/g, '')}`}
              className="btn-primary w-full sm:w-auto group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Call ${siteData.phoneDisplay}`}
            >
              <motion.svg
                className="w-5 h-5 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </motion.svg>
              <span>Call Now</span>
            </motion.a>

            <motion.a
              href={`https://wa.me/${siteData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Chat on WhatsApp"
            >
              <motion.svg
                className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.447-.272 2.832-2.832c.22-.22.055-.605-.26-.605H8.251c-.138 0-.25.112-.25.25v7.5c0 .26.31.394.503.217l1.84-1.695a9.87 9.87 0 005.727 1.858c2.176 0 4.236-.706 5.887-1.996l.447.272-2.832 2.832c-.22.22-.055.605.26.605h5.5c.138 0 .25-.112.25-.25v-7.5c0-.26-.31-.394-.503-.217l-1.84 1.695A9.87 9.87 0 0112 21.785z"/>
              </motion.svg>
              <span>WhatsApp</span>
            </motion.a>

            <ScrollTo
              as="a"
              href="#contact"
              className="btn-outline w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </motion.svg>
              <span>Get Free Quote</span>
            </ScrollTo>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-white/20"
            role="list"
            aria-label="Company statistics"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1, type: 'spring', stiffness: 100, damping: 15 }}
                className="text-center"
                role="listitem"
              >
                <motion.div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.8 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-white/80 text-sm sm:text-base font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <motion.svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}