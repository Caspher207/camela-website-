import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplets, Award, Globe, Factory, FileText, Download, CheckCircle, ChevronDown, MapPin, Phone, Mail, BookOpen, Microscope, Dna, ShieldCheck, Star, Scroll } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const BENEFITS = [
  {
    icon: Droplets,
    title: 'High Blood Pressure',
    description: 'Molecular hydrogen\'s potent antioxidant properties help neutralize free radicals, reducing oxidative stress and inflammation associated with high blood pressure.',
  },
  {
    icon: Droplets,
    title: 'Diabetes',
    description: 'Molecular hydrogen\'s potent antioxidant properties can also aid in managing diabetes. By neutralizing free radicals, it helps reduce oxidative stress and inflammation, key factors in diabetes development and complications.',
  },
  {
    icon: Droplets,
    title: 'Fatigue',
    description: 'Molecular hydrogen\'s potent antioxidant properties can combat fatigue by neutralizing free radicals, reducing oxidative stress, and supporting overall energy levels.',
  },
  {
    icon: Droplets,
    title: 'Stroke & Heart Attack',
    description: 'Molecular hydrogen\'s potent antioxidant properties can help reduce the risk of stroke and heart attack by neutralizing free radicals, supporting cardiovascular health, and promoting optimal blood flow.',
  },
]

const PATENTS = [
  { country: 'Korea', year: '2015', detail: 'Patent Registered' },
  { country: 'USA', year: '2016', detail: 'Patent License' },
  { country: 'Japan', year: '2018', detail: 'Patent License' },
]

const AWARDS = [
  { year: '2015', title: 'International Exhibition of Inventions of Geneva, Switzerland', detail: 'Awarded Prize' },
  { year: '2015', title: 'Seoul International Invention Fair', detail: 'Award Winning' },
]

const PATENT_CERTS = [
  { icon: Globe, color: 'from-yellow-500 to-amber-400', bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-700', label: 'Geneva, Switzerland', year: '2015', title: 'Diplôme — Salon International Des Inventions', detail: 'International Exhibition of Inventions Award' },
  { icon: Scroll, color: 'from-red-500 to-rose-400', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-700', label: 'Korea', year: '2015', title: 'Korea Intellectual Property Office', detail: 'Patent Registered Since 2015' },
  { icon: ShieldCheck, color: 'from-blue-600 to-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-700', label: 'USA', year: '2016', title: 'United States Patent License', detail: 'USPTO Awarded Patent License' },
  { icon: Scroll, color: 'from-rose-600 to-pink-500', bg: 'bg-rose-50 dark:bg-rose-900/20', border: 'border-rose-200 dark:border-rose-700', label: 'Japan', year: '2018', title: 'Japan Patent License', detail: 'JPO Awarded Patent License' },
  { icon: Award, color: 'from-amber-500 to-yellow-400', bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-700', label: 'Seoul, Korea', year: '2015', title: 'Seoul International Invention Fair', detail: 'Award Winning Invention' },
  { icon: Star, color: 'from-purple-500 to-violet-400', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-700', label: 'International', year: '2015', title: 'World Recognized Innovation', detail: 'Globally Certified Hydrogen Technology' },
]

const STUDY_CATEGORIES = [
  {
    label: 'Antioxidant Studies',
    icon: Dna,
    studies: [
      'Ohsawa, I., et al. — Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals. Nat Med, 2007.',
      'Shirahata, S., et al. — Electrolyzed-reduced water scavenges active oxygen species and protects DNA from oxidative damage. BBRC, 1997.',
      'Hanaoka, K. — Antioxidant effects of reduced water produced by electrolysis of sodium chloride solutions. J Applied Electrochemistry, 2001.',
      'Lee, M.Y., et al. — Electrolyzed-reduced water protects against oxidative damage to DNA, RNA, and protein. Appl Biochem Biotechnol, 2006.',
      'Park, S.K., et al. — Electrolyzed-reduced water confers increased resistance to environmental stresses. Mol & Cell Toxicology, 2012.',
    ],
  },
  {
    label: 'Bones Studies',
    icon: ShieldCheck,
    studies: [
      'Guo, J.D., et al. — Hydrogen water consumption prevents osteopenia in ovariectomized rats. Br J Pharmacol, 2013.',
      'Hanaoka, T., et al. — Molecular hydrogen protects chondrocytes from oxidative stress. Medical Gas Research, 2011.',
      'Sun, Y., et al. — Treatment of hydrogen molecule abates oxidative stress and alleviates bone loss induced by modeled microgravity in rats. Osteoporos Int, 2013.',
      'Cai, W.W., et al. — Treatment with hydrogen molecule alleviates TNFalpha-induced cell injury in osteoblast. Mol Cell Biochem, 2013.',
      'Li, D.Z., et al. — Treatment with hydrogen prevents RANKL-induced osteoclast differentiation associated with inhibition of ROS formation. J Bone Miner Metab, 2013.',
    ],
  },
  {
    label: 'Brain Studies',
    icon: Microscope,
    studies: [
      'Wang, C., et al. — Hydrogen-rich saline reduces oxidative stress and inflammation by inhibit of JNK and NF-kappaB in Alzheimer\'s disease model. Neuroscience Letters, 2011.',
      'Spulber, S., et al. — Molecular hydrogen reduces LPS-induced neuroinflammation and promotes recovery from sickness behaviour in mice. PLoS One, 2012.',
      'Sun, Q., et al. — Hydrogen-rich saline reduces delayed neurologic sequelae in experimental carbon monoxide toxicity. Critical Care Medicine, 2011.',
      'Shen, L., et al. — Hydrogen-rich saline is cerebroprotective in a rat model of deep hypothermic circulatory arrest. Neurochemical Research, 2011.',
      'Zhan, Y., et al. — Hydrogen gas ameliorates oxidative stress in early brain injury after subarachnoid hemorrhage in rats. Critical Care Medicine, 2012.',
    ],
  },
]

const CLINICAL_PREVIEWS = [
  { icon: BookOpen, title: 'Effects of Drinking Hydrogen-Rich Water on Quality of Life', subtitle: 'Patients treated with radiotherapy for liver tumors', tag: 'Oncology' },
  { icon: Microscope, title: 'Effectiveness of Hydrogen Rich Water as an Antioxidant Drink', subtitle: 'Subjects with Potential Metabolic Syndrome — Open Label Pilot Study', tag: 'Metabolism' },
  { icon: Dna, title: 'Molecular Hydrogen as a Novel Antioxidant', subtitle: 'Overview of the advantages of hydrogen for medical applications', tag: 'Antioxidant' },
]

const FAQS = [
  {
    q: 'What is Hydrogen Water?',
    a: 'Hydrogen water is water that contains dissolved hydrogen gas. It is still drinking water, but the water is now enriched with hydrogen gas.',
  },
  {
    q: 'What are Oxygen Free Radicals?',
    a: 'Oxygen Free Radicals are the leftover oxygen residue after energy production. Hydrogen can help to eliminate Oxygen Free Radicals, which destroy cells and distort DNA.',
  },
  {
    q: "Doesn't water already contain hydrogen since it is H₂O?",
    a: "The water molecule has 2 hydrogen atoms, chemically bound to the oxygen atom. This is different from the hydrogen gas molecule (H₂), which is just hydrogen atoms bound to each other. Just as we cannot get oxygen from drinking water (H₂O), the dissolved hydrogen gas (H₂) must be in an unbound form to benefit us therapeutically.",
  },
  {
    q: 'Is hydrogen safe for consumption?',
    a: 'Yes. Hydrogen is safe for consumption. Hydrogen gas has been shown to be very safe at concentrations hundreds of times higher than what is being used for therapy.',
  },
  {
    q: 'What are the benefits of drinking hydrogen water?',
    a: 'There are many benefits of drinking hydrogen water, all proven by clinical studies. Hydrogen helps to eliminate free radicals from our body. It can help keep our minds alert, enhance metabolism, improve blood pressure and blood circulation, aid in digestion, reduce arthritis and chronic illness symptoms, and more.',
  },
]

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <motion.div layout className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white pr-4">{q}</span>
        <ChevronDown size={18} className={`text-blue-500 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const MolecularHydrogen = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gray-950 py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-brand-900/20" />
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Droplets size={12} />
            LivePure Technology
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
            Elevate Your Health<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-400">
              Transform Your Life
            </span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            LivePure Hydrogen Generator focuses on producing a high concentration of Molecular Hydrogen to improve a person's health conditions and well-being.
          </motion.p>
        </div>
      </section>

      {/* Product Image + Intro */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)} className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-brand-500/10 rounded-3xl blur-xl" />
                <img
                  src="/livepure-product.png"
                  alt="LivePure Hydrogen Water Generator"
                  className="relative w-full max-w-sm object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-5">
                LivePure Hydrogen Generator
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                About LivePure
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                LivePure Hydrogen Generator focuses on producing a high concentration of Molecular Hydrogen to improve a person's health conditions and well-being.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Droplets, text: 'Antioxidant effect' },
                  { icon: CheckCircle, text: 'Improve your health' },
                  { icon: Globe, text: 'Rejuvenate your skin' },
                  { icon: Award, text: 'Improve sports performance' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-blue-500" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              See LivePure in Action
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Watch how the LivePure Hydrogen Water Generator works to improve your health and wellness.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl"
          >
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/B4NcziNL46Q"
                title="LivePure Hydrogen Water Generator"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              High Concentration of Molecular Hydrogen Can Help Fight
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, i) => (
              <motion.div key={benefit.title} {...fadeUp(i * 0.1)} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <benefit.icon size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World Patented Technology */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              World Patented Technology
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              LivePure uses a worldwide patented technology to generate a high concentration of Molecular Hydrogen.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {PATENTS.map((patent) => (
              <motion.div key={patent.country} {...fadeUp(0.1)} className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <p className="text-2xl font-extrabold text-blue-500 mb-1">{patent.country}</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{patent.year}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{patent.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PATENT CERTIFICATES */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-3 uppercase">
              Our Patent Certificates
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              LivePure holds internationally recognised patents and awards for its molecular hydrogen water technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PATENT_CERTS.map((cert, i) => (
              <motion.div key={cert.title} {...fadeUp(i * 0.08)} className={`relative flex flex-col items-center text-center p-6 rounded-2xl border ${cert.bg} ${cert.border}`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-md`}>
                  <cert.icon size={26} className="text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">{cert.label} · {cert.year}</span>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-snug">{cert.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{cert.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Factory Prices */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Direct Factory Prices
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Factory size={24} className="text-blue-500" />
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We have evolved from being a retailer to a product manufacturer. We are bringing this product straight from factory to you the customer. No middleman, no extra mark ups. In addition, by selling online, we can cut down on high overheads such as expensive shop rentals, retail staff cost and print advertisements. It is really truly Direct Factory Prices!
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white font-semibold">
                  <Globe size={16} />
                  100% Made in Korea
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Operating Manuals */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              LivePure Hydrogen Water Generator
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Operating Manual</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.a
              {...fadeUp(0.1)}
              href="https://1ce47e66-436f-44b2-bb80-e507b6cc6663.filesusr.com/ugd/6aca01_d563a47c417043288e2dfbe553219da0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <FileText size={24} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white mb-1">English Manual</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">PDF Download</p>
              </div>
              <Download size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
            </motion.a>

            <motion.a
              {...fadeUp(0.15)}
              href="https://1ce47e66-436f-44b2-bb80-e507b6cc6663.filesusr.com/ugd/6aca01_3aab7282ab0f421d986cb9703d74a2bf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <FileText size={24} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white mb-1">Chinese Manual</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">PDF Download</p>
              </div>
              <Download size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* CLINICAL REPORTS */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight uppercase mb-3">
              Clinical Reports
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Backed by peer-reviewed clinical studies from leading research institutions worldwide.
            </p>
          </motion.div>

          {/* Study preview cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {CLINICAL_PREVIEWS.map((study, i) => (
              <motion.div key={study.title} {...fadeUp(i * 0.1)} className="flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <study.icon size={20} className="text-blue-500" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">{study.tag}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-snug flex-1">{study.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{study.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp(0.1)} className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
            For more clinical studies on hydrogen, please{' '}
            <a href="https://livepure.com.sg/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline underline-offset-2 hover:text-blue-600 transition-colors">
              click here.
            </a>
          </motion.p>

          {/* Collapsible study categories */}
          <div className="space-y-3">
            {STUDY_CATEGORIES.map((cat, i) => (
              <motion.div key={cat.label} {...fadeUp(i * 0.08)}>
                <FaqItem
                  q={<span className="flex items-center gap-3"><cat.icon size={18} className="text-blue-500 flex-shrink-0" />{cat.label}</span>}
                  a={
                    <ul className="space-y-2">
                      {cat.studies.map((study, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">{j + 1}</span>
                          {study}
                        </li>
                      ))}
                    </ul>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-3xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Everything you need to know about hydrogen water and LivePure technology.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clinical Reports CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container max-w-4xl px-4 text-center">
          <motion.div {...fadeUp(0)}>
            <FileText size={48} className="text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
              Clinical Reports
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              For more clinical studies on hydrogen, please explore our research documentation.
            </p>
            <a
              href="https://livepure.com.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
            >
              View Clinical Reports
              <Download size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-950">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
              Contact Us
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: MapPin, label: 'Address', value: 'LTC Building C, 14 Arumugam Road #06-05A, Singapore 409959' },
              { icon: Phone, label: 'Phone', value: '+65 8177 5650', href: 'tel:+6581775650' },
              { icon: Mail, label: 'Email', value: 'sales@livepure.com.sg', href: 'mailto:sales@livepure.com.sg' },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.div key={label} {...fadeUp(i * 0.1)}>
                {href ? (
                  <a href={href} className="block text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-blue-500/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/25 transition-colors">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{label}</p>
                    <p className="text-sm font-semibold text-white">{value}</p>
                  </a>
                ) : (
                  <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-blue-500/15 flex items-center justify-center mx-auto mb-4">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{label}</p>
                    <p className="text-sm font-semibold text-white">{value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MolecularHydrogen
