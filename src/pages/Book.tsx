import { useState, useEffect, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, FileText, CheckCircle2 } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/style.css';

const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:30', '16:30'];

export default function Book() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    practitioner: 'any',
    notes: ''
  });

  useEffect(() => {
    // Check for treatment query param
    const searchParams = new URLSearchParams(location.search);
    const treatmentParam = searchParams.get('treatment');
    if (treatmentParam) {
      setFormData(prev => ({ ...prev, treatment: treatmentParam }));
    }
  }, [location]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    } else if (step === 2 && formData.name && formData.email && formData.treatment) {
      setStep(3); // confirmation
    }
  };

  return (
    <div className="w-full bg-cream min-h-screen pt-24 pb-20">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-cormorant text-forest mb-4">Request an Appointment</h1>
          <p className="text-charcoal/70">Select your preferred time and details below.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center items-center mb-12 max-w-md mx-auto">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-poppins font-medium ${step >= 1 ? 'bg-sage text-white' : 'bg-beige text-charcoal/50'}`}>1</div>
          <div className={`flex-1 h-1 ${step >= 2 ? 'bg-sage' : 'bg-beige'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-poppins font-medium ${step >= 2 ? 'bg-sage text-white' : 'bg-beige text-charcoal/50'}`}>2</div>
          <div className={`flex-1 h-1 ${step >= 3 ? 'bg-sage' : 'bg-beige'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-poppins font-medium ${step >= 3 ? 'bg-sage text-white' : 'bg-beige text-charcoal/50'}`}>3</div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-beige min-h-[500px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                className="flex flex-col md:flex-row gap-10"
              >
                <div className="flex-1">
                  <h3 className="font-cormorant text-2xl text-forest mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-sage" /> Select Date
                  </h3>
                  <div className="flex justify-center bg-cream/50 rounded-2xl p-4 border border-beige">
                    <DayPicker 
                      mode="single" 
                      selected={selectedDate} 
                      onSelect={setSelectedDate}
                      disabled={{ before: new Date() }}
                      className="font-manrope"
                      classNames={{
                        selected: "bg-sage text-white rounded-full",
                        today: "font-bold text-forest",
                        chevron: "fill-sage"
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-cormorant text-2xl text-forest mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-sage" /> Select Time
                  </h3>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-4 rounded-xl text-sm font-poppins font-medium transition-colors border ${
                            selectedTime === time 
                              ? 'bg-sage border-sage text-white shadow-md' 
                              : 'bg-white border-beige text-charcoal hover:border-sage'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-charcoal/40 text-sm p-10 text-center bg-cream/30 rounded-2xl border border-dashed border-beige">
                      Please select a date first to view available times.
                    </div>
                  )}
                </div>

                <div className="w-full flex justify-end mt-6 md:absolute md:bottom-10 md:right-10">
                  <button 
                    onClick={handleNext}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-forest hover:bg-forest-dark disabled:bg-beige disabled:text-charcoal/40 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-poppins text-sm transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              >
                <div className="mb-8 p-4 bg-sage/10 rounded-xl border border-sage/20 inline-flex gap-6 items-center">
                  <div className="flex items-center gap-2 text-sm text-forest font-medium">
                    <Calendar className="w-4 h-4" /> {selectedDate && format(selectedDate, 'PPP')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-forest font-medium">
                    <Clock className="w-4 h-4" /> {selectedTime}
                  </div>
                  <button onClick={() => setStep(1)} className="text-xs text-sage underline ml-4">Change</button>
                </div>

                <h3 className="font-cormorant text-2xl text-forest mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-sage" /> Your Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-poppins font-medium text-charcoal mb-1">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-beige focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all bg-cream/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-charcoal mb-1">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-beige focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all bg-cream/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-charcoal mb-1">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-beige focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all bg-cream/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-charcoal mb-1">Treatment *</label>
                    <select required name="treatment" value={formData.treatment} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-beige focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all bg-cream/30">
                      <option value="">Select a treatment</option>
                      <option value="acupuncture">Acupuncture</option>
                      <option value="massage">Massage Therapy</option>
                      <option value="cupping">Cupping Therapy</option>
                      <option value="reflexology">Reflexology</option>
                      <option value="facial">Facial Treatments</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-poppins font-medium text-charcoal mb-1 flex items-center gap-2">
                      <FileText className="w-4 h-4" /> Additional Notes
                    </label>
                    <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={3} placeholder="Any specific issues or symptoms?" className="w-full px-4 py-3 rounded-xl border border-beige focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all bg-cream/30 resize-none"></textarea>
                  </div>
                </div>

                <div className="w-full flex justify-between mt-8">
                  <button onClick={() => setStep(1)} className="text-charcoal hover:text-forest px-6 py-3 font-poppins text-sm transition-colors">
                    Back
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!formData.name || !formData.email || !formData.treatment}
                    className="bg-forest hover:bg-forest-dark disabled:bg-beige disabled:text-charcoal/40 text-white px-8 py-3 rounded-full font-poppins text-sm transition-colors"
                  >
                    Confirm Request
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-sage" />
                </div>
                <h2 className="text-3xl font-cormorant text-forest mb-4">Request Sent Successfully</h2>
                <p className="text-charcoal/70 mb-8 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name.split(' ')[0]}. We have received your appointment request for {selectedDate && format(selectedDate, 'PPP')} at {selectedTime}.
                </p>
                <p className="text-sm text-charcoal/50 mb-10">
                  Our team will contact you shortly to confirm the booking.
                </p>
                
                <button 
                  onClick={() => window.location.href = '/'}
                  className="bg-transparent border border-forest text-forest hover:bg-forest/5 px-8 py-3 rounded-full font-poppins text-sm transition-colors"
                >
                  Return to Home
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
