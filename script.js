// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // دالة التعامل مع نموذج الحجز
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // جمع البيانات من النموذج
            const ownerName = document.getElementById('ownerName').value;
            const ownerPhone = document.getElementById('ownerPhone').value;
            const dogName = document.getElementById('dogName').value;
            const dogBreed = document.getElementById('dogBreed').value;
            const checkIn = document.getElementById('checkIn').value;
            const checkOut = document.getElementById('checkOut').value;
            const notes = document.getElementById('notes').value;

            // رقم الواتساب المستلم
            const whatsappNumber = "962796257912";

            // تنسيق الرسالة
            const message = `
*حجز جديد - فندق الأرواح الملكية* 🐾
---------------------------
👤 *اسم المالك:* ${ownerName}
📞 *رقم الهاتف:* ${ownerPhone}
🐕 *اسم الكلب:* ${dogName}
🐩 *النوع:* ${dogBreed}
📅 *تاريخ الوصول:* ${checkIn}
📅 *تاريخ المغادرة:* ${checkOut}
📝 *ملاحظات:* ${notes}
---------------------------
يرجى تأكيد الحجز.
            `;

            // ترميز الرسالة للرابط
            const encodedMessage = encodeURIComponent(message);
            
            // فتح واتساب
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            window.open(whatsappURL, '_blank');
        });
    }

    // تأثير بسيط عند التمرير (Scroll Effect)
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 5%';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1rem 5%';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        }
    });
});