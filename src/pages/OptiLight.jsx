import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { img } from '../imageUrl'

export default function OptiLight() {
    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img('images/treatment_optilight.png')})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6">
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal-light mb-4">
                        Specialty Treatment
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
                        OptiLight by Lumenis
                    </h1>
                    <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto">
                        FDA-approved intense pulsed light therapy for dry eye relief.
                    </p>
                </div>
            </section>

            {/* Dry Eyes Problem */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <ScrollReveal>
                            <div>
                                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                                    The Problem
                                </p>
                                <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                                    Are You Struggling with Dry Eyes?
                                </h2>
                                <div className="space-y-4 text-text-secondary leading-relaxed">
                                    <p>
                                        You rely on your vision every day, but irritating dry eye symptoms can get in the way of living life to its fullest. Not only are dry eyes uncomfortable, but they can also impact your job performance, make daily tasks increasingly difficult, and so much more.
                                    </p>
                                    <p>
                                        Our optometry team is committed to providing you with the vision care you need and deserve. At our practice, we're proud to offer OptiLight by Lumenis to our patients, specially designed to help you find relief from dry eye disease.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={img('images/treatment_optilight.png')}
                                    alt="Dry eye treatment"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* What Is Dry Eye Disease */}
            <section className="section-padding bg-cream">
                <div className="container-narrow mx-auto max-w-3xl">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
                                What Is Dry Eye Disease?
                            </h2>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <div className="space-y-5 text-text-secondary leading-relaxed">
                            <p>
                                Dry eye disease is an eye condition that occurs when your eyes don't get adequate lubrication from your tears to keep them moist and comfortable. This is often a result of your eyes not producing enough tears or producing tears that are low quality.
                            </p>
                            <p className="font-medium text-charcoal">
                                Your tears are made up of 3 distinct layers, all of which work together to keep your eyes healthy and lubricated:
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            {[
                                { layer: 'Oily Layer', desc: 'Prevents your tears from evaporating too quickly', icon: '💧' },
                                { layer: 'Watery Layer', desc: 'Delivers nutrients to your eyes', icon: '🌊' },
                                { layer: 'Mucus Layer', desc: 'Keeps your tear film stuck to the surface of your eyes', icon: '🛡️' },
                            ].map((item) => (
                                <div key={item.layer} className="bg-white rounded-lg p-6 text-center shadow-sm">
                                    <span className="text-3xl mb-3 block">{item.icon}</span>
                                    <h3 className="font-serif text-lg text-charcoal font-medium mb-2">{item.layer}</h3>
                                    <p className="text-sm text-text-secondary">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                            <h3 className="font-serif text-xl text-charcoal font-medium mb-3">The Role of the Meibomian Glands</h3>
                            <p className="text-text-secondary leading-relaxed">
                                One of the leading causes of dry eye disease is meibomian gland dysfunction. It occurs when blockages form in your meibomian glands, located around the edges of your eyelid. These blockages prevent your tear film from getting the oils it needs, which can cause your tears to evaporate too quickly, leading to dry eye symptoms.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* What Is OptiLight */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <ScrollReveal delay={200}>
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={img('images/treatment_optilight.png')}
                                    alt="OptiLight treatment device"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div>
                                <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                                    What Is OptiLight by Lumenis?
                                </h2>
                                <div className="space-y-4 text-text-secondary leading-relaxed">
                                    <p>
                                        OptiLight by Lumenis is a safe, gentle, and effective treatment for dry eye symptoms caused by meibomian gland dysfunction. This non-invasive procedure is the first and only FDA-approved intense pulsed light (IPL) treatment for dry eye management.
                                    </p>
                                    <p>
                                        OptiLight uses precise pulses of light, done in the area below the eyes, to reduce dry eye symptoms. This 10-15 minute procedure can significantly relieve dry eye symptoms by:
                                    </p>
                                </div>
                                <ul className="mt-6 space-y-3">
                                    {[
                                        'Increasing tear break-up time',
                                        'Reducing demodex mites and bacteria around your eyes',
                                        'Eliminating blood vessels that contribute to inflammation',
                                        'Improving meibomian gland functionality',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="text-text-secondary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Is It Right For Me */}
            <section className="section-padding bg-cream">
                <div className="container-narrow mx-auto max-w-3xl">
                    <ScrollReveal>
                        <div className="text-center mb-10">
                            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
                                Is OptiLight Right for Me?
                            </h2>
                        </div>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            <p>
                                While OptiLight by Lumenis is an effective dry eye management solution, we want to make sure it's right for you. We do not recommend this treatment if you:
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                                'Are taking certain medications (e.g. Accutane)',
                                'Have active acne',
                                'Suffer from certain skin disorders',
                                'Are susceptible to keloid scarring',
                                'Have severe scarring',
                                'Have severely sunburned recently',
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-sm text-text-secondary">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-text-secondary leading-relaxed text-center">
                            Your optometrist is the only person who can determine which dry eye treatment is best for you. During your next eye exam, ask us if you are a good candidate for OptiLight by Lumenis.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-teal-light">
                <div className="container-narrow mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                            We're Here to Help
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                            Our team is here to help you find relief from dry eyes. Book an appointment today to see how OptiLight can help you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/booking" className="btn-primary">
                                Book an Appointment
                            </Link>
                            <a href="tel:4078936222" className="btn-outline">
                                Call (407) 893-6222
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
