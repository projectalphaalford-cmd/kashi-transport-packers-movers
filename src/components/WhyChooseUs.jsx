import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/siteData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -90 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-primary/5" aria-labelledby="why-choose-us-title">
      <div className="container-max">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            id="why-choose-us-title"
            className="section-title"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            We deliver excellence in every move. Here is why thousands trust Kashi Transport.
          </motion.p>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Why choose us features"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {whyChooseUs.map((item, index) => (
            <motion.li
              key={item.title}
              className="card group"
              variants={itemVariants}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-2xl text-4xl group-hover:bg-primary group-hover:text-white transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={iconVariants}
              >
                {item.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-primary mb-2 text-center group-hover:text-secondary transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-center leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {item.description}
              </motion.p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}