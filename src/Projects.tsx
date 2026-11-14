import { useRef, useState } from 'react'
import { ArrowRight, CalendarDays, CheckCircle2, Sparkles, Workflow } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featured, moreProjects, planoraSteps } from './content'
import { ProjectLinks, SectionTitle, Tags } from './ui'

gsap.registerPlugin(useGSAP, ScrollTrigger)
const stepIcons = [CalendarDays, Sparkles, CheckCircle2]

export function Projects() {
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

  return <section className="section-band bg-deep" id="du-an">
    <div className="page-width">
      <div className="section-intro">
        <SectionTitle label="Sản phẩm phần mềm">Dự án nổi bật</SectionTitle>
        <p data-reveal>Từ bài toán thực tế đến giao diện, API và dữ liệu hoạt động cùng nhau.</p>
      </div>
      <article className="planora" data-reveal>
        <header className="project-header">
          <div>
            <p className="eyebrow mb-3">Full-stack · AI · Thuật toán</p>
            <h3>PLANORA</h3>
            <p className="mt-4 max-w-xl text-mist">Hệ thống quản lý công việc và tối ưu lịch trình cá nhân. Trợ lý NORA hỗ trợ thay đổi lịch từ yêu cầu bằng tiếng Việt.</p>
          </div>
          <ProjectLinks repo="SPWPOS" />
        </header>
        <div className="planora-story" ref={scene}>
          <div className="planora-visual">
            <div className="planora-image">
              <span><Workflow size={15} /> PLANORA · Luồng xử lý</span>
              <img alt="Artwork trang đăng nhập PLANORA, gồm lịch, danh sách công việc và đồng hồ" src="/media/planora-art.webp" width="640" height="800" loading="lazy" />
            </div>
            <div className="story-flow" key={active} aria-hidden="true">
              {planoraSteps[active].nodes.map((node, index) => <span key={node}>{index > 0 && <ArrowRight size={14} />}{node}</span>)}
            </div>
          </div>
          <ol className="planora-steps">
            {planoraSteps.map(({ title, copy, nodes }, index) => {
              const Icon = stepIcons[index]
              return <li key={title} data-planora-step className={index === active ? 'planora-step is-current' : 'planora-step'}>
                <Icon size={23} aria-hidden="true" />
                <h4>{title}</h4>
                <p>{copy}</p>
                <div className="step-flow">{nodes.join(' → ')}</div>
              </li>
            })}
          </ol>
        </div>
        <div className="planora-footer">
          <p className="mb-4 text-sm text-mist">Đăng nhập bằng Google qua Firebase Authentication.</p>
          <Tags items={['C#', 'ASP.NET Core Web API', 'EF Core', 'SQL Server', 'React', 'Tailwind CSS', 'Firebase Authentication', 'AI API']} />
        </div>
      </article>
      {featured.map((project, index) => <article className={`project-row ${index % 2 ? 'project-row-reverse' : ''}`} key={project.title} data-reveal>
        <div className="project-image">
          <img src={`/media/${project.image}`} alt={project.alt} width="1182" height="780" loading="lazy" decoding="async" />
        </div>
        <div className="project-copy">
          <p className="eyebrow">{project.subtitle}</p>
          <h3>{project.title}</h3>
          <p>{project.copy}</p>
          <p className="text-sm">{project.detail}</p>
          <Tags items={project.stack} />
          <ProjectLinks repo={project.repo} demo={project.demo} />
        </div>
      </article>)}
      <div className="more-projects" data-reveal>
        <h3>Dự án khác</h3>
        {moreProjects.map((project) => <article className="compact-project" key={project.title}>
          <div><h4>{project.title}</h4><p className="mt-2 max-w-2xl text-mist">{project.copy}</p>
            <div className="mt-4"><Tags items={project.stack} /></div></div>
          <ProjectLinks repo={project.repo} />
        </article>)}
      </div>
    </div>
  </section>
}
