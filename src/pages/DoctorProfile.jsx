import { useParams, Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const DOCTORS = {
    'edith-weppelmann': {
        name: 'Edith Weppelmann, O.D.',
        role: 'Lead Optometrist',
        image: '/images/doctor_edith.png',
        specialties: ['Dry Eye Therapy', 'Glaucoma Management', 'Pre/Post-Op Care', 'Ocular Emergencies', 'Injectables'],
        education: [
            'Bachelor of Science, cum laude — University of Florida',
            'Doctor of Optometry — University of Alabama at Birmingham School of Optometry',
            'Board-certified — American Board of Optometry',
            'Board-certified for the use of injectables',
        ],
        bio: [
            'After earning her Bachelor of Science degree cum laude from the University of Florida, Dr. Weppelmann attended the University of Alabama at Birmingham School of Optometry, obtaining her doctorate degree.',
            'Since graduation, she has worked in both private optometric practice as well as the more medically oriented ophthalmology group setting, where she focused on pre- and post-operative care, ocular emergencies, dry eye therapy, as well as general eye care.',
            'She also expanded her training working directly with glaucoma specialists in the management and treatment of glaucoma. Dr. Weppelmann is board-certified by the American Board of Optometry. She is also board-certified for the use of injectables.',
            'Born and raised in Poland, Dr. Weppelmann had lived and worked in England, Spain, and Germany before settling in the United States. In her free time, she loves hiking, photography, and painting, but most enjoys seeing new places and meeting interesting people.',
        ],
    },
    'thomas-weppelmann': {
        name: 'Thomas Alexander Weppelmann, MD, PhD',
        role: 'Ophthalmologist',
        image: '/images/doctor_thomas.png',
        specialties: ['Ophthalmology', 'Cornea', 'Clinical Research', 'Surgical Eye Care'],
        education: [
            'PhD in Public Health — University of Florida',
            'MD — Herbert Wertheim College of Medicine, Florida International University',
            'Ophthalmology Residency — Morsani College of Medicine, University of South Florida',
            'Cornea Fellowship — Morsani College of Medicine, University of South Florida',
            'Board-certified Ophthalmologist',
            'Fellow — American Academy of Ophthalmology',
        ],
        bio: [
            'Thomas Alexander Weppelmann, MD, PhD is a dedicated ophthalmologist serving the Central Florida community. He is a board-certified ophthalmologist and fellow of the American Academy of Ophthalmology.',
            'A Florida native who grew up in Orlando, Dr. Weppelmann brings a deep connection to the region and a passion for helping his fellow Floridians see clearly. He earned his PhD in Public Health from the University of Florida and completed his medical degree at Herbert Wertheim College of Medicine at Florida International University in Miami. He went on to pursue ophthalmology residency and a cornea fellowship at the Morsani College of Medicine at the University of South Florida in Tampa.',
            'With over 60 peer-reviewed medical publications to his name, Dr. Weppelmann combines clinical excellence with a strong research background with the goal of advancing the field of ophthalmology. He is committed to delivering compassionate, cutting-edge care and improving vision and quality of life for his patients throughout the state.',
            'When he is not at work, he enjoys spending time with his family, fishing, gardening, cooking, and exploring the wild areas of Florida.',
        ],
    },
    'thao-ho': {
        name: 'Thao Ho, O.D.',
        role: 'Optometric Physician',
        image: '/images/doctor_thao.png',
        specialties: ['Ocular Disease', 'General Eye Care', 'Comprehensive Exams', 'Community Eye Health'],
        education: [
            'Bachelor of Science in Microbiology & Molecular Biology — University of Central Florida',
            'Bachelor of Science in Vision Science — Nova Southeastern University',
            'Doctor of Optometry — Nova Southeastern University College of Optometry',
            'Member of Beta Sigma Kappa International Optometric Honor Society',
            'Post-doctorate Residency in Ocular Disease — Malcom Randall VA Medical Center, Gainesville, FL',
            'Board Certified Optometric Physician',
        ],
        bio: [
            'Dr. Thao Ho is a residency-trained, Board Certified Optometric Physician. She was born in Vietnam and grew up in Orlando, Florida.',
            'She graduated with honors at the University of Central Florida, earning a Bachelor of Science in Microbiology and Molecular Biology. She went on to receive her doctorate degree at Nova Southeastern University College of Optometry as a member of Beta Sigma Kappa, the International Optometric Honor Society. She also obtained her Bachelor of Science in Vision Science during her time at Nova. Following graduation, Dr. Ho completed her post-doctorate residency in Ocular Disease at the Malcom Randall VA Medical Center in Gainesville, Florida.',
            'Dr. Ho is dedicated to improving patients\' vision and quality of life through the latest advancements in eye health. With over 15 years of experience, she is excited and proud to be back in Orlando to provide compassionate, personalized eye care and serve the community she calls home.',
            'Dr. Ho is an active member of the American Optometric Association, Southern Council of Optometrists, Florida Optometric Association, and Central Florida Society of Optometric Physicians.',
            'Beyond the office, Dr. Ho enjoys spending time with her family, exploring new places, and discovering local gems.',
        ],
    },
}

export default function DoctorProfile() {
    const { slug } = useParams()
    const doc = DOCTORS[slug]

    if (!doc) {
        return (
            <div className="min-h-screen bg-cream flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="font-serif text-4xl text-charcoal font-light mb-4">Doctor Not Found</h1>
                    <Link to="/about" className="text-teal hover:text-teal-hover transition-colors underline">
                        ← Back to About Us
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="pt-28 pb-0 px-6">
                <div className="container-narrow mx-auto">
                    <Link to="/about" className="inline-flex items-center gap-2 text-sm text-teal hover:text-teal-hover transition-colors mb-8">
                        ← Back to About Us
                    </Link>
                </div>
            </section>

            {/* Doctor Profile */}
            <section className="section-padding pt-8 bg-cream">
                <div className="container-narrow mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        {/* Photo */}
                        <ScrollReveal className="lg:col-span-4">
                            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-md sticky top-28">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ScrollReveal>

                        {/* Content */}
                        <ScrollReveal className="lg:col-span-8" delay={200}>
                            <div>
                                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-3">
                                    {doc.role}
                                </p>
                                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-light mb-8">
                                    {doc.name}
                                </h1>

                                {/* Specialties */}
                                <div className="flex flex-wrap gap-3 mb-10">
                                    {doc.specialties.map((s) => (
                                        <span
                                            key={s}
                                            className="px-4 py-2 bg-teal-light text-teal text-xs font-semibold rounded-full"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                {/* Bio */}
                                <div className="space-y-5 text-text-secondary leading-relaxed text-lg mb-12">
                                    {doc.bio.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>

                                {/* Education */}
                                <div className="bg-white rounded-lg p-8 shadow-sm">
                                    <h2 className="font-serif text-2xl text-charcoal font-medium mb-6">
                                        Education & Certifications
                                    </h2>
                                    <ul className="space-y-3">
                                        {doc.education.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0" />
                                                <span className="text-text-secondary">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                    <Link to="/booking" className="btn-primary text-center">
                                        Book an Appointment
                                    </Link>
                                    <Link to="/about" className="btn-outline text-center">
                                        Meet Our Team
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    )
}
