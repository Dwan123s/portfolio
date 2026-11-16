import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { planora } from './content'
import { useLanguage } from './language'

const screens = [
  { id: 'home', title: 'Trang chủ', titleEn: 'Homepage', alt: planora.coverAlt, altEn: planora.coverAltEn },
  { id: 'sign-in', title: 'Đăng nhập', titleEn: 'Sign in', alt: 'Màn hình đăng nhập PLANORA bên cạnh hình lịch và đồng hồ', altEn: 'PLANORA sign-in screen beside a calendar and clock illustration' },
  { id: 'today', title: 'Hôm nay', titleEn: 'Today', alt: 'Tổng quan lịch trong ngày và các công việc sắp đến hạn', altEn: 'Overview of today’s schedule and upcoming deadlines' },
  { id: 'calendar', title: 'Lịch làm việc', titleEn: 'Work calendar', alt: 'Lịch tuần với các phiên công việc được xếp theo khung giờ', altEn: 'Weekly calendar with scheduled work sessions' },
  { id: 'inbox', title: 'Công việc', titleEn: 'Tasks', alt: 'Hộp thư công việc, danh sách việc hôm nay và hạn chót', altEn: 'Task inbox, today’s tasks and deadlines' },
  { id: 'projects', title: 'Projects', titleEn: 'Projects', alt: 'Danh sách dự án với tiến độ và người phụ trách', altEn: 'Project list showing progress and assignees' },
  { id: 'progress', title: 'Tiến độ', titleEn: 'Progress', alt: 'Bảng khối lượng công việc theo từng ngày', altEn: 'Daily workload chart' },
  { id: 'nora', title: 'NORA AI', titleEn: 'NORA AI', alt: 'Trợ lý NORA với gợi ý xếp lịch và lịch trình trong ngày', altEn: 'NORA assistant with scheduling suggestions and the daily agenda' },
  { id: 'teams', title: 'Nhóm', titleEn: 'Teams', alt: 'Trang quản lý nhóm và vai trò của thành viên', altEn: 'Team management page showing member roles' },
]

export function PlanoraGallery() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const thumbnails = useRef<HTMLDivElement>(null)
  const screen = screens[active]
  const image = `/media/planora/${screen.id}.webp`

  useEffect(() => {
    const rail = thumbnails.current
    const selected = rail?.querySelector<HTMLButtonElement>('[aria-pressed="true"]')
    if (!rail || !selected) return

    const railBounds = rail.getBoundingClientRect()
    const selectedBounds = selected.getBoundingClientRect()
    if (selectedBounds.left < railBounds.left) rail.scrollLeft += selectedBounds.left - railBounds.left
    if (selectedBounds.right > railBounds.right) rail.scrollLeft += selectedBounds.right - railBounds.right
  }, [active])

  function move(direction: number) {
    setActive((index) => (index + direction + screens.length) % screens.length)
  }

  return <section className="planora-gallery" id="giao-dien" aria-labelledby="planora-gallery-title">
    <div className="planora-gallery-heading">
      <h2 id="planora-gallery-title">{t("Giao diện PLANORA", "PLANORA screenshots")}</h2>
      <div className="planora-gallery-navigation">
        <button type="button" aria-label={t("Màn hình trước", "Previous screen")} onClick={() => move(-1)}><ChevronLeft size={18} aria-hidden="true" /></button>
        <span aria-live="polite" aria-atomic="true">{active + 1} / {screens.length}</span>
        <button type="button" aria-label={t("Màn hình tiếp theo", "Next screen")} onClick={() => move(1)}><ChevronRight size={18} aria-hidden="true" /></button>
      </div>
    </div>
    <button className="planora-gallery-preview" type="button" aria-label={t(`Phóng to ảnh ${t(screen.title, screen.titleEn)}`, `Enlarge ${screen.titleEn} screenshot`)} aria-haspopup="dialog"
      onClick={() => dialog.current?.showModal()}>
      <img key={screen.id} src={image} alt={t(screen.alt, screen.altEn)} width="1920" height="1080" decoding="async" />
      <span className="planora-gallery-enlarge" aria-hidden="true"><Maximize2 size={17} /></span>
    </button>
    <p className="mt-2 text-sm text-mist" aria-live="polite">{t(screen.alt, screen.altEn)}</p>
    <div className="planora-gallery-thumbnails" ref={thumbnails} role="group" aria-label={t("Chọn màn hình PLANORA", "Select a PLANORA screen")}>
      {screens.map(({ id, title, titleEn }, index) => <button key={id} type="button" aria-pressed={index === active}
        onClick={() => setActive(index)}>
        <img src={`/media/planora/${id}-thumb.webp`} alt="" width="256" height="144" loading="lazy" decoding="async" />
        <span>{t(title, titleEn)}</span>
      </button>)}
    </div>
    <dialog className="planora-gallery-dialog" ref={dialog} aria-labelledby="planora-gallery-dialog-title"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          move(event.key === 'ArrowLeft' ? -1 : 1)
        }
      }}>
      <div className="planora-gallery-heading">
        <h2 id="planora-gallery-dialog-title" aria-live="polite">{t(screen.title, screen.titleEn)}</h2>
        <div className="planora-gallery-navigation">
          <button type="button" aria-label={t("Ảnh trước", "Previous image")} onClick={() => move(-1)}><ChevronLeft size={18} aria-hidden="true" /></button>
          <button type="button" aria-label={t("Ảnh tiếp theo", "Next image")} onClick={() => move(1)}><ChevronRight size={18} aria-hidden="true" /></button>
          <button type="button" aria-label={t("Đóng ảnh", "Close image")} autoFocus onClick={() => dialog.current?.close()}><X size={18} aria-hidden="true" /></button>
        </div>
      </div>
      <img src={image} alt={t(screen.alt, screen.altEn)} width="1920" height="1080" loading="lazy" decoding="async" />
    </dialog>
  </section>
}
