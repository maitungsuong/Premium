// File: your_facebook_ads.js & your_instagram_ads.js
let obj = JSON.parse($response.body);
const url = $request.url;

// Danh sách API cần xử lý (chỉ nhắm mục tiêu quảng cáo)
const adKeywords = [
  '/ads', 
  '/ad_', 
  '/sponsored', 
  '/advertisers',
  '/adcampaign',
  '/delivery'
];

// Kiểm tra xem URL có chứa từ khóa quảng cáo không
const isAdRequest = adKeywords.some(keyword => url.includes(keyword));

if (isAdRequest) {
  // Xóa dữ liệu quảng cáo
  if (obj.ads) obj.ads = [];
  if (obj.ad) obj.ad = null;
  if (obj.data) obj.data = obj.data.filter(item => !item.ad);
  
  // Ghi đè thông báo (tuỳ chọn)
  obj.error = { message: "Ads blocked by script" };
}

$done({ body: JSON.stringify(obj) });