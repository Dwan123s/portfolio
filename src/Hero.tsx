import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, CalendarDays, Github, MapPin, Pause, Play } from 'lucide-react'
import { github, nav } from './content'

const specialties = ['Full-stack Web Development', 'AI-Powered Applications', 'Software Engineering', 'Building Digital Experiences']

function Specialty() {
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [visible, setVisible] = useState(true)
  const line = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(preference.matches)
    preference.addEventListener('change', update)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    if (line.current) observer.observe(line.current)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (paused || reduced || !visible || step >= specialties.length - 1) return
    const timer = window.setTimeout(() => setStep((current) => current + 1), 2800)
    return () => window.clearTimeout(timer)
  }, [paused, reduced, step, visible])

  return <div ref={line} className="specialty">
    <span className="sr-only">Tập trung vào phát triển web full-stack và tích hợp AI</span>
    <span className="specialty-label" key={reduced ? 0 : step} aria-hidden="true">{specialties[reduced ? 0 : step]}</span>
    {!reduced && step < specialties.length - 1 && <button
      type="button"
      onClick={() => setPaused((current) => !current)}
      aria-label={paused ? 'Tiếp tục dòng chuyên môn' : 'Dừng dòng chuyên môn'}
      className="motion-toggle"
    >{paused ? <Play size={12} /> : <Pause size={12} />}</button>}
  </div>
}

export function Navigation() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  return <header className="site-header" onKeyDown={(event) => {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      toggle.current?.focus()
    }
  }}>
    <div className="page-width header-layout">
      <a className="wordmark" href="#top" onClick={() => setOpen(false)}><span aria-hidden="true">/</span> Dwan.dev</a>
      <span className="header-location"><MapPin size={14} aria-hidden="true" /> Đà Nẵng, Việt Nam</span>
      <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? 'Đóng' : 'Menu'}</button>
      <nav aria-label="Điều hướng chính" id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'}>
        {nav.map(([id, title]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{title}</a>)}
      </nav>
    </div>
  </header>
}

export function Hero() {
  const scene = useRef<HTMLDivElement>(null)
  return <section className="hero" id="top" aria-labelledby="hero-title" ref={scene}
    onPointerMove={(event) => {
      if (event.pointerType !== 'mouse' || !matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return
      const bounds = event.currentTarget.getBoundingClientRect()
      scene.current?.style.setProperty('--pointer-x', `${(event.clientX - bounds.left - bounds.width / 2) / bounds.width * 16}px`)
      scene.current?.style.setProperty('--pointer-y', `${(event.clientY - bounds.top - bounds.height / 2) / bounds.height * 16}px`)
    }}
    onPointerLeave={() => {
      scene.current?.style.removeProperty('--pointer-x')
      scene.current?.style.removeProperty('--pointer-y')
    }}>
    <div className="hero-background" />
    <div className="page-width hero-layout">
      <div className="hero-copy">
        <p className="eyebrow intro-line"><span /> Xin chào, tôi là</p>
        <h1 id="hero-title">Phan Lê<br />Nhật Quân<span>.</span></h1>
        <p className="hero-role" lang="en">Software Engineering Student</p>
        <p className="hero-description">Tôi xây dựng những sản phẩm phần mềm kết hợp giữa công nghệ, trải nghiệm người dùng và khả năng giải quyết vấn đề thực tế.</p>
        <Specialty />
        <div className="flex flex-wrap gap-3">
          <a className="button button-primary shine" href="#du-an">Khám phá dự án <ArrowRight size={19} aria-hidden="true" /></a>
          <a className="button button-quiet" href={github} target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" /> GitHub</a>
        </div>
      </div>
      <div className="hero-scene-motion" aria-hidden="true"><div className="hero-scene">
        <div className="scene-grid" />
        <div className="scene-light" />
        <div className="preview-card preview-cookora">
          <div className="preview-head"><span className="window-dot" /> Cookora</div>
          <img src="/media/cookora.webp" alt="" width="1182" height="780" />
        </div>
        <div className="preview-card preview-studio">
          <div className="preview-head"><span className="window-dot" /> VU PHAM STUDIO</div>
          <img src="/media/studio.webp" alt="" width="1182" height="780" />
        </div>
        <div className="preview-card preview-planora">
          <div className="preview-head"><CalendarDays size={14} /> PLANORA <span className="ml-auto text-xs text-mist">Lập lịch thông minh</span></div>
          <img src="/media/planora-art.webp" alt="" width="640" height="800" fetchPriority="high" />
        </div>
        <div className="preview-card preview-flow">
          <span>Lịch làm việc</span><ArrowRight size={12} /><span>NORA</span><ArrowRight size={12} /><span>Xem trước</span>
        </div>
      </div></div>
      <blockquote className="hero-quote" lang="en">Build practical software with curiosity, creativity and purpose.</blockquote>
      <a href="#gioi-thieu" className="hero-scroll"><ArrowDown size={15} aria-hidden="true" /> Cuộn để khám phá</a>
    </div>
  </section>
}
