"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
<div className="fixed top-0 left-0 w-full bg-black border-b border-white/10 z-50 text-center py-3">
  <p className="text-sm text-gray-300">
    Free Website Audit + Growth Plan for Local Businesses
  </p>
</div>
     <header className="sticky top-0 z-40 flex justify-between items-center px-8 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">

        <nav className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
          Book Call
        </button>
      </header>

      {/* HERO */}
    
      <section className="text-center flex flex-col items-center justify-center px-6 pt-44 pb-32">
        <p className="text-gray-400 tracking-widest text-sm">
          PREMIUM WEB DESIGN & AUTOMATION
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
          We Build Websites That <br />
          Turn Visitors Into Customers
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl">
          High-end websites, AI systems, and marketing funnels designed to
          help local businesses grow faster.
        </p>
<div className="flex flex-wrap justify-center gap-4 mt-10">

  <a
    href="https://calendly.com"
    target="_blank"
    className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
  >
    Book Free Strategy Call
  </a>

  <a
    href="#contact"
    className="border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition inline-block"
  >
    Send Message
  </a>

</div>
        
      </section>
<section className="text-center py-10 text-gray-400 border-y border-white/10">
  <p className="text-sm tracking-widest">
    FREE WEBSITE AUDIT + GROWTH PLAN FOR LOCAL BUSINESSES
  </p>
</section>
      {/* TRUST */}
      <section className="text-center text-gray-400 border-y border-white/10 py-10">
        <p className="text-sm tracking-widest">
          TRUSTED BY LOCAL BUSINESSES
        </p>
      </section>

     {/* SERVICES */}
<section className="px-8 py-24 border-t border-white/10 text-center">

  <h2 className="text-4xl font-bold mb-4">
    What We Build
  </h2>

  <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
    High-converting websites and automation systems designed to turn traffic into paying customers.
  </p>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    {[
      "Luxury Websites",
      "Lead Generation Systems",
      "AI Automation Tools",
      "Booking Systems",
      "SEO Optimization",
      "Sales Funnels"
    ].map((item) => (
      <div
        key={item}
        className="border border-white/10 p-6 rounded-xl hover:border-white/40 transition"
      >
        <h3 className="font-semibold text-lg">{item}</h3>
        <p className="text-gray-400 text-sm mt-2">
          Built to increase revenue and automate your business.
        </p>
      </div>
    ))}

  </div>

</section>
<div className="text-center text-gray-400 text-sm mt-6">
  Trusted by local businesses for high-converting websites & lead systems
</div>
      {/* OFFER */}
      <section className="px-8 py-24 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold">Get a Website That Converts</h2>
        <p className="text-gray-400 mt-4">
          High-end systems built to get you customers.
        </p>
      </section>
<div className="text-center mt-10">
  <p className="text-gray-400 text-sm tracking-wide">
    ⚠️ We only take 3 new clients per month to maintain quality.
  </p>
</div>
      {/* TESTIMONIALS */}
      <section className="px-8 py-24 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold">What Clients Say</h2>
      </section>

      {/* FAQ */}
      <section className="px-8 py-24 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold">FAQ</h2>
      </section>

      {/* CONTACT */}
      <section className="px-8 py-24 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold">Book a Call</h2>

        <div className="mt-10 max-w-xl mx-auto space-y-4">
          <input className="w-full p-4 bg-black border border-white/10" placeholder="Name" />
          <input className="w-full p-4 bg-black border border-white/10" placeholder="Email" />
          <textarea className="w-full p-4 bg-black border border-white/10 h-32" placeholder="Message" />
<button className="...">
  Send Message
</button>
   <a
  href="https://wa.me/15555555555"
  target="_blank"
  className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-105 transition inline-block"
>
  Send WhatsApp Message
</a>
        </div>
      </section>

      <footer className="text-center text-gray-500 py-10 border-t border-white/10">
        © C&C Web Marketing & More
      </footer>

    </main>
  );
}