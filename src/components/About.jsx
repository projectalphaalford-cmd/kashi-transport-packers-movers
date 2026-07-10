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
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.524-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.01-.792.073-.272.062-.612.242-.94.498-.328.255-.647.613-.772.992-.132.396-.157.678-.118.857.038.179.23.39.45.607.218.217.44.496.697.858.257.36.423.698.472.918.047.22.068.441.049.67-.019.22-.172.488-.53.718l-1.417.914-.379-.228c-.242-.147-.53-.408-.71-.627l-.944-.944c-.19-.19-.306-.38-.306-.572 0-.19.087-.38.254-.56.202-.222.51-.594.79-.964.28-.37.417-.727.436-.887.02-.158.018-.316-.022-.472-.04-.15-.156-.3-.38-.47l-.376-.29c-.42-.325-.826-.545-1.183-.597-.357-.05-.747-.05-1.124-.05-.378 0-.75.048-1.107.143-.357.096-.697.248-1.014.41-.317.16-.62.31-.905.452-.285.143-.557.298-.815.443l-.56.29-.31-.19c-.19-.11-.394-.23-.588-.353-.194-.12-.388-.24-.576-.357-.188-.117-.37-.237-.546-.36-.176-.12-.346-.245-.51-.376-.164-.13-.32-.264-.47-.4-.15-.137-.29-.278-.42-.426-.13-.15-.25-.30298-.36-.452-.11-.154-.21-.306-.3-.46-.09-.15-.17-.303-.24-.457-.07-.154-.13-.306-.18-.46-.05-.154-.09-.307-.12-.46-.03-.153-.05-.306-.07-.46-.02-.154 0-.307.02-.46.02-.154.04-.307.08-.46.1-.153.02-.307-.01-.46-.03l-.31-.06c-.153-.03-.306-.07-.46-.1-.153-.03-.307-.07-.46-.1-.154-.03-.307-.05-.46-.08-.153-.03-.307-.05-.46-.07-.153-.02-.306-.03-.46-.04-.153-.01-.306.004-.46.02-.154.02-.307.06-.46.08-.154.02-.307-.01-.46-.03l-.31-.06c-.153-.03-.306-.07-.46-.1-.153-.03-.307-.07-.46-.1-.154-.03-.307-.05-.46-.08-.153-.03-.307-.05-.46-.07-.153-.02-.306-.03-.46-.04-.153-.01-.306.004-.46.02-.154.02-.307.06-.46.08-.154.02-.307-.01-.46-.03l-.31-.06z" />
                </svg>
                <span>Get Free Quote on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}