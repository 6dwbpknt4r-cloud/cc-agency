"use client"

import { motion } from "framer-motion"
import { Settings, User, Bell, Shield, Palette, Globe } from "lucide-react"

export default function SettingsPage() {
  const sections = [
    { icon: User, label: "Business Profile", desc: "Logo, name, and address settings." },
    { icon: Palette, label: "Branding", desc: "Colors and 3D background preferences." },
    { icon: Globe, label: "Integrations", desc: "Connect Google Calendar and Twilio." },
    { icon: Bell, label: "Notifications", desc: "Manage SMS and email alerts." },
    { icon: Shield, label: "Security", desc: "Team access and API keys." },
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <header>
        <h1 className="text-4xl font-black tracking-tight mb-2">Platform Settings</h1>
        <p className="text-slate-400 font-medium">Configure your AI and agency preferences.</p>
      </header>

      <div className="max-w-3xl space-y-4">
        {sections.map((section, i) => (
          <motion.div
            key={section.label}
            whileHover={{ x: 5 }}
            className="p-6 rounded-2xl glass-card border border-white/5 flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <section.icon className="w-6 h-6 text-slate-400 group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none mb-2">{section.label}</h3>
                <p className="text-sm text-slate-500 font-medium">{section.desc}</p>
              </div>
            </div>
            <button className="text-slate-500 group-hover:text-white transition-colors font-black text-xs tracking-widest uppercase">Manage</button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
