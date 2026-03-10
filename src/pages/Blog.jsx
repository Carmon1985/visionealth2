import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const ARTICLES = [
    {
        slug: 'connections-between-eyes-and-headaches',
        title: 'Connections Between Eyes and Headaches',
        date: 'March 10, 2026',
        image: '/images/blog_headaches.png',
        excerpt: 'Headaches and eye health are more closely connected than most people realize. Understanding the link between your vision and headaches can help you find relief.',
        content: [
            'Headaches are one of the most common health complaints, but did you know that your eyes could be the culprit? Vision-related headaches are more common than many people realize, and understanding the connection between your eyes and your headaches could be the key to finding lasting relief.',
            'Eye strain headaches typically occur after prolonged focus on close-up tasks like reading, computer work, or using your phone. When your eyes work harder than usual to focus, the muscles in and around your eyes can become fatigued, leading to tension-type headaches. These headaches often present as a dull ache around the forehead or temples.',
            'Uncorrected vision problems — such as nearsightedness, farsightedness, or astigmatism — force your eyes to work overtime to compensate. This extra effort can lead to chronic headaches that many people don\'t attribute to their vision. A comprehensive eye exam can identify these issues and provide the correct prescription to alleviate the strain.',
            'Migraines can also have a visual component. Many migraine sufferers experience visual auras — shimmering lights, zigzag patterns, or blind spots — before or during a migraine episode. While migraines are a neurological condition, they can be triggered or worsened by glare, bright lights, or screen time.',
            'If you\'re experiencing frequent headaches, don\'t overlook your eyes as a potential cause. Schedule an eye exam to rule out vision problems. Simple solutions like an updated prescription, computer glasses, or the 20-20-20 rule (looking at something 20 feet away for 20 seconds every 20 minutes) can make a significant difference.',
        ],
    },
    {
        slug: 'lens-care-tips-for-glasses-and-contacts',
        title: 'Lens Care Tips for Glasses and Contacts',
        date: 'February 26, 2026',
        image: '/images/blog_lenscare.png',
        excerpt: 'Proper lens care is essential for maintaining clear vision and eye health. Here are expert tips for caring for both glasses and contact lenses.',
        content: [
            'Whether you wear glasses, contacts, or both, proper lens care is essential for maintaining clear vision and protecting your eye health. Poorly maintained lenses can lead to reduced visual clarity, eye infections, and even permanent damage. Here are our top tips for keeping your lenses in top condition.',
            'For glasses wearers: Always clean your lenses with a microfiber cloth and lens cleaning solution. Avoid using paper towels, tissues, or your shirt — these materials can scratch the lens coating over time. Rinse your glasses under lukewarm water before wiping to remove dust particles that could cause scratches.',
            'Store your glasses in a hard case when not in use, especially when traveling. Heat can warp frames and damage lens coatings, so never leave your glasses in a hot car or on a sunny windowsill. If your frames become loose or misaligned, visit your optician for a professional adjustment rather than attempting to fix them yourself.',
            'For contact lens wearers: Hand hygiene is the most critical factor in preventing eye infections. Always wash and dry your hands thoroughly before handling your contacts. Never use tap water, saliva, or any non-sterile liquid to clean or store your lenses — only use approved contact lens solution.',
            'Replace your contact lens case every three months, as bacteria can build up even with regular cleaning. Follow your replacement schedule strictly — don\'t stretch daily, weekly, or monthly lenses beyond their intended wear time. And never sleep in your contacts unless they are specifically designed for overnight wear and your doctor has approved it.',
            'Whether you wear glasses or contacts, regular eye exams are essential. Your prescription can change over time, and wearing an outdated prescription can cause eye strain, headaches, and fatigue. Schedule your comprehensive exam today to ensure your lenses are giving you the best possible vision.',
        ],
    },
    {
        slug: 'color-blindness-not-just-black-and-white',
        title: 'Color Blindness: Not Just Black and White',
        date: 'February 12, 2026',
        image: '/images/blog_colorblind.png',
        excerpt: 'Color blindness affects millions but is widely misunderstood. Learn what it really means, who\'s affected, and how it\'s diagnosed.',
        content: [
            'Color blindness — or more accurately, color vision deficiency — affects approximately 1 in 12 men and 1 in 200 women worldwide. Despite its name, color blindness rarely means seeing the world entirely in black and white. Most people with color vision deficiency simply perceive certain colors differently.',
            'The most common type is red-green color deficiency, which makes it difficult to distinguish between reds and greens. People with this condition may see these colors as more muted, brown, or similar to each other. Blue-yellow color deficiency is less common and affects the ability to distinguish between blue and green, and between yellow and red.',
            'Color vision deficiency is usually inherited and is caused by the absence or malfunction of certain photoreceptor cells (cones) in the retina. Men are affected far more frequently than women because the genes responsible for the most common types of color vision deficiency are on the X chromosome.',
            'While there\'s currently no cure for inherited color vision deficiency, there are tools and strategies that can help. Specialty tinted lenses can enhance color contrast for some people. Digital accessibility features on phones and computers can also be adjusted to help those with color vision deficiency.',
            'Color vision testing is a standard part of a comprehensive eye exam at Vision Health Institute. The Ishihara Color Test uses a series of plates with colored dots that form numbers or patterns. People with normal color vision can see the numbers clearly, while those with color vision deficiency may see different numbers or no numbers at all.',
            'If you suspect you or your child may have a color vision deficiency, schedule an eye exam. Early detection, especially in children, is important for academic success and safety. While it won\'t affect the health of your eyes, knowing about it allows you to develop strategies for daily life.',
        ],
    },
    {
        slug: 'the-trick-to-optical-illusions',
        title: 'The Trick to Optical Illusions',
        date: 'January 28, 2026',
        image: '/images/blog_illusions.png',
        excerpt: 'Why do optical illusions trick our brains? Discover the fascinating science behind how our eyes and brain process visual information.',
        content: [
            'Optical illusions have fascinated humans for centuries. From ancient Greek architecture designed to appear perfectly straight to modern social media debates about the color of a dress, optical illusions reveal something fundamental about how our visual system works — and its surprising limitations.',
            'Our eyes don\'t work like cameras, simply recording what\'s in front of us. Instead, vision is an active process where your brain interprets electrical signals from your retina to construct a perception of the world. This interpretation process uses shortcuts, assumptions, and prior experience — and that\'s exactly what optical illusions exploit.',
            'Size illusions, like the famous Ponzo illusion (where two identical lines appear to be different lengths), occur because our brains use contextual cues like perspective lines to judge size. In everyday life, this helps us accurately judge distances and sizes — but in an illusion, these cues are manipulated to fool us.',
            'Color and brightness illusions demonstrate that our perception of color is relative, not absolute. The same shade of gray can appear lighter or darker depending on the surrounding colors. This is because our visual system is designed to perceive contrast and relative differences rather than absolute values — an adaptation that helps us see in varying lighting conditions.',
            'Motion illusions, like spinning spirals that appear to move even in a static image, exploit how our brains process patterns and edges. Specific patterns of contrast and color can trigger motion-detection neurons in your visual cortex even when nothing is actually moving.',
            'Optical illusions aren\'t just fun — they\'re powerful tools for understanding vision science. Researchers use them to study how the brain processes visual information, which has applications in everything from treating visual disorders to designing better user interfaces. The next time you see an optical illusion, remember: it\'s not your eyes playing tricks — it\'s your brain\'s incredible interpretation system at work.',
        ],
    },
]

export default function Blog() {
    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/hero_main.png)' }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
                        From the Blog
                    </h1>
                    <p className="font-sans text-lg text-white/80 max-w-xl mx-auto">
                        Eye health tips, news, and insights from our team.
                    </p>
                </div>
            </section>

            {/* Articles */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto">
                    <div className="space-y-16">
                        {ARTICLES.map((article, i) => (
                            <ScrollReveal key={article.slug} delay={i * 100}>
                                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                                    <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-sm">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal mb-3">
                                            {article.date}
                                        </p>
                                        <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-medium mb-4">
                                            {article.title}
                                        </h2>
                                        <p className="text-text-secondary leading-relaxed mb-4">
                                            {article.excerpt}
                                        </p>
                                        <div className="space-y-4 text-text-secondary leading-relaxed">
                                            {article.content.slice(0, 2).map((p, pi) => (
                                                <p key={pi} className="text-sm">{p}</p>
                                            ))}
                                        </div>
                                        {article.content.length > 2 && (
                                            <details className="mt-4 group">
                                                <summary className="text-teal font-semibold text-sm uppercase tracking-widest cursor-pointer hover:text-teal-hover transition-colors list-none flex items-center gap-2">
                                                    Read More
                                                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </summary>
                                                <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
                                                    {article.content.slice(2).map((p, pi) => (
                                                        <p key={pi} className="text-sm">{p}</p>
                                                    ))}
                                                </div>
                                            </details>
                                        )}
                                    </div>
                                </article>
                                {i < ARTICLES.length - 1 && (
                                    <hr className="border-border mt-16" />
                                )}
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
                            Have Questions About Your Eye Health?
                        </h2>
                        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                            Our team is here to answer your questions. Schedule a comprehensive eye exam today.
                        </p>
                        <Link to="/booking" className="btn-primary">
                            Book Your Appointment
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
