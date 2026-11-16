import { CalendarDays, ChartNoAxesCombined, CirclePlay, ListChecks, Sparkles, UsersRound } from 'lucide-react'

export const caseStudySections = [
  ['tong-quan', 'Tổng quan', 'Overview'],
  ['giao-dien', 'Giao diện', 'Screenshots'],
  ['tinh-nang', 'Tính năng', 'Features'],
  ['lap-lich', 'Lập lịch & NORA', 'Scheduling & NORA'],
  ['kien-truc', 'Kiến trúc', 'Architecture'],
] as const

export const planoraFeatures = [
  {
    icon: ListChecks, title: 'Công việc & ghi chú', titleEn: 'Tasks & notes',
    description: 'Gom việc mới vào Inbox, nhóm theo project, chia thành việc con và đặt thứ tự phụ thuộc. NORA có thể tách một ghi chú tiếng Việt thành nhiều việc để bạn kiểm tra thời lượng, ưu tiên và hạn chót trước khi tạo.',
    descriptionEn: 'Collect new tasks in the Inbox, organize them into projects, split them into subtasks and set dependencies. NORA can turn a Vietnamese note into several tasks so you can check estimates, priorities and deadlines before creating them.',
  },
  {
    icon: CalendarDays, title: 'Lịch làm việc', titleEn: 'Work calendar',
    description: 'Khai báo giờ rảnh theo tuần, thời gian nghỉ và các buổi học hoặc cuộc họp cố định. Xem lịch theo ngày, theo khung giờ hoặc danh sách; có thể chỉnh tay và kết nối Google Calendar.',
    descriptionEn: 'Set weekly availability, breaks and fixed events like classes or meetings. View the schedule by day, time slot or list, make manual changes and connect Google Calendar.',
  },
  {
    icon: Sparkles, title: 'Trợ lý NORA', titleEn: 'NORA assistant',
    description: 'Trao đổi bằng tiếng Việt để tìm giờ rảnh, thêm cuộc họp hoặc xếp lại công việc. NORA cũng hỗ trợ đọc ảnh thời khóa biểu để chuẩn bị dữ liệu cho lịch làm việc.',
    descriptionEn: 'Use Vietnamese to find free time, add a meeting or reschedule work. NORA can also read timetable images to prepare data for the work calendar.',
  },
  {
    icon: CirclePlay, title: 'Phiên tập trung', titleEn: 'Focus sessions',
    description: 'Bắt đầu, tạm dừng và tiếp tục một phiên từ Hôm nay hoặc Lịch làm việc. Khi kết thúc phiên, ghi nhận thời gian thực tế và cập nhật phần việc đã hoàn thành.',
    descriptionEn: 'Start, pause and resume a session from Today or the work calendar. After each session, log actual time and update task progress.',
  },
  {
    icon: ChartNoAxesCombined, title: 'Tiến độ & workload', titleEn: 'Progress & workload',
    description: 'So sánh thời lượng dự kiến với thời gian đã làm, xem khối lượng theo ngày và nhận cảnh báo khi thời gian còn lại không đủ để kịp hạn.',
    descriptionEn: 'Compare estimated and actual time, review the workload by day and get warnings when there is too little time to meet a deadline.',
  },
  {
    icon: UsersRound, title: 'Làm việc theo nhóm', titleEn: 'Team collaboration',
    description: 'Trưởng nhóm giao việc và theo dõi tiến độ chung. Thành viên xem trước phương án xếp việc theo lịch riêng rồi xác nhận nhận việc. Nhóm xem được trạng thái chung và lịch cá nhân vẫn thuộc về từng thành viên.',
    descriptionEn: 'Team leads assign work and track shared progress. Members preview how a task fits their schedule before accepting it. The team sees shared status while personal schedules stay private.',
  },
]

export const architectureLayers = [
  { name: 'Giao diện', nameEn: 'Interface', technology: 'React · Tailwind CSS · Vite', description: 'Giao diện tiếng Việt cho công việc, lịch và NORA. Frontend được build thành tài nguyên tĩnh và phục vụ cùng origin với API.', descriptionEn: 'Vietnamese-language interface for tasks, scheduling and NORA. The frontend is built as static assets and served from the same origin as the API.' },
  { name: 'API', nameEn: 'API', technology: 'ASP.NET Core Web API · .NET 8', description: 'Tiếp nhận yêu cầu, kiểm tra phiên và quyền truy cập. Đăng nhập Google qua Firebase được xác minh ở máy chủ; phiên web dùng cookie HttpOnly.', descriptionEn: 'Handles requests, validates sessions and checks access. The server verifies Google sign-in through Firebase. Web sessions use HttpOnly cookies.' },
  { name: 'Nghiệp vụ', nameEn: 'Application logic', technology: 'C# · PlanningEngine · Gemini / Vertex AI', description: 'Lớp Application xử lý lập lịch. Lớp Infrastructure kết nối mô hình AI và cung cấp công cụ để NORA đọc lịch, phân tích khối lượng và mô phỏng đề xuất.', descriptionEn: 'The Application layer handles scheduling. The Infrastructure layer connects to the AI model and gives NORA tools to read schedules, analyze workloads and simulate proposals.' },
  { name: 'Dữ liệu', nameEn: 'Data', technology: 'EF Core · SQL Server', description: 'Lưu công việc, giờ rảnh, phiên làm việc và đề xuất. Máy chủ kiểm tra phiên bản lịch trước khi áp dụng để tránh ghi đè thay đổi mới hơn.', descriptionEn: 'Stores tasks, availability, work sessions and proposals. The server checks the schedule version before applying changes to avoid overwriting newer edits.' },
]
