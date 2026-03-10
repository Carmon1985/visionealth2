import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const DOCTORS = [
    {
        name: 'Edith Weppelmann, O.D.',
        slug: 'edith-weppelmann',
        role: 'Lead Optometrist',
        image: '/images/doctor_edith.png',
        brief: 'Board-certified optometrist specializing in dry eye therapy, glaucoma management, and pre/post-operative care.',
    },
    {
        name: 'Thomas Weppelmann, MD, PhD',
        slug: 'thomas-weppelmann',
        role: 'Ophthalmologist',
        image: '/images/doctor_thomas.png',
        brief: 'Board-certified ophthalmologist and cornea specialist with 60+ peer-reviewed publications.',
    },
    {
        name: 'Thao Ho, O.D.',
        slug: 'thao-ho',
        role: 'Optometric Physician',
        image: '/images/doctor_thao.png',
        brief: 'Residency-trained, board-certified optometric physician with 15+ years of experience.',
    },
]

export default function About() {
    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/clinic_interior.png)' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
                        About Us
                    </h1>
                    <p className="font-sans text-lg text-white/80 max-w-xl mx-auto">
                        The leading provider of quality vision care in Orlando since 2013.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                                Our Mission
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-8">
                                Exceptional Eye Care, Personalized for You
                            </h2>
                            <div className="space-y-5 text-text-secondary leading-relaxed text-lg text-left">
                                <p>
                                    Since 2013, Vision Health Institute has been the leader and preferred provider of quality vision care products and personalized optometric services to our patients in Orlando and the surrounding areas. Our experienced doctors and staff offer comprehensive vision examinations and specialize in the diagnosis and treatment of a wide array of eye diseases, conditions, and problems.
                                </p>
                                <p>
                                    It is our mission to provide the best eye care services possible. Our doctors use only the most advanced, state-of-the-art diagnostic technology and eye care products available. We are committed to educating our patients and providing personalized eye care services to the people of Orlando.
                                </p>
                                <p>
                                    At Vision Health Institute, you will find eye care professionals who genuinely care about your health and are dedicated to providing exceptional personal service to everyone who walks through our door.
                                </p>
                                <p>
                                    We are a proud member of <a href="http://visionsourceorlando.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-hover underline transition-colors">Vision Source Orlando</a>, a network of eye care professionals dedicated to providing focused, innovative, and trusted care to our communities.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Our Team */}
            <section className="section-padding bg-cream">
                <div className="container-narrow mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                                Our Team
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
                                Meet Our Doctors
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {DOCTORS.map((doc, i) => (
                            <ScrollReveal key={doc.slug} delay={i * 150}>
                                <Link
                                    to={`/about/doctor/${doc.slug}`}
                                    className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                                >
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <img
                                            src={doc.image}
                                            alt={doc.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal mb-2">
                                            {doc.role}
                                        </p>
                                        <h3 className="font-serif text-xl text-charcoal font-medium mb-3">
                                            {doc.name}
                                        </h3>
                                        <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                            {doc.brief}
                                        </p>
                                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal group-hover:translate-x-1 transition-transform">
                                            View Profile →
                                        </span>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                        <ScrollReveal className="lg:col-span-5">
                            <div className="aspect-[4/5] rounded-lg overflow-hidden">
                                <img
                                    src="/images/clinic_interior.png"
                                    alt="Vision Health Institute history"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal className="lg:col-span-7" delay={200}>
                            <div className="lg:pl-4">
                                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-3">
                                    Our History
                                </p>
                                <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                                    A Legacy of Excellence
                                </h2>
                                <div className="space-y-4 text-text-secondary leading-relaxed">
                                    <p>
                                        Drs. Mark and Karen Perry relocated to Orlando from the Tampa Bay area in 1989, after the acquisition of retail optometric practices. Over time, the practice transitioned to a private practice offering a complete range of eye care service options. In 2013, the practice was renamed and reimagined as Vision Health Institute.
                                    </p>
                                    <p>
                                        The past decades have brought remarkable changes in Central Florida and loyalty from the patients we serve. Through ongoing education and advanced technology, we continuously work to gain knowledge and develop a more in-depth understanding of solutions to help meet our patients' needs.
                                    </p>
                                    <p>
                                        Contemporary science has transformed our clinic and serves as the foundation for excellent patient care. We constantly invest in new diagnostic technology and incorporate the latest in clinical advancements.
                                    </p>
                                    <p>
                                        Today, under new ownership, each team member at Vision Health Institute works to advance their education so we may provide better solutions for each patient's needs. Our dedicated associates endeavor to develop caring and trusting relationships with our patients.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-teal-light">
                <div className="container-narrow mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                            Experience the Difference
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                            Schedule an appointment with an experienced eye care provider and give your vision the level of care and attention it deserves.
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
