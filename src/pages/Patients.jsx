import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

export default function Patients() {
    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/clinic_interior.png)' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
                        Patient Resources
                    </h1>
                    <p className="font-sans text-lg text-white/80 max-w-xl mx-auto">
                        Everything you need for your visit — forms, insurance info, and more.
                    </p>
                </div>
            </section>

            {/* Patient Forms */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <ScrollReveal>
                            <div>
                                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                                    Before Your Visit
                                </p>
                                <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                                    Patient Forms
                                </h2>
                                <div className="space-y-4 text-text-secondary leading-relaxed">
                                    <p>
                                        Save time during your visit by completing your patient forms before you arrive. You may download, print, and complete the forms at home, or complete them electronically through our patient portal.
                                    </p>
                                    <p>
                                        Please bring your completed forms along with a valid photo ID and your insurance card to your appointment.
                                    </p>
                                </div>
                                <div className="mt-8 space-y-3">
                                    {['New Patient Registration Form', 'Medical History Form', 'HIPAA Privacy Notice', 'Financial Policy Agreement'].map((form) => (
                                        <div key={form} className="flex items-center gap-3 p-4 bg-cream rounded-lg hover:bg-teal-light transition-colors cursor-pointer">
                                            <svg className="w-5 h-5 text-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="text-sm text-charcoal font-medium">{form}</span>
                                            <svg className="w-4 h-4 text-teal ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="/images/clinic_interior.png"
                                    alt="Patient filling out forms"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Insurance */}
            <section className="section-padding bg-cream">
                <div className="container-narrow mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                                Insurance
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                                Insurance Information
                            </h2>
                            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
                                We accept most major vision and medical insurance plans. If you have questions about your specific coverage, please don't hesitate to contact our office.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['VSP', 'EyeMed', 'Medicare', 'Aetna', 'United Healthcare', 'Blue Cross Blue Shield', 'Cigna', 'Humana'].map((insurance) => (
                                <div key={insurance} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                                    <p className="font-medium text-charcoal text-sm">{insurance}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-8 text-sm text-text-light">
                            This is not a complete list. Please call <a href="tel:4078936222" className="text-teal hover:text-teal-hover transition-colors">(407) 893-6222</a> to verify your insurance coverage.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Reviews */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto text-center">
                    <ScrollReveal>
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                            Share Your Experience
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                            Leave Us a Review
                        </h2>
                        <p className="text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
                            Your feedback helps us serve you better and helps others find quality eye care. We'd love to hear about your experience at Vision Health Institute.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                            <a
                                href="https://www.facebook.com/visionhealthinstitute/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 p-5 bg-cream rounded-lg hover:bg-teal-light transition-colors group"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-charcoal group-hover:text-teal transition-colors">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span className="font-medium text-charcoal group-hover:text-teal transition-colors">Facebook</span>
                            </a>
                            <a
                                href="http://www.yelp.com/biz/vision-health-institute-orlando-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 p-5 bg-cream rounded-lg hover:bg-teal-light transition-colors group"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-charcoal group-hover:text-teal transition-colors">
                                    <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206l3.19 2.544c.782.625.342 1.887-.52 2.167zm-7.544 5.29l1.065-5.08c.205-.981 1.578-1.065 1.914-.118l1.73 4.876c.26.732-.48 1.45-1.196 1.164l-3.285-1.312c-.67-.268-.678-1.14-.228-1.53zm-3.835-5.648l4.878-1.752c.94-.337 1.668.855 1.071 1.754l-3.09 4.656c-.45.68-1.538.388-1.574-.42l-.168-3.724c-.03-.654.327-1.296.883-1.514zM7.262 4.78l4.14 3.066c.797.59.39 1.842-.6 1.842H5.65c-.792 0-1.258-.918-.748-1.473l2.612-2.834a1.072 1.072 0 011.416-.083l-1.668-.518zm-2.696 9.84l1.848-4.804c.356-.924 1.752-.68 1.776.312l.124 5.124c.018.758-.88 1.177-1.454.68l-2.64-2.282c-.53-.458-.244-1.234.346-1.03z" />
                                </svg>
                                <span className="font-medium text-charcoal group-hover:text-teal transition-colors">Yelp</span>
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Shop Online */}
            <section className="section-padding bg-cream">
                <div className="container-narrow mx-auto text-center">
                    <ScrollReveal>
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                            Convenience
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
                            Shop Contacts Online
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                            Reorder your contact lenses online from the comfort of your home. Fast, easy, and delivered to your door.
                        </p>
                        <a
                            href="https://secure.yourlens.com/?DID=26197"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Shop Now
                        </a>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
