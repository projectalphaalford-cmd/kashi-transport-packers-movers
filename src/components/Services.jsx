import { motion } from 'framer-motion';
import { services, siteData } from '../data/siteData';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const cardHover = {
  whileHover: { y: -8, boxShadow: '0 20px 40px -10px rgba(10, 36, 99, 0.15)' },
  transition: { type: 'spring', stiffness: 300, damping: 20 },
};

const iconHover = {
  whileHover: { scale: 1.1, rotate: 5 },
  transition: { type: 'spring', stiffness: 400, damping: 17 },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mt-4 text-lg">
            Comprehensive packing and moving solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Our services"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              {...fadeInUp}
              {...cardHover}
              className="card p-6 relative overflow-hidden group"
              role="listitem"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary"
                {...iconHover}
              >
                <span className="text-3xl" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
              </motion.div>

              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
              />

              <h3 className="font-semibold text-xl text-gray-900 mb-2 relative z-10">{service.title}</h3>
              <p className="text-gray-600 mb-4 relative z-10 line-clamp-2">{service.description}</p>


              <motion.button
                className="btn-outline w-full mt-6 relative z-10"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Quote
                <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Need a custom moving solution?</p>
          <motion.a
            href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.447-.272 2.832-2.832c.22-.22.055-.605-.26-.605H8.251c-.138 0-.25.112-.25.25v7.5c0 .26.31.394.503.217l1.84-1.695a9.87 9.87 0 005.727 1.858c2.176 0 4.236-.706 5.887-1.996l.447.272-2.832 2.832c-.22.22-.055.605.26.605h5.5c.138 0 .25-.112.25-.25v-7.5c0-.26-.31-.394-.503-.217l-1.84 1.695A9.87 9.87 0 0112 21.785z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}