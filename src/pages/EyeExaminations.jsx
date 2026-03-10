import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const PRELIMINARY_TESTS = [
    { name: 'Color Vision', desc: 'The Ishihara Color Testing plates are used to determine the presence of red-green color deficiencies.' },
    { name: 'Depth Perception', desc: 'A test to determine the presence of three-dimensional vision or stereopsis (binocular vision). Determines the presence of conditions such as amblyopia (lazy eye) or strabismus (cross-eyes).' },
    { name: 'Auto Refraction', desc: 'Computer controlled instrument used to provide an objective measurement of your refractive error or prescription for glasses or contact lenses. This quick, simple and painless test determines the depth and shape of the eyes by measuring how light is changed as it enters the eye.' },
    { name: 'Autokeratometry', desc: 'A computerized diagnostic instrument for measuring the curvature of the anterior surface of the cornea, particularly for assessing the extent and axis of astigmatism.' },
    { name: 'Corneal Topography', desc: 'A non-invasive medical imaging technique used for mapping the surface curvature of the cornea. Provides a three-dimensional map of the cornea for fitting contact lenses and diagnosing and treating a number of medical conditions.' },
    { name: 'Visual Field Screening (FDT)', desc: 'Utilizing the latest advancement in glaucoma technology, this simple yet sophisticated test helps detect glaucoma early and accurately. The patient responds to patterns of flickering light which the instrument calculates.' },
    { name: 'Lensometry', desc: 'This computerized measurement of your current eyeglass prescription allows the doctor to determine if there is a change in your prescription.' },
    { name: 'Soft Touch Tonometry (Icare)', desc: 'This new device tests the internal pressure of the eye for Glaucoma. The small instrument uses a light probe to briefly contact the cornea. This barely noticed measurement replaces the "Puff of Air" device.' },
]

const EXAM_PROCEDURES = [
    { name: 'Visual Acuity Test', desc: 'You will be asked to read the letters or numbers of an electronic eye chart projected on the wall. Progressively smaller letters are introduced as you read each line.' },
    { name: 'Eye Muscle Movement Test', desc: 'To test muscle strength and control, the doctor will ask you to visually track a target in different directions and observe your eye movements.' },
    { name: 'Cover Test', desc: 'This test determines how well your eyes team together. As you focus at a small target, the doctor covers and uncovers each eye to observe movement, watching for an eye that turns away.' },
    { name: 'Confrontation Visual Field Exam', desc: 'The examiner will ask you to cover one eye and stare at the examiner, then move their hand in and out of your visual field. You signal when the hand comes back into view.' },
    { name: 'Retinoscopy', desc: 'A streak of light is directed into your eyes, as the examiner changes lenses in a phoropter in front of you. This test helps establish your prescription.' },
    { name: 'Refraction Testing', desc: 'A series of questions like "Which is better, this or that?" while flipping between alternate lenses to precisely define your prescription.' },
    { name: 'Slit-Lamp Examination', desc: 'A microscope called a slit lamp magnifies and lights up the front of your eye. The doctor uses it to examine each structure including the cornea, iris, lens, and anterior chamber.' },
    { name: 'Retinal Examination', desc: 'Using a head-mounted light or ophthalmoscope and pupil dilation, the doctor examines the retina, retinal blood vessels, vitreous, and optic nerve head.' },
    { name: 'Glaucoma Testing', desc: 'Determines if the fluid pressure inside your eyes is within a normal range. The Applanation Tonometer accurately measures eye pressure with a gentle touch to the cornea.' },
    { name: 'Pupil Dilation', desc: 'With pupils fully enlarged using drops (20-30 minutes to take effect), the doctor examines the inside of the eyes using various instruments. Effects may last several hours — bring sunglasses.' },
]

export default function EyeExaminations() {
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
                        Comprehensive Eye Examination
                    </h1>
                    <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto">
                        A thorough evaluation of both your vision and the health of your eyes, taking approximately 30 minutes to one hour.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto max-w-3xl">
                    <ScrollReveal>
                        <div className="text-center">
                            <p className="text-text-secondary leading-relaxed text-lg">
                                Before you meet with the doctor, an ophthalmic technician will welcome you and perform an initial assessment of your vision with a series of preliminary tests. Upon reviewing your patient information, you may be asked several questions concerning your medical and vision history. All or most of the following eye tests will be performed. Tests that are more specialized may be required depending on your condition.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Preliminary Tests */}
            <section className="section-padding bg-cream">
                <div className="container-narrow mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                                Phase 1
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
                                Preliminary Testing Procedures
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PRELIMINARY_TESTS.map((test, i) => (
                            <ScrollReveal key={test.name} delay={i * 60}>
                                <div className="p-6 rounded-lg border border-border bg-white hover:shadow-md transition-all duration-300 hover:border-teal/30 h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-teal-light text-teal flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg text-charcoal font-medium mb-2">
                                                {test.name}
                                            </h3>
                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                {test.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exam Procedures */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                                Phase 2
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
                                Exam Procedures
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {EXAM_PROCEDURES.map((proc, i) => (
                            <ScrollReveal key={proc.name} delay={i * 60}>
                                <div className="p-6 rounded-lg border border-border bg-surface hover:shadow-md transition-all duration-300 hover:border-teal/30 h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-teal-light text-teal flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg text-charcoal font-medium mb-2">
                                                {proc.name}
                                            </h3>
                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                {proc.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-teal-light">
                <div className="container-narrow mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                            Schedule Your Eye Exam
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                            Give yourself the gift of clear vision. Our thorough examination ensures nothing is overlooked.
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
