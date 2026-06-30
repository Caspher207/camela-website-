import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Droplets, 
  Award, 
  Globe, 
  Factory, 
  FileText, 
  Download, 
  CheckCircle, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Mail, 
  BookOpen, 
  Microscope, 
  Dna, 
  ShieldCheck, 
  Star, 
  Scroll,
  Brain,
  Heart,
  Zap,
  Users,
  AlertTriangle
} from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const PEPTIDE_ROLES = [
  { icon: Users, title: 'Communication & Regulation', desc: 'Specific signaling peptides accurately transmit information between cells, tissues, and organs, regulating hormone secretion, sleep cycles, and emotional responses.' },
  { icon: ShieldCheck, title: 'Tissue Repair', desc: 'Peptides like carnosine serve as essential building materials for skin, bones, and muscles, maintaining tissue integrity and promoting youthful physiology.' },
  { icon: Globe, title: 'Immune Defense', desc: 'Antimicrobial peptides act like guards to identify and neutralise pathogenic microorganisms, strengthening the body\'s natural resistance.' },
  { icon: Zap, title: 'Nutrient Transport', desc: 'Peptides serve as efficient carriers, binding to essential minerals and vitamins to improve their absorption and bioavailability.' },
]

const WALNUT_ADVANTAGES = [
  { icon: Zap, title: 'Smaller Molecules, Faster Absorption', desc: 'Small molecule peptides (800-2000 Daltons) enable direct intestinal absorption.' },
  { icon: Brain, title: 'Stronger Activity, Targeted Action', desc: 'Active peptide segments with antioxidant and lipid-lowering functions, superior to intact walnut protein.' },
  { icon: ShieldCheck, title: 'Pure Composition, Minimal Burden', desc: 'Extraction removes most fats, resulting in extremely low-fat content.' },
  { icon: CheckCircle, title: 'Stable Properties, Full Utilization', desc: 'Resistant to acids and bases, reducing breakdown by stomach acid.' },
  { icon: Droplets, title: 'Convenient Consumption', desc: 'Excellent water solubility for easy mixing into water, milk, or other beverages.' },
]

const HEALTH_BENEFITS = [
  { icon: Star, title: 'Antioxidant & Anti-Aging', desc: 'Eliminates free radicals, protects cells, delays skin aging, and supports cardiovascular health. Antioxidant activity 5-8 times that of Vitamin E.' },
  { icon: Brain, title: 'Brain & Neurological Function', desc: 'Promotes brain cell growth and repair, improves memory, enhances cognitive function, and may help prevent dementia.' },
  { icon: Heart, title: 'Blood Sugar & Cholesterol', desc: 'Assists in glycemic control by improving insulin sensitivity and helps lower LDL cholesterol levels.' },
  { icon: ShieldCheck, title: 'Enhancing Immunity', desc: 'Promotes lymphocyte proliferation, enhances macrophage activity, and improves athletic endurance with anti-fatigue effects.' },
  { icon: Users, title: 'Mood & Sleep', desc: 'Amino acids help stabilize mood, alleviate anxiety, and improve sleep quality for high-stress individuals.' },
  { icon: Factory, title: 'Liver Protection', desc: 'Mitigates liver damage caused by alcohol or chemicals, reduces ALT/AST levels, and alleviates hepatocyte steatosis.' },
]

const WHO_BENEFITS = [
  { icon: Brain, title: 'Students & High-Performance Professionals', desc: 'Improve focus, enhance memory' },
  { icon: Users, title: 'Seniors & Proactive Elders', desc: 'Prevent cognitive decline, delay brain aging' },
  { icon: Star, title: 'Restless Sleepers & High-Stress Individuals', desc: 'Regulate mood, improve sleep' },
  { icon: Heart, title: 'Individuals with "Three Highs"', desc: 'Improve cerebral blood supply, reduce risk of brain injury' },
]

const FAQS = [
  {
    q: 'What are peptides and how do they differ from proteins?',
    a: 'Peptides are compounds formed when two or more amino acids link together by peptide bonds. They are smaller than proteins and are absorbed directly by the body without complex digestive breakdown. If protein is the complete "instruction manual for life," peptides are the specific "action commands" that get things done.',
  },
  {
    q: 'What makes walnut peptides special compared to regular walnuts?',
    a: 'Walnut peptides are obtained through advanced enzymatic hydrolysis technology that breaks down walnut proteins into smaller, more bioactive fragments. This process preserves the core nutrients while optimizing them for rapid absorption and maximum physiological impact, with absorption rates exceeding 95%.',
  },
  {
    q: 'Who can benefit from taking walnut peptides?',
    a: 'Walnut peptides benefit students and professionals seeking improved focus and memory, seniors wanting to prevent cognitive decline, individuals with high stress or sleep issues, and those managing "three highs" (hypertension, hyperlipidemia, hyperglycemia) or cardiovascular concerns.',
  },
  {
    q: 'Are walnut peptides safe to consume?',
    a: 'Walnut peptides are generally considered safe and have been studied in numerous clinical trials. However, individuals with walnut allergies should avoid them. The extraction process removes most fats, resulting in a product with extremely low-fat content and minimal burden on the body.',
  },
  {
    q: 'How should I take walnut peptides?',
    a: 'Walnut peptides have excellent water solubility and can be easily mixed into water, milk, porridge, or other beverages and liquid foods. This makes them convenient for daily supplementation. The small molecular size (800-2000 Daltons) enables direct intestinal absorption within 2-5 minutes.',
  },
]

const REFERENCES = [
  '中国生物化学与分子生物学会. 《肽营养学概述》. 2020.',
  'Daniel, H., et al. Transport of Peptides. Physiol Rev. 2018.',
  '国家食品药品监督管理总局. 《肽类保健食品功能评价指南》. 2019.',
  '国际食品科学与技术学会（IUFoST）技术报告.',
  'Hökfelt, T., et al. Neuropeptides and peptide hormones. Nat Rev Neurosci. 2018.',
  '中国营养学会. 《胶原蛋白肽与皮肤健康科学共识》. 2021.',
  'Zhang, L.J., et al. Antimicrobial Peptides. Curr Biol. 2021.',
  '欧洲食品安全局（EFSA）科学意见集.',
  'Ros, E., et al. Beneficial effects of walnut consumption. Nutrients. 2021.',
  '国家卫生健康委员会. 《食用植物蛋白肽》标准（GB 31645-2018）.',
  '中国食品科学技术学会. 《食源性低聚肽营养与功能白皮书》. 2022.',
  'Wang, Y., et al. Bioactive Peptides from Walnut. J Agric Food Chem. 2020.',
  'Liu, J., et al. Food & Function. 2023.',
  'Chen, N., et al. Oxid Med Cell Longev. 2021.',
  'Zhang, Y., et al. J Nutr Biochem. 2022.',
  'Smith, A., et al. Eur J Nutr. 2024.',
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

const Peptide = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gray-950 py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-purple-900/20" />
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Dna size={12} />
            Bioactive Peptide Nutrition
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
            Understanding Peptides
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
              The Messenger of Life
            </span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Peptides are the building blocks of protein and the active substances that form large molecular proteins from small molecular amino acids.
          </motion.p>
        </div>
      </section>

      {/* Understanding Peptides */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              What Are Peptides?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Peptides are compounds formed when two or more amino acids link together by peptide bonds.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
            <p className="mb-6">
              If protein is the complete "instruction manual for life," then peptides are specific effective "action commands" that get things done. The unique advantage of peptides lies in their exceptional bioavailability:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-brand-500 flex-shrink-0 mt-1" />
                <span><strong>Direct Absorption:</strong> Small molecule peptides are absorbed directly by the small intestinal villus epithelial cells, bypassing complex digestive breakdown.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-brand-500 flex-shrink-0 mt-1" />
                <span><strong>Fast and Efficient:</strong> Peptides enter the bloodstream in just 2-5 minutes, with an absorption rate 2-3 times faster than free amino acids.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-brand-500 flex-shrink-0 mt-1" />
                <span><strong>High Absorption Rate:</strong> Overall absorption rate can exceed 95%, far surpassing that of ordinary proteins.</span>
              </li>
            </ul>
            <p>
              Beyond their superior absorption, peptides act as "messengers" for intercellular communication, "artisans" for tissue repair, and "regulators" of physiological functions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Vital Roles */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              The Four Vital Roles of Peptides
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Peptides form a precise "intelligent network" within the body through four major health missions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {PEPTIDE_ROLES.map((role, i) => (
              <motion.div key={role.title} {...fadeUp(i * 0.1)} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <role.icon size={24} className="text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{role.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 bg-brand-50 dark:bg-brand-900/10">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img
                src="/Medical Breakthroughs & Scientifically proven.png"
                alt="Medical Breakthroughs & Scientifically Proven"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
            </div>
            <motion.div {...fadeUp(0.15)} className="flex-1">
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                Backed by Science
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Our peptide formulations are supported by extensive clinical research and peer-reviewed studies from leading institutions worldwide.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle size={16} className="text-brand-500 flex-shrink-0" />
                  Clinically tested ingredients
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle size={16} className="text-brand-500 flex-shrink-0" />
                  Peer-reviewed research
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle size={16} className="text-brand-500 flex-shrink-0" />
                  Quality certified manufacturing
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Walnut Peptides Introduction */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              From Walnut to Walnut Peptides
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Elevating traditional nutrition through science.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div {...fadeUp(0)} className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/10 to-purple-500/10 rounded-3xl blur-xl" />
                <div className="relative w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden">
                  <img
                    src="/Peptide product - Dark Blue color.png"
                    alt="Peptide Product"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-5">
                Walnut: The Ancient Fruit of Wisdom
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Walnut Peptides: The Evolution of Walnut Nutrition
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Using advanced enzymatic hydrolysis technology to cleave walnut proteins from high-quality walnuts, walnut peptides are obtained. This process preserves the core nutrients of walnuts while ensuring they are optimized for rapid absorption and maximum physiological impact.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                This process is akin to refining raw jade into a masterpiece.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Five Advantages */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Why Choose Walnut Peptides?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Five advantages of scientific extraction.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WALNUT_ADVANTAGES.map((adv, i) => (
              <motion.div key={adv.title} {...fadeUp(i * 0.1)} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
                  <adv.icon size={24} className="text-brand-500" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Walnut Peptides and Health
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Observations from scientific research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {HEALTH_BENEFITS.map((benefit, i) => (
              <motion.div key={benefit.title} {...fadeUp(i * 0.1)} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon size={20} className="text-brand-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Who Can Benefit from Walnut Peptides?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {WHO_BENEFITS.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.1)} className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-brand-500" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.3)} className="mt-8 p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700">
            <div className="flex items-start gap-4">
              <AlertTriangle size={24} className="text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-amber-800 dark:text-amber-300 mb-2">Allergy Alert</h4>
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  Walnut peptides are generally considered safe, but individuals allergic to walnuts should avoid them.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Summary */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container max-w-5xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Summary of Academic Research
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Observations from published scientific literature.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { title: 'Cognitive Function', desc: 'Animal model study showed positive modulating effect on chemically induced memory impairment, related to regulating cholinergic system and neurotrophic factor expression.' },
              { title: 'Oxidative Stress', desc: 'Cell experiments showed strong free radical scavenging capacity. Animal study observed increased antioxidant enzyme activity in aging model mice.' },
              { title: 'Lipid Metabolism', desc: 'Animal studies suggested positive impact on serum total cholesterol and LDL-C levels in high-fat diet models.' },
              { title: 'Glucose Metabolism', desc: 'Preliminary human trial in pre-diabetic individuals showed noteworthy trends in fasting blood glucose and insulin resistance after 12 weeks.' },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.08)} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp(0.4)} className="text-center text-xs text-gray-500 dark:text-gray-500 mt-8 italic">
            The above content is compiled from publicly available scientific literature, with the intention to share scientific discoveries.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-3xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Everything you need to know about peptides and walnut peptide supplements.
            </p>
          </motion.div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div key={faq.q} {...fadeUp(i * 0.08)}>
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-20 bg-gray-950">
        <div className="container max-w-4xl px-4">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
              References
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="space-y-2">
            {REFERENCES.map((ref, i) => (
              <p key={i} className="text-sm text-gray-400 leading-relaxed">
                [{i + 1}] {ref}
              </p>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Peptide
