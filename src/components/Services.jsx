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
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.524-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.01-.792.073-.272.062-.612.242-.94.498-.328.255-.647.613-.772.992-.132.396-.157.678-.118.857.038.179.23.39.45.607.218.217.44.496.697.858.257.36.423.698.472.918.047.22.068.441.049.67-.019.22-.172.488-.53.718l-1.417.914-.379-.228c-.242-.147-.53-.408-.71-.627l-.944-.944c-.19-.19-.306-.38-.306-.572 0-.19.087-.38.254-.56.202-.222.51-.594.79-.964.28-.37.417-.727.436-.887.02-.158.018-.316-.022-.472-.04-.15-.156-.3-.38-.47l-.376-.29c-.42-.325-.826-.545-1.183-.597-.357-.05-.747-.05-1.124-.05-.378 0-.75.048-1.107.143-.357.096-.697.248-1.014.41-.317.16-.62.31-.905.452-.285.143-.557.298-.815.443l-.56.29-.31-.19c-.19-.11-.394-.23-.588-.353-.194-.12-.388-.24-.576-.357-.188-.117-.37-.237-.546-.36-.176-.12-.346-.245-.51-.376-.164-.13-.32-.264-.47-.4-.15-.137-.29-.278-.42-.426-.13-.15-.25-.30298-.36-.452-.11-.154-.21-.306-.3-.46-.09-.15-.17-.303-.24-.457-.07-.154-.13-.306-.18-.46-.05-.154-.09-.307-.12-.46-.03-.153-.05-.306-.07-.46-.02-.154 0-.307.02-.46.02-.154.04-.307.08-.46.1-.153.02-.307-.01-.46-.03l-.31-.06c-.153-.03-.306-.07-.46-.1-.153-.03-.307-.07-.46-.1-.154-.03-.307-.05-.46-.08-.153-.03-.307-.05-.46-.07-.153-.02-.306-.03-.46-.04-.153-.01-.306.004-.46.02-.154.02-.307.06-.46.08-.154.02-.307-.01-.46-.03-.153-.02-.307-.05-.46-.07-.153-.02-.306.004-.46.02-.154.02-.307.06-.46.08-.154.02-.307-.01-.46-.03l-.31-.06c-.153-.03-.306-.07-.46-.1-.153-.03-.307-.07-.46-.1-.154-.03-.307-.05-.46-.08-.153-.03-.307-.05-.46-.07-.153-.02-.306-.03-.46-.04-.153-.01-.306.004-.46.02-.154.02-.307.06-.46.08-.154.02-.307-.01-.46-.03l-.31-.06c-.153-.03-.306-.07-.46-.1-.153-.03-.307-.07-.46-.1-.154-.03-.307-.05-.46-.08-.153-.03-.307-.05-.46-.07-.153-.02-.306-.03-.46-.04-.153-.01-.306.004-.46.02-.154.02-.307.06-.46.08-.154.02-.307-.01-.46-.03l-.31-.06c-.153-.03-.306-.07-.46-.1-.153-.03-.307-.07-.46-.1-.154-.03-.307-.05-.46-.08-.153-.03-.307-.05-.46-.07-.153-.02-.306-.03-.46-.04-.153-.01-.306.004-.46.02-.154.02-.307.06-.46.08-.154.02-.307-.01-.46-.03l-.31-.06c-.153-.03-.306-.07-.46-.1-.153-.03-.307-.07-.46-.1-.154-.03-.307-.05-.46-.08-.153-.03-.307-.05-.46-.07-.153-.02-.306-.03-.46-.04-.153-.01-.306.004-.46.02-.154.02-.307.06-.46.08-.154.02-.307-.01-.46-.03l-.31-.06z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}