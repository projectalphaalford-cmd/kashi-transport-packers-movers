import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">About {siteData.name}</h2>
        </motion.div>

        <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-light">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Kashi Transport Packers and Movers</h3>
                  <p className="opacity-80">Ganesh Nagar, Delhi</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {siteData.description}
              </p>

              <p className="text-gray-600 leading-relaxed">
                Located in <strong className="text-gray-900">Ganesh Nagar, Delhi</strong>, we have been serving
                customers across India with professional packing, moving, and transportation services.
                Our experienced team ensures every relocation is handled with care and precision.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <motion.div
                  {...fadeIn}
                  transition={{ delay: 0.1 }}
                  className="text-center p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
                </motion.div>

                <motion.div
                  {...fadeIn}
                  transition={{ delay: 0.2 }}
                  className="text-center p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="text-3xl font-bold text-primary">Pan India</div>
                  <div className="text-sm text-gray-600 mt-1">Service Coverage</div>
                </motion.div>

                <motion.div
                  {...fadeIn}
                  transition={{ delay: 0.3 }}
                  className="text-center p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="text-3xl font-bold text-primary">Affordable</div>
                  <div className="text-sm text-gray-600 mt-1">Transparent Pricing</div>
                </motion.div>
              </div>

              <motion.a
                href={`https://wa.me/${siteData.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-2 mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.447-.272 2.832-2.832c.22-.22.055-.605-.26-.605H8.251c-.138 0-.25.112-.25.25v7.5c0 .26.31.394.503.217l1.84-1.695a9.87 9.87 0 005.727 1.858c2.176 0 4.236-.706 5.887-1.996l.447.272-2.832 2.832c-.22.22-.055.605.26.605h5.5c.138 0 .25-.112.25-.25v-7.5c0-.26-.31-.394-.503-.217l-1.84 1.695A9.87 9.87 0 0112 21.785z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}