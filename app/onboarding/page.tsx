"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Building2, 
  Palette, 
  Clock, 
  Globe, 
  Calendar, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from "lucide-react"
import { useRouter } from "next/navigation"

const steps = [
  { id: "basic", title: "The Basics", icon: Building2 },
  { id: "branding", title: "Branding", icon: Palette },
  { id: "hours", title: "Availability", icon: Clock },
  { id: "connect", title: "Connections", icon: Globe },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    industry: "ROOFING",
    primaryColor: "#3b82f6",
    secondaryColor: "#020617",
    website: "",
    phone: "",
  })

  const next = () => currentStep < steps.length - 1 ? setCurrentStep(s => s + 1) : router.push("/dashboard")
  const prev = () => currentStep > 0 && setCurrentStep(s => s - 1)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-950">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="flex justify-between mb-12">
          {steps.map((step, i) => (
            <div key={step.id} className="flex flex-col items-center gap-2 flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                i <= currentStep ? "border-blue-500 bg-blue-500/10 text-blue-500" : "border-white/5 text-slate-600"
              }`}>
                {i < currentStep ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-5 h-5" />}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${
                i <= currentStep ? "text-white" : "text-slate-600"
              }`}>{step.title}</span>
            </div>
          ))}
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-12 rounded-[3rem] glass-card border border-white/5 space-y-8"
        >
          {currentStep === 0 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Tell us about your business.</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Company Name</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none transition-all"
                    placeholder="e.g. C&C Online Marketing"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Industry</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none transition-all appearance-none"
                    value={formData.industry}
                    onChange={e => setFormData({...formData, industry: e.target.value})}
                  >
                    <option value="ROOFING">Roofing</option>
                    <option value="HVAC">HVAC</option>
                    <option value="PLUMBING">Plumbing</option>
                    <option value="RESTAURANT">Restaurant</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Your Brand Identity.</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Primary Color</label>
                  <div className="flex gap-4 items-center">
                    <input type="color" className="w-12 h-12 rounded-lg bg-transparent border-none cursor-pointer" value={formData.primaryColor} onChange={e => setFormData({...formData, primaryColor: e.target.value})} />
                    <span className="font-mono text-sm">{formData.primaryColor}</span>
                  </div>
                </div>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                   <div className="w-12 h-12 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center text-slate-500 text-[10px] font-bold">LOGO</div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">When are you open?</h2>
              <p className="text-slate-500 text-sm">Your AI will use these hours to coordinate appointments and manage expectations.</p>
              <div className="space-y-3">
                {['Mon-Fri', 'Sat-Sun'].map(day => (
                   <div key={day} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
                      <span className="font-bold">{day}</span>
                      <span className="text-blue-400 font-bold">9:00 AM - 5:00 PM</span>
                   </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Connect the Dots.</h2>
              <div className="space-y-4">
                <button className="w-full p-6 rounded-2xl bg-white text-black font-black flex items-center justify-between hover:bg-blue-50 transition-all">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6" /> Sync Google Calendar
                  </div>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-full p-6 rounded-2xl bg-[#F22F46] text-white font-black flex items-center justify-between hover:opacity-90 transition-all">
                  <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6" /> Connect Twilio SMS
                  </div>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-8">
            {currentStep > 0 && (
              <button onClick={prev} className="flex-1 py-4 rounded-full border border-white/10 font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <ArrowLeft className="w-5 h-5" /> Back
              </button>
            )}
            <button onClick={next} className="flex-[2] py-4 rounded-full bg-blue-600 font-black text-lg hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
              {currentStep === steps.length - 1 ? "Complete Setup" : "Continue"} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
        
        <p className="text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] mt-12">
          Step {currentStep + 1} of {steps.length} — C&C Online LeadFlow
        </p>
      </div>
    </div>
  )
}
