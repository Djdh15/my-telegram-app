// التحقق من تحميل مكتبة Telegram Web Apps
if (window.Telegram.WebApp) {
    // تهيئة التطبيق
    Telegram.WebApp.ready();

    // تغيير لون شريط العنوان
    Telegram.WebApp.setHeaderColor("#0088cc");

    // عرض اسم المستخدم كرسالة ترحيبية
    document.getElementById("container").innerHTML += `<p>مرحبًا، ${Telegram.WebApp.initDataUnsafe.user.first_name}</p>`;

    // دالة لإرسال رسالة إلى البوت
    function sendMessage() {
        Telegram.WebApp.showAlert("تم إرسال الرسالة!");
    }
} else {
    alert("يجب تشغيل هذا التطبيق عبر Telegram.");
}
