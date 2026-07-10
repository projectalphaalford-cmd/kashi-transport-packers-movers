import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import React from 'react';

function Contact() {
  const { phone, phoneDisplay, whatsapp, email, address, googleMaps, serviceAreas } = siteData;

  const whatsappUrl = `https://wa.me/${whatsapp}`;
  const phoneUrl = `tel:${phone.replace(/\D/g, '')}`;

  const addressLines = [
    address.street,
    address.area,
    `${address.city} ${address.pincode}`,
  ];

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section-padding primary text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
        aria-hidden="true"
      />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title text-white">Get In Touch</h2>
          <p className="section-subtitle text-white/80 mt-4">
            Have questions? Need a free quote? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href={phoneUrl}
                  className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call Us Now</p>
                    <p className="text-white font-semibold text-lg group-hover:text-secondary transition-colors">{phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 3.43 3.43 0 01-.981-2.575c.313-1.131 1.066-2.47 2.287-3.391a9.825 9.825 0 018.585 0c1.234.947 1.974 2.286 2.287 3.391a3.43 3.43 0 01-.982 2.575 9.868 9.868 0 01-5.03 1.378z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Chat on WhatsApp</p>
                    <p className="text-white font-semibold text-lg group-hover:text-green-400 transition-colors">Instant Reply</p>
                  </div>
                </a>

                <div className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email Us</p>
                    <a href={`mailto:${email}`} className="text-white font-semibold text-lg group-hover:text-accent transition-colors">{email}</a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Visit Our Office</p>
                    <address className="text-white font-medium leading-relaxed not-italic group-hover:text-secondary transition-colors">
                      {addressLines.join(', ')}
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Service Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              <div className="rounded-xl overflow-hidden border border-white/10 h-[500px]">
                <iframe
                  title="Kashi Transport Packers and Movers Location"
                  src={googleMaps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 sm:flex-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
              <a
                href={googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 sm:flex-none text-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-5.447M15 4l5.447 5.447M21 14.5V19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5.5M12 4v16m0 0l3-3m-3 3l-3-3" />
                </svg>
                View Larger Map
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          id="contact-form"
          className="mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-8">Send Us a Message</h3>
            <form className="max-w-2xl mx-auto space-y-6" action="https://formspree.io/f/xvgdrgpr" method="POST">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Your Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                    Phone Number <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-white/80 text-sm font-medium mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%23ffffff%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center]"
                >
                  <option value="">Select a service</option>
                  <option value="home-shifting">Home Shifting</option>
                  <option value="office-relocation">Office Relocation</option>
                  <option value="vehicle-transport">Vehicle Transport</option>
                  <option value="packing-unpacking">Packing & Unpacking</option>
                  <option value="storage">Storage & Warehousing</option>
                  <option value="loading-unloading">Loading & Unloading</option>
                  <option value="intercity">Intercity Moving</option>
                  <option value="fragile-items">Fragile Items Handling</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Message <span className="text-secondary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your moving requirements..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full md:w-auto px-10 py-4 text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Get Free Quote
              </button>
              <p className="text-center text-white/50 text-sm">
                We&apos;ll get back to you within 30 minutes during business hours.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;