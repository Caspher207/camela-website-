export const CATEGORIES = [
  {
    id: 'vitamins-supplements',
    name: 'Vitamins & Supplements',
    slug: 'vitamins-supplements',
    description: 'Daily vitamins & health supplements',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    color: 'from-green-600 to-emerald-500',
    count: 0,
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    slug: 'personal-care',
    description: 'Hygiene & personal wellness',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80',
    color: 'from-blue-500 to-cyan-400',
    count: 0,
  },
  {
    id: 'skincare',
    name: 'Skincare',
    slug: 'skincare',
    description: 'Natural skincare solutions',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    color: 'from-brand-500 to-brand-400',
    count: 0,
  },
  {
    id: 'health-devices',
    name: 'Health Devices',
    slug: 'health-devices',
    description: 'Medical & monitoring equipment',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
    color: 'from-violet-600 to-purple-500',
    count: 0,
  },
  {
    id: 'fitness-wellness',
    name: 'Fitness & Wellness',
    slug: 'fitness-wellness',
    description: 'Stay active & energised',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    color: 'from-orange-500 to-amber-400',
    count: 0,
  },
  {
    id: 'nutrition',
    name: 'Nutrition & Food',
    slug: 'nutrition',
    description: 'Healthy food & nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    color: 'from-teal-500 to-green-400',
    count: 0,
  },
]

export const getCategoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug)

export const getCategoryName = (slug) => {
  const cat = getCategoryBySlug(slug)
  return cat ? cat.name : slug
}
