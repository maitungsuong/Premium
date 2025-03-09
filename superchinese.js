/*
Quantumult X Script - SuperChinese Pro Unlock
Author: maitungsuong
*/

const obj = JSON.parse($response.body);

// Sửa dữ liệu phản hồi để kích hoạt Pro
obj.data = {
  "is_vip": true,
  "vip_expire_time": "2099-12-31T23:59:59Z",
  "vip_type": "lifetime",
  "user_type": "vip"
};

$done({ body: JSON.stringify(obj) });