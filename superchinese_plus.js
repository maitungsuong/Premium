/*
 * SuperChinese Plus Unlock
 * Quantumult X Script
 * Author: maitungsuong
 */

var obj = JSON.parse($response.body);

// Kiểm tra nếu có dữ liệu người dùng
if (obj && obj.data) {
    obj.data.is_vip = true;  // Kích hoạt VIP
    obj.data.vip_expired_at = "2099-12-31T23:59:59Z"; // Gia hạn vĩnh viễn
    obj.data.membership = {
        "type": "plus",
        "status": "active",
        "expire_time": "2099-12-31T23:59:59Z"
    };
}

$done({ body: JSON.stringify(obj) });