'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import {
  Menu, X, Mail, Phone, GraduationCap, Briefcase, Award,
  BookOpen, User, Search, Filter, Globe, FileText,
  ChevronRight, Camera, Image as ImageIcon, Expand, Quote, Calendar
} from 'lucide-react'
import { projects, intlJournals, domJournals, intlConfs, domConfs, books, labInfo } from '@/lib/data'

const mainDisciplines = [
  "Human-Computer Interaction",
  "User Interface Design and Evaluation"
]

const aboutSections = [
  {
    title: "HCDL Overview",
    id: "about",
    areas: ["사람을 깊이 이해하는 연구실, HCDL"],
    subAreas: mainDisciplines,
    description: <>HCDL은 제품 사용 과정에서 나타나는 사람의 <span className="highlight">생각</span>, 느끼는 <span className="highlight">마음</span>, 관찰되는 <span className="highlight">행동</span>을 깊이 있게 연구합니다. 우리는 사람이 기술을 어떻게 받아들이고 사용하는지 과학적으로 이해함으로써, 더욱 <span className="highlight">편리하고 가치 있는 사용자 경험(UX)</span>을 만드는 최적의 방안을 제시합니다.</>,
    image: "/about/0.png"
  },
  {
    title: "User Interface Design & Evaluation",
    areas: ["UI 디자인 및 평가"],
    description: <>사용성과 기기가 만나는 접점에서 발생하는 정보 처리의 어려움을 해결하고, 더 직관적이고 편리한 조작 환경을 만드는 연구입니다. 특히 <span className="highlight">사용성 평가 방법론</span>을 연구하여 실제 제품의 <span className="highlight">활용도를 극대화</span>합니다.</>,
    image: "/about/3.png"
  },
  {
    title: "Affective Engineering",
    areas: ["감성공학"],
    description: <>제품을 사용할 때 느끼는 다양한 감정을 체계적으로 분석하여 제품 설계에 적용하는 학문입니다. 우리는 사람의 <span className="highlight">감성을 정교하게 측정하고 수치화</span>하여, 사용자가 기대하는 감성적 만족도를 제품 디자인에 반영하는 연구에 집중하고 있습니다.</>,
    image: "/about/1.png"
  },
  {
    title: "User Analysis & Modeling",
    areas: ["사용자 분석 및 모델링"],
    description: <>관찰과 인터뷰를 통해 <span className="highlight">사용자의 행동 패턴과 심리를 분석</span>하고 그 이면의 동기를 파악합니다. 사용자의 숨겨진 기대 가치를 찾아내고, 이를 <span className="highlight">연구 모델로 구축</span>하여 실제 설계의 근거를 마련합니다.</>,
    image: "/about/2.png"
  }
]

const professorInfo = {
  name: "반상우",
  title: "교수, 공학박사",
  department: "경희대학교 산업경영공학과",
  contact: {
    tel: "031.201.3654",
    emails: ["panlot@gmail.com", "sbahn@khu.ac.kr"]
  },
  image: "/members/0.png",
  education: [
    "공학박사, 서울대학교 산업공학과 (2010.08)",
    "공학사, 한국과학기술원 산업공학과 (2005.02)"
  ],
  researchInterests: [
    "Human-Computer Interaction: Usability, UI Design & Evaluation, Haptic Interface",
    "Affective Engineering: Affective Response Analysis, Affective Experience & Products Attributes",
    "User Modeling: Cognitive, Behavioral, and Physiological Modeling of Users"
  ],
  career: [
    { period: "2025.07 ~ ", role: "부학장, 경희대학교 공과대학" },
    { period: "2023.03 ~ ", role: "교수, 경희대학교 산업경영공학과" },
    { period: "2018.03 ~ 2023.02", role: "부교수, 경희대학교 산업경영공학과" },
    { period: "2017.03 ~ 2018.02", role: "조교수, 경희대학교 산업경영공학과" },
    { period: "2013.09 ~ 2017.02", role: "조교수, 명지대학교 산업경영공학과" },
    { period: "2011.10 ~ 2013.07", role: "방문연구원, 노스캐롤라이나 주립대학교 HCI Lab" },
    { period: "2010.09 ~ 2011.08", role: "박사후연구원, 서울대학교 공학연구원" }
  ],
  academicActivities: [
    "대한인간공학회 학술 이사 (2016 ~ )",
    "가전접근성 국가표준 표준심의위원 (2015 ~ )",
    "Scientific Advisory Board Member, International Conference on Affective and Pleasurable Design (2015 ~ )",
    "Organizing Committee Member & Session Chair, The 1st Asian Conference on Ergonomics and Design 2014",
    "Guest Editor, Special Issue of International Journal of Human Computer Interaction (SSCI) (2013 ~ )",
    "Session Chair, The 4th International Conference on Applied Human Factors and Ergonomics (2012)",
    "Session Chair, Ergonomics Society of Korea Spring Conference (2011)",
    "Ad-hoc Reviewer for major international/domestic journals (Applied Ergonomics, Ergonomics, etc.)"
  ],
  awards: [
    "Post-doctoral Research Funding, National Research Foundation of Korea (2011~2012)",
    "1st place in the Wearable Computer Competition (2008)",
    "Award of Excellence, Master's Thesis Competition, KIIE (2007)",
    "Brain Korea 21 Scholarships (2006~2009)",
    "Research and Teaching Assistantships, SNU (2006 ~ 2008)"
  ],
  memberships: [
    "A member of the Korean Institute of Industrial Engineering (2005 ~ Present)",
    "A member of the Ergonomics Society of Korea (2005 ~ Present)"
  ]
}

const students = [
  { name: "Yoon Yeree", interests: "Ergonomics, Safety Engineering", email: "yoonr72@khu.ac.kr", degree: "MS Student" },
  { name: "Ha Jiwoong", interests: "Ergonomics, Safety Engineering", email: "woong0513@naver.com", degree: "MS Student" }
]

const galleryItems = [
  { id: 1, title: "Lab Team Lunch", date: "2023.10", type: "photo", url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" },
  { id: 2, title: "HCI Conference", date: "2023.08", type: "photo", url: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=2070" },
  { id: 3, title: "Workshop Session", date: "2023.05", type: "photo", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2070" },
  { id: 4, title: "Research Presentation", date: "2023.03", type: "photo", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070" },
  { id: 5, title: "Graduation Celebration", date: "2023.02", type: "photo", url: "https://images.unsplash.com/photo-1523050853064-dbc029705f52?auto=format&fit=crop&q=80&w=2070" },
  { id: 6, title: "International Symposium", date: "2022.12", type: "photo", url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2070" },
]

export default function Home() {
  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null)
  const selectedAlbumItem = galleryItems.find(item => item.id === selectedAlbumId)

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />

      {/* About Section */}
      <div id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-dots opacity-[0.25] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-khu-red/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
          <h2 className="text-xl md:text-2xl font-black uppercase text-khu-red tracking-[0.2em]">About HCDL</h2>
        </div>
        <div className="space-y-40">
          {aboutSections.map((section, idx) => (
            <div key={idx} className="px-6 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
                >
                  <div className="lg:w-1/2">
                    <div className="w-12 h-0.5 bg-khu-red mb-10" />
                    <div className="space-y-4 mb-8">
                      {section.areas.map((area, i) => (
                        <h2 key={i} className="text-2xl md:text-3xl font-black leading-tight text-slate-900">
                          {area}
                        </h2>
                      ))}
                      {section.subAreas && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {section.subAreas.map((sub, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg tracking-tight uppercase">
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-lg md:text-xl leading-relaxed font-medium text-slate-500">
                      {section.description}
                    </p>
                  </div>

                  <div className="lg:w-1/2 w-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Members Section */}
      <section id="members" className="py-32 bg-slate-950 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-khu-red/15 via-transparent to-transparent blur-[160px]" />

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-xl md:text-2xl font-black uppercase text-white tracking-[0.2em]">Members</h2>
          </div>

          {/* Professor */}
          <div className="bg-white/5 border border-white/10 flex flex-col lg:flex-row h-auto backdrop-blur-sm">
            <div className="lg:w-[22%] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
              <div className="aspect-[4/5] bg-white/5 shrink-0 overflow-hidden">
                <img src={professorInfo.image} alt={professorInfo.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h1 className="text-2xl font-black text-white">{professorInfo.name}</h1>
                  <p className="text-[10px] font-black text-khu-red uppercase tracking-widest">{professorInfo.title}</p>
                  <p className="text-[9px] font-bold text-white/40 mt-1 uppercase">{professorInfo.department}</p>
                </div>
                <div className="pt-6 border-t border-white/10 space-y-4 text-[10px] font-bold text-white/70">
                  <div className="flex items-center gap-3"><Phone size={14} className="text-white/20" /> {professorInfo.contact.tel}</div>
                  {professorInfo.contact.emails.map((email, i) => (
                    <div key={i} className="flex items-center gap-3"><Mail size={14} className="text-white/20" /> {email}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[38%] border-r border-white/10 divide-y divide-white/10">
              <div className="p-8 space-y-4">
                <h2 className="text-xs font-black text-white/50 uppercase tracking-widest">EDUCATION</h2>
                <div className="space-y-2">
                  {professorInfo.education.map((edu, i) => <p key={i} className="text-[12px] font-bold text-white/90 leading-relaxed">{edu}</p>)}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h2 className="text-xs font-black text-white/50 uppercase tracking-widest">RESEARCH INTERESTS</h2>
                <div className="space-y-6">
                  {professorInfo.researchInterests.map((interest, i) => {
                    const [category, details] = interest.split(': ')
                    return (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center gap-2"><div className="w-1 h-3 bg-khu-red rounded-full" /><span className="text-[10px] font-black text-white/90 uppercase tracking-widest">{category}</span></div>
                        <p className="text-[12px] font-bold text-white/40 leading-relaxed pl-3 border-l border-white/10">{details}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h2 className="text-xs font-black text-white/50 uppercase tracking-widest">EXPERIENCE</h2>
                <div className="space-y-3">
                  {professorInfo.career.map((job, i) => (
                    <div key={i} className="flex gap-4 text-[12px] font-bold text-white/90">
                      <span className="w-28 shrink-0 opacity-40 text-[11px] font-medium">{job.period}</span>
                      <span>{job.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] divide-y divide-white/10">
              <div className="p-8 space-y-4">
                <h2 className="text-xs font-black text-white/50 uppercase tracking-widest">ACADEMIC ACTIVITIES</h2>
                <div className="space-y-3">{professorInfo.academicActivities.map((act, i) => <div key={i} className="flex gap-3 text-[12px] font-bold text-white/80 items-start"><span className="text-khu-red">•</span><span>{act}</span></div>)}</div>
              </div>
              <div className="p-8 space-y-4">
                <h2 className="text-xs font-black text-white/50 uppercase tracking-widest">AWARDS & SCHOLARSHIPS</h2>
                <div className="space-y-3">{professorInfo.awards.map((award, i) => <div key={i} className="flex gap-3 text-[12px] font-bold text-white/80 items-start"><span className="text-khu-red">•</span><span>{award}</span></div>)}</div>
              </div>
              <div className="p-8 space-y-4">
                <h2 className="text-xs font-black text-white/50 uppercase tracking-widest">MEMBERSHIPS</h2>
                <div className="space-y-3">{professorInfo.memberships.map((mem, i) => <div key={i} className="flex gap-3 text-[12px] font-bold text-white/80 items-start"><span className="text-khu-red">•</span><span>{mem}</span></div>)}</div>
              </div>
            </div>
          </div>

          {/* Students */}
          <div className="h-24" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {students.map((student) => (
              <div key={student.name} className="bg-white/5 p-8 space-y-6 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                <div>
                  <h3 className="text-xl font-black text-white">{student.name}</h3>
                  <p className="text-[10px] font-black text-khu-red uppercase tracking-widest mt-1">{student.degree}</p>
                </div>
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="space-y-1"><p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Interest</p><p className="text-[11px] font-bold text-white/70">{student.interests}</p></div>
                  <div className="space-y-1"><p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Email</p><p className="text-[11px] font-bold text-white/50">{student.email}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-40 px-6 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-black text-khu-red uppercase tracking-[0.4em]">RESEARCH PROJECTS</h2>
            <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">주요 프로젝트</p>
          </div>
          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-8 pl-10 md:pl-16 space-y-16 py-8">
            {projects.slice(0, 3).map((project: any) => (
              <div key={project.id} className="relative group">
                <div className="absolute -left-[51px] md:-left-[73px] top-8 w-5 h-5 bg-white border-4 border-khu-red rounded-full z-10 transition-transform group-hover:scale-125" />
                <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-14 shadow-sm hover:shadow-2xl hover:border-khu-red/10 transition-all duration-500 flex flex-col md:flex-row gap-10">
                  <div className="w-40 h-40 shrink-0 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                    {project.logo ? (
                      <img src={project.logo} alt={project.agency} className="w-full h-full object-contain transition-all" />
                    ) : (
                      <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center border border-slate-100">
                        <Globe size={40} className="text-slate-200" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-8">
                    <span className="px-4 py-1.5 bg-khu-red/5 text-khu-red text-[11px] font-black tracking-widest uppercase rounded-full border border-khu-red/10">{project.period}</span>
                    <h3 className="text-2xl mt-4 md:text-3xl font-black text-slate-900 group-hover:text-khu-red transition-colors leading-tight">{project.title}</h3>
                    <div className="text-[11px] font-black uppercase text-slate-400">{project.agency}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/research" className="inline-flex items-center gap-3 px-12 py-6 bg-slate-900 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-khu-red transition-all shadow-2xl">
              전체 과제 보기 <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-40 bg-slate-50 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-black text-khu-red uppercase tracking-[0.4em]">PUBLICATIONS</h2>
            <p className="text-3xl md:text-6xl font-black text-slate-900">연구 실적</p>
          </div>
          <div className="space-y-32">
            {[
              { id: 'intl', title: "International Journals", data: intlJournals },
              { id: 'dom', title: "Domestic Journals", data: domJournals },
              { id: 'conf', title: "Conference Proceedings", data: [...intlConfs, ...domConfs].sort((a, b) => b.year - a.year) },
              { id: 'books', title: "Books", data: books },
            ].map((cat) => (
              <div key={cat.id} className="space-y-12">
                <div className="border-b-2 border-slate-900/5 pb-6">
                  <h3 className="text-xs font-black text-khu-red uppercase tracking-widest mb-2">{cat.title}</h3>
                  <p className="text-2xl font-black text-slate-900 uppercase">{cat.title.split(' ')[0]}</p>
                </div>
                <div className="grid gap-6">
                  {cat.data.slice(0, 5).map((paper: any, i) => (
                    <div key={i} className="flex flex-col md:flex-row bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl transition-all group">
                      <div className="md:w-16 shrink-0 text-[10px] font-black text-slate-200 group-hover:text-khu-red transition-colors">#{paper.id}</div>
                      <div className="flex-1 space-y-4">
                        <div className="flex gap-3"><span className="px-3 py-1 bg-khu-red/5 text-khu-red text-[10px] font-black rounded-lg border border-khu-red/10">{paper.journal}</span><span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">{paper.year}</span></div>
                        <h4 className="text-xl font-black text-slate-900 group-hover:text-khu-red transition-colors leading-tight">{paper.title}</h4>
                        <p className="text-[12px] font-bold text-slate-500">
                          {paper.authors.split(', ').map((auth: string, j: number, arr: string[]) => (
                            <React.Fragment key={j}>
                              <span className={auth.includes('Bahn, S.') ? 'text-khu-red font-black underline underline-offset-4 decoration-2' : ''}>{auth}</span>
                              {j < arr.length - 1 ? ', ' : ''}
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link href="/publications" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-khu-red transition-all">
                    {cat.title} 전체보기 <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Album Section */}
      <section id="album" className="py-40 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-black text-khu-red uppercase tracking-[0.4em]">LAB ALBUM</h2>
            <p className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">앨범</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <motion.div key={item.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} onClick={() => setSelectedAlbumId(item.id)} className="group relative cursor-pointer overflow-hidden rounded-[3rem] aspect-square shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center"><Expand size={32} className="text-white transform scale-50 group-hover:scale-100 transition-all" /></div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${item.url})` }} />
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-slate-900/80 to-transparent text-white transform translate-y-4 group-hover:translate-y-0 transition-all z-20">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-3">{item.date}</p>
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-slate-950 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-16 relative z-10">
          <div className="space-y-6">
            <h2 className="text-sm font-black text-khu-red uppercase tracking-[0.5em]">CONTACT US</h2>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">함께 미래를 <br /> 연구하고 싶다면</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl hover:bg-white/10 transition-colors group">
              <Mail className="mx-auto text-khu-red mb-6" size={32} /><h3 className="text-white/40 text-[10px] font-black uppercase tracking-widest">Email</h3><p className="text-white text-lg font-bold tracking-tight">sbahn@khu.ac.kr</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl hover:bg-white/10 transition-colors group">
              <Phone className="mx-auto text-khu-red mb-6" size={32} /><h3 className="text-white/40 text-[10px] font-black uppercase tracking-widest">Phone</h3><p className="text-white text-lg font-bold tracking-tight">031.201.3654</p>
            </div>
          </div>
          <div className="pt-10"><a href="mailto:sbahn@khu.ac.kr" className="inline-flex items-center justify-center px-12 py-6 bg-white text-slate-950 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-khu-red hover:text-white transition-all shadow-2xl">입학 및 연구 지원하기</a></div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedAlbumId && selectedAlbumItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-950/95 backdrop-blur-3xl z-[100] flex items-center justify-center p-8" onClick={() => setSelectedAlbumId(null)}>
            <button className="absolute top-10 right-10 p-4 rounded-full bg-white/10 text-white hover:bg-khu-red transition-all"><X size={28} /></button>
            <motion.div layoutId={`item-${selectedAlbumId}`} className="max-w-5xl w-full flex flex-col items-center gap-12" onClick={(e) => e.stopPropagation()}>
              <img src={selectedAlbumItem.url} className="w-full h-auto rounded-[4rem] shadow-2xl border border-white/10" alt={selectedAlbumItem.title} />
              <div className="text-center text-white space-y-4"><p className="text-xs font-black text-khu-red uppercase tracking-widest">{selectedAlbumItem.date}</p><h2 className="text-4xl md:text-5xl font-black">{selectedAlbumItem.title}</h2></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
