---
layout: post
title: "Cara membuat website personal page untuk personal branding secara gratis dengan github pages"
date: 2026-04-07
permalink: /blog/20260407/how-to-create-a-personal-page-for-free/
redirect_from:
  - /blog/20260407/
description: "Ini adalah langkah dimana kamu bisa membuat website sendiri secara gratis untuk personal branding atau portofolio dengan tampilan yang keren."
tags: [introduction, programming, webdev, journey]
published: true
image: /assets/img/posts/how-to-create-personal-website.png
---
<img src="/assets/img/posts/how-to-create-personal-website.png" alt="Cara membuat website personal page untuk personal branding secara gratis dengan github pages" style="width: 400px; height: 200px; margin-bottom: 20px;">
# Cara membuat website personal page untuk personal branding secara gratis dengan github pages 

Halo barudak Simply Karya! Setelah kemarin kita memulai perjalanan dengan ["Hello World!"](https://synnaulaid.github.io/blog/20260406/finally-hello-world/), hari ini kita akan melangkah lebih jauh dengan membuat website personal page sendiri secara gratis menggunakan GitHub Pages. Ini adalah langkah penting untuk membangun personal branding dan menunjukkan keahlian kita di dunia digital.

## Apa itu Github Pages?

Github Pages adalah layanan hosting gratis yang disediakan oleh Github untuk menyajikan halaman web statis. Dengan menggunakan Github Pages, kita bisa dengan mudah membuat dan menghosting website pribadi tanpa perlu khawatir tentang biaya hosting atau konfigurasi server yang rumit. Apalagi biaya domain yang terbilang cukup mahal untuk sebagian orang, dengan Github Pages kita bisa menggunakan subdomain gratis seperti `username.github.io` untuk menampilkan website kita.

## Mengapa dengan Github Pages?
- **Gratis**: Tidak perlu membayar untuk hosting atau domain, dan domain memiliki domain rating tinggi karena berada di bawah domain github.io.
- **Mudah digunakan**: Cukup dengan beberapa langkah sederhana, kita bisa memiliki website pribadi.
- **Integrasi langsung dengan Github**:  Kita bisa langsung mengelola konten website melalui repository Github kita, yang memudahkan untuk memperbarui dan memelihara website.
- **Kustomisasi**: Kita bisa menggunakan berbagai tema dan template yang tersedia, atau bahkan membuat desain sendiri sesuai dengan keinginan kita.

Walaupun Github Pages adalah website statis, kita bisa membuatnya terlihat dinamis untuk menampilkan portofolio, blog, atau jurnal peribadi dengan menggunakan [Jekyll](https://jekyllrb.com/), sebuah static site generator yang terintegrasi dengan Github Pages.

## Langkah-langkah Membuat Website Personal Page dengan Github Pages

Pertama kita perlu memiliki akun Github. Jika belum punya, silakan daftar terlebih dahulu di [Github](https://github.com/). Setelah itu, ikuti langkah-langkah berikut:

1. **Buat Repository Baru**: Buat repository baru dengan nama `username.github.io`, ganti `username` dengan nama pengguna Github kamu. Pastikan repository ini bersifat public. atau jika tidak mau ribet dan malas kamu bisa fork repository yang sudah ada dengan template yang sudah di sediakan didalam repository tersebut. 

2. **Pilih Template**: Github menyediakan berbagai template yang bisa kamu gunakan untuk memulai website kamu. Pilih template yang sesuai dengan gaya dan kebutuhan kamu. Kamu juga bisa mencari template Jekyll di internet yang sesuai dengan keinginan kamu. atau biar aku sediakan karena aku sangat baik hati xixixi. kamu hanya perlu fork repository ini [Personal Page Template](https://github.com/synnaulaid/synnaulaid.github.io) yang sudah ku buat untuk kamu yang ingin membuat website personal page dengan mudah dan cepat.

3. Setelah kamu fork repository tersebut, kamu harus mengubah nama repository tersebut menjadi `username.github.io` ganti `username` dengan nama pengguna Github mu. Setelah itu, kamu bisa langsung mengakses website kamu di `https://username.github.io`. jika belum muncul aktifkan github pages di setting repository kamu dengan memilih branch `main` atau `master` sebagai sumbernya. selanjutnya kamu bisa langsung edit file `index.md` untuk mengubah konten website kamu sesuai dengan keinginan mu. kamu bisa menambahkan halaman baru dengan membuat file baru dengan ektensi `.md` atau `.html` dan menambahkan link ke halaman tersebut di file `index.md`. kamu juga bisa mengubah tampilan website kamu dengan mengedit file `style.css` yang ada di folder `assets/css/`.

4. **Customisasi Konten**: Sesuaikan konten website kamu dengan menambahkan informasi tentang diri kamu, keahlian, pengalaman, dan portofolio. Kamu juga bisa menambahkan blog untuk berbagi pemikiran dan pengalaman kamu. Jangan lupa untuk menambahkan foto profil yang menarik dan profesional untuk meningkatkan daya tarik website kamu.

5. **Setup Posts**: Hapus semua file di dalam dir `_posts/` dan buat file baru dengan nama format file (yyyy-mm-dd-slug.md) contoh `2026-04-07-create-personal-page.md` dengan isi seperti ini:



<div class="code-container">
<button class="copy-btn">Copy</button>
<pre class="block"><code id="myCode">
---
layout: post
title: "isi judul artikel kamu disini"
date: 2026-04-07
permalink: /blog/20260407/slug-artikel-kamu/
description: "isi deskripsi artikel kamu disini"
tags: [tag1, tag2, tag3]
published: true
image: /assets/img/posts/namafilegambar.png
---
isi konten artikel kamu disini
</code></pre>
</div>

6. **Publikasikan Website**: Setelah kamu selesai mengedit dan menyesuaikan website kamu, pastikan untuk commit perubahan dan push ke repository Github kamu. Setelah itu, website kamu akan otomatis terpublikasi dan bisa diakses oleh siapa saja. 

Dan jika kamu sudah advance kamu bisa menambahkan fitur tambahan seperti Google Analytics untuk melacak pengunjung, atau menambahkan form kontak untuk memudahkan orang menghubungi kamu.
Dengan mengikuti Dokumentasi pada repository yang sudah ku buat disini [Documentation](https://github.com/synnaulaid/synnaulaid.github.io/blob/master/docs/intro.md) kamu bisa dengan mudah membuat website personal page yang menarik dan profesional untuk meningkatkan personal branding kamu di dunia digital. Selamat mencoba dan semoga sukses!

Jika kamu mengalami kesulitan atau memiliki pertanyaan, jangan ragu untuk bertanya di pada Tuhanmu wkwkwk canda, 
kamu bisa bertanya atau konsultasi pada ku xixixixi di kokntak tertera di website ini. Aku akan dengan senang hati membantu kamu untuk membuat website personal page yang keren dan profesional. Jangan lupa untuk terus belajar dan berkreasi dengan website kamu, karena personal branding yang kuat bisa membuka banyak peluang di masa depan. Semangat barudak Simply Karya!