# Hệ Thống Quản Lý Trường Học (Full-Stack School Management System)

Một ứng dụng web được xây dựng bằng Next.js, Prisma, và Clerk để quản lý các hoạt động trong trường học. Hệ thống cung cấp các chức năng khác nhau cho các vai trò người dùng khác nhau như Quản trị viên, Giáo viên, Học sinh và Phụ huynh.

## Bảng mục lục

- [Tính năng chính](#tính-năng-chính)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Yêu cầu](#yêu-cầu)
- [Cài đặt](#cài-đặt)
- [Bắt đầu](#bắt-đầu)
- [Cấu trúc dự án](#cấu-trúc-dự-án)

## Tính năng chính

Hệ thống được thiết kế với các vai trò người dùng riêng biệt, mỗi vai trò có một bộ chức năng cụ thể:

### 1. Quản trị viên (Admin)
- Toàn quyền quản lý tất cả các tài nguyên trong hệ thống.
- Tạo, xem, cập nhật, và xóa:
  - **Tài khoản:** Giáo viên, Học sinh, Phụ huynh.
  - **Tổ chức lớp học:** Quản lý các Lớp học (`Classes`), Môn học (`Subjects`), và Tiết học (`Lessons`).
  - **Thông tin học tập:** Kỳ thi (`Exams`), Bài tập (`Assignments`), và Kết quả (`Results`).
  - **Thông tin chung:** Sự kiện (`Events`) và Thông báo (`Announcements`).

### 2. Giáo viên (Teacher)
- Xem danh sách các lớp học và học sinh mà mình phụ trách.
- Tạo và quản lý các Kỳ thi (`Exams`) và Bài tập (`Assignments`) cho các lớp học của mình.
- Nhập và quản lý Kết quả (`Results`) học tập của học sinh.
- Xem lịch dạy và các sự kiện liên quan.

### 3. Học sinh (Student)
- Xem thông tin cá nhân.
- Xem lịch học, lịch thi, và các sự kiện của trường/lớp.
- Xem danh sách bài tập và hạn nộp.
- Xem kết quả học tập và điểm số của mình.
- Xem các thông báo từ nhà trường và giáo viên.

### 4. Phụ huynh (Parent)
- Xem thông tin của con em mình.
- Theo dõi lịch học, lịch thi của con.
- Xem kết quả học tập và điểm số của con.
- Nhận các thông báo quan trọng từ nhà trường.

### Chức năng chung
- **Xác thực và phân quyền:** Sử dụng Clerk để quản lý đăng nhập và vai trò người dùng một cách an toàn.
- **Lọc và tìm kiếm:** Hầu hết các trang danh sách đều hỗ trợ tìm kiếm và lọc dữ liệu.
- **Phân trang:** Dữ liệu được phân trang để cải thiện hiệu suất và trải nghiệm người dùng.

## Công nghệ sử dụng

- **Framework:** [Next.js](https://nextjs.org/) (với App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Cơ sở dữ liệu:** [PostgreSQL](https://www.postgresql.org/)
- **Xác thực:** [Clerk](https://clerk.com/)
- **Biểu đồ & Lịch:** [Recharts](https://recharts.org/) & [React Calendar](https://github.com/wojtekmaj/react-calendar)

## Yêu cầu

- [Node.js](https://nodejs.org/en/) (phiên bản 18.x trở lên)
- [npm](https://www.npmjs.com/) hoặc [yarn](https://yarnpkg.com/)
- Một cơ sở dữ liệu PostgreSQL đang chạy

## Cài đặt

1.  **Clone a repository:**
    ```bash
    git clone [https://github.com/safak/full-stack-school.git](https://github.com/safak/full-stack-school.git)
    cd full-stack-school
    ```

2.  **Cài đặt các dependency:**
    ```bash
    npm install
    ```

3.  **Thiết lập biến môi trường:**
    Tạo một file `.env` ở thư mục gốc của dự án và thêm các biến môi trường cần thiết. File này sẽ chứa các thông tin nhạy cảm như chuỗi kết nối cơ sở dữ liệu và các khóa API từ Clerk.

    ```env
    # PostgreSQL
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    ```

4.  **Đồng bộ hóa Prisma Schema:**
    Áp dụng schema trong `prisma/schema.prisma` vào cơ sở dữ liệu của bạn.
    ```bash
    npx prisma migrate dev
    ```

5.  **Seed dữ liệu mẫu (tùy chọn):**
    Nếu bạn muốn có một bộ dữ liệu mẫu để thử nghiệm, hãy chạy lệnh seed.
    ```bash
    npx prisma db seed
    ```

## Bắt đầu

Sau khi hoàn tất các bước cài đặt, khởi động server development:
```bash
npm run dev
