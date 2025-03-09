// Unlock Spotify Premium + Download Feature
var obj = JSON.parse($response.body);

// Kích hoạt Premium & Cho phép tải nhạc
if (obj && obj.data) {
    obj.data.account_type = "premium";
    obj.data.product_state = "active";
    obj.data.capabilities.can_play_offline = true;
    obj.data.capabilities.can_stream_high_quality = true;
    obj.data.capabilities.can_skip_without_limit = true;
}

$done({ body: JSON.stringify(obj) });