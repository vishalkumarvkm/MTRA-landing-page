"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import Dashboard from "@/components/Dashboard";
import AIAssistant from "@/components/AIAssistant";
import { motion } from "framer-motion";

export default function Home() {
  const [isBotOpen, setIsBotOpen] = useState(true);

  return (
    <main className="flex min-h-screen bg-[#fcfdfe] overflow-hidden relative">
      {/* Branded Background Content */}
      <div className="flex flex-1 flex-col items-center justify-center p-6 sm:p-12 bg-slate-50/30">
        <div className="max-w-sm text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Montefiore Workforce Assistant</h1>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-[0.2em] opacity-60">Employee HR Hub</p>
          <div className="mt-12 flex flex-col items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Systems Active</span>
          </div>
        </div>
      </div>

      {/* Floating Sparkles in background */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-100 rounded-full blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-20 left-40 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <AIAssistant isOpen={isBotOpen} setIsOpen={setIsBotOpen} />
    </main>
  );
}
