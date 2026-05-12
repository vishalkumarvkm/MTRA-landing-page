"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex-1 bg-white">
      {/* TopAppBar */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 w-full z-40 shadow-sm">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-4 md:px-6 h-16 md:h-20">
          <div onClick={() => scrollTo('home')} className="flex items-center gap-2 md:gap-3 cursor-pointer hover:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[#004e99] font-bold text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            <span className="text-lg md:text-xl font-bold text-[#004e99] tracking-tight">MediCare Premium</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 items-center">
            <button onClick={() => scrollTo('home')} className="text-sm font-bold text-[#004e99] relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#004e99]">Home</button>
            <button onClick={() => scrollTo('services')} className="text-sm text-gray-500 font-semibold hover:text-[#004e99] transition-colors">Services</button>
            <button onClick={() => scrollTo('doctors')} className="text-sm text-gray-500 font-semibold hover:text-[#004e99] transition-colors">Doctors</button>
            <button onClick={() => scrollTo('appointments')} className="text-sm text-gray-500 font-semibold hover:text-[#004e99] transition-colors">Appointments</button>
          </nav>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scrollTo('appointments')}
              className="bg-[#004e99] text-white text-[12px] md:text-sm font-bold px-4 md:px-7 py-2 md:py-3 rounded-xl hover:bg-[#003d7a] transition-all shadow-md hidden sm:block active:scale-95"
            >
              Book Appointment
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#004e99] p-2 bg-gray-50 rounded-lg active:scale-95"
            >
              <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                <button onClick={() => { setIsMenuOpen(false); scrollTo('home'); }} className="text-left text-sm font-bold text-[#004e99]">Home</button>
                <button onClick={() => { setIsMenuOpen(false); scrollTo('services'); }} className="text-left text-sm text-gray-500 font-semibold">Services</button>
                <button onClick={() => { setIsMenuOpen(false); scrollTo('doctors'); }} className="text-left text-sm text-gray-500 font-semibold">Doctors</button>
                <button onClick={() => { setIsMenuOpen(false); scrollTo('appointments'); }} className="text-left text-sm text-gray-500 font-semibold">Appointments</button>
                <button 
                  onClick={() => { setIsMenuOpen(false); scrollTo('appointments'); }}
                  className="bg-[#004e99] text-white text-sm font-bold px-7 py-3 rounded-xl w-full active:scale-95"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden pt-12 pb-12 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40 min-h-[500px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/10 to-transparent z-10"></div>
          <img 
            alt="Hero" 
            className="absolute inset-0 w-full h-full object-cover object-[center_40%] z-0" 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
          />
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-20 w-full">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-[#004e99]/10 text-[#004e99] text-[10px] md:text-[11px] font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-4 md:mb-8 uppercase tracking-widest"
              >
                <span className="material-symbols-outlined text-sm">verified</span>
                Top-Tier Medical Expertise
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111c2d] mb-4 md:mb-8 leading-[1.1] tracking-tight"
              >
                Your Health,<br/><span className="text-[#004e99]">Our Priority</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-xl text-[#1e293b] mb-6 md:mb-10 max-w-xl leading-relaxed font-semibold"
              >
                Experience world-class clinical care with our team of renowned specialists. We deliver unparalleled medical outcomes.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-5"
              >
                <button 
                  onClick={() => scrollTo('appointments')}
                  className="bg-[#004e99] text-white text-sm font-bold px-6 md:px-10 py-3 md:py-4 rounded-xl hover:bg-[#003d7a] transition-all shadow-xl shadow-[#004e99]/20 flex items-center justify-center gap-2 group active:scale-95"
                >
                  Book Consultation
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button 
                  onClick={() => scrollTo('services')}
                  className="bg-white text-[#004e99] border-2 border-[#004e99]/10 text-sm font-bold px-6 md:px-10 py-3 md:py-4 rounded-xl hover:bg-slate-50 transition-colors active:scale-95 shadow-sm"
                >
                  Our Services
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="stats" className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-30 -mt-8 md:-mt-16 lg:-mt-24">
          <div className="bg-[#004e99] text-white py-10 md:py-20 rounded-2xl md:rounded-3xl shadow-2xl shadow-[#004e99]/20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="px-4 md:px-8 py-4 md:py-4">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-3 tracking-tighter">25+</h3>
              <p className="text-[9px] md:text-[11px] font-bold opacity-60 uppercase tracking-[0.2em] md:tracking-[0.25em]">Years of Excellence</p>
            </div>
            <div className="px-4 md:px-8 py-4 md:py-4">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-3 tracking-tighter">100+</h3>
              <p className="text-[9px] md:text-[11px] font-bold opacity-60 uppercase tracking-[0.2em] md:tracking-[0.25em]">Medical Specialists</p>
            </div>
            <div className="px-4 md:px-8 py-4 md:py-4">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-3 tracking-tighter">50k+</h3>
              <p className="text-[9px] md:text-[11px] font-bold opacity-60 uppercase tracking-[0.2em] md:tracking-[0.25em]">Patients Served</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-[1280px] mx-auto px-4 md:px-6 py-24 md:py-32">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111c2d] mb-4">Our Specialized Services</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Providing world-class medical expertise across a wide range of specialties to ensure your family's health and well-being.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Cardiology", icon: "favorite", desc: "Expert heart care with advanced diagnostic and treatment options.", id: "cardio" },
              { title: "Neurology", icon: "psychology", desc: "Specialized care for brain, spine, and nervous system disorders.", id: "neuro" },
              { title: "Pediatrics", icon: "child_care", desc: "Compassionate medical care for infants, children, and adolescents.", id: "pedia" },
              { title: "Diagnostics", icon: "biotech", desc: "State-of-the-art laboratory and imaging services for accurate results.", id: "diag" },
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-50 text-[#004e99] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#004e99] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111c2d] mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <button onClick={() => scrollTo('appointments')} className="text-[#004e99] text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Book Now
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className="bg-slate-50 py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111c2d] mb-4">Meet Our Specialists</h2>
                <p className="text-slate-500 font-medium">Consult with our team of board-certified medical professionals dedicated to your clinical excellence.</p>
              </div>
              <button onClick={() => scrollTo('doctors')} className="text-[#004e99] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View All Doctors
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {[
                { 
                  name: "Dr. Sarah Chen", 
                  role: "Chief Cardiologist", 
                  img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
                  rating: "4.9",
                  exp: "15+ Yrs"
                },
                { 
                  name: "Dr. James Wilson", 
                  role: "Senior Neurologist", 
                  img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
                  rating: "5.0",
                  exp: "12+ Yrs"
                },
                { 
                  name: "Dr. Elena Rodriguez", 
                  role: "Pediatric Specialist", 
                  img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
                  rating: "4.8",
                  exp: "10+ Yrs"
                },
              ].map((doc, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -12 }}
                  className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-[#004e99]/5 transition-all group flex flex-col items-center text-center"
                >
                  <div className="relative mb-8">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                      <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white px-4 py-1.5 rounded-full shadow-lg z-20 flex items-center gap-1">
                      <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold text-slate-700">{doc.rating}</span>
                    </div>
                    <div className="absolute top-0 -left-4 bg-[#004e99] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-20 shadow-md">
                      {doc.exp}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#111c2d] mb-2">{doc.name}</h3>
                  <p className="text-slate-500 text-sm font-semibold mb-8">{doc.role}</p>
                  <button 
                    onClick={() => scrollTo('appointments')}
                    className="w-full py-4 rounded-2xl bg-slate-50 text-[#004e99] font-bold text-sm hover:bg-[#004e99] hover:text-white transition-all active:scale-95 shadow-sm"
                  >
                    Book Appointment
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointments Section */}
        <section id="appointments" className="max-w-[1280px] mx-auto px-4 md:px-6 py-24 md:py-32">
          <div className="bg-[#111c2d] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#004e99]/20 to-transparent"></div>
            <div className="relative z-10 flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Schedule<br/>Your Appointment?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto lg:mx-0">Join 50,000+ patients who trust MediCare Premium for their healthcare needs. Our experts are ready to help you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => scrollTo('appointments')} className="bg-white text-[#111c2d] px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg">
                  Book Now
                </button>
                <button onClick={() => scrollTo('appointments')} className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all active:scale-95">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative z-10 w-full lg:w-1/3">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#004e99] rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">support_agent</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">24/7 Support</h4>
                    <p className="text-slate-400 text-xs">Always here for you</p>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed mb-6 opacity-80">Our medical concierge team is available around the clock to assist with your scheduling and inquiries.</p>
                <a href="tel:+1234567890" className="text-white font-bold text-lg flex items-center gap-3">
                  <span className="material-symbols-outlined">call</span>
                  +1 (800) MEDICARE
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 w-full pt-16 md:pt-32 pb-12 md:pb-20 mt-16 md:mt-32 border-t border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6 md:mb-8 cursor-pointer" onClick={() => scrollTo('home')}>
              <span className="material-symbols-outlined text-[#004e99] font-bold text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              <span className="text-xl md:text-2xl font-bold text-[#004e99] tracking-tight">MediCare</span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed max-w-xs text-sm md:text-[15px]">
              Committed to delivering world-class clinical care with a patient-first approach.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] md:text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-4 md:mb-10">Departments</h4>
            <ul className="space-y-3 md:space-y-5 text-sm md:text-[15px] font-semibold text-gray-600">
              <li><button onClick={() => scrollTo('services')} className="hover:text-[#004e99] transition-colors">Cardiology</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-[#004e99] transition-colors">Neurology</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-[#004e99] transition-colors">Pediatrics</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] md:text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-4 md:mb-10">Resources</h4>
            <ul className="space-y-3 md:space-y-5 text-sm md:text-[15px] font-semibold text-gray-600">
              <li><button onClick={() => scrollTo('home')} className="hover:text-[#004e99] transition-colors">About Us</button></li>
              <li><button onClick={() => scrollTo('appointments')} className="hover:text-[#004e99] transition-colors">Patient Portal</button></li>
              <li><button onClick={() => scrollTo('home')} className="hover:text-[#004e99] transition-colors">Careers</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] md:text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-4 md:mb-10">Support</h4>
            <ul className="space-y-3 md:space-y-5 text-sm md:text-[15px] font-semibold text-gray-600">
              <li><button onClick={() => scrollTo('appointments')} className="hover:text-[#004e99] transition-colors">Help Center</button></li>
              <li><button onClick={() => scrollTo('appointments')} className="hover:text-[#004e99] transition-colors">Contact Us</button></li>
              <li><button onClick={() => scrollTo('home')} className="hover:text-[#004e99] transition-colors">Legal</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 mt-12 md:mt-24 pt-8 md:pt-12 border-t border-gray-100/60 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-[11px] md:text-[13px] text-gray-400 font-bold uppercase tracking-widest text-center">
            © 2024 MediCare Premium Clinic. 
          </p>
          <div className="flex gap-6 md:gap-8">
             <button onClick={() => scrollTo('home')} className="text-[10px] md:text-[12px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#004e99]">Privacy</button>
             <button onClick={() => scrollTo('home')} className="text-[10px] md:text-[12px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#004e99]">Terms</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
