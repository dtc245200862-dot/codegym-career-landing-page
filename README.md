# [Bài tập] Xây dựng Landing Page - CodeGym Career (Material Design)

## 🎯 Giới thiệu & Mục tiêu
Bài tập thực hành chuyển đổi nội dung từ trang web thực tế `https://codegym.vn/codegym-career/` sang phong cách thiết kế **Bootstrap Material Design (MDBootstrap)** của Google.

### Mục tiêu đạt được:
- Xây dựng một Landing Page hoàn chỉnh, tối ưu trải nghiệm người dùng (UX/UI), chuẩn responsive trên cả máy tính (Desktop) và thiết bị di động (Mobile/Tablet).
- Ứng dụng đầy đủ các component đặc trưng của **Material Design**: Hiệu ứng bóng đổ phân tầng (Shadows & Elevation `z-depth`), sóng nước tương tác khi click (Waves Ripple Effects), thẻ nổi (Floating Cards), nhãn trôi (Floating Labels), bố cục F-Pattern.
- Truyền tải thông điệp và cam kết mạnh mẽ của CodeGym Career: **"Trở thành lập trình viên Full-Stack sau 20 tuần – Cam kết 100% học viên có việc làm trong 45 ngày"**.

---

## 🛠️ Công nghệ & Thư viện sử dụng

- **HTML5 & CSS3**: Ngữ nghĩa hiện đại, CSS Custom Properties (Variables), Flexbox & Grid.
- **Thư viện chính**:
  - `Bootstrap 4.5.0`: Hệ thống Grid Responsive 12 cột, Modal, Navbar Collapse, Utilities.
  - `MDBootstrap 4.19.1 (Material Design for Bootstrap)`: Components phong cách Material Design của Google.
  - `Font Awesome 5.11.2`: Bộ icon trực quan cho từng tính năng và nút bấm.
  - `Google Fonts`: **Roboto** (Typography chuẩn Material Design) kết hợp **Montserrat** (Tiêu đề hiện đại).
  - `jQuery 3.5.1` & `Popper.js 1.14.4`: Điều khiển hiệu ứng cuộn mượt (smooth scroll), thanh điều hướng sticky và xử lý form.

---

## 🎨 Cấu trúc bố cục & Material Components

1. **Header / Navbar (`scrolling-navbar fixed-top`)**:
   - Thanh điều hướng cố định phía trên với hiệu ứng chuyển màu khi cuộn trang.
   - Tích hợp nút kêu gọi hành động nhanh: **"Đăng ký tư vấn"**.
2. **Hero Section (Jumbotron & Stat Badges)**:
   - Thông điệp chính nổi bật: *Trở thành Lập trình viên Full-Stack sau 20 tuần*.
   - Khối thống kê Material kính mờ (Glassmorphism + Backdrop filter) hiển thị các con số ấn tượng: *20 Tuần, 100% việc làm, 600+ Đối tác, Lương khởi điểm 8M - 15M*.
3. **Tổng quan chương trình (`#intro`)**:
   - Thẻ Card lớn kết hợp hình ảnh học viên thực chiến và 3 khối giá trị cốt lõi: *Cường độ cao 70-90h/tuần*, *Mô hình Agile & Scrum*, *Dịch vụ việc làm trọn đời*.
4. **6 Điểm nổi bật độc quyền (`#features`)**:
   - 6 thẻ Material Cards có hiệu ứng nổi khi di chuột (`hoverable`, đổ bóng nhẹ nhàng), phân loại bằng các icon màu sắc sinh động.
5. **Lộ trình đào tạo 20 tuần (`#roadmap`)**:
   - Component **Nav Pills Material (`md-pills`)** chia thành 4 giai đoạn rõ ràng:
     - Module 1: Nhập môn & Tư duy lập trình (Tuần 1 - 5)
     - Module 2: Lập trình Front-end & Web UI (Tuần 6 - 9)
     - Module 3: Cơ sở dữ liệu MySQL & Back-end Java (Tuần 10 - 14)
     - Module 4: Spring Boot Framework & Đồ án tốt nghiệp (Tuần 15 - 20)
6. **Quy trình 5 bước việc làm (`#process`)**:
   - Dạng thẻ tiến trình (Timeline Stepper) với số thứ tự tròn nổi bật, giải thích rõ hành trình từ luyện phỏng vấn đến khi nhận offer.
7. **Đối tác tuyển dụng & Testimonials (`#partners`)**:
   - Huy hiệu các tập đoàn công nghệ đối tác: FPT, Viettel, VNPAY, VNPT, Rikkei, NashTech,...
   - 3 thẻ đánh giá thực tế từ cựu học viên chuyển ngành và đại diện doanh nghiệp.
8. **Form Đăng ký tư vấn (`#register`)**:
   - Áp dụng **Material Form** với các trường nhập liệu chuẩn, dropdown chọn tỉnh thành, nút submit hiệu ứng sóng và popup Modal xác nhận gửi thành công.
9. **Footer (`page-footer`)**:
   - Thông tin pháp lý của CodeGym, địa chỉ các chi nhánh Hà Nội, Đà Nẵng, Hotline, Email và mạng xã hội.

---

## 📂 Cấu trúc thư mục dự án

```
codegym-career-landing-page/
├── index.html          # Trang Landing Page hoàn chỉnh chuẩn Material Design
├── style.css           # Tùy biến kiểu dáng, màu sắc, elevation và responsive
├── script.js           # Điều khiển hiệu ứng cuộn trang, Waves ripple và xử lý Form
├── .gitignore          # Cấu hình bỏ qua các file hệ thống
└── README.md           # Báo cáo và tài liệu dự án
```

---

## 🚀 Hướng dẫn mở và kiểm tra giao diện

1. Clone repository về máy:
   ```bash
   git clone https://github.com/dtc245200862-dot/codegym-career-landing-page.git
   ```
2. Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Firefox, Cốc Cốc).
3. Thử nghiệm:
   - Cuộn trang để kiểm tra hiệu ứng đổi màu của Navbar và nút **Back to top**.
   - Bấm vào các menu điều hướng để trải nghiệm hiệu ứng cuộn mượt (Smooth scroll).
   - Thử chuyển đổi giữa các Tab lộ trình học (Module 1 - Module 4).
   - Điền thông tin vào form đăng ký và bấm nút **"Gửi Đăng Ký Ngay"** để kiểm tra phản hồi thông báo Modal.
   - Thử co giãn cửa sổ trình duyệt hoặc chuyển sang chế độ F12 Device Toolbar (iPhone, iPad, Android) để kiểm tra tính Responsive 100%.
