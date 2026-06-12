import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"

export default async function LeadsPage() {
  const session = await auth()
  
  // Frictionless: Use a demo user/business if not logged in
  const userId = session?.user?.id || "demo-user-id"

  let business = await prisma.business.findFirst({
    where: { ownerId: userId },
    include: {
      leads: {
        orderBy: { updatedAt: "desc" },
        include: {
          conversations: {
            take: 1,
            orderBy: { createdAt: "desc" }
          }
        }
      }
    }
  })

  // If no business found for demo, show sample data
  const sampleLeads = [
    { 
      id: "1", 
      name: "John Smith", 
      phone: "555-0199", 
      temperature: "HOT", 
      updatedAt: new Date(),
      conversations: [{ content: "I need a roof repair as soon as possible. My budget is $5,000." }] 
    },
    { 
      id: "2", 
      name: "Sarah Miller", 
      phone: "555-0122", 
      temperature: "WARM", 
      updatedAt: new Date(),
      conversations: [{ content: "Just wondering about your pricing for HVAC maintenance." }] 
    },
    { 
      id: "3", 
      name: "Mike Johnson", 
      phone: "555-0144", 
      temperature: "COLD", 
      updatedAt: new Date(),
      conversations: [{ content: "Do you serve the downtown area?" }] 
    },
  ]

  const leads = business?.leads || (sampleLeads as any[])

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tighter">Leads & Conversations</h1>
          <p className="text-slate-400 font-medium mt-2">Manage your AI-qualified pipeline.</p>
        </div>
        <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
          {business ? "Live Data" : "Demo Mode"}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {leads.map((lead) => (
          <div 
            key={lead.id}
            className="p-6 rounded-[2.5rem] glass-card border border-white/5 hover:border-blue-500/30 transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-xl ${
                lead.temperature === "HOT" ? "bg-rose-500/20 text-rose-500" :
                lead.temperature === "WARM" ? "bg-amber-500/20 text-amber-500" :
                "bg-blue-500/20 text-blue-500"
              }`}>
                {lead.name?.[0] || lead.phone?.[lead.phone.length - 1] || "?"}
              </div>
              <div>
                <h3 className="font-bold text-xl tracking-tight mb-1">{lead.name || lead.phone}</h3>
                <p className="text-sm text-slate-400 truncate max-w-md font-medium">
                  {lead.conversations[0]?.content || "No messages yet"}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="text-right">
                <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full border ${
                  lead.temperature === "HOT" ? "border-rose-500/50 text-rose-500 bg-rose-500/5" :
                  lead.temperature === "WARM" ? "border-amber-500/50 text-amber-500 bg-amber-500/5" :
                  "border-blue-500/50 text-blue-500 bg-blue-500/5"
                }`}>
                  {lead.temperature}
                </span>
                <p className="text-[10px] text-slate-600 mt-3 uppercase font-black tracking-tighter">
                  {new Date(lead.updatedAt).toLocaleDateString()}
                </p>
              </div>
              <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
