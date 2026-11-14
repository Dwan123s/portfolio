import { ArrowUpRight, Award, ChevronDown } from 'lucide-react'
import certificates from './certificates.json'
import { SectionTitle } from './ui'

const dateFormat = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'medium', timeZone: 'UTC' })
const highlights = certificates.filter(({ kind }) => kind !== 'Khóa học')
const courses = certificates.filter(({ kind }) => kind === 'Khóa học')

const achievements = [
  ['AI for Impact', 'Top 8 vòng sơ loại · Tham gia chung kết'],
  ['Resconnect 2026', 'Tham gia vòng sơ loại'],
  ['Web Design', 'Ý tưởng lọt vào vòng ý tưởng'],
]

function Certificate({ item, compact = false }: { item: typeof certificates[number]; compact?: boolean }) {
  return <article className={compact ? 'certificate certificate-compact' : 'certificate'}>
    <div>
      {!compact && <p className="eyebrow mb-3">{item.kind}</p>}
      <h4>{item.title}</h4>
      <p className="mt-2 text-sm text-mist">{item.issuer} · <time dateTime={item.date}>{dateFormat.format(new Date(item.date))}</time></p>
    </div>
    <a href={item.url} target="_blank" rel="noreferrer" className="text-link" aria-label={`Xác minh ${item.title}`}>Xác minh <ArrowUpRight size={15} /></a>
  </article>
}

export function Certificates() {
  return <section className="section-band" id="thanh-tich">
    <div className="page-width">
      <div className="section-intro">
        <SectionTitle>Thành tích &amp; chứng chỉ</SectionTitle>
        <p data-reveal>Cuộc thi đã tham gia và các chương trình học đã hoàn thành.</p>
      </div>
      <div className="credentials">
        <div data-reveal>
          <h3 className="subheading">Hoạt động</h3>
          <ul className="achievement-list">
            {achievements.map(([title, detail]) => <li key={title}><Award size={21} /><div><strong>{title}</strong><p>{detail}</p></div></li>)}
          </ul>
        </div>
        <div data-reveal>
          <h3 className="subheading">Chứng chỉ nổi bật</h3>
          <div className="certificate-grid">
            {highlights.map((item) => <Certificate key={item.id} item={item} />)}
          </div>
          <details className="course-details">
            <summary><span>Xem {courses.length} chứng chỉ khóa học</span><ChevronDown size={18} /></summary>
            <div>{courses.map((item) => <Certificate key={item.id} item={item} compact />)}</div>
          </details>
        </div>
      </div>
    </div>
  </section>
}
