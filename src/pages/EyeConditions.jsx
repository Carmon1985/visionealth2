import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const CONDITIONS = [
    { name: 'Cataracts', desc: 'A clouding of the eye\'s natural lens that affects vision. Cataracts are very common in older people. By age 80, more than half of all Americans either have a cataract or have had cataract surgery.', category: 'Disease' },
    { name: 'Glaucoma', desc: 'A group of diseases that damage the eye\'s optic nerve and can result in vision loss and blindness. It is often associated with higher-than-normal pressure inside the eye. Early detection through regular exams is crucial.', category: 'Disease' },
    { name: 'Macular Degeneration', desc: 'Age-related macular degeneration (AMD) is a disease associated with aging that gradually destroys sharp, central vision. Central vision is needed for seeing objects clearly and for common daily tasks such as reading and driving.', category: 'Disease' },
    { name: 'Diabetic Retinopathy', desc: 'A diabetes complication that affects eyes. It\'s caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina). At first it may cause no symptoms, but it can eventually cause blindness.', category: 'Disease' },
    { name: 'Dry Eye Syndrome', desc: 'A common condition in which the eyes do not produce enough tears, or the tears evaporate too quickly. This leads to inflammation and damage of the eye\'s surface. Treatment options include OptiLight IPL therapy.', category: 'Condition' },
    { name: 'Conjunctivitis (Pink Eye)', desc: 'Inflammation or infection of the transparent membrane that lines the eyelid and covers the white part of the eyeball. Causes redness and swelling. Can be viral, bacterial, or allergic.', category: 'Condition' },
    { name: 'Keratoconus', desc: 'A progressive eye condition in which the normally round cornea thins and begins to bulge into a cone-like shape. This causes distorted vision. Specialty contact lenses are often the primary treatment.', category: 'Condition' },
    { name: 'Nearsightedness (Myopia)', desc: 'A common vision condition in which near objects appear clear, but objects farther away look blurry. It occurs when the shape of the eye causes light rays to bend incorrectly.', category: 'Vision' },
    { name: 'Farsightedness (Hyperopia)', desc: 'A common vision condition in which distant objects may be seen more clearly than objects nearby. The degree affects your focusing ability. May cause eye strain and headaches.', category: 'Vision' },
    { name: 'Astigmatism', desc: 'A common imperfection in the curvature of the eye\'s cornea or lens. It causes blurred distance and near vision. It occurs when either the front surface of the eye (cornea) or the lens has mismatched curves.', category: 'Vision' },
    { name: 'Presbyopia', desc: 'Age-related loss of near focusing ability. It becomes noticeable in the early to mid-40s and continues to worsen until around age 65. You may notice you need to hold reading material farther away.', category: 'Vision' },
    { name: 'Amblyopia (Lazy Eye)', desc: 'Reduced vision in one eye caused by abnormal visual development early in life. The weaker eye often wanders. Early detection and treatment are important to prevent permanent vision loss.', category: 'Vision' },
]

const CATEGORIES = ['Disease', 'Condition', 'Vision']
const CATEGORY_LABELS = { Disease: 'Eye Diseases', Condition: 'Eye Conditions', Vision: 'Vision Problems' }

export default function EyeConditions() {
    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/eye_examination.png)' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6">
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal-light mb-4">
                        Vision Care & Products
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
                        Eye Conditions & Diseases
                    </h1>
                    <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto">
                        Diagnosis and treatment of a wide array of eye conditions, diseases, and vision problems.
                    </p>
                </div>
            </section>

            {/* Category Sections */}
            {CATEGORIES.map((cat, catIdx) => (
                <section key={cat} className={`section-padding ${catIdx % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
                    <div className="container-narrow mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                                    {String(catIdx + 1).padStart(2, '0')}
                                </p>
                                <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
                                    {CATEGORY_LABELS[cat]}
                                </h2>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {CONDITIONS.filter(c => c.category === cat).map((condition, i) => (
                                <ScrollReveal key={condition.name} delay={i * 80}>
                                    <div className="p-6 rounded-lg border border-border bg-surface hover:shadow-md transition-all duration-300 hover:border-teal/30 h-full">
                                        <div className="w-2 h-2 rounded-full bg-teal mb-4" />
                                        <h3 className="font-serif text-xl text-charcoal font-medium mb-3">
                                            {condition.name}
                                        </h3>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {condition.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="section-padding bg-teal-light">
                <div className="container-narrow mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                            Concerned About Your Eyes?
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                            Early detection is the best protection. Schedule a comprehensive eye exam today.
                        </p>
                        <Link to="/booking" className="btn-primary">
                            Book Your Exam
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
