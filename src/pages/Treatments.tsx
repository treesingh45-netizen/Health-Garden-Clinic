import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const treatments = [
  {
    id: 'acupuncture',
    title: 'Acupuncture',
    desc: 'An ancient practice that involves inserting very thin needles through your skin at strategic points on your body to balance energy flow and stimulate natural healing.',
    img: 'https://images.pexels.com/photos/6076146/pexels-photo-6076146.jpeg',
    duration: '45-60 mins',
    benefits: ['Traditional Chinese Medicine', 'Fertility & IVF Support', 'Pain Relief & Frozen Shoulder', 'Stress, Anxiety & Insomnia Relief'],
    who: 'Ideal for those seeking drug-free pain relief, hormonal balance, or stress reduction.'
  },
  {
    id: 'massage',
    title: 'Massage Therapy',
    desc: 'Therapeutic manipulation of muscles and soft tissues to enhance function, promote relaxation, and decrease muscle tension.',
    img: 'https://images.pexels.com/photos/5888099/pexels-photo-5888099.jpeg',
    duration: '30-90 mins',
    benefits: ['Indian Head Massage', 'Deep Tissue & Body Massage', 'Hand, Foot & Face Massage', 'Tuina Massage'],
    who: 'Perfect for anyone experiencing muscle tightness, chronic pain, or high stress levels.'
  },
  {
    id: 'cupping',
    title: 'Cupping Therapy',
    desc: 'A traditional therapy where cups are placed on the skin to create suction, facilitating blood flow, reducing inflammation, and relaxing tight muscles.',
    img: 'https://media.istockphoto.com/id/503889644/photo/young-woman-getting-cupping-treatment.jpg?s=612x612&w=0&k=20&c=9gC4hwhd4yYmW8yzRSbGmLGP8Kkk7ETiautH-O-Ffvc=',
    duration: '30-45 mins',
    benefits: ['Improves local circulation', 'Relieves muscle stiffness', 'Supports respiratory health', 'Promotes deep relaxation'],
    who: 'Recommended for athletes, those with chronic back/neck pain, or respiratory conditions.'
  },
  {
    id: 'reflexology',
    title: 'Reflexology',
    desc: 'Application of appropriate pressure to specific points and areas on the feet, hands, or ears that correspond to different body organs and systems.',
    img: 'https://media.istockphoto.com/id/1470570719/photo/massaging-foot-pressure-points.jpg?s=612x612&w=0&k=20&c=2fsx7KoXkjxh8JOrCz9HRCQ5Od7ZGgIXPrlF1JpYdEA=',
    duration: '45-60 mins',
    benefits: ['Reduces stress and tension', 'Improves nerve function', 'Enhances circulation', 'Balances body energy'],
    who: 'Great for general wellbeing, stress relief, and addressing systemic imbalances.'
  },
  {
    id: 'facial',
    title: 'Facial Treatments',
    desc: 'Specialized aesthetic and therapeutic treatments focusing on the face to rejuvenate the skin, reduce tension, and promote a natural, healthy glow.',
    img: 'https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg',
    duration: '45-75 mins',
    benefits: ['Facial Cupping', 'Facial Rejuvenation', 'Collagen Facial', 'Facial Acupuncture'],
    who: 'Those looking for natural anti-aging solutions, improved skin tone, or relief from jaw tension.'
  },
  {
    id: 'auricular',
    title: 'Auricular Acupuncture',
    desc: 'A specialized form of acupuncture focused entirely on the ear, which acts as a microsystem reflecting the entire body.',
    img: 'https://media.istockphoto.com/id/459979901/photo/alternative-practitioner-treating-woman-with-acupuncture.jpg?s=612x612&w=0&k=20&c=pMiVfezUPpeerIuo58Hg8ohSAEl9W6lXsVZiT35Wqko=',
    duration: '30-45 mins',
    benefits: ['Addiction support', 'Stress and anxiety relief', 'Pain management', 'Weight management support'],
    who: 'Beneficial for those seeking targeted relief or support alongside other treatments.'
  }
];

export default function Treatments() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="w-full bg-cream min-h-screen pt-24 pb-20">
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-cormorant text-forest mb-6"
          >
            Our Treatments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-charcoal/70 text-lg leading-relaxed"
          >
            Explore our comprehensive range of holistic therapies. Each treatment is tailored to your unique needs, aiming to restore balance and promote optimal health.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-24">
          {treatments.map((treatment, index) => (
            <div 
              key={treatment.id} 
              id={treatment.id}
              className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center scroll-mt-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
                  className="aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-beige relative"
                >
                  <img src={treatment.img} alt={treatment.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-poppins font-medium text-forest">
                    {treatment.duration}
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-4xl font-cormorant text-forest mb-6">{treatment.title}</h2>
                  <p className="text-charcoal/70 mb-8 leading-relaxed text-lg">{treatment.desc}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-cormorant text-2xl text-forest mb-4">Key Benefits & Applications</h3>
                    <ul className="space-y-3">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                          <span className="text-charcoal/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-10 p-6 bg-white rounded-2xl border border-beige">
                    <h3 className="font-cormorant text-xl text-forest mb-2">Who is it for?</h3>
                    <p className="text-sm text-charcoal/70">{treatment.who}</p>
                  </div>

                  <Link 
                    to={`/book?treatment=${treatment.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-dark text-white px-8 py-4 rounded-full font-poppins text-sm transition-colors"
                  >
                    Book this treatment <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
