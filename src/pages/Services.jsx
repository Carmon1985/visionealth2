import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { img } from '../imageUrl'

const IMAGES = {
    hero: img('images/hero_main.png'),
    eyeExam: img('images/eye_examination.png'),
    diagnostics: img('images/diagnostics_equipment.png'),
    treatment: img('images/treatment_optilight.png'),
    eyewear: img('images/premium_eyewear.png'),
}

const CATEGORIES = [
    {
        id: 'comprehensive',
        title: 'Comprehensive Eye Care',
        desc: 'Our thorough approach to eye health covers everything from routine vision screenings to complex diagnostic evaluations.',
        image: IMAGES.eyeExam,
        link: '/services/eye-examinations',
        services: [
            { name: 'Comprehensive Eye Examinations', desc: 'Complete evaluation of your vision and eye health, including refraction, eye pressure, and retinal examination.' },
            { name: 'iWellness Exam', desc: 'Advanced retinal screening using cutting-edge imaging technology to detect early signs of eye disease.' },
            { name: 'Pediatric Vision Care', desc: 'Gentle, thorough eye exams designed specifically for children, ensuring healthy visual development.' },
            { name: 'Vision Correction', desc: 'Personalized prescriptions and solutions to achieve your best possible vision.' },
        ],
    },
    {
        id: 'diagnostics',
        title: 'Advanced Diagnostics',
        desc: 'We invest in the latest diagnostic technology to catch problems early and monitor your eye health with precision.',
        image: IMAGES.diagnostics,
        link: '/services/advanced-diagnostics',
        services: [
            { name: 'Optical Coherence Tomography (OCT)', desc: 'High-resolution cross-sectional imaging of the retina for early detection of macular degeneration and glaucoma.' },
            { name: 'Topography & Keratography', desc: 'Detailed mapping of the corneal surface for contact lens fitting and surgical planning.' },
            { name: 'Visual Fields Testing', desc: 'Peripherial vision assessment, essential for glaucoma monitoring and neurological evaluations.' },
            { name: 'Digital Retinal Photography', desc: 'High-definition imaging of the retina for documentation and comparison over time.' },
            { name: 'Glaucoma Testing', desc: 'Comprehensive intraocular pressure measurement and optic nerve evaluation.' },
        ],
    },
    {
        id: 'specialty',
        title: 'Specialty Treatments',
        desc: 'From dry eye therapy to emergency care, our specialists provide targeted treatments for complex eye conditions.',
        image: IMAGES.treatment,
        link: '/services/optilight',
        services: [
            { name: 'OptiLight by Lumenis', desc: 'FDA-approved intense pulsed light therapy for chronic dry eye disease, targeting the root cause of inflammation.' },
            { name: 'Dry Eye Therapy', desc: 'Comprehensive evaluation and multi-faceted treatment plans for dry eye syndrome.' },
            { name: 'Emergency Eye Care', desc: 'Prompt evaluation and treatment for sudden vision changes, eye injuries, infections, and foreign bodies.' },
            { name: 'Eye Conditions & Diseases', desc: 'Diagnosis and management of cataracts, glaucoma, macular degeneration, diabetic retinopathy, and more.' },
            { name: 'Pre/Post-Operative Care', desc: 'Expert care before and after cataract surgery, LASIK, and other ophthalmic procedures.' },
        ],
    },
    {
        id: 'eyewear',
        title: 'Eyewear & Contacts',
        desc: 'Find your perfect look and fit with our curated collection of designer frames and advanced contact lens options.',
        image: IMAGES.eyewear,
        link: null,
        services: [
            { name: 'Designer Frames', desc: 'A carefully curated selection of premium frames from leading designers, fitted to complement your style.' },
            { name: 'Premium Lenses', desc: 'Advanced lens technologies including progressives, blue light filtering, photochromic, and anti-reflective coatings.' },
            { name: 'Contact Lens Fitting', desc: 'Expert fitting for soft lenses, toric lenses, multifocal contacts, and specialty lenses for astigmatism.' },
            { name: 'Online Shop', desc: 'Convenient online ordering for contact lenses and eye care products.' },
        ],
    },
]

export default function Services() {
    return (
        <div className="bg-cream">
            {/* Hero Banner */}
            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${IMAGES.hero})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
                        Our Services
                    </h1>
                    <p className="font-sans text-lg text-white/80 max-w-xl mx-auto">
                        Comprehensive eye care powered by advanced technology and personalized attention.
                    </p>
                </div>
            </section>

            {/* Service Categories */}
            {CATEGORIES.map((cat, catIdx) => (
                <section
                    key={cat.id}
                    className={`section-padding ${catIdx % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
                >
                    <div className="container-narrow mx-auto">
                        {/* Category Header — Asymmetric */}
                        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12 lg:mb-16 ${catIdx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}>
                            <ScrollReveal className={`lg:col-span-5 ${catIdx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </ScrollReveal>
                            <ScrollReveal className={`lg:col-span-7 ${catIdx % 2 === 1 ? 'lg:order-1' : ''}`} delay={200}>
                                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-3">
                                    {String(catIdx + 1).padStart(2, '0')}
                                </p>
                                <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-4">
                                    {cat.title}
                                </h2>
                                <p className="text-text-secondary leading-relaxed text-lg">
                                    {cat.desc}
                                </p>
                                {cat.link && (
                                    <Link to={cat.link} className="inline-flex items-center gap-2 text-teal font-semibold text-sm uppercase tracking-widest mt-4 hover:text-teal-hover transition-colors">
                                        Learn More →
                                    </Link>
                                )}
                            </ScrollReveal>
                        </div>

                        {/* Individual Services */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {cat.services.map((service, i) => (
                                <ScrollReveal key={service.name} delay={i * 80}>
                                    <div className="p-6 rounded-lg border border-border bg-surface hover:shadow-md transition-all duration-300 hover:border-teal/30 h-full">
                                        <div className="w-2 h-2 rounded-full bg-teal mb-4" />
                                        <h3 className="font-serif text-lg text-charcoal font-medium mb-2">
                                            {service.name}
                                        </h3>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Bottom CTA */}
            <section className="section-padding bg-teal-light">
                <div className="container-narrow mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                            Ready to See the Difference?
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                            Schedule your appointment today and experience the VHI difference — where advanced technology meets personalized care.
                        </p>
                        <Link to="/booking" className="btn-primary">
                            Book Your Appointment
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
