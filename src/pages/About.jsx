import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-amode-ivory)]">
      <Container>
        <SectionHeading title="About Amode" subtitle="Our Heritage" />
        
        <div className="max-w-4xl mx-auto space-y-24 mt-16 text-center">
          
          {/* AMODE Story */}
          <section>
            <h2 className="font-serif text-3xl mb-6 text-[var(--color-amode-black)]">The AMODE Story</h2>
            <p className="font-sans text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Born from a passion for the ethereal and the unspoken, AMODE was founded with a singular vision: to translate the poetry of nature into wearable art. Our journey began in the sun-drenched fields of Grasse and the vibrant spice markets of the East, seeking out the most evocative elements our world has to offer.
            </p>
          </section>

          {/* Brand Philosophy */}
          <section className="bg-white p-12 shadow-sm border border-gray-100">
            <h2 className="font-serif text-3xl mb-6 text-[var(--color-amode-black)]">Brand Philosophy</h2>
            <p className="font-sans text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We believe a fragrance is more than a scent; it is an invisible garment, a silent introduction, and a lingering memory. Our philosophy centers on minimalism, elegance, and the profound emotional resonance of olfaction. We strip away the unnecessary to reveal the pure, unadulterated essence of our ingredients.
            </p>
          </section>

          {/* Quality */}
          <section>
            <h2 className="font-serif text-3xl mb-6 text-[var(--color-amode-black)]">Uncompromising Quality</h2>
            <p className="font-sans text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Excellence is not an act, but a habit. We source our absolutes, resins, and essential oils from ethical growers worldwide. Each batch is meticulously tested and blended by master perfumers to ensure exceptional sillage, longevity, and complexity. We never compromise on the integrity of our raw materials.
            </p>
          </section>

          {/* Fragrance Experience */}
          <section className="bg-[var(--color-amode-black)] text-[var(--color-amode-ivory)] p-12">
            <h2 className="font-serif text-3xl mb-6 text-[var(--color-amode-gold)]">The Fragrance Experience</h2>
            <p className="font-sans text-gray-300 leading-relaxed max-w-3xl mx-auto">
              An AMODE fragrance is designed to evolve. It opens with an inviting prelude, transitions seamlessly into a complex heart, and settles into a deeply personal, long-lasting base. It is an intimate journey that reacts uniquely to your skin, creating a bespoke aura that is entirely your own.
            </p>
          </section>

          {/* Mission */}
          <section>
            <h2 className="font-serif text-3xl mb-6 text-[var(--color-amode-black)]">Our Mission</h2>
            <p className="font-sans text-gray-600 leading-relaxed max-w-3xl mx-auto">
              To elevate the everyday through the power of scent. We strive to craft fragrances that inspire confidence, evoke cherished memories, and provide a moment of transcendent beauty in a chaotic world. Our mission is to make luxury accessible without diluting its essence.
            </p>
          </section>

          {/* Why AMODE */}
          <section className="border-t border-[var(--color-amode-black)] pt-16">
            <h2 className="font-serif text-3xl mb-10 text-[var(--color-amode-black)]">Why Choose AMODE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="font-sans text-sm uppercase tracking-widest text-[var(--color-amode-gold)] mb-4">Artisanal Craft</h3>
                <p className="text-gray-600 text-sm">Small-batch production ensures meticulous attention to detail and unmatched quality control.</p>
              </div>
              <div className="p-6">
                <h3 className="font-sans text-sm uppercase tracking-widest text-[var(--color-amode-gold)] mb-4">Sustainable Ethos</h3>
                <p className="text-gray-600 text-sm">We are committed to eco-conscious packaging and ethically sourced ingredients.</p>
              </div>
              <div className="p-6">
                <h3 className="font-sans text-sm uppercase tracking-widest text-[var(--color-amode-gold)] mb-4">Timeless Elegance</h3>
                <p className="text-gray-600 text-sm">Our scents are designed to transcend trends, offering classic sophistication for the modern individual.</p>
              </div>
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
};

export default About;
