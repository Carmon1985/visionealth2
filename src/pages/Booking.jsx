import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

/* Premium thin-line SVG icons */
const ICONS = {
    eye: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ),
    lens: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    ),
    bolt: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    ),
    child: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 1 0-16 0" />
        </svg>
    ),
    drop: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />
        </svg>
    ),
    clipboard: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" />
            <path d="M9 14l2 2 4-4" />
        </svg>
    ),
}

const VISIT_TYPES = [
    { id: 'comprehensive', label: 'Comprehensive Eye Exam', icon: ICONS.eye, desc: 'Full vision and eye health evaluation' },
    { id: 'contact-lens', label: 'Contact Lens Fitting', icon: ICONS.lens, desc: 'Fitting and prescription for contacts' },
    { id: 'emergency', label: 'Emergency Visit', icon: ICONS.bolt, desc: 'Urgent eye care needs' },
    { id: 'pediatric', label: 'Pediatric Eye Exam', icon: ICONS.child, desc: 'Eye exams for children' },
    { id: 'dry-eye', label: 'Dry Eye Consultation', icon: ICONS.drop, desc: 'Dry eye evaluation and treatment' },
    { id: 'follow-up', label: 'Follow-up Visit', icon: ICONS.clipboard, desc: 'Post-treatment checkup' },
]

const TIME_SLOTS = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
]

function generateCalendarDays(year, month) {
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const days = []
    for (let i = 0; i < firstDay; i++) days.push(null)
    for (let d = 1; d <= daysInMonth; d++) days.push(d)
    return days
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function Booking() {
    const [step, setStep] = useState(1)
    const [visitType, setVisitType] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [calMonth, setCalMonth] = useState(new Date().getMonth())
    const [calYear, setCalYear] = useState(new Date().getFullYear())
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', notes: '' })
    const [submitted, setSubmitted] = useState(false)

    const today = new Date()
    const calendarDays = generateCalendarDays(calYear, calMonth)

    const canNext = () => {
        if (step === 1) return visitType !== null
        if (step === 2) return selectedDate !== null && selectedTime !== null
        if (step === 3) return formData.name.trim() && formData.email.trim() && formData.phone.trim()
        return true
    }

    const handleNext = () => {
        if (step < 4) setStep(step + 1)
        else setSubmitted(true)
    }

    const isDayAvailable = (day) => {
        if (!day) return false
        const date = new Date(calYear, calMonth, day)
        const dow = date.getDay()
        if (dow === 0) return false // Sunday closed
        if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return false
        return true
    }

    if (submitted) {
        return (
            <div className="min-h-screen bg-cream flex items-center justify-center px-6">
                <div className="text-center max-w-md">
                    <div className="w-20 h-20 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-4">
                        Appointment Confirmed
                    </h2>
                    <p className="text-text-secondary mb-2">
                        Thank you, <strong>{formData.name}</strong>!
                    </p>
                    <p className="text-text-secondary mb-8">
                        Your <strong>{VISIT_TYPES.find(v => v.id === visitType)?.label}</strong> has been scheduled for{' '}
                        <strong>{MONTHS[calMonth]} {selectedDate}, {calYear}</strong> at <strong>{selectedTime}</strong>.
                    </p>
                    <p className="text-xs text-text-light mb-8">
                        This is a demonstration. No actual appointment has been booked.
                    </p>
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-cream pt-28 pb-20 px-6">
            <div className="container-narrow mx-auto max-w-2xl">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-3">
                            Schedule Your Visit
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
                            Book an Appointment
                        </h1>
                    </div>
                </ScrollReveal>

                {/* Progress Bar */}
                <div className="flex items-center justify-center gap-2 mb-12">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className="flex items-center gap-2">
                            <div
                                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${s <= step ? 'bg-teal text-white' : 'bg-border text-text-light'
                                    }`}
                            >
                                {s < step ? (
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    s
                                )}
                            </div>
                            {s < 4 && (
                                <div className={`w-12 sm:w-16 h-0.5 transition-colors duration-300 ${s < step ? 'bg-teal' : 'bg-border'}`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
                    {/* Step 1: Visit Type */}
                    {step === 1 && (
                        <div>
                            <h2 className="font-serif text-2xl text-charcoal font-medium mb-2">
                                Select Visit Type
                            </h2>
                            <p className="text-text-secondary text-sm mb-8">Choose the type of appointment you need.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {VISIT_TYPES.map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setVisitType(type.id)}
                                        className={`group flex items-center gap-4 p-5 rounded-lg border-l-4 border-y border-r transition-all duration-300 cursor-pointer bg-transparent ${visitType === type.id
                                                ? 'border-l-teal border-y-teal/20 border-r-teal/20 bg-teal/5 shadow-md'
                                                : 'border-l-transparent border-y-border border-r-border hover:border-l-teal/50 hover:shadow-sm'
                                            }`}
                                    >
                                        <span className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center p-2.5 transition-colors duration-300 ${visitType === type.id ? 'bg-teal text-white' : 'bg-cream text-teal group-hover:bg-teal/10'}`}>
                                            {type.icon}
                                        </span>
                                        <span className="text-left">
                                            <span className="font-medium text-charcoal block mb-0.5 text-sm">{type.label}</span>
                                            <span className="text-xs text-text-secondary leading-tight">{type.desc}</span>
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Date & Time */}
                    {step === 2 && (
                        <div>
                            <h2 className="font-serif text-2xl text-charcoal font-medium mb-2">
                                Select Date & Time
                            </h2>
                            <p className="text-text-secondary text-sm mb-8">Pick a convenient date and time slot.</p>

                            {/* Calendar */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <button
                                        onClick={() => {
                                            if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1) }
                                            else setCalMonth(calMonth - 1)
                                        }}
                                        className="w-9 h-9 rounded-full bg-cream-dark flex items-center justify-center text-charcoal hover:bg-teal-light transition-colors cursor-pointer border-none"
                                    >
                                        ←
                                    </button>
                                    <span className="font-medium text-charcoal">
                                        {MONTHS[calMonth]} {calYear}
                                    </span>
                                    <button
                                        onClick={() => {
                                            if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1) }
                                            else setCalMonth(calMonth + 1)
                                        }}
                                        className="w-9 h-9 rounded-full bg-cream-dark flex items-center justify-center text-charcoal hover:bg-teal-light transition-colors cursor-pointer border-none"
                                    >
                                        →
                                    </button>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center">
                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                                        <div key={d} className="py-2 text-xs font-semibold text-text-light uppercase">
                                            {d}
                                        </div>
                                    ))}
                                    {calendarDays.map((day, i) => (
                                        <button
                                            key={i}
                                            disabled={!isDayAvailable(day)}
                                            onClick={() => day && isDayAvailable(day) && setSelectedDate(day)}
                                            className={`py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer border-none ${!day
                                                    ? 'invisible'
                                                    : !isDayAvailable(day)
                                                        ? 'text-text-light/40 cursor-not-allowed bg-transparent'
                                                        : selectedDate === day
                                                            ? 'bg-teal text-white font-semibold'
                                                            : 'text-charcoal hover:bg-teal-light bg-transparent'
                                                }`}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Time Slots */}
                            {selectedDate && (
                                <div>
                                    <h3 className="font-medium text-charcoal mb-3">Available Times</h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                        {TIME_SLOTS.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-none ${selectedTime === time
                                                        ? 'bg-teal text-white'
                                                        : 'bg-cream-dark text-charcoal hover:bg-teal-light'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 3: Personal Info */}
                    {step === 3 && (
                        <div>
                            <h2 className="font-serif text-2xl text-charcoal font-medium mb-2">
                                Your Information
                            </h2>
                            <p className="text-text-secondary text-sm mb-8">Please fill in your contact details.</p>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                                    <input
                                        type="text"
                                        className="input-premium"
                                        placeholder="John Smith"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
                                    <input
                                        type="email"
                                        className="input-premium"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal mb-1.5">Phone *</label>
                                    <input
                                        type="tel"
                                        className="input-premium"
                                        placeholder="(407) 555-1234"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal mb-1.5">Notes (optional)</label>
                                    <textarea
                                        className="input-premium min-h-[100px] resize-y"
                                        placeholder="Any specific concerns or requests..."
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Confirmation */}
                    {step === 4 && (
                        <div>
                            <h2 className="font-serif text-2xl text-charcoal font-medium mb-2">
                                Confirm Your Appointment
                            </h2>
                            <p className="text-text-secondary text-sm mb-8">Please review your details below.</p>
                            <div className="space-y-4 bg-cream rounded-lg p-6">
                                <div className="flex justify-between items-center py-2 border-b border-border">
                                    <span className="text-sm text-text-secondary">Visit Type</span>
                                    <span className="text-sm font-medium text-charcoal">
                                        {VISIT_TYPES.find(v => v.id === visitType)?.label}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-border">
                                    <span className="text-sm text-text-secondary">Date</span>
                                    <span className="text-sm font-medium text-charcoal">
                                        {MONTHS[calMonth]} {selectedDate}, {calYear}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-border">
                                    <span className="text-sm text-text-secondary">Time</span>
                                    <span className="text-sm font-medium text-charcoal">{selectedTime}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-border">
                                    <span className="text-sm text-text-secondary">Name</span>
                                    <span className="text-sm font-medium text-charcoal">{formData.name}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-border">
                                    <span className="text-sm text-text-secondary">Email</span>
                                    <span className="text-sm font-medium text-charcoal">{formData.email}</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-text-secondary">Phone</span>
                                    <span className="text-sm font-medium text-charcoal">{formData.phone}</span>
                                </div>
                                {formData.notes && (
                                    <div className="pt-3 border-t border-border">
                                        <span className="text-sm text-text-secondary block mb-1">Notes</span>
                                        <span className="text-sm text-charcoal">{formData.notes}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-10">
                        {step > 1 ? (
                            <button
                                onClick={() => setStep(step - 1)}
                                className="btn-outline !py-3"
                            >
                                Back
                            </button>
                        ) : (
                            <div />
                        )}
                        <button
                            onClick={handleNext}
                            disabled={!canNext()}
                            className={`btn-primary !py-3 ${!canNext() ? 'opacity-40 cursor-not-allowed hover:transform-none hover:shadow-none' : ''}`}
                        >
                            {step === 4 ? 'Confirm Booking' : 'Continue'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
