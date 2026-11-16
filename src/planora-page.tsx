import { StrictMode, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Sparkles } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@fontsource-variable/inter'
import './styles.css'
import { planora, planoraSteps } from './content'
import { PlanoraGallery } from './PlanoraGallery'
import { architectureLayers, caseStudySections, planoraFeatures } from './planora-case-study'
import { ProjectLinks } from './ui'
import { LanguageProvider, LanguageToggle, useLanguage } from './language'

gsap.registerPlugin(useGSAP, ScrollTrigger)
const stepIcons = [CalendarDays, Sparkles, CheckCircle2]

function PlanoraPage() {
  const { language, t } = useLanguage()
  const scene = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  useGSAP(() => {
    const responsive = gsap.matchMedia()
    responsive.add('(min-width: 1000px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('[data-planora-step]', scene.current).forEach((step, index) => {
        ScrollTrigger.create({ trigger: step, start: 'top 58%', onEnter: () => setActive(index), onLeaveBack: () => setActive(Math.max(0, index - 1)) })
      })
      return () => setActive(0)
    })
    return () => responsive.revert()
  }, { scope: scene })

  return <>
    <a className="skip-link" href="#main">{t("Chuyển đến nội dung", "Skip to content")}</a>
    <header className="site-header border-b border-line">
      <div className="page-width header-layout">
        <a className="wordmark" href="/"><span aria-hidden="true">/</span> Dwan.dev</a>
        <div className="planora-header-actions">
          <a className="text-link" href="/#du-an">
            <ArrowLeft size={16} aria-hidden="true" />
            <span className="planora-back-long">{t('Dự án nổi bật', 'Featured projects')}</span>
            <span className="planora-back-short">{t('Dự án', 'Projects')}</span>
          </a>
          <LanguageToggle />
        </div>
      </div>
    </header>
    <main className="page-width planora-page" id="main" tabIndex={-1}>
      <header className="project-header planora-case-hero">
        <div>
          <p className="eyebrow mb-3">{t("Full-stack · AI · Thuật toán lập lịch", "Full-stack · AI · Scheduling algorithms")}</p>
          <h1 className="section-title">PLANORA</h1>
          <p className="mt-3 text-xl font-medium sm:text-2xl">{t("Lập kế hoạch theo thời gian bạn thực sự có", "Plan with the time you actually have")}</p>
          <p className="mt-3 max-w-2xl text-mist">{t(planora.description, planora.descriptionEn)}</p>
        </div>
        <ProjectLinks repo="SPWPOS" />
      </header>
      <nav className="planora-case-nav" aria-label={t("Mục lục PLANORA", "PLANORA contents")}>
        {caseStudySections.map(([id, label, labelEn]) => <a key={id} href={`#${id}`}>{t(label, labelEn)}</a>)}
      </nav>
      <section className="planora-case-overview" id="tong-quan" aria-labelledby="planora-overview-title">
        <h2 id="planora-overview-title">{t("Từ danh sách việc đến lịch có thể thực hiện", "Turn a task list into a workable schedule")}</h2>
        <p>{t("Khi nhiều bài tập hoặc công việc cùng đến hạn, danh sách việc cho biết phải làm gì. PLANORA lấy thêm thời lượng, giờ rảnh và lịch bận để tìm thời điểm có thể bắt đầu, đồng thời chỉ ra những việc còn thiếu thời gian.", "When assignments and work all come due at once, a task list tells you what to do. PLANORA uses estimates, availability and existing commitments to find time to start and flag tasks that need more time.")}</p>
        <ol className="planora-case-journey">
          <li><strong>{t("Nhập việc", "Capture tasks")}</strong><span>{t("Từ ghi chú hoặc thêm thủ công.", "From notes or by entering them manually.")}</span></li>
          <li><strong>{t("Thiết lập giờ rảnh", "Set availability")}</strong><span>{t("Đưa buổi học và cuộc họp vào lịch bận.", "Block out classes and meetings.")}</span></li>
          <li><strong>{t("Xem và lưu lịch", "Review and save the schedule")}</strong><span>{t("Kiểm tra phiên đề xuất và cảnh báo.", "Check the suggested sessions and warnings.")}</span></li>
          <li><strong>{t("Ghi nhận thực tế", "Log actual work")}</strong><span>{t("Theo dõi thời gian và tiến độ sau mỗi phiên.", "Track time and progress after each session.")}</span></li>
        </ol>
      </section>
      <div className="planora">
        <PlanoraGallery />
        <section className="planora-case-section" id="tinh-nang" aria-labelledby="planora-features-title">
          <h2 id="planora-features-title">{t("Tính năng chính", "Key features")}</h2>
          <ul className="planora-case-features">
            {planoraFeatures.map(({ icon: Icon, title, titleEn, description, descriptionEn }) => <li key={title}>
              <span className="planora-step-icon"><Icon size={19} aria-hidden="true" /></span>
              <h3>{t(title, titleEn)}</h3>
              <p>{t(description, descriptionEn)}</p>
            </li>)}
          </ul>
        </section>
        <section className="planora-case-section" id="lap-lich" aria-labelledby="planora-story-title">
          <h2 id="planora-story-title">{t("Cách PLANORA lập lịch cùng NORA", "How PLANORA schedules work with NORA")}</h2>
          <p className="planora-case-intro">{t("NORA hiểu yêu cầu và đề xuất phương án. Bộ lập lịch C# xác định phương án nào phù hợp với thời gian và ràng buộc hiện có.", "NORA interprets requests and proposes changes. The C# scheduling engine determines which changes fit the available time and existing constraints.")}</p>
          <div className="planora-story" ref={scene}>
            <div className="planora-visual">
              <img className="planora-story-image" src="/media/planora/nora.webp" alt={t("Trợ lý NORA và lịch trình trong ngày", "The NORA assistant and the daily schedule")} width="1919" height="1079" loading="lazy" decoding="async" />
              <div className="story-flow" key={active} aria-hidden="true">
                {(language === 'en' ? planoraSteps[active].nodesEn : planoraSteps[active].nodes).map((node, index) => <span key={node}>{index > 0 && <ArrowRight size={14} />}{node}</span>)}
              </div>
            </div>
            <ol className="planora-steps">
              {planoraSteps.map(({ title, titleEn, copy, copyEn, nodes, nodesEn }, index) => {
                const Icon = stepIcons[index]
                return <li key={title} data-planora-step className={index === active ? 'planora-step is-current' : 'planora-step'}>
                  <div className="planora-step-heading">
                    <span className="planora-step-icon"><Icon size={20} aria-hidden="true" /></span>
                    <h3>{t(title, titleEn)}</h3>
                  </div>
                  <p>{t(copy, copyEn)}</p>
                  <div className="step-flow">{(language === 'en' ? nodesEn : nodes).join(' → ')}</div>
                </li>
              })}
            </ol>
          </div>
          <aside className="planora-case-example" aria-labelledby="planora-example-title">
            <div>
              <h3 id="planora-example-title">{t("Ví dụ khi hai việc cạnh tranh cùng giờ rảnh", "When two tasks compete for the same time slot")}</h3>
              <p>{t("Việc A cần 30 phút, còn việc B cần 60 phút liền mạch. Nếu xếp A trước vào khung 09:00, B sẽ thiếu một khoảng đủ dài. Bộ lập lịch có thể thử lại thứ tự và dùng khung ngắn cho A khi cả hai vẫn kịp hạn.", "Task A needs 30 minutes and Task B needs an uninterrupted hour. Scheduling A at 09:00 leaves B without a long enough slot. The scheduler can try a different order and put A in the shorter slot if both tasks can still meet their deadlines.")}</p>
            </div>
            <dl>
              <div><dt>09:00–10:00</dt><dd>{t("Việc B · 60 phút liên tục", "Task B · 60 uninterrupted minutes")}</dd></div>
              <div><dt>11:00–11:30</dt><dd>{t("Việc A · 30 phút", "Task A · 30 minutes")}</dd></div>
            </dl>
          </aside>
        </section>
        <section className="planora-case-section" id="kien-truc" aria-labelledby="planora-stack-title">
          <h2 id="planora-stack-title">{t("Kiến trúc & công nghệ", "Architecture & technologies")}</h2>
          <ol className="planora-case-architecture">
            {architectureLayers.map(({ name, nameEn, technology, description, descriptionEn }) => <li key={name}>
              <h3>{t(name, nameEn)}</h3>
              <p className="planora-case-technology">{technology}</p>
              <p>{t(description, descriptionEn)}</p>
            </li>)}
          </ol>
          <p className="planora-case-intro">{t("Dự án dùng xUnit để kiểm thử bộ lập lịch, kiểm thử tích hợp API với SQL Server, và Vitest cùng React Testing Library cho giao diện.", "The project uses xUnit for the scheduler, API integration tests with SQL Server, and Vitest with React Testing Library for the interface.")}</p>
        </section>
      </div>
      <a className="button button-quiet mt-8" href="/#du-an"><ArrowLeft size={16} aria-hidden="true" /> {t('Quay lại dự án', 'Back to projects')}</a>
    </main>
    <footer className="site-footer">
      <div className="page-width footer-layout">
        <p className="text-sm text-mist">© 2026 Phan Lê Nhật Quân</p>
        <a className="text-link" href="/">{t('Về portfolio', 'Back to portfolio')} <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
    </footer>
  </>
}

createRoot(document.getElementById('root')!).render(<StrictMode><LanguageProvider><PlanoraPage /></LanguageProvider></StrictMode>)
