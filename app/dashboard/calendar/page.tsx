"use client"

import { motion } from "framer-motion"
import { Calendar as CalendarIcon, Clock, Plus, ChevronRight } from "lucide-react"

export default function CalendarPage() {
  const events = [
    { title: "Roof Repair Estimate", time: "10:00 AM", client: "John Doe", type: "HOT" },
    { title: "HVAC Maintenance", time: "02:00 PM", client: "Sarah Smith", type: "WARM" },
    { title: "Consultation", time: "04:30 PM", client: "Mike Wilson", type: "HOT" },
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Booking Calendar</h1>
          <p className="text-slate-400 font-medium">Manage your appointments and AI availability.</p>
        </div>
        <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 font-bold flex items-center gap-2">
          <Plus className="w-5 h-5" /> Schedule Job
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 rounded-[3rem] glass-card border border-white/5 aspect-[16/10] flex items-center justify-center text-slate-500 italic">
            Google Calendar Sync Visualizer
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" /> Today's Schedule
          </h3>
          <div className="space-y-4">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between hover:bg-white/[0.04] transition-all cursor-pointer group"
              >
                <div>
                  <p className="text-xs font-black text-blue-500 tracking-widest uppercase mb-1">{event.time}</p>
                  <h4 className="font-bold text-lg">{event.title}</h4>
                  <p className="text-sm text-slate-500">{event.client}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
