export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top contact bar */}
      <div className="w-full bg-cyan-100 text-gray-700 text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><span>📞</span> +971 54 446 1020</span>
            <span className="hidden sm:flex items-center gap-2"><span>✉️</span> Carpetflooringmart@gmail.com</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs">Follow us</span>
            <span>🔗</span>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <section className="relative min-h-[70vh]">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7, 89, 133, 0.3), rgba(7, 89, 133, 0.3)), url(https://images.unsplash.com/photo-1596079890744-cb2e7f93a559?q=80&w=2000&auto=format&fit=crop)",
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        />

        {/* Navbar over hero */}
        <header className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="mt-6 rounded-md bg-gray-900/70 text-white backdrop-blur flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white text-gray-900 grid place-items-center font-bold">C</div>
                <div className="leading-tight">
                  <p className="font-semibold">CARPET</p>
                  <p className="text-[10px] tracking-widest">FLOORING MART</p>
                </div>
              </div>
              <ul className="hidden md:flex items-center gap-6 text-sm">
                <li className="font-medium"><a href="#">Home</a></li>
                <li><a href="#">Flooring</a></li>
                <li><a href="#">Carpets & Rugs</a></li>
                <li><a href="#">Skirting</a></li>
                <li><a href="#">Interior Design</a></li>
                <li><a href="#">More</a></li>
                <li><a href="#">About</a></li>
              </ul>
              <a
                href="#quote"
                className="ml-4 inline-flex items-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-400"
              >
                Get Quote
              </a>
            </nav>
          </div>
        </header>

        {/* Hero copy */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-40 pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-md leading-[1.1]">
              Elevate Your Interiors
              <br />
              with High-End Flooring
              <br />
              Services in UAE
            </h1>
            <p className="mt-6 text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              Trusted by hundreds in the UAE, we provide elegant, durable flooring with professional
              service and quick turnaround times.
            </p>
            <div className="mt-8">
              <a
                href="#services"
                className="inline-flex items-center rounded-md bg-cyan-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow hover:bg-cyan-500"
              >
                Get The Service Now
              </a>
            </div>
          </div>
        </div>
        <div className="pb-[56%] sm:pb-[46%] md:pb-[40%] lg:pb-[32%]" />
      </section>
      
     

      {/* Intro section with wave background */}
      <section className="relative bg-white">
        {/* subtle wave accent behind content */}
        <div className="absolute inset-x-0 -top-14 -z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 140" className="w-full h-[140px] text-cyan-100 fill-current" preserveAspectRatio="none">
            <path d="M0,96 C 120,64 240,128 360,96 C 480,64 600,128 720,96 C 840,64 960,128 1080,96 C 1200,64 1320,128 1440,96 L1440,0 L0,0 Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="bg-white/95 border-2 border-gray-900 rounded-xl p-8 shadow-sm max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              We are one of the Best Flooring
              <br />
              Companies In UAE
            </h2>
            <p className="mt-4 text-gray-700">
              Carpet Flooring Mart is one of the top flooring companies in UAE, known for
              quality service and customer care. We focus on one-on-one consultations to
              build lasting relationships. Offering a wide range of flooring options with
              warranties, we ensure lasting value. Our team is available online 24/7 for
              your convenience.
            </p>
            <a href="#appointment" className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">
              Book An Appointment
            </a>
          </div>
          <div className="flex-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Carpet_icon_-_The_Noun_Project.svg/480px-Carpet_icon_-_The_Noun_Project.svg.png"
              alt="Carpet Flooring Mart logo"
              className="w-64 sm:w-80 md:w-96 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-cyan-100 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our Featured Service
          </h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div>
              <div className="rounded-xl overflow-hidden border-4 border-gray-900 shadow">
                <img
                  src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop"
                  alt="Carpets and rugs"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <p className="mt-3 text-center text-lg font-semibold">Carpets & Rugs</p>
            </div>
            {/* Card 2 */}
            <div>
              <div className="rounded-xl overflow-hidden border-4 border-gray-900 shadow">
                <img
                  src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop"
                  alt="Curtains"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <p className="mt-3 text-center text-lg font-semibold">Curtains</p>
            </div>
            {/* Card 3 */}
            <div>
              <div className="rounded-xl overflow-hidden border-4 border-gray-900 shadow">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                  alt="Blinds"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <p className="mt-3 text-center text-lg font-semibold">Blinds</p>
            </div>
            {/* Card 4 */}
            <div>
              <div className="rounded-xl overflow-hidden border-4 border-gray-900 shadow">
                <img
                  src="https://images.unsplash.com/photo-1519710164239-ec3e94f7a1d0?q=80&w=1200&auto=format&fit=crop"
                  alt="Furniture"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <p className="mt-3 text-center text-lg font-semibold">Furniture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flooring CTA split section */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left info panel */}
            <div className="bg-cyan-200/80 rounded-2xl p-8 md:p-10 text-gray-900">
              <h3 className="text-3xl font-extrabold">Flooring</h3>
              <p className="mt-4 leading-relaxed">
                We provide expert flooring solutions tailored to your space and style. From
                installation to replacement, we offer a wide range of flooring options including
                vinyl, laminate, tile, SPC, carpet, and hardwood. Whether it’s for your home,
                office, or commercial space, our team ensures high-quality materials, flawless
                finish, and long-lasting results. Your satisfaction is our priority—let’s build
                beautiful floors together!
              </p>
              <a
                href="#appointment"
                className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Book An Appointment
              </a>
            </div>
            {/* Right large image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop"
                alt="Wood flooring in a bright room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Carpet & Rugs split section */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left large image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2000&auto=format&fit=crop"
                alt="Cozy carpeted living room with fireplace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right info panel */}
            <div className="bg-cyan-200/80 rounded-2xl p-8 md:p-10 text-gray-900">
              <h3 className="text-3xl font-extrabold">Carpet & Rugs</h3>
              <p className="mt-4 leading-relaxed">
                Enhance your space with our premium carpet and rug services. We offer a wide range
                of styles, colors, and textures to suit your decor and comfort. From wall-to-wall
                carpeting to custom and area rugs, we ensure expert installation and lasting
                durability. Our team helps you choose the perfect option to add warmth, style, and
                elegance to your home or office. Experience comfort with every step.
              </p>
              <a
                href="#appointment"
                className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Book An Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Flooring CTA split section */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left info panel */}
            <div className="bg-cyan-200/80 rounded-2xl p-8 md:p-10 text-gray-900">
              <h3 className="text-3xl font-extrabold">Flooring</h3>
              <p className="mt-4 leading-relaxed">
                We provide expert flooring solutions tailored to your space and style. From
                installation to replacement, we offer a wide range of flooring options including
                vinyl, laminate, tile, SPC, carpet, and hardwood. Whether it’s for your home,
                office, or commercial space, our team ensures high-quality materials, flawless
                finish, and long-lasting results. Your satisfaction is our priority—let’s build
                beautiful floors together!
              </p>
              <a
                href="#appointment"
                className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Book An Appointment
              </a>
            </div>
            {/* Right large image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop"
                alt="Wood flooring in a bright room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Carpet & Rugs split section */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left large image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2000&auto=format&fit=crop"
                alt="Cozy carpeted living room with fireplace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right info panel */}
            <div className="bg-cyan-200/80 rounded-2xl p-8 md:p-10 text-gray-900">
              <h3 className="text-3xl font-extrabold">Carpet & Rugs</h3>
              <p className="mt-4 leading-relaxed">
                Enhance your space with our premium carpet and rug services. We offer a wide range
                of styles, colors, and textures to suit your decor and comfort. From wall-to-wall
                carpeting to custom and area rugs, we ensure expert installation and lasting
                durability. Our team helps you choose the perfect option to add warmth, style, and
                elegance to your home or office. Experience comfort with every step.
              </p>
              <a
                href="#appointment"
                className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Book An Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
       {/* Complete Customer Satisfaction */}
       <section className="bg-cyan-100 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left copy */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Complete Customer Satisfaction
            </h3>
            <p className="mt-6 text-gray-700 max-w-2xl">
              “We prioritize your vision and satisfaction at every stage — from design consultation
              to project completion — ensuring results that exceed expectations.”
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-md bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-white"
            >
              Contact Now
            </a>
          </div>

          {/* Right feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card: Free Online Quotation */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow">
              <div className="text-gray-900">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h10" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Free Online Quotation</h4>
                <p className="text-sm text-gray-600">Get a free quotation for your desired product.</p>
              </div>
            </div>

            {/* Card: Free Site Inspection */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow">
              <div className="text-gray-900">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Free Site Inspection</h4>
                <p className="text-sm text-gray-600">We pay free site visits for floor inspections.</p>
              </div>
            </div>

            {/* Card: Payment Flexibility */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow">
              <div className="text-gray-900">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="12" rx="2" />
                  <path d="M2 11h20" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Payment Flexibility</h4>
                <p className="text-sm text-gray-600">Pay money via cash</p>
              </div>
            </div>

            {/* Card: Expert Consultancy */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow">
              <div className="text-gray-900">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Expert Consultancy</h4>
                <p className="text-sm text-gray-600">Get expert consultancy from our team online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Installation CTA split section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left large image */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605042069559-7f332f43f88b?q=80&w=2000&auto=format&fit=crop"
              alt="Technician installing flooring planks"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right copy */}
          <div>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Get Flawless Flooring Installation
              <br />
              Service In UAE
            </h3>
            <p className="mt-6 text-gray-700 leading-relaxed">
              At Carpet Flooring Mart, we ensure a flawless flooring installation experience across
              the UAE. Choose from our wide collection of top-quality flooring options including
              carpets, vinyl, laminate, hardwood, and tiles—perfect for any residential or commercial
              setting. Our professional team visits your space for accurate measurement and
              personalized consultation, then handles the full installation with expert
              craftsmanship, delivering a clean, durable, and polished finish.
            </p>
            <a
              href="#appointment"
              className="mt-8 inline-flex items-center rounded-md bg-cyan-200 px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-cyan-400 hover:bg-cyan-300"
            >
              Book Now!
            </a>
          </div>
        </div>
      </section>
      
      {/* Benefits section */}
      <section className="relative py-20">
        {/* Background image + overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80)",
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/45" />

        <div className="relative z-20 max-w-7xl mx-auto px-4">
          <h3 className="text-center text-white text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Undeniable Benefits Of Our Services
          </h3>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-8 shadow-md text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-cyan-200 grid place-items-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                  <path d="M16 2v5h5" />
                  <path d="M8 22v-5H3" />
                  <path d="M3 7l5-5 4 4 4-4 5 5-4 4 4 4-5 5-4-4-4 4-5-5 4-4-4-4z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold">Eco-Friendly</h4>
              <p className="mt-3 text-gray-600 text-sm">
                We craft our quality products using non-toxic materials that prevent the release of
                harmful VOCs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-8 shadow-md text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-cyan-200 grid place-items-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                  <path d="M9 18V6l12-3v12" />
                  <circle cx="6" cy="18" r="3" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold">Sound Acoustic</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Multi-layered floor covers with special backing reduce noise and improve sound
                insulation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-8 shadow-md text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-cyan-200 grid place-items-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                  <path d="M12 2v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M19.07 4.93l-2.83 2.83" />
                  <path d="M22 12h-4" />
                  <path d="M12 22v-4" />
                  <path d="M4.93 19.07l2.83-2.83" />
                  <path d="M19.07 19.07l-2.83-2.83" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold">Easily Maintainable</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Durable floorings that are easy to maintain and resistant to dust, scratches, and
                stains.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl bg-white p-8 shadow-md text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-cyan-200 grid place-items-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                  <path d="M20 13a8 8 0 1 1-16 0" />
                  <path d="M4 13a8 8 0 0 1 16 0" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold">Highly Comfortable</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Flexible hard flooring paired with carpet pile height offers exceptional underfoot
                comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Customization section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Floor Customization | Your
              <br className="hidden md:block" />
              Instructions — Our Services
            </h3>
            <p className="mt-6 text-gray-700 leading-relaxed">
              At Carpet Flooring Mart, we believe your floor should reflect your style and needs. That’s
              why our Floor Customization service is all about you. Whether it’s a modern home, a traditional
              remodel, or a commercial project — we bring your ideas to life with precision. Our team follows
              your instructions closely to deliver personalized flooring solutions. From carpet tiles, hardwood,
              vinyl, and laminate to custom rugs, we offer materials, patterns, and textures that suit your space.
              We also provide free consultations, 3D previews, and expert support—ensuring your floor looks exactly
              the way you want. Your vision. Our skills. One perfect result.
            </p>
            <a
              href="#offers"
              className="mt-8 inline-flex items-center rounded-xl bg-cyan-100/70 px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-cyan-300 hover:bg-cyan-200"
            >
              Best Offers
            </a>
          </div>
          {/* Right image card */}
          <div className="rounded-3xl overflow-hidden shadow-xl shadow-cyan-200/40 ring-1 ring-gray-200">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80"
              alt="Modern living room with wooden flooring"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Customer's Feedback */}
      <section className="bg-cyan-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-cyan-200 grid place-items-center text-3xl">“”</div>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-gray-900">Customer’s Feedback</h3>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow">
              <div className="text-3xl text-gray-700">“</div>
              <p className="mt-4 text-gray-800 text-center">
                I recently got vinyl flooring installed in my apartment, and the team at Carpet Flooring Mart
                exceeded my expectations! From consultation to installation, everything was smooth and professional.
                Highly recommended!
              </p>
              <div className="mt-6">
                <p className="font-semibold">Fatima Rahman</p>
                <p className="text-sm text-gray-600">Customer</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow">
              <div className="text-3xl text-gray-700">“</div>
              <p className="mt-4 text-gray-800 text-center">
                Great quality carpets and top-class service. Their interior design package and the transformation of
                my office was unbelievable. Thank you for bringing my vision to life!
              </p>
              <div className="mt-6">
                <p className="font-semibold">Rashed Karim</p>
                <p className="text-sm text-gray-600">Customer</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow">
              <div className="text-3xl text-gray-700">“</div>
              <p className="mt-4 text-gray-800 text-center">
                Excellent experience! They helped me choose the perfect flooring for my living room. The customization
                options were impressive, and the final result looks luxurious and cozy.
              </p>
              <div className="mt-6">
                <p className="font-semibold">Nusrat Jahan</p>
                <p className="text-sm text-gray-600">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-3xl sm:text-5xl font-extrabold text-gray-900">Frequently Asked Questions | FAQs</h3>
          <p className="mt-3 text-center text-gray-600">
            Answering some of the most asked queries to ensure our commitment to quality and exceptional customer services.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-6">
              <details className="rounded-md overflow-hidden ring-1 ring-cyan-200 bg-white">
                <summary className="cursor-pointer bg-cyan-100 px-5 py-4 font-semibold flex items-center justify-between">
                  <span>What types of flooring do you offer?</span>
                  <span className="text-xl">⌃</span>
                </summary>
                <div className="px-6 py-5 text-gray-700">
                  We offer a wide range of flooring solutions including carpets, vinyl, SPC, hardwood,
                  laminate, and customized flooring options for both residential and commercial spaces.
                </div>
              </details>

              <details className="rounded-md overflow-hidden ring-1 ring-cyan-200 bg-white">
                <summary className="cursor-pointer bg-cyan-100 px-5 py-4 font-semibold flex items-center justify-between">
                  <span>Do you provide installation services?</span>
                  <span className="text-xl">⌄</span>
                </summary>
                <div className="px-6 py-5 text-gray-700">
                  Yes. Our professional team handles end‑to‑end installation with accurate measurement,
                  expert craftsmanship, and a clean finish.
                </div>
              </details>

              <details className="rounded-md overflow-hidden ring-1 ring-cyan-200 bg-white">
                <summary className="cursor-pointer bg-cyan-100 px-5 py-4 font-semibold flex items-center justify-between">
                  <span>Can I customize my flooring design?</span>
                  <span className="text-xl">⌄</span>
                </summary>
                <div className="px-6 py-5 text-gray-700">
                  Absolutely. We provide custom patterns, textures, and materials with 1:1 consultations to
                  bring your unique ideas to life.
                </div>
              </details>

              <details className="rounded-md overflow-hidden ring-1 ring-cyan-200 bg-white">
                <summary className="cursor-pointer bg-cyan-100 px-5 py-4 font-semibold flex items-center justify-between">
                  <span>Do you offer anti-bacterial or waterproof flooring?</span>
                  <span className="text-xl">⌄</span>
                </summary>
                <div className="px-6 py-5 text-gray-700">
                  Yes. We have waterproof and anti-bacterial options ideal for kitchens, bathrooms, and
                  high‑hygiene environments.
                </div>
              </details>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <details className="rounded-md overflow-hidden ring-1 ring-cyan-200 bg-white">
                <summary className="cursor-pointer bg-cyan-100 px-5 py-4 font-semibold flex items-center justify-between">
                  <span>How long does your installation project take?</span>
                  <span className="text-xl">⌃</span>
                </summary>
                <div className="px-6 py-5 text-gray-700">
                  The timeframe depends on the type of flooring, surface area, site readiness, material
                  availability, and weather conditions. We share a clear schedule after site inspection.
                </div>
              </details>

              <details className="rounded-md overflow-hidden ring-1 ring-cyan-200 bg-white">
                <summary className="cursor-pointer bg-cyan-100 px-5 py-4 font-semibold flex items-center justify-between">
                  <span>Do you offer interior design consultations?</span>
                  <span className="text-xl">⌄</span>
                </summary>
                <div className="px-6 py-5 text-gray-700">
                  Yes, we provide professional interior advice to match your flooring with the rest of
                  your space for a cohesive look.
                </div>
              </details>

              <details className="rounded-md overflow-hidden ring-1 ring-cyan-200 bg-white">
                <summary className="cursor-pointer bg-cyan-100 px-5 py-4 font-semibold flex items-center justify-between">
                  <span>Is your flooring easy to maintain?</span>
                  <span className="text-xl">⌄</span>
                </summary>
                <div className="px-6 py-5 text-gray-700">
                  Most of our solutions are stain‑ and scratch‑resistant and only require routine cleaning
                  to keep them looking new.
                </div>
              </details>

              <details className="rounded-md overflow-hidden ring-1 ring-cyan-200 bg-white">
                <summary className="cursor-pointer bg-cyan-100 px-5 py-4 font-semibold flex items-center justify-between">
                  <span>Are your floorings suitable for high‑traffic areas?</span>
                  <span className="text-xl">⌄</span>
                </summary>
                <div className="px-6 py-5 text-gray-700">
                  Yes. We have heavy‑duty, commercial‑grade options designed to perform in offices,
                  retail, corridors, and other high‑traffic spaces.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=2000&q=80)",
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
            <div>
              <div className="text-cyan-300 text-5xl font-extrabold">20+</div>
              <p className="mt-2 text-lg">Years Of Experience</p>
            </div>
            <div>
              <div className="text-cyan-300 text-5xl font-extrabold">40+</div>
              <p className="mt-2 text-lg">Expert Team Members</p>
            </div>
            <div>
              <div className="text-cyan-300 text-5xl font-extrabold">3k+</div>
              <p className="mt-2 text-lg">Satisfied Customers</p>
            </div>
            <div>
              <div className="text-cyan-300 text-5xl font-extrabold">4.5k+</div>
              <p className="mt-2 text-lg">Outstanding Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
          {/* Contact strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-slate-700 pb-6">
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p className="mt-2">+971 54 446 1020</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="mt-2">Carpetflooringmart@gmail.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Address</h4>
              <p className="mt-2">Dragon Mart 1, International city, Dubai.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="text-2xl font-extrabold tracking-wider">CARPET</div>
              <p className="mt-3 text-slate-300">
                Carpet Flooring Mart – Quality flooring, expert service, and fast installation all in one place.
              </p>
              <div className="mt-4 flex items-center gap-3 text-slate-300">
                <span className="h-8 w-8 grid place-items-center rounded-full bg-slate-700">f</span>
                <span className="h-8 w-8 grid place-items-center rounded-full bg-slate-700">x</span>
                <span className="h-8 w-8 grid place-items-center rounded-full bg-slate-700">in</span>
                <span className="h-8 w-8 grid place-items-center rounded-full bg-slate-700">ig</span>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white">Flooring</h5>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                <li>Parquet Flooring</li>
                <li>Vinyl Flooring</li>
                <li>Laminate Flooring</li>
                <li>Wooden Flooring</li>
                <li>PVC Flooring</li>
                <li>Rubber Flooring</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white">Carpets</h5>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                <li>Customize Carpet</li>
                <li>Stair Carpet</li>
                <li>Office Carpet</li>
                <li>Sisal Carpet</li>
                <li>Round Rugs</li>
                <li>Wall Carpets</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white">Furniture</h5>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                <li>Custom Made Furniture</li>
                <li>Custom Made Bed</li>
                <li>Custom Headboard</li>
                <li>Sofa Set</li>
                <li>Office Furniture</li>
                <li>Outdoor Furniture</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-slate-700 pt-6 text-sm text-slate-300">
            <p>Copyright © 2025 by Carpet Flooring Mart, All Rights Reserved.</p>
            <p>
              Design & Developed by <span className="font-semibold">Teresa Poddar</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
