import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { img } from '../imageUrl'

const PROMOTIONS = [
    {
        title: 'New Patient Special',
        desc: 'First-time patients receive a comprehensive eye exam with digital retinal imaging included at no additional charge.',
        badge: 'New Patients',
        highlight: true,
    },
    {
        title: 'Contact Lens Package',
        desc: 'Annual contact lens package including fitting, follow-up visits, and a supply of premium contact lenses at a bundled rate.',
        badge: 'Best Value',
        highlight: false,
    },
    {
        title: 'Second Pair Discount',
        desc: 'Purchase a complete pair of prescription eyeglasses and receive 50% off a second pair. Perfect for prescription sunglasses.',
        badge: '50% Off',
        highlight: false,
    },
    {
        title: 'Family Eye Care',
        desc: 'Book appointments for the whole family on the same day and receive special family pricing on comprehensive eye exams.',
        badge: 'Families',
        highlight: false,
    },
    {
        title: 'OptiLight Dry Eye Treatment',
        desc: 'Ask about our introductory pricing for the FDA-approved OptiLight by Lumenis dry eye treatment series.',
        badge: 'Specialty',
        highlight: true,
    },
    {
        title: 'Senior Eye Health',
        desc: 'Patients 65+ receive complimentary iWellness retinal screening with every comprehensive eye exam.',
        badge: 'Seniors',
        highlight: false,
    },
]

export default function Promotions() {
    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img('images/premium_eyewear.png')})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
                        Promotions & Specials
                    </h1>
                    <p className="font-sans text-lg text-white/80 max-w-xl mx-auto">
                        Take advantage of our current offers and save on quality eye care.
                    </p>
                </div>
            </section>

            {/* Promotions Grid */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                                Current Offers
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
                                Special Deals for You
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PROMOTIONS.map((promo, i) => (
                            <ScrollReveal key={promo.title} delay={i * 100}>
                                <div className={`relative p-8 rounded-xl h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${promo.highlight
                                    ? 'bg-teal text-white shadow-md'
                                    : 'bg-cream border border-border'
                                    }`}>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${promo.highlight
                                        ? 'bg-white/20 text-white'
                                        : 'bg-teal-light text-teal'
                                        }`}>
                                        {promo.badge}
                                    </span>
                                    <h3 className={`font-serif text-xl font-medium mb-3 ${promo.highlight ? 'text-white' : 'text-charcoal'}`}>
                                        {promo.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${promo.highlight ? 'text-white/80' : 'text-text-secondary'}`}>
                                        {promo.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal delay={300}>
                        <div className="text-center mt-12">
                            <p className="text-sm text-text-light mb-6">
                                Promotions may not be combined with insurance benefits. Contact us for details.
                            </p>
                            <Link to="/booking" className="btn-primary">
                                Book Your Appointment
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Shop Online */}
            <section className="section-padding bg-cream">
                <div className="container-narrow mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                            Shop Contacts Online
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                            Reorder your contact lenses online from the comfort of your home.
                        </p>
                        <a
                            href="https://secure.yourlens.com/?DID=26197"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                        >
                            Shop Now
                        </a>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
