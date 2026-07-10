import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gallery } from '../data/siteData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: 'spring' } }
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, type: 'spring' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isAnimating && selectedIndex !== null) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowRight') {
          navigateModal(1);
        } else if (e.key === 'ArrowLeft') {
          navigateModal(-1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, isAnimating]);

  const openModal = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };

  const navigateModal = (direction) => {
    if (selectedIndex === null) return;
    setIsAnimating(true);
    const newIndex = (selectedIndex + direction + gallery.length) % gallery.length;
    setTimeout(() => {
      setSelectedIndex(newIndex);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <>
      <section className="section-padding bg-white" aria-labelledby="gallery-title">
        <div className="container-max">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              id="gallery-title"
              className="section-title"
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
            >
              Our Gallery
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
            >
              Glimpse our work in action. Professional packing, careful handling, and safe delivery.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            role="list"
            aria-label="Gallery images"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {gallery.map((image, index) => (
              <motion.figure
                key={image}
                className="relative group cursor-zoom-in"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 0.08}s` }}
                onClick={() => openModal(index)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(index)}
                tabIndex={0}
                role="button"
                aria-label={`View gallery image ${index + 1} of ${gallery.length}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}: Kashi Transport Packers and Movers service`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-2xl font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Full Image
                    </span>
                  </div>
                </div>
                <figcaption className="sr-only">Gallery image {index + 1}</figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            role="dialog"
            aria-modal="true"
            aria-label={`Gallery image ${selectedIndex + 1} of ${gallery.length}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeModal}
          >
            <motion.button
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-colors"
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
              aria-label="Close gallery"
            >
              ×
            </motion.button>

            <motion.button
              className="absolute left-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-3xl transition-colors hidden sm:block"
              onClick={(e) => { e.stopPropagation(); navigateModal(-1); }}
              aria-label="Previous image"
            >
              ‹
            </motion.button>

            <motion.button
              className="absolute right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-3xl transition-colors hidden sm:block"
              onClick={(e) => { e.stopPropagation(); navigateModal(1); }}
              aria-label="Next image"
            >
              ›
            </motion.button>

            <motion.div
              className="relative max-w-5xl max-h-[85vh] w-full"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={imageVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[selectedIndex]}
                alt={`Gallery image ${selectedIndex + 1}: Kashi Transport service`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-lg font-medium">Image {selectedIndex + 1} of {gallery.length}</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 sm:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl"
                onClick={(e) => { e.stopPropagation(); navigateModal(-1); }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl"
                onClick={(e) => { e.stopPropagation(); navigateModal(1); }}
                aria-label="Next image"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}