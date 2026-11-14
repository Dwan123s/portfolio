import type { ReactNode } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { github } from './content'

export function Tags({ items }: { items: readonly string[] }) {
  return <ul aria-label="Công nghệ" className="flex flex-wrap gap-2">
    {items.map((item) => <li key={item} className="rounded-full border border-line px-3 py-1.5 text-xs text-mist">{item}</li>)}
  </ul>
}

export function ProjectLinks({ repo, demo }: { repo: string; demo?: string }) {
  return <div className="flex flex-wrap gap-x-6 gap-y-2">
    <a className="text-link" href={`${github}/${repo}`} target="_blank" rel="noreferrer"><Github size={16} /> Mã nguồn <ArrowUpRight size={14} aria-hidden="true" /></a>
    {demo && <a className="text-link" href={demo} target="_blank" rel="noreferrer">Xem website <ArrowUpRight size={16} aria-hidden="true" /></a>}
  </div>
}

export function SectionTitle({ label, children }: { label?: string; children: ReactNode }) {
  return <div data-reveal>
    {label && <p className="eyebrow mb-4">{label}</p>}
    <h2 className="section-title">{children}</h2>
  </div>
}
