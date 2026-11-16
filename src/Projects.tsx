import { useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import { ArrowRight, ArrowUpRight, Camera, ChevronLeft, ChevronRight, CloudSun, Layers3, Sparkles, Trophy, Workflow } from 'lucide-react'
import { featured, moreProjects, planora } from './content'
import { ProjectLinks, Tags } from './ui'
import { useLanguage } from './language'

const moreProjectIcons = { 'weather-station': CloudSun, HoccungAI: Sparkles }
const filters = ['Tất cả', 'Web App', 'AI / Data', 'System'] as const
type ProjectFilter = typeof filters[number]

const previews = [
  {
    id: 'planora', title: 'PLANORA', brand: 'PLANORA', icon: Layers3,
    copy: 'Hệ thống quản lý công việc và lập lịch cá nhân với trợ lý NORA AI.',
    copyEn: 'A personal task manager and scheduler with the NORA AI assistant.',
    image: planora.cover, alt: planora.coverAlt, altEn: planora.coverAltEn,
    stack: ['ASP.NET Core', 'React', 'SQL Server', 'Gemini'],
    categories: ['Web App', 'AI / Data', 'System'], href: planora.path,
  },
  ...featured.map((project) => ({
    ...project,
    id: project.repo.toLowerCase(),
    title: project.repo === 'Cookora' ? 'Cookora – Bếp Nhà' : project.title,
    brand: project.repo === 'Cookora' ? 'Cookora' : project.title,
    icon: project.repo === 'Cookora' ? Trophy : Camera,
    copy: project.repo === 'Cookora' ? 'Tìm công thức theo nguyên liệu và lên thực đơn với Vertex AI.' : project.copy,
    copyEn: project.repo === 'Cookora' ? 'Find recipes by ingredient and plan meals with Vertex AI.' : project.copyEn,
    image: `/media/${project.image}`,
    previewStack: project.repo === 'Cookora' ? ['React', 'NestJS', 'PostgreSQL', 'Vertex AI'] : project.stack,
    categories: project.repo === 'Cookora' ? ['Web App', 'AI / Data'] : ['Web App'],
    href: project.demo,
  })),
]

function tiltMockup(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== 'mouse' || !matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)').matches) return
  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width - .5
  const y = (event.clientY - bounds.top) / bounds.height - .5
  card.style.setProperty('--tilt-x', `${-y * 12}deg`)
  card.style.setProperty('--tilt-y', `${x * 17}deg`)
  card.style.setProperty('--light-x', `${(x + .5) * 100}%`)
  card.style.setProperty('--light-y', `${(y + .5) * 100}%`)
}

function resetMockup(event: PointerEvent<HTMLElement>) {
  for (const variable of ['--tilt-x', '--tilt-y', '--light-x', '--light-y']) event.currentTarget.style.removeProperty(variable)
}

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<ProjectFilter>('Tất cả')
  const [active, setActive] = useState(1)
  const visibleProjects = previews.filter((project) => filter === 'Tất cả' || project.categories.includes(filter))

  function changeFilter(value: ProjectFilter) {
    if (value === filter) return
    setFilter(value)
    setActive(0)
  }

  function move(direction: number) {
    setActive((index) => (index + direction + visibleProjects.length) % visibleProjects.length)
  }

  return <section className="section-band projects-band" id="du-an" aria-labelledby="projects-title">
    <div className="projects-background" aria-hidden="true"><i /><i /></div>
    <div className="page-width projects-showcase">
      <div className="project-showcase-intro" data-reveal>
        <div>
          <p className="eyebrow mb-2">{t("DỰ ÁN", "PROJECTS")}</p>
          <h2 id="projects-title" className="section-title"><span>{t("Dự án", "Featured")} <em>{t("nổi bật", "Projects")}</em></span></h2>
          <p className="project-showcase-description">{t("Những dự án tiêu biểu thể hiện khả năng phát triển sản phẩm thực tế, ứng dụng công nghệ và giải quyết vấn đề.", "Selected projects that show how I build practical products and use technology to solve problems.")}</p>
        </div>
        <div className="project-filters" role="group" aria-label={t("Lọc dự án nổi bật", "Filter featured projects")}>
          {filters.map((value) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => changeFilter(value)}>{value === "Tất cả" ? t(value, "All") : value}</button>)}
        </div>
      </div>
      <div className="project-showcase-rail">
        {visibleProjects.map((project, index) => <article key={project.id} data-project={project.id} className="project-showcase-card" data-active={active === index}
          onPointerMove={tiltMockup} onPointerLeave={resetMockup} onPointerCancel={resetMockup}>
          <a className="project-mockup" href={project.href} aria-label={t(`Mở ${project.title}`, `Open ${project.title}`)}
            target={project.id === 'planora' ? undefined : '_blank'} rel={project.id === 'planora' ? undefined : 'noreferrer'}
            style={{ '--screen-image': `url('${project.image}')` } as CSSProperties}>
            <span className="project-brand" aria-hidden="true"><project.icon size={21} /> {project.brand}</span>
            <div className="project-laptop">
              <div className="project-laptop-display">
                <img src={project.image} alt={t(project.alt, project.altEn)} loading="lazy" decoding="async" />
              </div>
              <div className="project-laptop-base" aria-hidden="true" />
            </div>
          </a>
          <div className="project-showcase-copy">
            <h3>{project.title}</h3>
            <p>{t(project.copy, project.copyEn)}</p>
            <a className="project-open" href={project.href} aria-label={project.id === 'planora' ? t('Xem chi tiết PLANORA', 'View PLANORA case study') : t(`Xem website ${project.title}`, `Visit ${project.title} website`)}
              target={project.id === 'planora' ? undefined : '_blank'} rel={project.id === 'planora' ? undefined : 'noreferrer'}>
              <span aria-hidden="true">{project.id === 'planora' ? t('Xem chi tiết', 'View case study') : t('Xem website', 'Visit website')}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <Tags items={'previewStack' in project ? project.previewStack : project.stack} />
            {'repo' in project && <details className="project-showcase-detail">
              <summary>{t("Thông tin dự án", "Project information")}</summary>
              <p>{t(project.detail, project.detailEn)}</p>
              <div className="mt-3"><Tags items={project.stack} /></div>
              <ProjectLinks repo={project.repo} />
            </details>}
          </div>
        </article>)}
      </div>
      <div className="project-showcase-controls">
        <div className="project-arrows">
          <button type="button" aria-label={t("Dự án trước", "Previous project")} disabled={visibleProjects.length < 2} onClick={() => move(-1)}><ChevronLeft size={20} aria-hidden="true" /></button>
          <button type="button" aria-label={t("Dự án tiếp theo", "Next project")} disabled={visibleProjects.length < 2} onClick={() => move(1)}><ChevronRight size={20} aria-hidden="true" /></button>
        </div>
        <span className="project-count" role="status"><span className="sr-only">{t("Dự án ", "Project ")}</span>{String(active + 1).padStart(2, '0')}<span aria-hidden="true" /><span className="sr-only">{t(" trên ", " of ")}</span>{String(visibleProjects.length).padStart(2, '0')}</span>
        <a className="text-link" href="#du-an-khac">{t("Xem thêm dự án", "More projects")} <ArrowRight size={17} aria-hidden="true" /></a>
      </div>
      <div className="more-projects" id="du-an-khac" data-reveal>
        <h3>{t("Dự án khác", "Other projects")}</h3>
        <div className="project-grid">
          {moreProjects.map((project) => {
            const Icon = moreProjectIcons[project.repo as keyof typeof moreProjectIcons] ?? Workflow
            return <article className="compact-project" key={project.title}>
              <div className="compact-project-heading">
                <span className="planora-step-icon"><Icon size={20} aria-hidden="true" /></span>
                <h4>{project.title}</h4>
              </div>
              <p className="text-mist">{t(project.copy, project.copyEn)}</p>
              <Tags items={project.stack} />
              <div className="project-card-links"><ProjectLinks repo={project.repo} /></div>
            </article>
          })}
        </div>
      </div>
    </div>
  </section>
}
