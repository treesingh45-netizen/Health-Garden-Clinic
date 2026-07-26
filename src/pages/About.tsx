import { motion } from 'motion/react';
import { Leaf, MapPin } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <div className="w-full bg-cream min-h-screen pt-24 pb-20">
      
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Leaf className="w-8 h-8 text-sage mx-auto mb-6" />
            <h1 className="text-5xl font-cormorant text-forest mb-6">Our Philosophy</h1>
            <p className="max-w-2xl mx-auto text-charcoal/70 text-lg leading-relaxed">
              At Health Garden Clinic, we believe in treating the whole person, not just the symptoms. Our approach blends traditional wisdom with modern understanding to restore your body's natural state of balance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-cormorant text-forest mb-6">Our Mission & Vision</h2>
              <div className="space-y-6 text-charcoal/70 leading-relaxed">
                <p>
                  Founded on the principles of natural healing, Health Garden Clinic was established to provide the Beaconsfield community with a sanctuary for holistic wellness.
                </p>
                <p>
                  Our mission is to empower our patients to take control of their health through natural, non-invasive therapies. We strive to educate and support every individual who walks through our doors, ensuring a personalized healing journey.
                </p>
                <p>
                  We envision a world where preventative, holistic healthcare is accessible and integrated seamlessly into daily life, allowing people to live vibrantly and pain-free.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="order-1 md:order-2"
            >
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl max-w-md mx-auto">
                <img 
                  src="https://images.pexels.com/photos/4599397/pexels-photo-4599397.jpeg" 
                  alt="Acupuncture therapy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cormorant text-forest mb-4">Meet Our Practitioners</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Our team of dedicated professionals is highly trained and experienced in a variety of holistic therapies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: 'Yvonne',
                role: 'Acupuncture',
                location: 'Kensington',
                desc: 'Specializing in traditional acupuncture techniques to relieve chronic pain and restore energetic balance.',
                img: 'https://storage.googleapis.com/watermark-remover-bucket/unwatermark/146e4702-836c-46d9-873b-fab8a47efefd.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=793133627742-compute%40developer.gserviceaccount.com%2F20260726%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260726T095214Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=86a1ea70c2575545ebbbf903740e912c690dad3554bd4704136c825e86bd52fdab1aef9f591567891fbb0c4009907c81a2d6b9d029ea06ee266b6029359bb30ca0889a1d2204297981020e7fc4b383fe1a4bf80aa50801f6f8624137f656ea676b21604c79aec559dad8b65f850a17f3db08da6e1223e9940df08545435847591ea6ecec96ef5b84e53ead1f8c28ce96d933e9f154be81956ac6947237b12444a8e7c114b19e6711667cba25677d40f3e77f1ffb89773d41f184274bcf35ad9f311503ee7ca8d3aba154415836ae61b8296a9094de4a5d28a66a6f3fea2d1b2b1923d00eccc319a4f1b2c9110bdb056d8a968a47840918eabc58fd2f935ed7fd'
              },
              {
                name: 'Bisher',
                role: 'Cupping Therapist',
                location: 'Kensington',
                desc: 'Expert in various cupping therapies aimed at improving circulation, reducing inflammation, and deep tissue relaxation.',
                img: 'https://images.pexels.com/photos/34762358/pexels-photo-34762358.jpeg'
              },
              {
                name: 'Abdullah',
                role: 'Doctor',
                location: 'Kensington',
                desc: 'Providing comprehensive medical consultations and holistic healthcare strategies for patients.',
                img: 'https://storage.googleapis.com/watermark-remover-bucket/unwatermark/94088098-91e9-45d7-85e3-70a8e05e5848.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=793133627742-compute%40developer.gserviceaccount.com%2F20260726%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260726T095755Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=190316eb4dd13f8f0512428fe04cf7c5f965d1807b53709e261eb08b37355e881d3a58115d5d1ab380e25a2e85f3f651f986fbf9e2e23a741fab1d3db75077dc692c3632adcb1fb5b12d68332003a74e27c88326302bfe817c5e2314aec7149c323ae0dca8fdbdc1c75737bbf7923f71460d0e10b2f2e626f4ee99d004485d5824293a2977e4767f86a486ba744b0e608d5d48840218bdceb510a20ce8dc4d3e24e62a1c8aac286824490434b0e480a0987d6a907e209c4aa715eb8a4f0d0804f0f895d069c535f280c4e9bbc53807415fff6ebc43eccbebf09a0fa275deeb995e31c617a186573c842186cb306b35a8cfb9903b13557636ea2e5f38f5180e9e'
              },
              {
                name: 'Georgina',
                role: 'Acupuncture & Massage',
                location: 'East London',
                desc: 'Combining the benefits of acupuncture and massage therapy for optimal physical and mental recovery.',
                img: 'https://storage.googleapis.com/watermark-remover-bucket/unwatermark/cfc9dc16-4508-48c8-9813-6f5d7b2695dc.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=793133627742-compute%40developer.gserviceaccount.com%2F20260726%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260726T100303Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=2531ef1caeeaf15f336d1cda219743a291655c8fd7274193124a9b00b2ba3b1446919eeff9ba6977b8d11778f9347e88b5a3ecea106888193189efcec95b2c7c990c17cc6fa64067546974985a4b7ccf280b33bbbe78e1a8288d3a76f3fe039e74c1f1a21b445ead085554355f0f37b2ff5556073a205f72de9eae1af160f81d2be75be6782d2d52bda4acbb8ba16578060f29a4bda720b1846e284cf68016c2741687a37fe9cea0aa4be96ccdb9da287f0df2a37439dc126892c251aca6a4ce39a08f3a1738db489769e6c5749186a1d4c9a3efb2ac7dfd9cab545a1354f1c79c40eca682108d0d8387fc08fdf88b9d7374caa3657038213c98583893ed0776'
              },
              {
                name: 'Maryam',
                role: 'Health Coach, Hijama, & Massage',
                location: 'Kensington & East London',
                desc: 'A multi-disciplinary practitioner guiding personalized health journeys and therapeutic treatments.',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
              },
              {
                name: 'Hasan',
                role: 'Cupping & Sports Massage',
                location: 'Kensington & East London',
                desc: 'Dedicated to athletic recovery, injury prevention, and holistic pain management through targeted massage.',
                img: 'https://storage.googleapis.com/watermark-remover-bucket/unwatermark/d97a40bb-6f10-4eae-abc0-4a46e53a7de5.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=793133627742-compute%40developer.gserviceaccount.com%2F20260726%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260726T100110Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=60d2c66a0d90c23baf08185e26772ebadf462fdf6afb5ba6662d550fbf9b5c82e021d5e319ee17d37c1268386368db8d3871009b1bc745ac459bef997842cf080f9930abfbb61bdb04c4d91adab5ded8667f50af7ec95e410e7368e3a8ff5441a63115fca9cf1085c81c69d450c8ec2568d3061eeb8630e2751634f2cffea779dc6e9b395e73f39537b65ddbf486d900ed5133f9326d6a04b82d0f12f10253fd00a901c79ebea27e821faec070109870595404f4756b230b48aa8fb267ba28c6e9d748abd58fc05c4bb1f9855384415e296d9102bb02e812253d437af2f285767cf0eed899b2b0ce0f11d86a96d2f6615d722e52242c030a9f71765ec1e080b2'
              }
            ].map((member, index) => (
              <motion.div 
                key={member.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.6 } } }}
                className="bg-cream rounded-2xl p-8 text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-sm">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-cormorant text-forest font-semibold mb-1">{member.name}</h3>
                <p className="text-sage text-sm font-medium mb-1 uppercase tracking-wider">{member.role}</p>
                <p className="text-charcoal/50 text-xs font-semibold mb-4 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3" /> {member.location}
                </p>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cormorant text-forest mb-4">Our Clinic</h2>
            <p className="text-charcoal/70">A calming environment designed for your comfort and healing.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://media.istockphoto.com/id/2176485147/photo/a-woman-and-a-man-are-standing-in-front-of-a-counter.jpg?s=612x612&w=0&k=20&c=_zUyqrm1hHSNV3CtCYbihzIJ456u0_Q1CZujb5VweCg=" alt="Reception" className="w-full h-64 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&auto=format&fit=crop" alt="Treatment Room" className="w-full h-64 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=600&auto=format&fit=crop" alt="Details" className="w-full h-64 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=600&auto=format&fit=crop" alt="Healing Environment" className="w-full h-64 object-cover rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
