import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Leaf, Info } from 'lucide-react';

const pricingData = [
  {
    category: 'Acupuncture',
    services: [
      { name: 'Taster Session', price: '£35', duration: '30 mins' },
      { name: 'Full Consultation & First Treatment', price: '£75', duration: '75 mins' },
      { name: 'Follow-up Treatment', price: '£60', duration: '45 mins' },
    ]
  },
  {
    category: 'Massage Therapy',
    services: [
      { name: 'Indian Head Massage', price: 'From £35', duration: '30 mins' },
      { name: 'Deep Tissue Massage', price: '£65', duration: '60 mins' },
      { name: 'Tuina Massage', price: '£70', duration: '60 mins' },
    ]
  },
  {
    category: 'Specialized Treatments',
    services: [
      { name: 'Auricular Acupuncture', price: '£25', duration: '30 mins' },
      { name: 'Cupping Therapy', price: '£45', duration: '45 mins' },
      { name: 'Reflexology', price: '£55', duration: '60 mins' },
    ]
  },
  {
    category: 'Facial Treatments',
    services: [
      { name: 'Facial Cupping', price: 'From £55', duration: '45 mins' },
      { name: 'Facial Rejuvenation Acupuncture', price: '£85', duration: '75 mins' },
      { name: 'Collagen Facial', price: '£75', duration: '60 mins' },
    ]
  }
];

export default function Pricing() {
  return (
    <div className="w-full bg-cream min-h-screen pt-24 pb-20">
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-cormorant text-forest mb-6">Investment in Your Health</h1>
            <p className="max-w-2xl mx-auto text-charcoal/70 text-lg leading-relaxed">
              Transparent pricing for our holistic therapies. We offer comprehensive consultations to ensure you receive the most effective treatment plan.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="bg-sage/10 rounded-2xl p-6 mb-12 flex items-start gap-4 border border-sage/20">
          <Info className="w-6 h-6 text-sage shrink-0 mt-0.5" />
          <div>
            <h4 className="font-poppins font-medium text-forest mb-1 text-sm">Note on Pricing</h4>
            <p className="text-sm text-charcoal/70">
              Prices listed are indicative and subject to change. Please contact the clinic directly or check our booking system for the most up-to-date pricing and available packages.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pricingData.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-beige"
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-beige">
                <Leaf className="w-6 h-6 text-sage" />
                <h2 className="text-2xl font-cormorant text-forest font-medium">{section.category}</h2>
              </div>
              
              <div className="space-y-6">
                {section.services.map((service, i) => (
                  <div key={i} className="flex justify-between items-end group">
                    <div className="flex-1 border-b border-dashed border-beige/80 group-hover:border-sage/40 transition-colors pb-1 mr-4">
                      <h3 className="font-poppins font-medium text-charcoal text-sm">{service.name}</h3>
                      <p className="text-xs text-charcoal/50 mt-1">{service.duration}</p>
                    </div>
                    <div className="font-cormorant text-xl text-forest font-semibold pb-1">
                      {service.price}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-beige">
          <h3 className="text-3xl font-cormorant text-forest mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-poppins font-medium text-charcoal mb-2">Payment Methods</h4>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                We accept all major credit/debit cards, bank transfers, and cash. Payment is typically taken at the end of your session unless booked as a prepaid package online.
              </p>
            </div>
            <div className="w-full h-px bg-beige"></div>
            <div>
              <h4 className="font-poppins font-medium text-charcoal mb-2">Cancellation Policy</h4>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                We require 24 hours notice for cancellations. Missed appointments or late cancellations may incur a fee of up to 50% of the treatment cost, as this time is reserved specifically for you.
              </p>
            </div>
            <div className="w-full h-px bg-beige"></div>
            <div>
              <h4 className="font-poppins font-medium text-charcoal mb-2">Packages & Memberships</h4>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                We offer discounted blocks for ongoing treatments (e.g., 6 sessions for the price of 5). Please inquire during your consultation for package details tailored to your treatment plan.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/book" className="inline-block bg-forest hover:bg-forest-dark text-white px-8 py-3 rounded-full font-poppins text-sm transition-colors">
              Book an Appointment
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
