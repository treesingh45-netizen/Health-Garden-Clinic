import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote, ChevronRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2920&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat lg:bg-fixed"
        >
          <div className="absolute inset-0 bg-cream/85 lg:bg-cream/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <span className="text-sage font-semibold tracking-wider uppercase text-sm mb-4 block">
                  Health Garden Clinic
                </span>
                <h1 className="text-5xl md:text-7xl font-cormorant font-medium text-forest leading-tight mb-6">
                  Natural Healing.<br />Modern Wellness.
                </h1>
                <p className="text-lg md:text-xl text-charcoal/80 mb-8 max-w-xl font-light leading-relaxed">
                  Restore balance through acupuncture, massage therapy, cupping, reflexology, and holistic treatments designed to help you feel your best.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/book" 
                    className="bg-forest hover:bg-forest-dark text-white px-8 py-4 rounded-full font-poppins text-center transition-colors text-sm tracking-wide"
                  >
                    Book Appointment
                  </Link>
                  <Link 
                    to="/treatments" 
                    className="bg-transparent border border-forest text-forest hover:bg-forest/5 px-8 py-4 rounded-full font-poppins text-center transition-colors text-sm tracking-wide flex items-center justify-center gap-2"
                  >
                    Explore Treatments <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="aspect-[3/4] rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-8 border-white/60 ml-auto max-w-md relative bg-cream">
                <img 
                  src="https://images.pexels.com/photos/5793694/pexels-photo-5793694.jpeg" 
                  alt="Frozen shoulder pain relief" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop" 
                alt="Relaxing clinic environment" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
              <h2 className="text-4xl font-cormorant text-forest mb-6">A Sanctuary for<br/>Natural Healing</h2>
              <p className="text-charcoal/70 mb-6 leading-relaxed">
                Located in the heart of Beaconsfield, Health Garden Clinic offers a peaceful retreat from the demands of modern life. Our professional practitioners combine ancient wisdom with evidence-informed approaches to provide personalized treatments.
              </p>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                Whether you're seeking relief from chronic pain, stress reduction, or proactive wellness support, our tailored therapies aim to restore your body's natural balance.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['Experienced, registered practitioners', 'Personalised care plans', 'Calm, relaxing clinic environment', 'Evidence-informed holistic therapies'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-charcoal/80 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/about" className="inline-flex items-center gap-2 text-forest font-medium hover:text-sage transition-colors pb-1 border-b border-forest/20 hover:border-sage">
                Read our story <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-cormorant text-forest mb-4">Our Treatments</h2>
            <p className="text-charcoal/70">Discover our range of holistic therapies designed to nurture your physical and mental wellbeing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Acupuncture', desc: 'Restore energy flow and alleviate pain through traditional fine-needle therapy.', img: 'https://images.pexels.com/photos/6076146/pexels-photo-6076146.jpeg' },
              { title: 'Massage Therapy', desc: 'Deep tissue, Indian head, and relaxing body massages to release tension.', img: 'https://images.pexels.com/photos/5888099/pexels-photo-5888099.jpeg' },
              { title: 'Cupping Therapy', desc: 'Ancient technique to improve circulation and relieve muscle stiffness.', img: 'https://media.istockphoto.com/id/503889644/photo/young-woman-getting-cupping-treatment.jpg?s=612x612&w=0&k=20&c=9gC4hwhd4yYmW8yzRSbGmLGP8Kkk7ETiautH-O-Ffvc=' },
              { title: 'Facial Treatments', desc: 'Rejuvenating facial acupuncture and cupping for a natural glow.', img: 'https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg' },
              { title: 'Reflexology', desc: 'Targeted foot massage to stimulate natural healing across the body.', img: 'https://media.istockphoto.com/id/1470570719/photo/massaging-foot-pressure-points.jpg?s=612x612&w=0&k=20&c=2fsx7KoXkjxh8JOrCz9HRCQ5Od7ZGgIXPrlF1JpYdEA=' },
              { title: 'Auricular Acupuncture', desc: 'Specialized ear acupuncture for stress relief, addiction support, and balance.', img: 'https://media.istockphoto.com/id/459979901/photo/alternative-practitioner-treating-woman-with-acupuncture.jpg?s=612x612&w=0&k=20&c=pMiVfezUPpeerIuo58Hg8ohSAEl9W6lXsVZiT35Wqko=' },
            ].map((treatment, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } } }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-beige"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={treatment.img} alt={treatment.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-cormorant font-semibold text-forest mb-2">{treatment.title}</h3>
                  <p className="text-sm text-charcoal/70 mb-6 leading-relaxed line-clamp-2">{treatment.desc}</p>
                  <Link to={`/treatments#${treatment.title.toLowerCase().split(' ')[0]}`} className="text-sage text-sm font-medium flex items-center gap-1 hover:text-forest transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/treatments" className="inline-flex items-center justify-center bg-transparent border border-forest text-forest hover:bg-forest/5 px-8 py-3 rounded-full font-poppins text-sm transition-colors">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-forest-dark text-white relative overflow-hidden">
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-forest blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cormorant mb-4">Patient Experiences</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
            </div>
            <p className="text-sm text-cream/70">Google Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Fiona is an absolute miracle worker. After months of back pain, her acupuncture sessions have brought me so much relief. The clinic is beautiful and calming.", author: "Sarah M." },
              { text: "I've been visiting for regular deep tissue massages and it's transformed my mobility. The team is professional, knowledgeable and incredibly welcoming.", author: "David P." },
              { text: "A truly holistic experience. The cupping therapy combined with acupuncture has helped my anxiety immensely. Highly recommend Health Garden Clinic.", author: "Emma T." }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { delay: i * 0.15 } } }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
                <p className="font-cormorant text-xl leading-relaxed mb-6 italic text-cream/90">"{review.text}"</p>
                <p className="font-poppins text-sm text-sage-light">— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-cormorant text-forest mb-6">Start Your Wellness Journey Today</h2>
          <p className="text-charcoal/70 mb-10 max-w-xl mx-auto">
            Book a consultation to discuss your specific needs and let our practitioners guide you towards optimal health.
          </p>
          <Link 
            to="/book" 
            className="inline-block bg-forest hover:bg-forest-dark text-white px-10 py-4 rounded-full font-poppins text-sm tracking-wide transition-colors shadow-lg shadow-forest/20"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
