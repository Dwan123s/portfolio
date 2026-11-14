import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Code2, Copy, Github, GraduationCap, Layers3, Mail, MapPin, Sparkles, Workflow } from 'lucide-react'
import '@fontsource-variable/inter'
import '@fontsource-variable/playfair-display'
import './styles.css'
import { Certificates } from './Certificates'
import { Hero, Navigation } from './Hero'
import { Projects } from './Projects'
import { email, focusAreas, github, process, skills } from './content'
import { SectionTitle, Tags } from './ui'

function About() {
  const icons = [Layers3, Sparkles, Code2, Workflow]
  return <section className="section-band" id="gioi-thieu">
    <div className="page-width about-layout">
      <div>
        <SectionTitle label="Giới thiệu">Từ kiến thức đến<br className="hidden lg:block" /> sản phẩm thực tế.</SectionTitle>
        <p className="about-copy" data-reveal>Tôi học Kỹ thuật phần mềm tại Đại học FPT – Đà Nẵng và định hướng trở thành Full-stack Developer. Tôi xây dựng ứng dụng web từ giao diện đến API, cơ sở dữ liệu và tích hợp AI.</p>
        <p className="about-copy" data-reveal>Tôi quan tâm đến cách một ý tưởng trở thành sản phẩm có thể sử dụng, từ xác định nhu cầu đến triển khai và cải tiến.</p>
      </div>
      <div className="focus-list">
        {focusAreas.map(([name, copy], index) => {
          const Icon = icons[index]
          return <div data-reveal key={name} className="focus-row"><Icon size={23} aria-hidden="true" /><div><h3>{name}</h3><p>{copy}</p></div></div>
        })}
      </div>
    </div>
  </section>
}

function Skills() {
  return <section className="section-band" id="ky-nang">
    <div className="page-width skills-layout">
      <div>
        <SectionTitle>Công nghệ<br /> &amp; kỹ năng</SectionTitle>
        <p className="about-copy" data-reveal>Tôi tập trung vào C#/.NET và JavaScript/TypeScript. Có thể xem cách tôi kết nối hai hệ sinh thái trong PLANORA.</p>
        <a className="text-link mt-5" href="#du-an">Khám phá PLANORA <ArrowUpRight size={16} /></a>
      </div>
      <dl className="skill-list">
        {skills.map(([label, items]) => <div className="skill-row" data-reveal key={label}><dt>{label}</dt><dd><Tags items={items} /></dd></div>)}
      </dl>
    </div>
  </section>
}

function Education() {
  return <section className="section-band education-band" aria-labelledby="education-title">
    <div className="page-width education-layout" data-reveal>
      <GraduationCap className="education-icon" size={32} aria-hidden="true" />
      <div><p className="eyebrow">Học vấn</p><h2 id="education-title">Đại học FPT – Đà Nẵng</h2><p className="mt-2 text-mist">Kỹ thuật phần mềm · 2024 đến nay</p></div>
      <p className="text-mist">Các học phần chính gồm lập trình hướng đối tượng, cấu trúc dữ liệu và giải thuật, thiết kế cơ sở dữ liệu, phân tích hệ thống và kiểm thử phần mềm.</p>
    </div>
  </section>
}

function Process() {
  return <section className="section-band bg-deep" aria-label="Cách tôi làm sản phẩm">
    <div className="page-width">
      <SectionTitle>Cách tôi làm sản phẩm</SectionTitle>
      <ol className="process-list">
        {process.map(([title, copy]) => <li key={title} data-reveal><h3>{title}</h3><p>{copy}</p></li>)}
      </ol>
    </div>
  </section>
}

function Contact() {
  const [status, setStatus] = useState('')
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setStatus('Đã sao chép email.')
    } catch {
      setStatus('Bạn có thể chọn và sao chép địa chỉ email bên dưới.')
    }
  }

  return <section className="section-band contact" id="lien-he">
    <div className="contact-light" aria-hidden="true" />
    <div className="page-width relative" data-reveal>
      <p className="eyebrow mb-5">Liên hệ</p>
      <h2 className="section-title max-w-4xl" lang="en">Have an idea? Let’s build something meaningful.</h2>
      <p className="about-copy">Tôi mong được trao đổi về cơ hội thực tập, hợp tác và phát triển các dự án phần mềm thực tế.</p>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a className="button button-primary shine" href={`mailto:${email}`}><Mail size={18} /> Gửi email</a>
        <button type="button" className="button button-quiet" onClick={copyEmail}><Copy size={17} /> Sao chép email</button>
        <a className="button button-quiet" href={github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
      </div>
      <p className="mt-4 break-all text-sm text-mist">{email}</p>
      <p role="status" className="mt-2 min-h-5 text-sm text-cyan">{status}</p>
    </div>
  </section>
}

function App() {
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)')
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        if (!preference.matches) entry.target.classList.add('reveal-in')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.15 })
    for (const element of document.querySelectorAll('[data-reveal]')) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <>
    <a className="skip-link" href="#main">Chuyển đến nội dung</a>
    <Navigation />
    <div className="reading-progress" aria-hidden="true" />
    <main id="main" tabIndex={-1}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      <Process />
      <Contact />
    </main>
    <footer className="site-footer">
      <div className="page-width footer-layout">
        <div><a className="wordmark" href="#top"><span aria-hidden="true">/</span> Dwan.dev</a><p className="mt-2 text-sm text-mist">© 2026 Phan Lê Nhật Quân</p></div>
        <p className="flex items-center gap-2 text-sm text-mist"><MapPin size={15} /> Đà Nẵng, Việt Nam</p>
        <a className="text-link" href="#top">Về đầu trang <ArrowUpRight size={17} /></a>
      </div>
    </footer>
  </>
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
