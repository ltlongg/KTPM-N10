/
|-- app/                      # Next.js App Router
|   |-- (auth)/               # Các trang xác thực (đăng nhập, đăng ký)
|   |-- (dashboard)/          # Layout chính của ứng dụng sau khi đăng nhập
|   |   |-- list/             # Các trang hiển thị danh sách (học sinh, giáo viên, v.v.)
|   |   |   |-- students/
|   |   |   |   |-- [id]/     # Trang chi tiết một học sinh
|   |   |   |   |-- page.tsx  # Trang danh sách học sinh
|   |   |-- page.tsx          # Trang dashboard chính
|   |   `-- layout.tsx
|-- components/               # Các component React có thể tái sử dụng
|-- lib/                      # Các hàm tiện ích, cấu hình
|   |-- prisma.ts             # Khởi tạo Prisma client
|   |-- settings.ts           # Các cài đặt chung của ứng dụng
|-- prisma/                   # Cấu hình Prisma
|   |-- schema.prisma         # Định nghĩa schema cơ sở dữ liệu
|   `-- seed.ts               # Script để tạo dữ liệu mẫu
|-- public/                   # Các tài sản tĩnh (hình ảnh, icon)
`-- ...                       # Các file cấu hình khác
