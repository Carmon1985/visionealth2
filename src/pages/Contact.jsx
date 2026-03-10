import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { img } from '../imageUrl'

const HOURS = [
    { day: 'Monday', time: '8:00am – 6:00pm' },
    { day: 'Tuesday', time: '9:00am – 5:00pm' },
    { day: 'Wednesday', time: '8:00am – 5:00pm' },
    { day: 'Thursday', time: '8:00am – 6:00pm' },
    { day: 'Friday', time: '8:00am – 5:00pm' },
    { day: 'Saturday', time: '8:00am – 2:00pm' },
    { day: 'Sunday', time: 'Closed' },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.name && form.email && form.message) setSent(true)
    }

    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img('images/clinic_interior.png')})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
                        Contact Us
                    </h1>
                    <p className="font-sans text-lg text-white/80 max-w-xl mx-auto">
                        We're here to help. Reach out to schedule an appointment or ask a question.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <ScrollReveal>
                            <div className="space-y-10">
                                {/* Address */}
                                <div>
                                    <h2 className="font-serif text-2xl text-charcoal font-medium mb-4">
                                        Vision Health Institute
                                    </h2>
                                    <a
                                        href="https://maps.google.com/maps?q=Vision+Health+Institute%2C+400+N.+Bumby+Ave.%2C+Orlando%2C+FL+32803"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-teal transition-colors block mb-4"
                                    >
                                        400 N. Bumby Ave.<br />
                                        Orlando, FL 32803
                                    </a>
                                    <div className="space-y-2">
                                        <p>
                                            <span className="text-text-light text-sm">Phone: </span>
                                            <a href="tel:4078936222" className="text-teal font-medium hover:text-teal-hover transition-colors">
                                                (407) 893-6222
                                            </a>
                                        </p>
                                        <p>
                                            <span className="text-text-light text-sm">Fax: </span>
                                            <span className="text-text-secondary">407-604-6466</span>
                                        </p>
                                        <p>
                                            <span className="text-text-light text-sm">Email: </span>
                                            <a href="mailto:myvisionhealth@gmail.com" className="text-teal font-medium hover:text-teal-hover transition-colors">
                                                myvisionhealth@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div>
                                    <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-text-light mb-4">
                                        Office Hours
                                    </h3>
                                    <div className="space-y-2">
                                        {HOURS.map((h) => (
                                            <div key={h.day} className="flex justify-between text-sm py-2 border-b border-border last:border-b-0">
                                                <span className="text-charcoal font-medium">{h.day}</span>
                                                <span className={h.time === 'Closed' ? 'text-text-light' : 'text-text-secondary'}>
                                                    {h.time}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social */}
                                <div>
                                    <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-text-light mb-4">
                                        Follow Us
                                    </h3>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://www.facebook.com/visionhealthinstitute/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-teal hover:text-white transition-colors"
                                            aria-label="Facebook"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="http://www.yelp.com/biz/vision-health-institute-orlando-2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-charcoal hover:bg-teal hover:text-white transition-colors"
                                            aria-label="Yelp"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206l3.19 2.544c.782.625.342 1.887-.52 2.167zm-7.544 5.29l1.065-5.08c.205-.981 1.578-1.065 1.914-.118l1.73 4.876c.26.732-.48 1.45-1.196 1.164l-3.285-1.312c-.67-.268-.678-1.14-.228-1.53zm-3.835-5.648l4.878-1.752c.94-.337 1.668.855 1.071 1.754l-3.09 4.656c-.45.68-1.538.388-1.574-.42l-.168-3.724c-.03-.654.327-1.296.883-1.514zM7.262 4.78l4.14 3.066c.797.59.39 1.842-.6 1.842H5.65c-.792 0-1.258-.918-.748-1.473l2.612-2.834a1.072 1.072 0 011.416-.083l-1.668-.518zm-2.696 9.84l1.848-4.804c.356-.924 1.752-.68 1.776.312l.124 5.124c.018.758-.88 1.177-1.454.68l-2.64-2.282c-.53-.458-.244-1.234.346-1.03z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal delay={200}>
                            <div className="bg-cream rounded-xl p-8">
                                <h2 className="font-serif text-2xl text-charcoal font-medium mb-6">
                                    Send Us a Message
                                </h2>
                                {sent ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="font-serif text-xl text-charcoal mb-2">Message Sent!</p>
                                        <p className="text-text-secondary text-sm">We'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                                            <input
                                                type="text"
                                                className="input-premium"
                                                required
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
                                            <input
                                                type="email"
                                                className="input-premium"
                                                required
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-1.5">Phone</label>
                                            <input
                                                type="tel"
                                                className="input-premium"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-1.5">Message *</label>
                                            <textarea
                                                className="input-premium min-h-[120px] resize-y"
                                                required
                                                value={form.message}
                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            />
                                        </div>
                                        <button type="submit" className="btn-primary w-full text-center">
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="bg-white pb-0">
                <div className="h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0!2d-81.3508!3d28.5542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzE1LjEiTiA4McKwMjEnMDIuOSJX!5e0!3m2!1sen!2sus!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Vision Health Institute location"
                    />
                </div>
            </section>
        </div>
    )
}
