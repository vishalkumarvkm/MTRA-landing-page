"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowUpRight, GraduationCap } from "lucide-react";
import Dashboard from "@/components/Dashboard";
import AIAssistant from "@/components/AIAssistant";
import { motion } from "framer-motion";

export default function Home() {
  const [isBotOpen, setIsBotOpen] = useState(true);

  return (
    <main className="flex min-h-screen bg-[#fcfdfe] overflow-hidden relative">
      {/* Main Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-16 lg:p-24 bg-white z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#004e99] px-4 py-2 rounded-full mb-8">
            <GraduationCap className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Education Benefits</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Tuition Reimbursement <br />
            <span className="text-[#004e99]">Agent Platform</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://mtra.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#004e99] text-white px-10 py-5 rounded-2xl font-bold text-[16px] hover:bg-blue-800 transition-all shadow-xl shadow-blue-100 active:scale-95 group"
            >
              Login to Platform
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Subtle decorative elements for background depth */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />

        {/* Subtle decorative element */}
        <div className="absolute bottom-12">
           <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Systems Secure & Active</span>
           </div>
        </div>
      </div>

      <AIAssistant isOpen={isBotOpen} setIsOpen={setIsBotOpen} />
    </main>
  );
}
