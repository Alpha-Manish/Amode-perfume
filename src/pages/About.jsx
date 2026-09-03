import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { staggerContainer, fadeInUp, revealText } from '../animations/variants';
const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-amode-ivory)] overflow-hidden">
      <Container>
        <SectionHeading title="About Amode" subtitle="Our Heritage" align="center" />
        
        <div className="max-w-4xl mx-auto space-y-32 mt-20 text-center">
          
          {/* AMODE Story */}
          <motion.section 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative py-32 px-8 flex items-center justify-center min-h-[500px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1600&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 text-center text-[var(--color-amode-ivory)]">
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl mb-8 tracking-wide text-white">The AMODE Story</motion.h2>
              <motion.p variants={fadeInUp} className="font-sans leading-[1.8] max-w-3xl mx-auto text-lg text-gray-200 font-light">
                Born from a passion for the ethereal and the unspoken, AMODE was founded with a singular vision: to translate the poetry of nature into wearable art. Our journey began in the sun-drenched fields of Grasse and the vibrant spice markets of the East, seeking out the most evocative elements our world has to offer.
              </motion.p>
            </div>
          </motion.section>

          {/* Brand Philosophy */}
          <motion.section 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative py-32 px-8 flex items-center justify-center min-h-[500px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1600&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 text-center text-[var(--color-amode-ivory)]">
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl mb-8 tracking-wide text-white">Brand Philosophy</motion.h2>
              <motion.p variants={fadeInUp} className="font-sans leading-[1.8] max-w-3xl mx-auto text-lg text-gray-200 font-light">
                We believe a fragrance is more than a scent; it is an invisible garment, a silent introduction, and a lingering memory. Our philosophy centers on minimalism, elegance, and the profound emotional resonance of olfaction. We strip away the unnecessary to reveal the pure, unadulterated essence of our ingredients.
              </motion.p>
            </div>
          </motion.section>

          {/* Quality */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative py-32 px-8 flex items-center justify-center min-h-[500px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1608528577891-eb05fef397f2?q=80&w=1600&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 text-center text-[var(--color-amode-ivory)]">
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl mb-8 tracking-wide text-white">Uncompromising Quality</motion.h2>
              <motion.p variants={fadeInUp} className="font-sans leading-[1.8] max-w-3xl mx-auto text-lg text-gray-200 font-light">
                Excellence is not an act, but a habit. We source our absolutes, resins, and essential oils from ethical growers worldwide. Each batch is meticulously tested and blended by master perfumers to ensure exceptional sillage, longevity, and complexity. We never compromise on the integrity of our raw materials.
              </motion.p>
            </div>
          </motion.section>

          {/* Fragrance Experience */}
          <motion.section 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[var(--color-amode-black)] text-[var(--color-amode-ivory)] p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop" 
                alt="Texture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <motion.h2 variants={fadeInUp} className="font-serif text-3xl mb-6 text-[var(--color-amode-gold)]">The Fragrance Experience</motion.h2>
              <motion.p variants={fadeInUp} className="font-sans text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
                An AMODE fragrance is designed to evolve. It opens with an inviting prelude, transitions seamlessly into a complex heart, and settles into a deeply personal, long-lasting base. It is an intimate journey that reacts uniquely to your skin, creating a bespoke aura that is entirely your own.
              </motion.p>
            </div>
          </motion.section>

          {/* Mission */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative py-32 px-8 flex items-center justify-center min-h-[500px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1600&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 text-center text-[var(--color-amode-ivory)]">
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl mb-8 tracking-wide text-white">Our Mission</motion.h2>
              <motion.p variants={fadeInUp} className="font-sans leading-[1.8] max-w-3xl mx-auto text-lg text-gray-200 font-light">
                To elevate the everyday through the power of scent. We strive to craft fragrances that inspire confidence, evoke cherished memories, and provide a moment of transcendent beauty in a chaotic world. Our mission is to make luxury accessible without diluting its essence.
              </motion.p>
            </div>
          </motion.section>

          {/* Why AMODE */}
          <motion.section 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="border-t border-[var(--color-amode-cream)] pt-20"
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl mb-12 text-[var(--color-amode-black)]">Why Choose AMODE</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div variants={fadeInUp} className="p-8 hover:bg-white hover:shadow-sm transition-all duration-500">
                <h3 className="font-sans text-sm uppercase tracking-widest text-[var(--color-amode-gold)] mb-4">Artisanal Craft</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Small-batch production ensures meticulous attention to detail and unmatched quality control.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="p-8 hover:bg-white hover:shadow-sm transition-all duration-500">
                <h3 className="font-sans text-sm uppercase tracking-widest text-[var(--color-amode-gold)] mb-4">Sustainable Ethos</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We are committed to eco-conscious packaging and ethically sourced ingredients.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="p-8 hover:bg-white hover:shadow-sm transition-all duration-500">
                <h3 className="font-sans text-sm uppercase tracking-widest text-[var(--color-amode-gold)] mb-4">Timeless Elegance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Our scents are designed to transcend trends, offering classic sophistication for the modern individual.</p>
              </motion.div>
            </div>
          </motion.section>

        </div>
      </Container>
    </div>
  );
};

export default About;
