export const nav = [
  ['gioi-thieu', 'Giới thiệu'],
  ['du-an', 'Dự án'],
  ['ky-nang', 'Kỹ năng'],
  ['thanh-tich', 'Thành tích'],
  ['lien-he', 'Liên hệ'],
]

export const github = 'https://github.com/Dwan123s'
export const email = 'reikochan113s@gmail.com'

export const focusAreas = [
  ['Full-stack Development', 'Kết nối giao diện, API và dữ liệu thành tính năng hoàn chỉnh, dễ sử dụng và bảo trì.'],
  ['AI Integration & Automation', 'Tích hợp AI vào các luồng có thể kiểm tra, xem trước và hoàn tác.'],
  ['UI/UX & Interactive Web', 'Thiết kế trải nghiệm responsive và dùng chuyển động để làm rõ trạng thái giao diện.'],
  ['System Design & Problem Solving', 'Mô hình hóa dữ liệu và lựa chọn thuật toán theo ràng buộc thực tế.'],
]

export const planoraSteps = [
  {
    title: 'Lập lịch theo ràng buộc',
    copy: 'Xếp task và subtask theo hạn chót, mức ưu tiên, thời gian rảnh và quan hệ phụ thuộc. Theo dõi thời gian dự kiến và thực tế để điều chỉnh khối lượng công việc.',
    nodes: ['Công việc', 'Ràng buộc', 'Lịch làm việc'],
  },
  {
    title: 'NORA đề xuất thay đổi',
    copy: 'NORA tiếp nhận yêu cầu bằng tiếng Việt, chẳng hạn chuyển một việc sang buổi chiều, rồi chuyển yêu cầu thành đề xuất có cấu trúc.',
    nodes: ['Yêu cầu tiếng Việt', 'NORA', 'Đề xuất'],
  },
  {
    title: 'Kiểm tra và xem trước',
    copy: 'Hệ thống kiểm tra lịch theo ràng buộc trước khi cho phép áp dụng. Người dùng xem trước các mục bị ảnh hưởng và có thể hoàn tác thay đổi.',
    nodes: ['Kiểm tra lịch', 'Xem trước', 'Áp dụng hoặc hoàn tác'],
  },
]

export const featured = [
  {
    title: 'COOKORA',
    subtitle: 'Bếp Nhà',
    copy: 'Ứng dụng giúp người nấu tìm món từ nguyên liệu sẵn có, điều chỉnh khẩu phần và nhận gợi ý món ăn hoặc thực đơn từ Vertex AI.',
    detail: 'Bài toán là thu hẹp lựa chọn theo những gì đang có trong bếp. Công thức lưu trong PostgreSQL tạo nguồn dữ liệu để lọc và hỗ trợ gợi ý.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL', 'Vertex AI', 'Vercel'],
    image: 'cookora.webp',
    alt: 'Trang Cookora với bộ lọc và danh sách công thức món ăn',
    repo: 'Cookora',
    demo: 'https://cookora-rose.vercel.app',
  },
  {
    title: 'VU PHAM STUDIO',
    subtitle: 'Website dịch vụ nhiếp ảnh',
    copy: 'Khách hàng có thể xem dịch vụ và bảng giá, đặt lịch chụp trực tuyến và tra cứu ảnh theo mã khách hàng.',
    detail: 'Phần frontend tập trung vào giao diện responsive và kết nối các điểm chạm từ tìm hiểu dịch vụ đến đặt lịch và nhận ảnh.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    image: 'studio.webp',
    alt: 'Trang chủ công khai của VU PHAM STUDIO với dịch vụ nhiếp ảnh và nút đặt lịch',
    repo: 'VPSTUDIO',
    demo: 'https://www.vuphamstudio.com',
  },
]

export const moreProjects = [
  {
    title: 'Smart Weather Monitoring System',
    copy: 'ESP32-S3 đo nhiệt độ, độ ẩm, khí áp, tốc độ và hướng gió. Dữ liệu đi qua MQTT và được cập nhật trên dashboard qua Socket.IO.',
    stack: ['ESP32-S3', 'MQTT', 'TypeScript', 'Express', 'Next.js', 'MySQL', 'Socket.IO'],
    repo: 'weather-station',
  },
  {
    title: 'Học Cùng AI',
    copy: 'Ứng dụng học tập có giao diện tương tác và backend tiếp nhận yêu cầu để hỗ trợ người học bằng AI.',
    stack: ['HTML', 'JavaScript', 'Node.js'],
    repo: 'HoccungAI',
  },
]

export const skills = [
  ['Ngôn ngữ', ['C#', 'JavaScript', 'TypeScript', 'Java', 'C']],
  ['Frontend', ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX']],
  ['Backend', ['.NET', 'ASP.NET Core Web API', 'Entity Framework Core', 'NestJS', 'Node.js', 'Express', 'RESTful API']],
  ['Dữ liệu', ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM']],
  ['AI & tích hợp', ['Vertex AI', 'AI API Integration', 'Firebase Authentication', 'AI Agent Workflows']],
  ['Công cụ', ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Docker', 'Vercel']],
  ['Nền tảng kỹ thuật', ['OOP', 'Cấu trúc dữ liệu & giải thuật', 'Thiết kế cơ sở dữ liệu', 'Phân tích & thiết kế', 'Kiểm thử phần mềm']],
] as const

export const process = [
  ['Hiểu vấn đề', 'Tìm hiểu người dùng và chốt các ràng buộc trước khi chọn giải pháp.'],
  ['Thiết kế giải pháp', 'Làm rõ luồng dữ liệu, cấu trúc hệ thống và cách người dùng thao tác.'],
  ['Xây dựng & tích hợp', 'Kết nối UI, API và cơ sở dữ liệu thành luồng hoàn chỉnh.'],
  ['Kiểm thử & cải tiến', 'Kiểm tra các tình huống biên. Trong PLANORA, lịch được kiểm tra trước khi ghi thay đổi.'],
]
