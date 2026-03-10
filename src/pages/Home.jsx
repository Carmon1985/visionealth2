import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

/* ═══ AI-generated premium images ═══ */
const IMAGES = {
    hero: '/images/interior.jpg',
    clinic: '/images/clinic_interior.png',
    doctor: '/images/doctor_edith.png',
    eyeExam: '/images/eye_examination.png',
    diagnostics: '/images/diagnostics_equipment.png',
    treatment: '/images/treatment_optilight.png',
    eyewear: '/images/premium_eyewear.png',
}

/* ═══════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════ */
function Hero() {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY * 0.15)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${IMAGES.hero})`,
                    transform: `translateY(${offset}px)`,
                }}
            />
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight animate-fade-in-up">
                    See Life Clearly
                </h1>
                <p className="font-sans text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                    Premium eye care in the heart of Orlando. Comprehensive exams, advanced diagnostics, and personalized treatment — all under one roof.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                    <Link to="/booking" className="btn-primary !bg-white !text-charcoal hover:!bg-cream hover:!shadow-lg">
                        Book Appointment
                    </Link>
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-outline !border-white !text-white hover:!bg-white hover:!text-charcoal cursor-pointer"
                    >
                        Our Services
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
                    <div className="w-1.5 h-2.5 bg-white/60 rounded-full" />
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════
   INTRO STRIP
   ═══════════════════════════════════════ */
function IntroStrip() {
    return (
        <section className="section-padding bg-white">
            <div className="container-narrow mx-auto text-center">
                <ScrollReveal>
                    <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal font-light leading-snug max-w-3xl mx-auto">
                        At Vision Health Institute, we combine decades of experience with cutting-edge technology to deliver exceptional, personalized eye care.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { number: '30+', label: 'Years Serving Orlando' },
                            { number: 'Board', label: 'Certified Specialists' },
                            { number: 'Advanced', label: 'Diagnostic Technology' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="font-serif text-4xl lg:text-5xl text-teal font-medium mb-2">
                                    {stat.number}
                                </div>
                                <div className="font-sans text-sm uppercase tracking-widest text-text-secondary">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════
   SERVICES — 4 Category Cards
   ═══════════════════════════════════════ */
const SERVICE_CATEGORIES = [
    {
        title: 'Comprehensive Eye Care',
        desc: 'Thorough eye examinations, vision correction, and ongoing care for the whole family.',
        image: IMAGES.eyeExam,
    },
    {
        title: 'Advanced Diagnostics',
        desc: 'OCT, topography, visual fields, and digital retinal imaging — precision at every level.',
        image: IMAGES.diagnostics,
    },
    {
        title: 'Specialty Treatments',
        desc: 'Dry eye therapy, glaucoma management, OptiLight treatment, and emergency eye care.',
        image: IMAGES.treatment,
    },
    {
        title: 'Eyewear & Contacts',
        desc: 'Curated frames, premium lenses, and expert contact lens fittings tailored to you.',
        image: IMAGES.eyewear,
    },
]

function Services() {
    return (
        <section id="services" className="section-padding bg-cream">
            <div className="container-narrow mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                            What We Offer
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
                            Our Services
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {SERVICE_CATEGORIES.map((cat, i) => (
                        <ScrollReveal key={cat.title} delay={i * 100}>
                            <Link
                                to="/services"
                                className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                style={{ aspectRatio: '3/4' }}
                            >
                                {/* Background image */}
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

                                {/* Teal accent line on hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                                    <span className="inline-block w-8 h-0.5 bg-teal mb-4 transition-all duration-500 group-hover:w-12" />
                                    <h3 className="font-serif text-xl text-white font-medium mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                                        {cat.title}
                                    </h3>
                                    <p className="text-sm text-white/70 leading-relaxed line-clamp-2 transition-all duration-500 group-hover:text-white/90">
                                        {cat.desc}
                                    </p>
                                    <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold uppercase tracking-widest text-teal-light opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                        Explore
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════
   OUR STORY — Asymmetric Layout
   ═══════════════════════════════════════ */
function OurStory() {
    return (
        <section id="our-story" className="section-padding bg-white">
            <div className="container-narrow mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                            About Us
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
                            Our Story
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Institute Story */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-20 lg:mb-28">
                    <ScrollReveal className="lg:col-span-5">
                        <div className="aspect-[4/5] rounded-lg overflow-hidden">
                            <img
                                src={IMAGES.clinic}
                                alt="Vision Health Institute clinic"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal className="lg:col-span-7" delay={200}>
                        <div className="lg:pl-4">
                            <h3 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                                A Legacy of Exceptional Eye Care
                            </h3>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    Originally established as Perry Eye Care in 1990, Vision Health Institute has been a cornerstone of the Orlando eye care community for over three decades. In 2013, the practice was renamed and reimagined as Vision Health Institute — a modern, patient-centered clinic equipped with the latest in ophthalmic technology.
                                </p>
                                <p>
                                    Today, under new ownership, we continue that tradition of excellence while bringing fresh perspectives to comprehensive eye care. We believe that every patient deserves personalized attention, cutting-edge diagnostics, and a comfortable, welcoming experience.
                                </p>
                                <p>
                                    As a proud member of Vision Source Orlando, we combine the warmth of a local practice with the resources and expertise of one of the nation's premier optometric networks.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Dr. Weppelmann */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    <ScrollReveal className="lg:col-span-7 lg:order-1" delay={200}>
                        <div className="lg:pr-4">
                            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-3">
                                Lead Optometrist
                            </p>
                            <h3 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                                Dr. Edith Weppelmann, O.D.
                            </h3>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    Board-certified by the American Board of Optometry, Dr. Weppelmann brings a wealth of experience in both private optometric practice and ophthalmology group settings. She earned her Bachelor of Science cum laude from the University of Florida and her Doctorate from the University of Alabama at Birmingham School of Optometry.
                                </p>
                                <p>
                                    Her specializations include pre- and post-operative care, ocular emergencies, dry eye therapy, and glaucoma management. Born and raised in Poland, she has lived and worked across Europe — in England, Spain, and Germany — before making Orlando her home.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-6">
                                {['Dry Eye Therapy', 'Glaucoma', 'Emergency Care', 'Pre/Post-Op'].map((spec) => (
                                    <span
                                        key={spec}
                                        className="px-3 py-1.5 bg-teal-50 text-teal text-xs font-medium rounded-full"
                                    >
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal className="lg:col-span-5 lg:order-2">
                        <div className="aspect-[4/5] rounded-lg overflow-hidden">
                            <img
                                src={IMAGES.doctor}
                                alt="Dr. Edith Weppelmann"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════
   EXPERIENCE — Differentiators
   ═══════════════════════════════════════ */
function Experience() {
    const items = [
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: '30+ Years of Service',
            desc: 'Serving the Orlando community since 1990. Trusted by generations of families for comprehensive eye care.',
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Board Certified',
            desc: 'Our specialists hold certifications from the American Board of Optometry, ensuring the highest standards.',
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Advanced Technology',
            desc: 'State-of-the-art OCT, topography, digital retinal imaging, and OptiLight by Lumenis for dry eye.',
        },
    ]

    return (
        <section className="section-padding bg-teal-light">
            <div className="container-narrow mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                            Why Choose Us
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
                            The VHI Experience
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {items.map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 150}>
                            <div className="text-center p-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-teal mb-6 shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-2xl text-charcoal font-medium mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════
   TESTIMONIALS — Carousel
   ═══════════════════════════════════════ */
const TESTIMONIALS = [
    {
        quote: "The team at Vision Health Institute made me feel so comfortable. The technology they use is incredible — I felt confident I was getting the best care possible.",
        author: 'M. Richardson',
    },
    {
        quote: "Dr. Weppelmann took the time to explain everything thoroughly. Her expertise in dry eye treatment has been life-changing for me. Highly recommend!",
        author: 'S. Martinez',
    },
    {
        quote: "I've been coming here for years and the level of care has always been exceptional. The new renovations and updated equipment make it even better.",
        author: 'J. Thompson',
    },
]

function Testimonials() {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % TESTIMONIALS.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="testimonials" className="section-padding bg-cream-dark">
            <div className="container-narrow mx-auto max-w-3xl text-center">
                <ScrollReveal>
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                        Patient Stories
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light mb-16">
                        What Our Patients Say
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="relative min-h-[200px]">
                        {TESTIMONIALS.map((t, i) => (
                            <div
                                key={i}
                                className={`transition-all duration-700 ${i === active
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4 absolute inset-0'
                                    }`}
                            >
                                <div className="font-serif text-5xl text-teal/30 mb-4">"</div>
                                <blockquote className="font-serif text-xl md:text-2xl text-charcoal font-light leading-relaxed italic mb-8">
                                    {t.quote}
                                </blockquote>
                                <p className="font-sans text-sm uppercase tracking-widest text-text-secondary">
                                    — {t.author}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none ${i === active ? 'bg-teal w-8' : 'bg-charcoal/20'
                                    }`}
                                aria-label={`Show testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════
   CONTACT / FIND US
   ═══════════════════════════════════════ */
function Contact() {
    const hours = [
        { day: 'Monday', time: '8:00am – 6:00pm' },
        { day: 'Tuesday', time: '9:00am – 5:00pm' },
        { day: 'Wednesday', time: '8:00am – 5:00pm' },
        { day: 'Thursday', time: '8:00am – 6:00pm' },
        { day: 'Friday', time: '8:00am – 5:00pm' },
        { day: 'Saturday', time: '8:00am – 2:00pm' },
        { day: 'Sunday', time: 'Closed' },
    ]

    return (
        <section id="contact" className="section-padding bg-white">
            <div className="container-narrow mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                            Visit Us
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
                            Find Us
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Map */}
                    <ScrollReveal>
                        <div className="aspect-[16/10] lg:aspect-auto lg:h-full min-h-[350px] rounded-lg overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0!2d-81.3508!3d28.5542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzE1LjEiTiA4McKwMjEnMDIuOSJX!5e0!3m2!1sen!2sus!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '350px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Vision Health Institute location"
                            />
                        </div>
                    </ScrollReveal>

                    {/* Info */}
                    <ScrollReveal delay={200}>
                        <div className="space-y-8">
                            {/* Address & Phone */}
                            <div>
                                <h3 className="font-serif text-2xl text-charcoal font-medium mb-4">
                                    Vision Health Institute
                                </h3>
                                <p className="text-text-secondary mb-2">
                                    400 N. Bumby Ave., Orlando, FL 32803
                                </p>
                                <p className="space-y-1">
                                    <a href="tel:4078936222" className="block text-teal font-medium hover:text-teal-hover transition-colors">
                                        (407) 893-6222
                                    </a>
                                    <a href="mailto:myvisionhealth@gmail.com" className="block text-teal font-medium hover:text-teal-hover transition-colors">
                                        myvisionhealth@gmail.com
                                    </a>
                                </p>
                            </div>

                            {/* Hours */}
                            <div>
                                <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-text-light mb-4">
                                    Office Hours
                                </h4>
                                <div className="space-y-2">
                                    {hours.map((h) => (
                                        <div key={h.day} className="flex justify-between text-sm py-1.5 border-b border-border last:border-b-0">
                                            <span className="text-charcoal font-medium">{h.day}</span>
                                            <span className={h.time === 'Closed' ? 'text-text-light' : 'text-text-secondary'}>
                                                {h.time}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <Link to="/booking" className="btn-primary w-full text-center block">
                                Book Your Visit
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

/* ═══════════════════════════════════════
   HOME PAGE — Assembly
   ═══════════════════════════════════════ */
export default function Home() {
    return (
        <>
            <Hero />
            <IntroStrip />
            <Services />
            <OurStory />
            <Experience />
            <Testimonials />
            <Contact />
        </>
    )
}
