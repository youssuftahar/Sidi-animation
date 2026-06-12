import subprocess
import os

print("--- [نظام سيدي أنيميشن] جاري التحضير لتصدير فيديو آيفون 17 محلياً ---")

# إنشاء مجلد حفظ الفيديو تلقائياً إن لم يكن موجوداً
if not os.path.exists("./output"):
    os.makedirs("./output")

print("بدء الرندرة المحلية بجودة 4K فائقة الدقة وسرعة 60 فريم... يرجى الانتظار")

try:
    # تشغيل أمر ريموشن المحلي عبر بايثون مباشرة
    command = "npx remotion render PremiumProductShowcase src/index.js ./output/iPhone17_4K_Commercial.mp4"
    
    # تنفيذ الأمر ومراقبة المخرج
    result = subprocess.run(command, shell=True, check=True)
    
    print("\n✅ مبروك! تم التصدير محلياً بنجاح دون أي أخطاء.")
    print("تجد فيديو الإعلان الآن في مجلد: ./output/iPhone17_4K_Commercial.mp4")
except subprocess.CalledProcessError as e:
    print(f"\n❌ عذراً، حدث خطأ أثناء تشغيل الرندرة المحلية. تأكد من تثبيت Node.js.")