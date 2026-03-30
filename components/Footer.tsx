import React from 'react'
import { Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-300 py-24 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-khu-red/10 text-khu-red text-[10px] font-bold uppercase tracking-widest mb-2">
            Address
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={24} className="text-slate-700 mt-1 shrink-0" />
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              (우) 17104 경기도 용인시 기흥구 덕영대로 1732 <br />
              경희대학교 공과대학 432호 <br />
              인간중심설계연구실
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-khu-red/10 text-khu-red text-[10px] font-bold uppercase tracking-widest mb-2">
            Contact
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center">
              <Phone size={20} className="text-khu-red" />
            </div>
            <p className="text-2xl font-bold text-white tracking-tight">
              031.201.5441
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-widest text-slate-600 font-bold">
        <span>© {currentYear} HCDL KYUNG HEE UNIVERSITY</span>
        <span>Human-Centered Design Laboratory</span>
      </div>
    </footer>
  )
}
