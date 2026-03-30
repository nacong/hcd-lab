'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Image as ImageIcon, X, Expand } from 'lucide-react'

// Dummy gallery for premium feel
const galleryItems = [
  { id: 1, title: "Lab Team Lunch", date: "2023.10", type: "photo", url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" },
  { id: 2, title: "HCI Conference", date: "2023.08", type: "photo", url: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=2070" },
  { id: 3, title: "Workshop Session", date: "2023.05", type: "photo", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2070" },
  { id: 4, title: "Research Presentation", date: "2023.03", type: "photo", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070" },
  { id: 5, title: "Graduation Celebration", date: "2023.02", type: "photo", url: "https://images.unsplash.com/photo-1523050853064-dbc029705f52?auto=format&fit=crop&q=80&w=2070" },
  { id: 6, title: "International Symposium", date: "2022.12", type: "photo", url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2070" },
]

export default function AlbumPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const selectedItem = galleryItems.find(item => item.id === selectedId)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Laboratory Album
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Capturing the moments, discoveries, and collaborations that define our 
            shared journey.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedId(item.id)}
                className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-square shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                 <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center gap-4 text-white">
                    <Expand size={32} className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">Click to expand</span>
                 </div>
                 
                 <div 
                   className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                   style={{ backgroundImage: `url(${item.url})` }}
                 />
                 
                 <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-300 font-medium flex items-center gap-2">
                       <Camera size={12} className="text-indigo-400" /> {item.date}
                    </p>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-[100] flex items-center justify-center p-6 md:p-20"
            onClick={() => setSelectedId(null)}
          >
            <button className="absolute top-10 right-10 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all">
               <X size={24} />
            </button>
            
            <motion.div 
              layoutId={`item-${selectedId}`}
              className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-10"
              onClick={(e) => e.stopPropagation()}
            >
               <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative w-full h-[70%]">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${selectedItem.url})` }}
                  />
               </div>
               
               <div className="text-center text-white">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-khu-red font-bold text-xs uppercase tracking-widest mb-6">{selectedItem.date}</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{selectedItem.title}</h2>
                  <p className="text-slate-400 max-w-lg mx-auto">Shared memories from HCDL family activities and research excellence.</p>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24 px-6 bg-slate-50 flex flex-col items-center">
         <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-10">
            <ImageIcon size={32} className="text-indigo-400" />
         </div>
         <h2 className="text-3xl font-bold text-slate-900 mb-6">Want to see more?</h2>
         <p className="text-slate-500 mb-10 text-center max-w-sm">Follow our Instagram for real-time updates and behind-the-scenes laboratory life.</p>
         <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-khu-red transition-all flex items-center gap-3 active:scale-95">
           Instagram Feed @kyunghee_hcdl
         </button>
      </section>
    </div>
  )
}
