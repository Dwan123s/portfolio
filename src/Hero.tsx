import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { ArrowRight, Github, MapPin, Mouse, Pause, Play } from 'lucide-react'
import { github, nav } from './content'
import { LanguageToggle, useLanguage } from './language'

export function Navigation() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(() => window.location.hash)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash)
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  return <header className="site-header portfolio-header" onKeyDown={(event) => {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      toggle.current?.focus()
    }
  }}>
    <div className="page-width header-layout">
      <a className="wordmark" href="#top" onClick={() => setOpen(false)}><span aria-hidden="true">/</span> Dwan.dev</a>
      <div className="header-meta">
        <span><i aria-hidden="true" /> {t("Sinh viên Kỹ thuật phần mềm", "Software Engineering Student")}</span>
        <span><MapPin size={15} aria-hidden="true" /> {t("Đà Nẵng, Việt Nam", "Based in Da Nang, Vietnam")}</span>
      </div>
      <div className="header-actions">
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? t('Đóng', 'Close') : 'Menu'}</button>
        <nav aria-label={t('Điều hướng chính', 'Main navigation')} id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'}>
          {nav.map(([id, vi, en]) => <a key={id} href={`#${id}`} aria-current={currentHash === `#${id}` ? 'location' : undefined} onClick={() => setOpen(false)}>{t(vi, en)}</a>)}
        </nav>
        <LanguageToggle />
      </div>
    </div>
  </header>
}

export function Hero() {
  const { t } = useLanguage()
  const [galleryPaused, setGalleryPaused] = useState(false)
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <div className="hero-background" aria-hidden="true" />
    <div className="hero-gallery" aria-hidden="true" data-paused={galleryPaused}>
      <div className="hero-reel">
        {[0, 1].map((copy) => <div className="hero-track" key={copy} style={{ '--track-index': copy } as CSSProperties}>
          <div className="hero-tile hero-tile-planora">
            <span className="tile-brand">PLANORA</span>
            <div className="tile-dashboard">
              <div className="tile-sidebar"><span>{t("Tổng quan", "Overview")}</span><span>{t("Lịch trình", "Schedule")}</span><span>{t("Công việc", "Tasks")}</span></div>
              <div className="tile-schedule"><span>{t("Lịch hôm nay", "Today’s schedule")}</span><div>{t("Lập kế hoạch", "Make a plan")}</div><div>{t("Ưu tiên công việc", "Prioritize tasks")}</div><div>{t("Xem tiến độ", "View progress")}</div></div>
            </div>
          </div>
          <div className="hero-tile hero-tile-cookora"><img src="/media/cookora.webp" alt="" width="1182" height="780" /></div>
          <div className="hero-tile hero-tile-studio"><img src="/media/studio.webp" alt="" width="1182" height="780" /></div>
          <div className="hero-tile hero-tile-art"><img src="/media/planora-art.webp" alt="" width="640" height="800" /></div>
          <div className="hero-tile hero-tile-flow">
            <span>NORA</span>
            <span>{t("Lên lịch", "Schedule")} <ArrowRight size={11} /></span>
            <span>{t("Kiểm tra", "Validate")} <ArrowRight size={11} /></span>
            <span>{t("Xem trước", "Preview")}</span>
          </div>
          <div className="hero-tile hero-tile-code">
            <code><b>var</b> proposal = nora<br />&nbsp;&nbsp;.Suggest(request);<br /><b>if</b> (schedule.CanApply(proposal))<br />&nbsp;&nbsp;Preview(proposal);</code>
          </div>
          <div className="hero-tile hero-tile-diagram"><img src="/media/planora-diagram.webp" alt="" width="440" height="360" /></div>
          <div className="hero-tile hero-tile-dotnet"><span className="tile-dotnet-mark">N</span><span>.NET</span></div>
        </div>)}
      </div>
    </div>
    <picture className="hero-portrait">
      <img src="/media/hero-portrait-extended.webp" alt={t("Chân dung Phan Lê Nhật Quân", "Portrait of Phan Lê Nhật Quân")} width="1280" height="994" fetchPriority="high" />
    </picture>
    <div className="page-width hero-layout">
      <div className="hero-copy">
        <p className="intro-line">{t("Xin chào, tôi là", "Hi, I’m")} <span aria-hidden="true" /></p>
        <h1 id="hero-title">Phan Lê Nhật Quân</h1>
        <p className="hero-role">{t("Sinh viên Kỹ thuật phần mềm", "Software Engineering Student")}</p>
        <p className="hero-description">{t("Tôi xây dựng những sản phẩm phần mềm kết hợp giữa công nghệ, trải nghiệm người dùng và khả năng giải quyết vấn đề thực tế.", "I build software that brings together technology, user experience and practical problem-solving.")}</p>
        <div className="hero-actions flex flex-wrap gap-3">
          <a className="button button-primary shine" href="#du-an">{t("Xem dự án", "View projects")} <ArrowRight size={19} aria-hidden="true" /></a>
          <a className="button button-quiet" href={github} target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" /> GitHub</a>
        </div>
      </div>
      <blockquote className="hero-quote">
        <span aria-hidden="true">“</span>
        <p>{t("Xây dựng phần mềm hữu ích bằng sự tò mò, sáng tạo và mục đích rõ ràng.", "Build practical software with curiosity, creativity and purpose.")}</p>
        <i aria-hidden="true">Dwan</i>
      </blockquote>
      <a href="#gioi-thieu" className="hero-scroll"><Mouse size={33} strokeWidth={1.3} aria-hidden="true" /> {t("Cuộn để khám phá", "Scroll to explore")}</a>
      <button type="button" className="hero-gallery-toggle motion-toggle"
        aria-label={galleryPaused ? t("Tiếp tục chuyển động dải dự án", "Resume project animation") : t("Tạm dừng chuyển động dải dự án", "Pause project animation")}
        onClick={() => setGalleryPaused((paused) => !paused)}>
        {galleryPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      </button>
    </div>
  </section>
}
