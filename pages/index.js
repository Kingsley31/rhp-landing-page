import Head from 'next/head'
import Image from 'next/image'
import AboutUsSection from '../components/aboutus_section'
import ContactUsSection from '../components/contactus_section'
import ContactDetailsBar from '../components/contact_details_bar'
import FooterSection from '../components/footer_section'
import HeroSection from '../components/hero_section'
import HowItWorksSection from '../components/howitworks_section'
import Navbar from '../components/navbar'
import OurPropertiesSection from '../components/ourproperties_section'
import TestimonialSection from '../components/testimonial_section'
import WhyUseUsSection from '../components/whyuseus_section'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rhino Homes And Properties</title>
        <meta name="rhp" content="Rhino Homes And Properties" />
        <link rel="icon" type="image/png" href="favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <ContactDetailsBar />
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <HowItWorksSection />
      <OurPropertiesSection />
      <WhyUseUsSection />
      <TestimonialSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  )
}
