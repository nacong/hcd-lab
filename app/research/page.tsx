'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Globe, Calendar, User } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/data'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16 space-y-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-bold text-khu-red hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={16} /> 홈으로
            </Link>
            <p className="text-xs font-black text-khu-red uppercase tracking-widest">연구과제</p>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              전체 <span className="text-gradient">연구과제</span>
            </h1>
          </div>

          {/* Timeline View */}
          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-8 pl-10 md:pl-16 space-y-12 py-8">
            {projects.map((project: any, idx: number) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[51px] md:-left-[73px] top-6 w-5 h-5 bg-white border-4 border-khu-red rounded-full z-10 group-hover:scale-125 transition-transform" />
                
                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-2xl hover:border-khu-red/20 transition-all duration-500 relative overflow-hidden group">
                  {/* Agency Tag */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                    <div className="flex-1 space-y-10">
                      <div className="flex items-center gap-4 text-[11px] font-black tracking-widest text-khu-red uppercase">
                        <span className="px-3 py-1 bg-khu-red/5 rounded-full border border-khu-red/10">{project.period}</span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight group-hover:text-khu-red transition-colors">
                        {project.title}
                      </h3>
                      
                      {project.description && (
                        <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-3xl">
                          {project.description}
                        </p>
                      )}

                      <div className="flex flex-wrap items-center gap-6 pt-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <div className="flex items-center gap-2">
                          <Globe size={14} className="text-khu-red/40" />
                          {project.agency || "자체연구"}
                        </div>
                        {project.role && (
                          <div className="flex items-center gap-2">
                            <User size={14} className="text-khu-red/40" />
                            {project.role}
                          </div>
                        )}
                      </div>
                    </div>

                    {project.logo && (
                      <div className="shrink-0 w-40 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                        <img 
                          src={project.logo} 
                          alt={project.agency} 
                          className="max-w-full max-h-full object-contain transition-all"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
