import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const DIAGNOSTICS = [
    {
        name: 'Pachymetry',
        desc: 'This instrument uses ultrasound to measure corneal thickness. Measurements of the cornea are significant in determining if you are a candidate for refractive laser surgery. Additionally, thin corneas can lead to falsely low pressure readings and thick corneas can lead to falsely high pressure readings. This test is done just once to create a baseline for future testing.',
        icon: '📏',
    },
    {
        name: 'Humphrey Visual Field Testing',
        subtitle: 'Peripheral Vision / Perimetry',
        desc: 'Your visual field is the area you are able to see in front of you without moving your eyes, including your side vision. The patient sits in front of a concave dome with a target in the center. The computer shines lights of varying intensity and the patient clicks a button when a light is seen. The computer automatically maps and calculates the visual field.',
        icon: '👁️',
    },
    {
        name: 'Amsler Grid Testing',
        desc: 'Often recommended for patients with macular diseases. The Amsler grid is an effective way for patients to monitor for changes in their central vision. Patients with significant macular disease are often advised to check the grid daily. The grid is simply a small square of graph paper with a dot in the center.',
        icon: '📐',
    },
    {
        name: 'Digital Slit Lamp Imaging',
        desc: 'A high-resolution digital camera attached to the Slit Lamp Microscope allows the doctor to have a permanent photo-image of the eye condition. This allows the doctor to manage external diseases and conditions of the eye. Digital images are used to compare progressive conditions to better determine treatment options.',
        icon: '📸',
    },
    {
        name: 'Retinal Scanning Laser (OCT)',
        subtitle: 'Optical Coherence Tomography',
        desc: 'A non-invasive imaging technology used to obtain high resolution cross-sectional images of the retina. This allows the doctor to see and measure very slight changes in the retina and optic nerve. The OCT uses light waves in a process similar to ultrasound to test for glaucoma, Age-Related Macular Degeneration (AMD), post-cataract surgery edema, or other retinal changes.',
        icon: '🔬',
    },
    {
        name: 'Retinal Photography',
        desc: 'This non-invasive High Definition Photograph generates an instantaneous, digital image of the retina, revealing important information for the comprehensive evaluation of systemic and ocular health. It provides permanent digital documentation for diagnosing disease of the retina and optic nerve, and measuring progression of glaucoma.',
        icon: '📷',
    },
    {
        name: 'Genetic Testing for AMD',
        subtitle: 'Age-Related Macular Degeneration',
        desc: 'We now have the capability to offer to our patients the ability to genetically test them for macular degeneration. The test results will predict the probability of the patient developing AMD (Age-related Macular Degeneration), enabling proactive monitoring and treatment planning.',
        icon: '🧬',
    },
]

export default function AdvancedDiagnostics() {
    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/diagnostics_equipment.png)' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6">
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal-light mb-4">
                        Vision Care & Products
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
                        Advanced Diagnostic Testing
                    </h1>
                    <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto">
                        State-of-the-art diagnostic equipment ensuring the most thorough and complete eye exam possible.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto max-w-3xl">
                    <ScrollReveal>
                        <div className="text-center">
                            <p className="text-text-secondary leading-relaxed text-lg">
                                Vision Health Institute is equipped with the most advanced diagnostic testing equipment to ensure our patients are receiving the most thorough and complete eye exam possible. Our highly-trained staff are ready to answer any questions that you might have. The following diagnostics are just some of the tests you may receive during your eye exam.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Diagnostics */}
            <section className="section-padding bg-cream">
                <div className="container-narrow mx-auto">
                    <div className="space-y-8">
                        {DIAGNOSTICS.map((diag, i) => (
                            <ScrollReveal key={diag.name} delay={i * 80}>
                                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start p-8 rounded-xl ${i % 2 === 0 ? 'bg-white' : 'bg-white'} shadow-sm`}>
                                    <div className="lg:col-span-1 flex items-start">
                                        <span className="text-4xl">{diag.icon}</span>
                                    </div>
                                    <div className="lg:col-span-11">
                                        <h3 className="font-serif text-2xl text-charcoal font-medium mb-1">
                                            {diag.name}
                                        </h3>
                                        {diag.subtitle && (
                                            <p className="text-sm text-teal font-medium mb-3">{diag.subtitle}</p>
                                        )}
                                        <p className="text-text-secondary leading-relaxed">
                                            {diag.desc}
                                        </p>
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
                            Schedule Your Diagnostic Exam
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                            Early detection is key. Our advanced diagnostics catch problems before they affect your vision.
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
