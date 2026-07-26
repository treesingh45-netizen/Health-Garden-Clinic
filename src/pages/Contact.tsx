import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full bg-cream min-h-screen pt-24 pb-20">
      
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-cormorant text-forest mb-6">Get in Touch</h1>
            <p className="max-w-2xl mx-auto text-charcoal/70 text-lg leading-relaxed">
              We are here to answer any questions you may have about our treatments or to assist you with your booking.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Emergency Notice */}
        <div className="bg-red-50 text-red-800 p-4 rounded-xl flex items-start gap-3 mb-12 border border-red-100 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm">
            Please note that we are not an emergency service. If you are experiencing a medical emergency, please call 999 or visit your nearest A&E department immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Details & Map */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-12">
            
            <div className="bg-white rounded-3xl p-8 border border-beige shadow-sm">
              <h3 className="font-cormorant text-2xl text-forest mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-charcoal text-sm mb-1">Clinic Address</h4>
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      27 London End<br />
                      Beaconsfield<br />
                      Buckinghamshire<br />
                      HP9 2HN
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-charcoal text-sm mb-1">Phone</h4>
                    <p className="text-sm text-charcoal/70 leading-relaxed">+44 (0) 1494 000000</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-charcoal text-sm mb-1">Email</h4>
                    <p className="text-sm text-charcoal/70 leading-relaxed">hello@healthgardenclinic.co.uk</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-charcoal text-sm mb-1">Opening Hours</h4>
                    <div className="text-sm text-charcoal/70 leading-relaxed grid grid-cols-2 gap-x-4">
                      <span>Mon - Fri:</span> <span>9:00 - 19:00</span>
                      <span>Saturday:</span> <span>9:00 - 14:00</span>
                      <span>Sunday:</span> <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-beige bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.585721867963!2d-0.6439!3d51.6033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjcgTG9uZG9uIEVuZCwgQmVhY29uc2ZpZWxkLCBCdWNraW5naGFtc2hpcmUgSFA5IDJITg!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Clinic Location"
                className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply"
              ></iframe>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-beige">
              <h3 className="font-cormorant text-3xl text-forest mb-2">Send a Message</h3>
              <p className="text-sm text-charcoal/60 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="bg-sage/10 border border-sage/30 text-forest p-6 rounded-2xl text-center">
                  <Send className="w-8 h-8 mx-auto mb-3 text-sage" />
                  <h4 className="font-cormorant text-xl font-medium mb-2">Message Sent!</h4>
                  <p className="text-sm">Thank you for reaching out. We will reply to your email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-poppins font-medium text-charcoal mb-1">Full Name</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-beige focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all bg-cream/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-charcoal mb-1">Email Address</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-beige focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all bg-cream/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-charcoal mb-1">Subject</label>
                    <select required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-beige focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all bg-cream/30">
                      <option value="">Select a topic</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Treatment Questions">Treatment Questions</option>
                      <option value="Pricing / Packages">Pricing / Packages</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-charcoal mb-1">Message</label>
                    <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={5} className="w-full px-4 py-3 rounded-xl border border-beige focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all bg-cream/30 resize-none"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-forest hover:bg-forest-dark text-white px-8 py-4 rounded-full font-poppins text-sm transition-colors flex justify-center items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
            
            {/* Parking info */}
            <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-beige">
              <h4 className="font-poppins font-medium text-forest text-sm mb-2">Parking Information</h4>
              <p className="text-sm text-charcoal/70">
                Free street parking is available along London End for up to 2 hours. Alternatively, there is a pay-and-display car park located just a 3-minute walk away behind the clinic.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
