import { useRef, useState } from 'react'
import { ArrowUpRight, Award, ChevronDown, Maximize2, X } from 'lucide-react'
import certificates from './certificates.json'
import { SectionTitle } from './ui'

const dateFormat = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'medium', timeZone: 'UTC' })
const highlights = certificates.filter(({ kind }) => kind !== 'Khóa học')
const courses = certificates.filter(({ kind }) => kind === 'Khóa học')
type CertificateItem = typeof certificates[number]

const achievements = [
  ['AI for Impact', 'Top 8 vòng sơ loại · Tham gia chung kết'],
  ['Resconnect 2026', 'Tham gia vòng sơ loại'],
  ['Web Design', 'Ý tưởng lọt vào vòng ý tưởng'],
]

function Certificate({ item, onPreview }: { item: CertificateItem; onPreview: (item: CertificateItem) => void }) {
  return <article className="certificate">
    <button className="certificate-thumbnail" type="button" aria-label={`Xem ảnh chứng chỉ ${item.title}`} onClick={() => onPreview(item)}>
      <img src={`/media/certificates/${item.id}-thumb.webp`} alt="" loading="lazy" decoding="async" />
      <span className="certificate-expand" aria-hidden="true"><Maximize2 size={16} /></span>
    </button>
    <div className="certificate-info">
      {item.kind !== 'Khóa học' && <p className="eyebrow mb-3">{item.kind}</p>}
      <h4>{item.title}</h4>
      <p className="mt-2 text-sm text-mist">{item.issuer} · <time dateTime={item.date}>{dateFormat.format(new Date(item.date))}</time></p>
      <a href={item.url} target="_blank" rel="noreferrer" className="text-link mt-2" aria-label={`Xác minh ${item.title}`}>Xác minh <ArrowUpRight size={15} /></a>
    </div>
  </article>
}

export function Certificates() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState<CertificateItem | null>(null)

  function openPreview(item: CertificateItem) {
    setSelected(item)
    dialog.current?.showModal()
  }

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
            {highlights.map((item) => <Certificate key={item.id} item={item} onPreview={openPreview} />)}
          </div>
          <details className="course-details">
            <summary><span>Xem {courses.length} chứng chỉ khóa học</span><ChevronDown size={18} /></summary>
            <div className="certificate-grid">{courses.map((item) => <Certificate key={item.id} item={item} onPreview={openPreview} />)}</div>
          </details>
        </div>
      </div>
    </div>
    <dialog ref={dialog} className="certificate-dialog" aria-labelledby="certificate-preview-title" onClose={() => setSelected(null)}>
      <div className="certificate-dialog-header">
        <h3 id="certificate-preview-title" className="m-0 text-base font-semibold">{selected?.title ?? 'Ảnh chứng chỉ'}</h3>
        <button className="certificate-close" type="button" autoFocus aria-label="Đóng ảnh chứng chỉ" onClick={() => dialog.current?.close()}><X size={21} /></button>
      </div>
      {selected && <img className="certificate-full-image" src={`/media/certificates/${selected.id}.webp`} alt={`Chứng chỉ ${selected.title}`} />}
    </dialog>
  </section>
}
