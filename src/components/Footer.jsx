import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email.trim()) {
            setSubscribed(true)
            setEmail('')
        }
    }

    return (
        <footer className="bg-charcoal text-white/80">
            <div className="container-narrow mx-auto px-6 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="font-serif text-2xl text-white font-medium mb-4">
                            Vision Health Institute
                        </h3>
                        <p className="text-sm leading-relaxed text-white/60">
                            Premium eye care in Orlando, FL. Comprehensive examinations, advanced diagnostics, and personalized treatment — serving our community since 1990.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'About Us', href: '/about' },
                                { label: 'Our Services', href: '/services' },
                                { label: 'Book Appointment', href: '/booking' },
                                { label: 'Blog', href: '/blog' },
                                { label: 'Patients', href: '/patients' },
                                { label: 'Promotions', href: '/promotions' },
                                { label: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-white/60 hover:text-teal transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
                            Contact
                        </h4>
                        <div className="space-y-3 text-sm text-white/60">
                            <p>400 N. Bumby Ave.<br />Orlando, FL 32803</p>
                            <p>
                                <a href="tel:4078936222" className="hover:text-teal transition-colors">
                                    (407) 893-6222
                                </a>
                            </p>
                            <p>
                                <a href="mailto:myvisionhealth@gmail.com" className="hover:text-teal transition-colors">
                                    myvisionhealth@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
                            Stay Updated
                        </h4>
                        {subscribed ? (
                            <p className="text-sm text-teal">Thank you for subscribing!</p>
                        ) : (
                            <form onSubmit={handleSubscribe} className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded text-sm text-white placeholder-white/40 outline-none focus:border-teal transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-teal text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-teal-hover transition-colors cursor-pointer"
                                >
                                    Subscribe
                                </button>
                            </form>
                        )}
                        {/* Social */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://facebook.com/visionhealthinstitute"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                                aria-label="Facebook"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="https://yelp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                                aria-label="Yelp"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206l3.19 2.544c.782.625.342 1.887-.52 2.167zm-7.544 5.29l1.065-5.08c.205-.981 1.578-1.065 1.914-.118l1.73 4.876c.26.732-.48 1.45-1.196 1.164l-3.285-1.312c-.67-.268-.678-1.14-.228-1.53zm-3.835-5.648l4.878-1.752c.94-.337 1.668.855 1.071 1.754l-3.09 4.656c-.45.68-1.538.388-1.574-.42l-.168-3.724c-.03-.654.327-1.296.883-1.514zM7.262 4.78l4.14 3.066c.797.59.39 1.842-.6 1.842H5.65c-.792 0-1.258-.918-.748-1.473l2.612-2.834a1.072 1.072 0 011.416-.083l-1.668-.518zm-2.696 9.84l1.848-4.804c.356-.924 1.752-.68 1.776.312l.124 5.124c.018.758-.88 1.177-1.454.68l-2.64-2.282c-.53-.458-.244-1.234.346-1.03z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} Vision Health Institute. All rights reserved.
                    </p>
                    <p className="text-xs text-white/40">
                        Member of Vision Source Orlando
                    </p>
                </div>
            </div>
        </footer>
    )
}
