// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Generate QR Code untuk Pembayaran
    var qrcodePayment = new QRCode(document.getElementById("qrcode-payment"), {
        text: "https://link-pembayaran-anda.com",
        width: 128,
        height: 128
    });

    // Generate QR Code untuk Share File
    var qrcodeShare = new QRCode(document.getElementById("qrcode-share"), {
        text: "https://link-share-file-anda.com",
        width: 128,
        height: 128
    });
<script src="https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js"></script>

