"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  TrendingUp, 
  PhoneMissed,
  Clock,
  ArrowUpRight
} from "lucide-react"

const stats = [
  { label: "Total Leads", value: "1,284", icon: Users, trend: "+12.5%" },
  { label: "Conversion Rate", value: "24.2%", icon: TrendingUp, trend: "+4.3%" },
  { label: "Missed Calls", value: "12", icon: PhoneMissed, trend: "-2.1%" },
  { label: "Avg. Response Time", value: "1.2m", icon: Clock, trend: "-15s" },
]

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter">
            Welcome back, <span className="text-gradient">Admin</span>
          </h1>
          <p className="text-slate-400 mt-2 font-medium">Here's what's happening with C&C Online today.</p>
        </div>
        <button className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-all font-black text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] uppercase tracking-widest">
          New Campaign <ArrowUpRight className="w-4 h-4" />
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-[2rem] glass-card border border-white/5 hover:border-blue-500/20 transition-all group"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                <stat.icon className="w-6 h-6 text-blue-400" />
              </div>
              <span className={`text-[10px] font-black tracking-widest px-2 py-1 rounded-full ${
                stat.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
              }`}>
                {stat.trend}
              </span>
            </div>
            <div className="mt-6">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-black mt-1 text-white tracking-tighter">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-8 rounded-[3rem] glass-card border border-white/5 min-h-[400px]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black tracking-tight uppercase">Revenue Pipeline</h3>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="w-3 h-3 rounded-full bg-violet-500" />
            </div>
          </div>
          <div className="h-64 flex items-center justify-center text-slate-600 font-bold uppercase tracking-[0.2em] text-xs">
            Predictive Analytics Engine Loading...
          </div>
        </div>

        <div className="p-8 rounded-[3rem] glass-card border border-white/5">
          <h3 className="text-xl font-black tracking-tight uppercase mb-8">Live Conversations</h3>
          <div className="space-y-6">
            {[
              { name: "John Doe", msg: "I need a quote for...", time: "2m ago", initial: "JD" },
              { name: "Sarah Miller", msg: "When can you start?", time: "15m ago", initial: "SM" },
              { name: "Mike Wilson", msg: "Interested in HVAC...", time: "1h ago", initial: "MW" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center font-black text-xs text-white shadow-lg shadow-blue-500/20">
                  {item.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white truncate tracking-tight">{item.name}</p>
                  <p className="text-xs text-slate-500 truncate font-medium">{item.msg}</p>
                </div>
                <div className="text-[10px] font-black text-slate-600 uppercase whitespace-nowrap">{item.time}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white">
            Open Inbox
          </button>
        </div>
      </div>
    </div>
  )
}
