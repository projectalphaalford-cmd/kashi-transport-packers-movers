import { motion, AnimatePresence } from 'framer-motion';
import { reviews } from '../data/siteData';
import React from 'react';

function Reviews() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  React.useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );

  const variants = {
    enter: (direction) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -300 : 300,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 300 : -300,
    }),
  };

  return (
    <section id="reviews" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle mt-4"
          >
            Trusted by thousands of happy customers across Delhi NCR and beyond
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            className="overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
                custom={direction}
                className="flex gap-6 px-4 pb-8"
              >
                {reviews.map((review, index) => (
                  <motion.article
                    key={index}
                    layout
                    className="card flex-shrink-0 w-[350px] md:w-[400px] flex flex-col"
                  >
                    <div className="flex-1 flex flex-col">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4"
                      >
                        {renderStars(review.rating)}
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-700 text-lg leading-relaxed flex-1 mb-6 italic"
                      >
                        &ldquo;{review.text}&rdquo;
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="border-t border-gray-100 pt-4"
                    >
                      <p className="font-semibold text-primary text-lg">{review.name}</p>
                      <p className="text-gray-500 text-sm">Verified Customer</p>
                    </motion.div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all duration-300 active:scale-95"
              aria-label="Previous review"
            >
              <motion.svg
                whileTap={{ rotate: -10 }}
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </motion.svg>
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  />
                </motion.button>
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all duration-300 active:scale-95"
              aria-label="Next review"
            >
              <motion.svg
                whileTap={{ rotate: 10 }}
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join 5000+ satisfied customers who trusted us with their move
          </p>
          <div className="mt-6 flex justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-semibold text-gray-700">4.9/5</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-semibold text-gray-700">5000+</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-gray-700">Same Day</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Reviews;