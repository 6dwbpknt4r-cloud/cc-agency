"use client"

import { motion } from "framer-motion"
import { Sparkles, Image, Facebook, Instagram, Search } from "lucide-react"

export default function ContentStudio() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <header>
        <h1 className="text-4xl font-black tracking-tight mb-2">AI Content Studio</h1>
        <p className="text-slate-400 font-medium">Generate premium social media and SEO content in seconds.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Instagram, label: "Instagram Post", color: "from-pink-500 to-rose-500" },
          { icon: Facebook, label: "Facebook Update", color: "from-blue-600 to-indigo-600" },
          { icon: Search, label: "GMB Post", color: "from-emerald-500 to-teal-500" },
          { icon: Sparkles, label: "Blog Article", color: "from-violet-600 to-purple-600" },
        ].map((item, i) => (
          <motion.button
            key={item.label}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all text-left group"
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-1">{item.label}</h3>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Generate with AI</p>
          </motion.button>
        ))}
      </div>

      <div className="p-12 rounded-[3rem] glass-card border border-white/5 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold">Ready to create magic?</h2>
        <p className="max-w-md text-slate-400 font-medium">Select a platform above and our AI will generate professional copy and image ideas tailored to your business.</p>
      </div>
    </div>
  )
}
