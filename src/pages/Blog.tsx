import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

const categories = ['All', 'Acupuncture', 'Women\'s Health', 'Stress Relief', 'Nutrition', 'Massage'];

const articles = [
  {
    title: 'Understanding the Benefits of Facial Acupuncture',
    category: 'Acupuncture',
    date: 'March 15, 2026',
    excerpt: 'Discover how this ancient technique is becoming the modern alternative to Botox, promoting natural collagen production and reducing fine lines.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Managing Stress Through Holistic Therapies',
    category: 'Stress Relief',
    date: 'March 02, 2026',
    excerpt: 'In our fast-paced world, finding balance is crucial. Learn how a combination of massage and acupuncture can lower cortisol levels.',
    img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Nutrition Support for Hormonal Balance',
    category: 'Women\'s Health',
    date: 'February 18, 2026',
    excerpt: 'Diet plays a pivotal role in hormonal health. We explore key nutrients and dietary adjustments to support a balanced endocrine system.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'The Science Behind Cupping Therapy',
    category: 'Massage',
    date: 'February 05, 2026',
    excerpt: 'Often seen on Olympic athletes, cupping is more than just a trend. We break down the physiological mechanisms that make it effective.',
    img: 'https://media.istockphoto.com/id/525726462/photo/woman-at-spa-receiving-cupping-therapy.jpg?s=612x612&w=0&k=20&c=3J_gUg6TsC79cMikGp8ZZfNfHphr6MIIgMFHbWWF5ig='
  }
];

export default function Blog() {
  return (
    <div className="w-full bg-cream min-h-screen pt-24 pb-20">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-cormorant text-forest mb-6">Journal & Wellness</h1>
            <p className="max-w-2xl mx-auto text-charcoal/70 text-lg leading-relaxed mb-10">
              Insights, advice, and educational articles from our practitioners to support your ongoing health journey.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-xl mx-auto">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-beige bg-cream/50 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all text-sm font-poppins"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, i) => (
            <button 
              key={i}
              className={`px-5 py-2 rounded-full text-sm font-poppins transition-colors ${
                i === 0 ? 'bg-forest text-white' : 'bg-white text-charcoal/70 hover:bg-sage/10 border border-beige'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm border border-beige mb-16 flex flex-col md:flex-row group"
        >
          <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" 
              alt="Featured" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="text-sage text-xs font-poppins font-medium uppercase tracking-wider mb-4">Acupuncture • Featured</div>
            <h2 className="text-3xl md:text-4xl font-cormorant text-forest mb-4 leading-tight">Integrating Traditional Chinese Medicine into Modern Life</h2>
            <p className="text-charcoal/70 mb-8 leading-relaxed">
              How can ancient practices fit seamlessly into our busy, modern schedules? We explore practical ways to adopt TCM principles for preventative health and daily wellbeing.
            </p>
            <div>
              <Link to="#" className="inline-flex items-center gap-2 text-forest font-medium hover:text-sage transition-colors border-b border-forest/20 pb-1 hover:border-sage">
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-beige group flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-poppins font-medium text-forest uppercase tracking-wider">
                  {article.category}
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="text-charcoal/40 text-xs font-poppins mb-3">{article.date}</div>
                <h3 className="text-xl font-cormorant text-forest font-semibold mb-3 leading-snug">{article.title}</h3>
                <p className="text-sm text-charcoal/70 mb-6 flex-1 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                <Link to="#" className="text-sage text-sm font-medium flex items-center gap-1 hover:text-forest transition-colors mt-auto">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
