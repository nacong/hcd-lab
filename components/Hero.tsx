'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden w-full h-screen flex flex-col items-center justify-center px-6">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white overflow-hidden">
        <img 
          src="/hero_background.png" 
          alt="HCDL Research Lab" 
          className="w-full h-full object-cover opacity-20 saturate-[1.2] scale-105"
        />
        {/* Technical Tech Grid */}
        <div className="absolute inset-0 bg-grid opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
        
        {/* Futuristic Glowing Points */}
        <div className="absolute top-1/4 left-1/4 w-[2px] h-[2px] bg-khu-red rounded-full shadow-[0_0_10px_2px_rgba(162,46,50,0.3)] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[2px] h-[2px] bg-khu-red rounded-full shadow-[0_0_10px_2px_rgba(162,46,50,0.3)] animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-[2px] h-[2px] bg-khu-red rounded-full shadow-[0_0_10px_2px_rgba(162,46,50,0.3)] animate-pulse-slow delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto text-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center"
        >
          <div className="flex justify-center mb-16 w-full relative">
            <img
              src="/common/logo.png"
              alt="HCDL Logo"
              className="h-28 md:h-52 w-auto object-contain mx-auto relative z-10"
            />
          </div>
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl text-slate-900 font-black tracking-tight leading-snug">
            인간과 기술 사이의 경계를 탐구하며, <br className="hidden md:block" />
            인지과학과 공학을 통해 <span className="bg-khu-red text-white px-2">더 나은 경험</span>을 창조합니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
