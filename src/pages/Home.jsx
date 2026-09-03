import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { staggerContainer, fadeInUp, revealText } from '../animations/variants';
import { products } from '../data/products';

const featuredProducts = products.filter(p => p.featured).slice(0, 4);
const bestSellers = products.slice(0, 3); // Just grabbing first 3 as best sellers for mock data

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      {/* 1. Luxury Hero Section & 2. Shop Now CTA */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--color-amode-black)]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover"
          >
            <source src="smell.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        
        {/* Sound Toggle Button */}
        <button 
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-[var(--color-amode-gold)] text-[var(--color-amode-gold)] hover:bg-[var(--color-amode-gold)] hover:text-white transition-colors duration-300"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20"
        >
          <div className="overflow-hidden mb-6">
            <motion.span variants={revealText} className="block text-[var(--color-amode-gold)] font-sans text-sm tracking-[0.3em] uppercase">
              The New Collection
            </motion.span>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 variants={revealText} className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-amode-ivory)] leading-tight">
              Essence of <br />Elegance
            </motion.h1>
          </div>
          <motion.p variants={fadeInUp} className="font-sans text-gray-300 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
            Discover a world of meticulously crafted fragrances that evoke memories and inspire desires.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button variant="accent" className="px-10 py-4">Shop The Collection</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Featured Perfumes */}
      <section className="py-24 bg-[var(--color-amode-ivory)]" id="shop">
        <Container>
          <SectionHeading 
            title="Signature Scents" 
            subtitle="Curated Selection" 
          />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </motion.div>
          <div className="mt-16 text-center">
            <Button variant="secondary">View All Fragrances</Button>
          </div>
        </Container>
      </section>

      {/* 5. About AMODE preview */}
      <section className="py-24 bg-[var(--color-amode-cream)]" id="about">
        <Container>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1608528577891-eb05fef397f2?q=80&w=1000&auto=format&fit=crop" 
                alt="Perfume making process" 
                className="w-full aspect-[4/5] object-cover shadow-lg"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:w-1/2 text-center lg:text-left">
              <SectionHeading 
                title="Artisanal Excellence" 
                subtitle="Our Story" 
                align="left"
                className="lg:!text-left"
              />
              <p className="font-sans text-gray-600 leading-relaxed mb-6">
                Founded on the principles of traditional French perfumery, AMODE combines rare botanicals with modern innovation to create scents that are truly timeless. Every bottle is a testament to our dedication to the craft.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed mb-10">
                We ethically source our ingredients from around the world, ensuring that each note in our fragrances tells a story of authenticity and passion.
              </p>
              <Button variant="secondary">Discover Our Heritage</Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* 4. Best Sellers */}
      <section className="py-24 bg-[var(--color-amode-ivory)]">
        <Container>
          <SectionHeading 
            title="Most Loved" 
            subtitle="Best Sellers" 
          />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 6. Fragrance Categories */}
      <section className="py-24 bg-[var(--color-amode-black)] text-[var(--color-amode-ivory)]" id="collections">
        <Container>
          <SectionHeading 
            title="Explore by Note" 
            subtitle="Olfactive Families" 
            className="text-[var(--color-amode-ivory)]"
          />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {['Floral', 'Woody', 'Fresh', 'Oriental'].map((category, idx) => (
              <motion.div variants={fadeInUp} key={category} className="group relative aspect-square overflow-hidden cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop&sig=${idx}`} 
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl tracking-wide uppercase group-hover:text-[var(--color-amode-gold)] transition-colors duration-300">
                    {category}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 7. Why choose AMODE */}
      <section className="py-24 bg-[var(--color-amode-cream)] text-center">
        <Container>
          <SectionHeading 
            title="The AMODE Standard" 
            subtitle="Why Choose Us" 
          />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
          >
            <motion.div variants={fadeInUp}>
              <h4 className="font-serif text-2xl text-[var(--color-amode-black)] mb-4">Cruelty-Free</h4>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                We never test on animals. Our products are formulated with the utmost respect for nature and wildlife.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="font-serif text-2xl text-[var(--color-amode-black)] mb-4">Sustainably Sourced</h4>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                From ethically harvested sandalwood to organic roses, we trace every ingredient to its origin.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="font-serif text-2xl text-[var(--color-amode-black)] mb-4">Long-Lasting</h4>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Our high concentration Extrait de Parfum ensures your signature scent lingers beautifully all day.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* 8. Customer Testimonials */}
      <section className="py-24 bg-[var(--color-amode-ivory)]">
        <Container>
          <SectionHeading 
            title="Words from Our Clients" 
            subtitle="Testimonials" 
          />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {[
              { text: "Santal N°5 is simply mesmerizing. It's subtle yet unforgettable.", author: "Elena R." },
              { text: "The quality is unmatched. You can truly smell the luxury in every spray.", author: "Marcus T." },
              { text: "I've finally found my signature scent. Rose Noir is dark, romantic, and perfect.", author: "Sophia L." }
            ].map((test, idx) => (
              <motion.div variants={fadeInUp} key={idx} className="p-8 border border-[var(--color-amode-cream)] bg-white shadow-sm text-center">
                <div className="text-[var(--color-amode-gold)] text-4xl mb-4 font-serif">"</div>
                <p className="font-sans text-gray-700 italic mb-6">"{test.text}"</p>
                <p className="font-serif text-sm tracking-widest uppercase text-[var(--color-amode-black)]">- {test.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 9. Final Shop Now CTA */}
      <section className="py-32 bg-[var(--color-amode-black)] text-center">
        <Container>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-amode-ivory)] mb-6">
            Find Your Signature Scent
          </h2>
          <p className="font-sans text-gray-400 max-w-xl mx-auto mb-10">
            Explore our full collection of artisanal fragrances and elevate your daily ritual.
          </p>
          <Button variant="accent" className="px-12 py-4">Shop Now</Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;
