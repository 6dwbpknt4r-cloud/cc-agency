"use client"

import { motion } from "framer-motion"
import { CreditCard, CheckCircle2, Crown, Zap } from "lucide-react"

export default function BillingPage() {
  const plans = [
    { name: "Starter", price: "97", icon: Zap, features: ["AI Chat Widget", "Basic Qualification", "SMS Capture"] },
    { name: "Professional", price: "197", icon: CheckCircle2, features: ["Calendar Sync", "Missed Call Text-Back", "Email Flows"] },
    { name: "Elite", price: "297", icon: Crown, features: ["Content Studio", "Review Generation", "Advanced Analytics"] },
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <header>
        <h1 className="text-4xl font-black tracking-tight mb-2">Subscription & Billing</h1>
        <p className="text-slate-400 font-medium">Manage your plan and payment methods.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 rounded-[2.5rem] glass-card border ${i === 1 ? 'border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.1)]' : 'border-white/5'} relative overflow-hidden`}
          >
            {i === 1 && <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">Most Popular</div>}
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <plan.icon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-4xl font-black mb-8">${plan.price}<span className="text-sm font-medium text-slate-500">/mo</span></p>
            <ul className="space-y-4 mb-10">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-full font-bold transition-all ${
              i === 1 ? 'bg-blue-600 hover:bg-blue-500' : 'bg-white/5 hover:bg-white/10'
            }`}>
              {i === 1 ? 'Current Plan' : 'Upgrade Now'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
