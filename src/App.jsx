import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { siteData } from './data/siteData'

function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteData.name,
    description: siteData.description,
    image: 'https://kashitransport.in/hero.png',
    url: 'https://kashitransport.in',
    telephone: siteData.phone,
    email: siteData.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteData.address.street,
      addressLocality: siteData.address.area,
      addressRegion: 'Delhi',
      postalCode: siteData.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6378',
      longitude: '77.2897',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [],
    areaServed: [
      {
        '@type': 'City',
        name: 'Delhi',
      },
      {
        '@type': 'State',
        name: 'Delhi NCR',
      },
    ],
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      ratingCount: '1000+',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

export default function App() {
  useEffect(() => {
    document.documentElement.lang = 'en'
  }, [])

  return (
    <>
      <LocalBusinessSchema />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Reviews />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
