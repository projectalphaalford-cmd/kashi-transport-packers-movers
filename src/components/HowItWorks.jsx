import { motion } from 'framer-motion';
import { howItWorks } from '../data/siteData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stepVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

const stepIcons = ['📋', '📦', '🚚', '🏠'];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white" aria-labelledby="how-it-works-title">
      <div className="container-max">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            id="how-it-works-title"
            className="section-title"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            Simple, transparent, and stress-free relocation in just 4 easy steps.
          </motion.p>
        </motion.div>

        <motion.ol
          className="relative"
          role="list"
          aria-label="How it works steps"
        >
          <motion.div
            className="absolute hidden lg:block left-1/2 top-10 bottom-10 w-0.5 bg-primary/20 -translate-x-1/2"
            initial={false}
            animate={{ height: '100%' }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <div className="relative z-10">
            {howItWorks.map((step, index) => (
              <motion.li
                key={step.step}
                className="relative mb-16 last:mb-0"
                variants={containerVariants}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <motion.div
                    className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-full bg-primary text-white text-3xl font-bold z-10 shadow-lg shadow-primary/30"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={stepVariants}
                  >
                    {step.step}
                  </motion.div>

                  <motion.div
                    className="w-full lg:w-1/2 lg:pr-8 text-center lg:text-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={itemVariants}
                  >
                    <motion.h3
                      className="text-2xl font-bold text-primary mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      Step {step.step}: {step.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 text-lg leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="w-full lg:w-1/2 lg:pl-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={itemVariants}
                  >
                    <div
                      className="relative w-full aspect-video bg-primary/5 rounded-2xl overflow-hidden"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-6xl">
                        {stepIcons[index]}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {index < howItWorks.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute left-1/2 top-[120px] w-4 h-4 bg-primary/20 rounded-full -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.15, type: 'spring' }}
                  />
                )}
              </motion.li>
            ))}
          </div>
        </motion.ol>
      </div>
    </section>
  );
}
