import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, ArrowUpRight, Code2, Copy, Cpu, Database, Github, GraduationCap, Layers3, Mail, MapPin, Monitor, PanelsTopLeft, Puzzle, Server, Sparkles, Wrench } from 'lucide-react'
import '@fontsource-variable/inter'
import './styles.css'
import { Certificates } from './Certificates'
import { Hero, Navigation } from './Hero'
import { Projects } from './Projects'
import { email, focusAreas, github, planora, process, skills } from './content'
import { SectionTitle, Tags } from './ui'
import { LanguageProvider, useLanguage } from './language'

const skillIcons = {
  'Ngôn ngữ': Code2,
  Frontend: PanelsTopLeft,
  Backend: Server,
  'Dữ liệu': Database,
  'AI & tích hợp': Sparkles,
  'Công cụ': Wrench,
  'Nền tảng kỹ thuật': Layers3,
}

function About() {
  const { t } = useLanguage()
  const icons = [Layers3, Cpu, Monitor, Puzzle]
  return <section className="section-band about-band" id="gioi-thieu" aria-labelledby="about-title">
    <div className="page-width about-layout">
      <figure className="about-portrait" data-reveal>
        <div className="about-portrait-frames" aria-hidden="true" />
        <img src="/media/hero-portrait-extended.webp" alt={t("Chân dung Phan Lê Nhật Quân", "Portrait of Phan Lê Nhật Quân")} width="1280" height="994" loading="lazy" decoding="async" />
        <figcaption className="about-portrait-caption">
          <Code2 size={28} aria-hidden="true" />
          <div><strong>{t("Lập trình viên full-stack", "Full-stack Developer")}</strong><span>.NET · React · AI</span></div>
        </figcaption>
      </figure>
      <div className="about-intro">
        <div data-reveal>
          <p className="eyebrow about-eyebrow">{t("Giới thiệu", "About me")}</p>
          <h2 id="about-title" className="section-title about-title"><span>{t("Về tôi", "About Me")}</span></h2>
        </div>
        <p className="about-bio" data-reveal>{t("Tôi là Phan Lê Nhật Quân, sinh viên ngành Kỹ thuật phần mềm tại Đại học FPT – Đà Nẵng. Tôi phát triển các dự án full-stack, từ thiết kế giao diện và xây dựng API đến quản lý dữ liệu và tích hợp AI.", "I’m Phan Lê Nhật Quân, a Software Engineering student at FPT University in Da Nang. I build full-stack projects, from designing interfaces and building APIs to managing data and integrating AI.")}</p>
        <p className="about-note" data-reveal>{t("Tôi muốn xây dựng phần mềm giải quyết vấn đề thực tế, với trải nghiệm dễ dùng, hiệu năng tốt và khả năng mở rộng khi sản phẩm phát triển.", "I want to build software that solves real problems, is easy to use, performs well and can scale as the product grows.")}</p>
        <ul className="about-focus" aria-label={t("Lĩnh vực tôi tập trung", "Areas of focus")} data-reveal>
          {focusAreas.map(([name, copy, nameVi, copyEn], index) => {
            const Icon = icons[index]
            return <li key={name}><Icon aria-hidden="true" /><span>{t(nameVi, name)}</span><span className="sr-only">{t(copy, copyEn)}</span></li>
          })}
        </ul>
        <div className="about-actions" data-reveal>
          <a className="button button-primary shine" href="#du-an">{t("Xem dự án", "View projects")} <ArrowRight size={19} aria-hidden="true" /></a>
          <a className="button button-quiet shine" href={github} target="_blank" rel="noreferrer"><Github size={19} aria-hidden="true" /> GitHub</a>
        </div>
      </div>
    </div>
  </section>
}

function Skills() {
  const { t } = useLanguage()
  return <section className="section-band skills-band" id="ky-nang">
    <div className="page-width skills-layout">
      <div className="skills-intro">
        <SectionTitle>{t("Công nghệ", "Technology")}<br /> <span className="skills-title-accent">{t("& kỹ năng", "& skills")}</span></SectionTitle>
        <p className="about-copy" data-reveal>{t("Tôi tập trung vào C#/.NET và JavaScript/TypeScript. Có thể xem cách tôi kết nối hai hệ sinh thái trong PLANORA.", "I focus on C#/.NET and JavaScript/TypeScript. PLANORA shows how I bring the two ecosystems together.")}</p>
        <a className="button button-quiet shine skills-link" href={planora.path}>{t("Khám phá PLANORA", "Explore PLANORA")} <ArrowUpRight size={16} aria-hidden="true" /></a>
        <div className="skills-art" aria-hidden="true">
          <span /><span /><span />
        </div>
      </div>
      <dl className="skill-list">
        {skills.map(([label, items, labelEn, itemsEn]) => {
          const Icon = skillIcons[label]
          return <div className="skill-row" data-reveal key={label}>
            <dt><span className="skill-icon"><Icon size={19} aria-hidden="true" /></span>{t(label, labelEn)}</dt>
            <dd><Tags items={items.map((item, index) => t(item, itemsEn[index] ?? item))} /></dd>
          </div>
        })}
      </dl>
    </div>
  </section>
}

function Education() {
  const { t } = useLanguage()
  return <section className="section-band education-band" aria-labelledby="education-title">
    <div className="page-width education-layout" data-reveal>
      <GraduationCap className="education-icon" size={32} aria-hidden="true" />
      <div><p className="eyebrow">{t("Học vấn", "Education")}</p><h2 id="education-title">{t("Đại học FPT – Đà Nẵng", "FPT University – Da Nang")}</h2><p className="mt-2 text-mist">{t("Kỹ thuật phần mềm · 2024 đến nay", "Software Engineering · 2024–present")}</p></div>
      <p className="text-mist">{t("Các học phần chính gồm lập trình hướng đối tượng, cấu trúc dữ liệu và giải thuật, thiết kế cơ sở dữ liệu, phân tích hệ thống và kiểm thử phần mềm.", "Core coursework includes object-oriented programming, data structures and algorithms, database design, systems analysis and software testing.")}</p>
    </div>
  </section>
}

function Process() {
  const { t } = useLanguage()
  return <section className="section-band bg-deep" aria-label={t("Cách tôi làm sản phẩm", "How I build products")}>
    <div className="page-width">
      <SectionTitle>{t("Cách tôi làm sản phẩm", "How I build products")}</SectionTitle>
      <ol className="process-list">
        {process.map(([title, copy, titleEn, copyEn]) => <li key={title} data-reveal><h3>{t(title, titleEn)}</h3><p>{t(copy, copyEn)}</p></li>)}
      </ol>
    </div>
  </section>
}

function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
  }

  return <section className="section-band contact" id="lien-he">
    <div className="contact-light" aria-hidden="true" />
    <div className="page-width relative" data-reveal>
      <p className="eyebrow mb-5">{t("Liên hệ", "Contact")}</p>
      <h2 className="section-title max-w-4xl">{t("Bạn có ý tưởng? Hãy cùng xây dựng điều gì đó hữu ích.", "Have an idea? Let’s build something meaningful.")}</h2>
      <p className="about-copy">{t("Tôi mong được trao đổi về cơ hội thực tập, hợp tác và phát triển các dự án phần mềm thực tế.", "I’m open to internships and collaborations on software projects that solve practical problems.")}</p>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a className="button button-primary shine" href={`mailto:${email}`}><Mail size={18} /> {t("Gửi email", "Send email")}</a>
        <button type="button" className="button button-quiet" onClick={copyEmail}><Copy size={17} /> {t("Sao chép email", "Copy email")}</button>
        <a className="button button-quiet" href={github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
      </div>
      <p className="mt-4 break-all text-sm text-mist">{email}</p>
      <p role="status" className="mt-2 min-h-5 text-sm text-cyan">{status === 'copied' ? t("Đã sao chép email.", "Email copied.") : status === 'failed' && t("Bạn có thể chọn và sao chép địa chỉ email bên dưới.", "You can select and copy the email address below.")}</p>
    </div>
  </section>
}

function App() {
  const { t } = useLanguage()
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
    <a className="skip-link" href="#main">{t("Chuyển đến nội dung", "Skip to content")}</a>
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
        <p className="flex items-center gap-2 text-sm text-mist"><MapPin size={15} /> {t("Đà Nẵng, Việt Nam", "Da Nang, Vietnam")}</p>
        <a className="text-link" href="#top">{t("Về đầu trang", "Back to top")} <ArrowUpRight size={17} /></a>
      </div>
    </footer>
  </>
}

createRoot(document.getElementById('root')!).render(<StrictMode><LanguageProvider><App /></LanguageProvider></StrictMode>)
