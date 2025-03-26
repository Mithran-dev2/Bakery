import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-red-700 text-white py-16 px-6 md:px-12 text-center">
      <h2 className="text-4xl md:text-5xl font-bold">Legacy in every bite.</h2>
      <p className="italic text-xl md:text-2xl mt-2">The Shree Mithai journey</p>

      <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
        Our humble journey started 3 decades ago when Mr. K.N Patel set out to transform his love
        for mithai and tradition into a household brand. Started initially as Shree Milk Supply, 
        crafting quality dairy products, today we have managed to blossom into a renowned sweet haven, 
        thanks to the love of Namma Chennai.
      </p>

      <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
        At Shree Mithai, we harmonize authentic taste and modernity to craft treats with impeccable taste and hygiene. 
        With branches in Chennai, we not only curate and deliver delightful mithai but also bake delicious cakes, 
        bakery goodies & more. Our unwavering dedication to quality, taste, and service proudly holds six 
        consecutive Times Food & Nightlife Awards for 'Best Mithai'.
      </p>
    </section>
  );
};

export default AboutUs;
