import { useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Award, ChevronLeft, ChevronRight, X } from 'lucide-react'
import certificates from './certificates.json'
import { SectionTitle } from './ui'
import { useLanguage } from './language'

const highlights = certificates.filter(({ kind }) => kind !== 'Khóa học')
const courses = certificates.filter(({ kind }) => kind === 'Khóa học')
const gallery = [...highlights, ...courses]
type CertificateItem = typeof certificates[number]

const achievements = [
  ['AI for Impact', 'Top 8 vòng sơ loại · Tham gia chung kết', 'Top 8 in the preliminary round · Finalist'],
  ['Resconnect 2026', 'Tham gia vòng sơ loại', 'Participated in the preliminary round'],
  ['Web Design', 'Ý tưởng lọt vào vòng ý tưởng', 'Idea selected for the concept round'],
]

function wrap(index: number) {
  return (index + gallery.length) % gallery.length
}

export function Certificates() {
  const { t } = useLanguage()
  const dialog = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState<CertificateItem | null>(null)

  function openPreview(item: CertificateItem) {
    setSelected(item)
    dialog.current?.showModal()
  }

  return <section className="section-band" id="thanh-tich">
    <div className="page-width">
      <div className="section-intro">
        <SectionTitle>{t("Thành tích & chứng chỉ", "Achievements & certificates")}</SectionTitle>
        <p data-reveal>{t("Cuộc thi đã tham gia và các chương trình học đã hoàn thành.", "Competitions I took part in and courses I completed.")}</p>
      </div>
      <div className="credentials">
        <div data-reveal>
          <h3 className="subheading">{t("Hoạt động", "Activities")}</h3>
          <ul className="achievement-list">
            {achievements.map(([title, detail, detailEn]) => <li key={title}><Award size={21} /><div><strong>{title}</strong><p>{t(detail, detailEn)}</p></div></li>)}
          </ul>
        </div>
        <div className="certificate-gallery" data-reveal>
          <h3 className="subheading" id="certificate-gallery-title">{t("Chứng chỉ", "Certificates")}</h3>
          <div className="certificate-carousel" role="region" aria-labelledby="certificate-gallery-title"
            onKeyDown={(event) => {
              if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
              event.preventDefault()
              const direction = event.key === 'ArrowLeft' ? -1 : 1
              if (event.target instanceof HTMLElement && event.target.matches('.certificate-card')) {
                event.currentTarget.querySelector<HTMLButtonElement>(`.certificate-card[data-offset="${direction}"]`)?.focus()
              }
              setActive((index) => wrap(index + direction))
            }}>
            <div className="certificate-stage">
              {gallery.map((item, index) => {
                const half = Math.floor(gallery.length / 2)
                const offset = wrap(index - active + half) - half
                if (Math.abs(offset) > 3) return null
                return <button key={item.id} type="button" className="certificate-card"
                  data-offset={offset}
                  tabIndex={offset === 0 ? 0 : -1}
                  aria-hidden={Math.abs(offset) === 3}
                  aria-label={offset === 0 ? t(`Xem ảnh chứng chỉ ${item.title}`, `View certificate ${item.title}`) : t(`Chọn chứng chỉ ${item.title}`, `Select certificate ${item.title}`)}
                  style={{ '--offset': offset, '--distance': Math.abs(offset) } as CSSProperties}
                  onClick={(event) => {
                    if (offset === 0) {
                      openPreview(item)
                    } else {
                      setActive(index)
                      event.currentTarget.focus()
                    }
                  }}>
                  <img src={`/media/certificates/${item.id}-thumb.webp`} alt="" draggable={false} decoding="async" />
                </button>
              })}
            </div>
            <div className="certificate-controls">
              <button type="button" aria-label={t("Chứng chỉ trước", "Previous certificate")} onClick={() => setActive((index) => wrap(index - 1))}><ChevronLeft size={20} aria-hidden="true" /></button>
              <span>{active + 1} / {gallery.length}</span>
              <button type="button" aria-label={t("Chứng chỉ tiếp theo", "Next certificate")} onClick={() => setActive((index) => wrap(index + 1))}><ChevronRight size={20} aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dialog ref={dialog} className="certificate-dialog" aria-labelledby="certificate-preview-title" onClose={() => setSelected(null)}>
      <div className="certificate-dialog-header">
        <h3 id="certificate-preview-title" className="m-0 text-base font-semibold">{selected?.title ?? t('Ảnh chứng chỉ', 'Certificate preview')}</h3>
        <button className="certificate-close" type="button" autoFocus aria-label={t("Đóng ảnh chứng chỉ", "Close certificate preview")} onClick={() => dialog.current?.close()}><X size={21} /></button>
      </div>
      {selected && <>
        <img className="certificate-full-image" src={`/media/certificates/${selected.id}.webp`} alt={t(`Chứng chỉ ${selected.title}`, `Certificate for ${selected.title}`)} />
        <div className="flex justify-end px-4 pb-3">
          <a href={selected.url} target="_blank" rel="noreferrer" className="text-link" aria-label={t(`Xác minh ${selected.title}`, `Verify ${selected.title}`)}>{t("Xác minh", "Verify")} <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </>}
    </dialog>
  </section>
}
