const express = require('express');
const path = require('path');
const app = express();
const PORT = 15000; // Cổng server

// Đường dẫn tuyệt đối đến thư mục chứa ảnh
const FACIAL_RECOGNITION_DIR = '/home/dong/NCKH_DATN_2025/CMS_SOURCE/face_recognition_CMS/';
const HUMAN_COUTER_DIR = '/home/dong/NCKH_DATN_2025/CMS_SOURCE/human_couter_CMS/';

// Kiểm tra quyền truy cập thư mục HUMAN_COUTER_DIR
const fs = require('fs');
fs.access(HUMAN_COUTER_DIR, fs.constants.R_OK, (err) => {
    if (err) {
        console.log(`Không có quyền đọc thư mục: ${HUMAN_COUTER_DIR}`);
    } else {
        console.log(`Thư mục ${HUMAN_COUTER_DIR} có quyền đọc.`);
    }
});

// Cấu hình Express để phục vụ ảnh từ thư mục evidence_image
app.use('/facial_recognition', express.static(path.join(FACIAL_RECOGNITION_DIR)));
app.use('/human_couter', express.static(path.join(HUMAN_COUTER_DIR)));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
