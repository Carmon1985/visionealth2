import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
    {
        label: 'About Us',
        href: '/about',
        children: [
            { label: 'Our Team', href: '/about' },
            { label: 'Dr. Edith Weppelmann', href: '/about/doctor/edith-weppelmann' },
            { label: 'Dr. Thomas Weppelmann', href: '/about/doctor/thomas-weppelmann' },
            { label: 'Dr. Thao Ho', href: '/about/doctor/thao-ho' },
        ],
    },
    {
        label: 'Services',
        href: '/services',
        children: [
            { label: 'All Services', href: '/services' },
            { label: 'Eye Examinations', href: '/services/eye-examinations' },
            { label: 'Advanced Diagnostics', href: '/services/advanced-diagnostics' },
            { label: 'OptiLight by Lumenis', href: '/services/optilight' },
            { label: 'Eye Conditions & Diseases', href: '/services/eye-conditions' },
        ],
    },
    { label: 'Promotions', href: '/promotions' },
    { label: 'Patients', href: '/patients' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)
    const [mobileExpanded, setMobileExpanded] = useState(null)
    const location = useLocation()
    const isHome = location.pathname === '/'
    const dropdownTimeout = useRef(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
        setOpenDropdown(null)
        setMobileExpanded(null)
    }, [location])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const handleMouseEnter = (label) => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
        setOpenDropdown(label)
    }

    const handleMouseLeave = () => {
        dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150)
    }

    const showTransparent = isHome && !scrolled

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${showTransparent
                    ? 'bg-transparent'
                    : 'bg-white/95 backdrop-blur-md shadow-sm'
                    }`}
            >
                <div className="container-narrow mx-auto flex items-center justify-between px-6 py-4 lg:py-5">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <span
                            className={`font-serif text-xl lg:text-2xl font-medium tracking-tight transition-colors duration-300 ${showTransparent ? 'text-white' : 'text-charcoal'
                                }`}
                        >
                            Vision Health Institute
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                                onMouseLeave={() => item.children && handleMouseLeave()}
                            >
                                <Link
                                    to={item.href}
                                    className={`font-sans text-[13px] font-medium uppercase tracking-widest transition-colors duration-300 hover:text-teal flex items-center gap-1 ${showTransparent ? 'text-white/90' : 'text-charcoal'
                                        }`}
                                >
                                    {item.label}
                                    {item.children && (
                                        <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Desktop Dropdown */}
                                {item.children && openDropdown === item.label && (
                                    <div className="absolute top-full left-0 pt-2 z-50">
                                        <div className="bg-white rounded-lg shadow-xl border border-border py-2 min-w-[220px]">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    to={child.href}
                                                    className="block px-5 py-2.5 text-sm text-charcoal hover:bg-teal-light hover:text-teal transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link to="/booking" className="btn-primary !py-3 !px-7 !text-[13px]">
                            Book Appointment
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer z-60`}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2 bg-charcoal' : showTransparent ? 'bg-white' : 'bg-charcoal'}`} />
                        <span className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : showTransparent ? 'bg-white' : 'bg-charcoal'}`} />
                        <span className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 bg-charcoal' : showTransparent ? 'bg-white' : 'bg-charcoal'}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-white transition-all duration-500 flex flex-col items-center justify-start pt-24 pb-8 overflow-y-auto ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <div className="w-full max-w-sm px-6 space-y-2">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.label}>
                            {item.children ? (
                                <>
                                    <button
                                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                                        className="w-full flex items-center justify-between py-3 font-serif text-xl text-charcoal hover:text-teal transition-colors bg-transparent border-none cursor-pointer"
                                    >
                                        {item.label}
                                        <svg className={`w-5 h-5 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    {mobileExpanded === item.label && (
                                        <div className="pl-4 pb-2 space-y-1">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    to={child.href}
                                                    onClick={() => setMenuOpen(false)}
                                                    className="block py-2 text-base text-text-secondary hover:text-teal transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-3 font-serif text-xl text-charcoal hover:text-teal transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <Link
                    to="/booking"
                    className="btn-primary mt-8 !text-base !py-4 !px-12"
                    onClick={() => setMenuOpen(false)}
                >
                    Book Appointment
                </Link>
            </div>
        </>
    )
}
