"use client"

import { motion } from "framer-motion"
import { 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  BarChart3,
  PhoneMissed,
  Sparkles,
  Globe,
  Lock,
  Smartphone
} from "lucide-react"
import Link from "next/link"
import ChatWidget from "@/components/widget/ChatWidget"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter leading-none">C&C ONLINE</span>
              <span className="text-[10px] font-bold text-blue-400 tracking-[0.2em] uppercase">Marketing & More</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-slate-400">
            <Link href="#features" className="hover:text-white transition-colors">Technology</Link>
            <Link href="#how-it-works" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/onboarding" className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-slate-200 transition-all active:scale-95">
              Get Started
            </Link>
          </div>
...
          <div className="flex items-center gap-6">
            <Link href="/onboarding" className="px-6 py-3 rounded-full bg-white text-black text-sm font-black hover:bg-blue-50 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              GET STARTED
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10"
          >
            <Sparkles className="w-4 h-4 fill-blue-400" />
            Empowering Local Business with AI
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-[120px] font-black tracking-tighter mb-10 leading-[0.85] text-white"
          >
            OWN THE <br />
            <span className="text-gradient">CONVERSION.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl mx-auto text-xl text-slate-400 mb-14 leading-relaxed font-medium"
          >
            Stop losing leads to response delays. C&C Online automates your entire sales funnel with hyper-intelligent AI that qualifies and books jobs 24/7.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/onboarding" className="w-full sm:w-auto px-10 py-5 rounded-full bg-blue-600 text-white font-black text-lg hover:bg-blue-500 hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all active:scale-95 flex items-center justify-center gap-3">
              START FREE TRIAL <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#features" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-black text-lg hover:bg-white/10 transition-all backdrop-blur-xl">
              LEARN MORE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "AVG. REVENUE INCREASE", value: "34%" },
            { label: "LEADS QUALIFIED", value: "2M+" },
            { label: "RESPONSE TIME", value: "<1s" },
            { label: "CLIENTS SERVED", value: "500+" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-black mb-2 text-white">{stat.value}</p>
              <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">BUILT FOR THE <br /><span className="text-blue-500">NEXT ERA.</span></h2>
              <p className="text-slate-400 text-lg font-medium">We've combined the power of GPT-4o with deep local business logic to create a conversion machine.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white transition-colors cursor-pointer"><ArrowRight className="w-6 h-6 rotate-180" /></div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white transition-colors cursor-pointer"><ArrowRight className="w-6 h-6" /></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Receptionist",
                desc: "Never miss a 2 AM inquiry again. Our AI answers questions and books appointments instantly.",
                icon: MessageSquare,
                color: "from-blue-600 to-indigo-600"
              },
              {
                title: "Missed Call Text-Back",
                desc: "Instantly text back every missed call. Keep the conversation moving and close the deal.",
                icon: PhoneMissed,
                color: "from-violet-600 to-fuchsia-600"
              },
              {
                title: "Deep Qualification",
                desc: "AI identifies budget, project scope, and urgency to tag your hottest leads automatically.",
                icon: BarChart3,
                color: "from-rose-600 to-pink-600"
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all hover:bg-white/[0.04] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all" />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium mb-10">{feature.desc}</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  LEARN MORE <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 px-6 relative z-10 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
           <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="font-black text-xl tracking-tighter">C&C ONLINE</span>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">The premier AI conversion platform for local business leaders. Built for growth, powered by intelligence.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
              <div className="space-y-6">
                <p className="text-[10px] font-black tracking-widest uppercase text-white">Product</p>
                <ul className="space-y-4 text-sm font-medium text-slate-500">
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">AI Receptionist</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">SMS Automation</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">CRM</li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-[10px] font-black tracking-widest uppercase text-white">Company</p>
                <ul className="space-y-4 text-sm font-medium text-slate-500">
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">About Us</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">Contact</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">Privacy</li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-[10px] font-black tracking-widest uppercase text-white">Connect</p>
                <ul className="space-y-4 text-sm font-medium text-slate-500">
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">Twitter</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">LinkedIn</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">Instagram</li>
                </ul>
              </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-bold tracking-widest uppercase">© 2026 C&C ONLINE MARKETING & MORE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer"><Globe className="w-4 h-4" /></div>
             <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer"><Lock className="w-4 h-4" /></div>
             <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer"><Smartphone className="w-4 h-4" /></div>
          </div>
        </div>
      </footer>

      <ChatWidget businessId="demo-business" businessName="C&C Online Marketing" />
    </div>
  )
}
