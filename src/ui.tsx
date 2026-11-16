import type { ReactNode } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { github } from './content'
import { useLanguage } from './language'

export function Tags({ items }: { items: readonly string[] }) {
  const { t } = useLanguage()
  return <ul aria-label={t('Công nghệ', 'Technologies')} className="flex flex-wrap gap-2">
    {items.map((item) => <li key={item} className="rounded-full border border-line px-3 py-1.5 text-xs text-mist">{item}</li>)}
  </ul>
}

export function ProjectLinks({ repo, demo }: { repo: string; demo?: string }) {
  const { t } = useLanguage()
  return <div className="flex flex-wrap gap-x-6 gap-y-2">
    <a className="text-link" href={`${github}/${repo}`} target="_blank" rel="noreferrer"><Github size={16} /> {t("Mã nguồn", "Source code")} <ArrowUpRight size={14} aria-hidden="true" /></a>
    {demo && <a className="text-link" href={demo} target="_blank" rel="noreferrer">{t("Xem website", "Visit website")} <ArrowUpRight size={16} aria-hidden="true" /></a>}
  </div>
}

export function SectionTitle({ label, children }: { label?: string; children: ReactNode }) {
  return <div data-reveal>
    {label && <p className="eyebrow mb-4">{label}</p>}
    <h2 className="section-title">{children}</h2>
  </div>
}
