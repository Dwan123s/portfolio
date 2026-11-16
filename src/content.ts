export const nav = [
  ['gioi-thieu', 'Giới thiệu', 'About'],
  ['du-an', 'Dự án', 'Projects'],
  ['ky-nang', 'Kỹ năng', 'Skills'],
  ['thanh-tich', 'Thành tích', 'Achievements'],
  ['lien-he', 'Liên hệ', 'Contact'],
]

export const github = 'https://github.com/Dwan123s'
export const email = 'reikochan113s@gmail.com'

export const focusAreas = [
  ['Full-stack Development', 'Kết nối giao diện, API và dữ liệu thành tính năng hoàn chỉnh, dễ sử dụng và bảo trì.', 'Phát triển full-stack', 'Connect interfaces, APIs and data into complete features that are easy to use and maintain.'],
  ['AI Integration & Automation', 'Tích hợp AI vào các luồng có thể kiểm tra, xem trước và hoàn tác.', 'Tích hợp AI và tự động hóa', 'Integrate AI into workflows with validation, previews and undo.'],
  ['UI/UX & Interactive Web', 'Thiết kế trải nghiệm responsive và dùng chuyển động để làm rõ trạng thái giao diện.', 'UI/UX và web tương tác', 'Design responsive experiences and use motion to clarify interface states.'],
  ['System Design & Problem Solving', 'Mô hình hóa dữ liệu và lựa chọn thuật toán theo ràng buộc thực tế.', 'Thiết kế hệ thống và giải quyết vấn đề', 'Model data and choose algorithms based on practical constraints.'],
]

export const planora = {
  path: '/du-an/planora/',
  cover: '/media/planora/home.webp',
  coverAlt: 'Trang chủ PLANORA với linh vật NORA cầm lịch',
  coverAltEn: 'PLANORA homepage with NORA holding a calendar',
  description: 'Hệ thống quản lý công việc và tối ưu lịch trình cá nhân. Trợ lý NORA hỗ trợ thay đổi lịch từ yêu cầu bằng tiếng Việt.',
  descriptionEn: 'A personal task management and scheduling platform. Its NORA assistant helps adjust schedules from requests written in Vietnamese.',
}

export const planoraSteps = [
  {
    title: 'Lập lịch theo ràng buộc',
    titleEn: "Constraint-based scheduling",
    copy: 'PlanningEngine tìm các khoảng có thể làm việc sau khi trừ lịch bận và thời gian nghỉ. Engine xét hạn chót, mức ưu tiên, việc phụ thuộc, giới hạn trong ngày và yêu cầu làm liền mạch. Các phiên đã khóa hoặc đang chạy được giữ nguyên.',
    copyEn: "PlanningEngine finds working slots after accounting for busy periods and breaks. It considers deadlines, priorities, dependencies, daily limits and tasks that require an uninterrupted block. Locked and running sessions stay in place.",
    nodes: ['Công việc và giờ rảnh', 'Kiểm tra ràng buộc', 'Lịch khả thi'],
    nodesEn: ["Tasks and availability","Validate constraints","Feasible schedule"],
  },
  {
    title: 'NORA đề xuất thay đổi',
    titleEn: "NORA proposes changes",
    copy: 'Khi bạn nhắn “Chuyển buổi viết báo cáo sang chiều mai”, NORA dùng Gemini để hiểu yêu cầu. Trợ lý gọi các công cụ đọc công việc, tìm giờ trống và mô phỏng trên bản sao của lịch. Nếu thiếu thông tin, NORA hỏi lại.',
    copyEn: "When you ask in Vietnamese to move a report-writing session to tomorrow afternoon, NORA uses Gemini to interpret the request. It reads tasks, finds open slots and simulates changes on a copy of the schedule. It asks for clarification when needed.",
    nodes: ['Yêu cầu tiếng Việt', 'Gọi công cụ', 'Mô phỏng'],
    nodesEn: ["Vietnamese request","Call tools","Simulate"],
  },
  {
    title: 'Kiểm tra và xem trước',
    titleEn: "Validate and preview",
    copy: 'Bản xem trước liệt kê những mục sẽ thay đổi. Máy chủ kiểm tra lại quyền, ràng buộc và phiên bản lịch trước khi lưu. Yêu cầu tối ưu lịch cần xác nhận, và các thay đổi phù hợp có thể được hoàn tác.',
    copyEn: "The preview lists what will change. Before saving, the server rechecks permissions, constraints and the schedule version. Schedule optimization requires confirmation, and eligible changes can be undone.",
    nodes: ['Xem thay đổi', 'Kiểm tra khi lưu', 'Hoàn tác khi cần'],
    nodesEn: ["Preview changes","Validate before saving","Undo if needed"],
  },
]

export const featured = [
  {
    title: 'COOKORA',
    subtitle: 'Bếp Nhà',
    copy: 'Ứng dụng giúp người nấu tìm món từ nguyên liệu sẵn có, điều chỉnh khẩu phần và nhận gợi ý món ăn hoặc thực đơn từ Vertex AI.',
    copyEn: "Find recipes using ingredients on hand, adjust serving sizes and get meal suggestions from Vertex AI.",
    detail: 'Bài toán là thu hẹp lựa chọn theo những gì đang có trong bếp. Công thức lưu trong PostgreSQL tạo nguồn dữ liệu để lọc và hỗ trợ gợi ý.',
    detailEn: "The goal is to narrow down recipes using ingredients already in the kitchen. Recipes stored in PostgreSQL power filtering and suggestions.",
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL', 'Vertex AI', 'Vercel'],
    image: 'cookora.webp',
    alt: 'Trang Cookora với bộ lọc và danh sách công thức món ăn',
    altEn: "Cookora page with filters and recipes",
    repo: 'Cookora',
    demo: 'https://cookora-rose.vercel.app',
  },
  {
    title: 'VU PHAM STUDIO',
    subtitle: 'Website dịch vụ nhiếp ảnh',
    copy: 'Khách hàng có thể xem dịch vụ và bảng giá, đặt lịch chụp trực tuyến và tra cứu ảnh theo mã khách hàng.',
    copyEn: "Customers can browse services and prices, book photo sessions online and retrieve photos using their customer code.",
    detail: 'Phần frontend tập trung vào giao diện responsive và kết nối các điểm chạm từ tìm hiểu dịch vụ đến đặt lịch và nhận ảnh.',
    detailEn: "The responsive frontend connects each step, from discovering services to booking a session and receiving photos.",
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    image: 'studio.webp',
    alt: 'Trang chủ công khai của VU PHAM STUDIO với dịch vụ nhiếp ảnh và nút đặt lịch',
    altEn: "VU PHAM STUDIO homepage with photography services and a booking button",
    repo: 'VPSTUDIO',
    demo: 'https://www.vuphamstudio.com',
  },
]

export const moreProjects = [
  {
    title: 'Smart Weather Monitoring System',
    copy: 'ESP32-S3 đo nhiệt độ, độ ẩm, khí áp, tốc độ và hướng gió. Dữ liệu đi qua MQTT và được cập nhật trên dashboard qua Socket.IO.',
    copyEn: "An ESP32-S3 measures temperature, humidity, air pressure, wind speed and wind direction. Readings travel over MQTT and update the dashboard via Socket.IO.",
    stack: ['ESP32-S3', 'MQTT', 'TypeScript', 'Express', 'Next.js', 'MySQL', 'Socket.IO'],
    repo: 'weather-station',
  },
  {
    title: 'Học Cùng AI',
    copy: 'Ứng dụng học tập có giao diện tương tác và backend tiếp nhận yêu cầu để hỗ trợ người học bằng AI.',
    copyEn: "A learning app with an interactive interface and a backend that handles requests for AI-assisted learning.",
    stack: ['HTML', 'JavaScript', 'Node.js'],
    repo: 'HoccungAI',
  },
]

export const skills = [
  ['Ngôn ngữ', ['C#', 'JavaScript', 'TypeScript', 'Java', 'C'], 'Languages', []],
  ['Frontend', ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX'], 'Frontend', []],
  ['Backend', ['.NET', 'ASP.NET Core Web API', 'Entity Framework Core', 'NestJS', 'Node.js', 'Express', 'RESTful API'], 'Backend', []],
  ['Dữ liệu', ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM'], 'Data', []],
  ['AI & tích hợp', ['Vertex AI', 'AI API Integration', 'Firebase Authentication', 'AI Agent Workflows'], 'AI & integrations', []],
  ['Công cụ', ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Docker', 'Vercel'], 'Tools', []],
  ['Nền tảng kỹ thuật', ['OOP', 'Cấu trúc dữ liệu & giải thuật', 'Thiết kế cơ sở dữ liệu', 'Phân tích & thiết kế', 'Kiểm thử phần mềm'], 'Engineering fundamentals', ['OOP', 'Data structures & algorithms', 'Database design', 'Analysis & design', 'Software testing']],
] as const

export const process = [
  ['Hiểu vấn đề', 'Tìm hiểu người dùng và chốt các ràng buộc trước khi chọn giải pháp.', 'Understand the problem', 'Learn what users need and define constraints before choosing a solution.'],
  ['Thiết kế giải pháp', 'Làm rõ luồng dữ liệu, cấu trúc hệ thống và cách người dùng thao tác.', 'Design the solution', 'Define data flows, system structure and user interactions.'],
  ['Xây dựng & tích hợp', 'Kết nối UI, API và cơ sở dữ liệu thành luồng hoàn chỉnh.', 'Build and integrate', 'Connect the UI, API and database into a complete workflow.'],
  ['Kiểm thử & cải tiến', 'Kiểm tra các tình huống biên. Trong PLANORA, lịch được kiểm tra trước khi ghi thay đổi.', 'Test and improve', 'Test edge cases. In PLANORA, the schedule is validated before changes are saved.'],
]
