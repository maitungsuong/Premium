// Hey China Premium Unlock Script
// Author: maitungsuong
// Description: Mở khóa Premium cho Hey China
// Quantumult X / Loon / Surge

let response = JSON.parse($response.body);

// Giả mạo tài khoản Premium
response.data = {
  "user": {
    "id": 12345678,
    "username": "VIP_User",
    "premium": true,
    "subscription": {
      "status": "active",
      "expires_at": "2099-12-31T23:59:59Z"
    }
  },
  "lessons": {
    "unlocked": true,
    "access": "full"
  }
};

$done({ body: JSON.stringify(response) });