'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, FileText, Book, Globe, User, Award, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { intlJournals, domJournals, intlConfs, domConfs, books } from '@/lib/data'

export default function PublicationsPage() {
  const categories = [
    { 
      id: 'intl-journals', 
      title: "International Journals", 
      data: intlJournals, 
      icon: <Globe size={20} />,
      count: intlJournals.length
    },
    { 
      id: 'dom-journals', 
      title: "Domestic Journals", 
      data: domJournals, 
      icon: <FileText size={20} />,
      count: domJournals.length
    },
    { 
       id: 'intl-confs', 
       title: "International Conferences", 
       data: intlConfs, 
       icon: <Award size={20} />,
       count: intlConfs.length
    },
    { 
       id: 'dom-confs', 
       title: "Domestic Conferences", 
       data: domConfs, 
       icon: <User size={20} />,
       count: domConfs.length
    },
    { 
       id: 'books', 
       title: "Books", 
       data: books, 
       icon: <Book size={20} />,
       count: books.length
    }
  ]

  const [activeTab, setActiveTab] = useState(categories[0].id)

  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && categories.some(cat => cat.id === hash)) {
      setActiveTab(hash)
    }
  }, [])

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0]

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header Panel */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-black text-khu-red uppercase tracking-widest hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft size={14} /> 홈으로 돌아가기
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                ALL <span className="text-khu-red">PUBLICATIONS</span>
              </h1>
              <p className="text-sm md:text-base font-bold text-slate-400">인간중심설계 연구실의 학술 연구 성과 아카이브</p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span className="w-12 h-px bg-slate-200" />
              TOTAL {intlJournals.length + domJournals.length + intlConfs.length + domConfs.length + books.length} ITEMS
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 flex-1">
        {/* Sidebar Navigation */}
        <aside className="lg:w-80 shrink-0">
          <div className="sticky top-32 space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full group flex items-center justify-between p-5 rounded-2xl transition-all duration-300 border ${
                  activeTab === cat.id 
                  ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/20 translate-x-2' 
                  : 'bg-white border-slate-200 text-slate-500 hover:border-khu-red/30 hover:bg-white hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`transition-colors ${activeTab === cat.id ? 'text-khu-red' : 'text-slate-300 group-hover:text-khu-red'}`}>
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-left leading-tight">
                    {cat.title}
                  </span>
                </div>
                <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${activeTab === cat.id ? 'bg-white/10 text-white' : 'bg-slate-50 text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center border border-slate-200 shadow-sm text-khu-red">
                  {activeCategory.icon}
                </div>
                <div>
                   <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">{activeCategory.title}</h2>
                   <p className="text-[10px] font-black text-khu-red uppercase tracking-[0.3em]">{activeCategory.count} Publications Found</p>
                </div>
              </div>

              {/* Publication Grid */}
              <div className="grid gap-4">
                {activeCategory.data.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="group bg-white border border-slate-200 p-8 md:p-10 rounded-[3rem] hover:shadow-2xl hover:border-khu-red/10 transition-all duration-500 flex flex-col md:flex-row gap-8"
                  >
                    <div className="md:w-16 shrink-0">
                       <span className="text-[10px] font-black text-slate-200 uppercase tracking-widest group-hover:text-khu-red transition-colors">
                         #{item.id}
                       </span>
                    </div>

                    <div className="flex-1 space-y-6">
                      <div className="flex flex-wrap items-center gap-3">
                         <span className="px-4 py-1.5 bg-khu-red/5 text-khu-red text-[10px] font-black rounded-xl border border-khu-red/10">
                           {item.journal}
                        </span>
                        <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                           {item.year}
                        </span>
                        {item.volume && (
                          <span className="text-[10px] font-bold text-slate-300">
                             VOL. {item.volume} {item.pages && ` / PP. ${item.pages}`}
                          </span>
                        )}
                        {item.location && (
                          <span className="text-[10px] font-bold text-slate-300 italic">
                             {item.location}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-khu-red transition-colors leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-[13px] font-bold text-slate-500 leading-relaxed authors-list">
                         {item.authors.split(', ').map((author: string, i: number, arr: string[]) => (
                           <React.Fragment key={i}>
                             <span className={author.includes('Bahn, S.') ? 'text-khu-red font-black underline underline-offset-8 decoration-2' : ''}>
                               {author}
                             </span>
                             {i < arr.length - 1 ? ', ' : ''}
                           </React.Fragment>
                         ))}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>

      {/* Footer link for mobile or end of list */}
      <div className="py-20 bg-white border-t border-slate-200 mt-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="space-y-1 text-center md:text-left">
              <p className="text-[10px] font-black text-khu-red uppercase tracking-widest">Human-Centered Design Lab</p>
              <h3 className="text-xl font-black text-slate-900 uppercase">Archive Complete</h3>
           </div>
           <Link href="/" className="group inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-khu-red shadow-xl hover:shadow-khu-red/20 transition-all">
             홈으로 돌아가기 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </div>
    </main>
  )
}
