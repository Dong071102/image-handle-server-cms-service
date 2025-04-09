# 🖼️ Image Handle Services CMS

**Image Handle Services CMS** là một dịch vụ đơn giản sử dụng **Node.js + Express** để phục vụ ảnh tĩnh được sinh ra bởi hệ thống nhận diện khuôn mặt (Face Recognition) và hệ thống đếm người (Human Counter). Dịch vụ giúp client có thể truy cập các ảnh snapshot đã lưu thông qua HTTP.

---

## 🚀 Chức năng chính

- Cung cấp ảnh nhận diện khuôn mặt từ hệ thống `face_recognition_CMS`
- Cung cấp ảnh đếm người từ hệ thống `human_couter_CMS`
- Triển khai đơn giản với Express, không cần thêm framework phức tạp

---

## 📁 Cấu trúc thư mục

```
image_handle_services_cms/
├── server.js                  # File chính khởi chạy Express server
├── package.json               # Thông tin dependencies
├── /face_recognition_CMS/     # Link tới ảnh nhận diện khuôn mặt
├── /human_couter_CMS/         # Link tới ảnh đếm người
```

---

## ⚙️ Cài đặt & chạy server

### 1. Cài Node.js nếu chưa có

```bash
sudo apt install nodejs npm -y
```

### 2. Cài dependencies

```bash
npm install
```

### 3. Chạy server

```bash
node server.js
```

---

## 🌐 Truy cập ảnh qua URL

### 🔹 Nhận diện khuôn mặt

```http
http://localhost:15000/facial_recognition/evidence_image/YYYY/MM/DD/<schedule_id>_<student_id>.jpg
```

### 🔹 Ảnh từ hệ thống đếm người

```http
http://localhost:15000/human_couter/person_couter_image/YYYY/MM/DD/<schedule_id>__<camera_id>.jpg
```

---

## 🔧 Tuỳ chỉnh đường dẫn ảnh

Trong `server.js`, bạn có thể chỉnh:

```js
const FACIAL_RECOGNITION_DIR = '/your/custom/path/face_recognition_CMS/';
const HUMAN_COUTER_DIR = '/your/custom/path/human_couter_CMS/';
```

---

## 📤 Kết hợp với hệ thống CMS

Các API backend CMS có thể sử dụng URL từ server này để gửi ảnh cho frontend hiển thị điểm danh, báo cáo, kiểm tra.

---

## 👤 Tác giả

- **Tên**: Vũ Bá Đông  
- 📩 Email: [vubadong071102@gmail.com](mailto:vubadong071102@gmail.com)

---

## 📄 License

MIT License