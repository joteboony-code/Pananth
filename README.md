# Pananth HTML Frontend

Repository for the Pananth rental frontend HTML.

Deploy this repo to the Cloudflare frontend Worker/Page:

```text
https://pananth.joteboony.workers.dev
```

GitHub Actions deploy target:

```text
Worker name: pananth
Assets directory: public
```

Important:

- This repo is for the frontend `index.html` only.
- Do not upload `worker.js` here.
- The frontend calls the backend Worker at:

```text
https://white-rice-cf72.joteboony.workers.dev
```

If the backend Worker URL changes later, update `WORKER_URL` in `index.html`.


## v15.4.2.53
- เพิ่มไฟล์ `public/Rental_Agreement_V3.pdf` สำหรับปุ่มดาวน์โหลดแบบฟอร์มสัญญาเช่าในหน้าเว็บ


## v15.4.2.56 Tenant Portal LIFF beta
- เพิ่ม `tenant.html` สำหรับหน้า Tenant Portal ที่เปิดจาก Rich Menu/LIFF
- ต้องใส่ LIFF ID ในไฟล์ tenant.html ก่อนใช้งานจริง


## v15.4.2.72 LINE quota dashboard
- เพิ่มการ์ดแสดงโควตาส่งข้อความ LINE OA บนหน้าเจ้าของ
- แสดงจำนวนที่ใช้ไป / คงเหลือ / เปอร์เซ็นต์การใช้งาน และปุ่มรีเฟรช


## v15.4.2.73 Hash page routing
- ปรับเมนูหน้าเจ้าของให้มี URL แบบ `#dashboard`, `#meter`, `#payment-history`, `#settings` โดยยังเป็น HTML ไฟล์เดียว
- รีเฟรชหน้าแล้วกลับเข้าเมนูเดิมได้หลังปลดล็อก PIN
- ปุ่มย้อนกลับในหน้าและ Back ของเบราว์เซอร์ทำงานเป็นลำดับหน้าได้ดีขึ้น
