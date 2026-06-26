# Product Requirement Document (PRD)

## Project Name: XQL TECH Corporate Website
**Author:** Product Management Team  
**Date:** June 23, 2026  
**Status:** Draft  

---

## 1. Executive Summary

### 1.1 Objective
Membangun sebuah website profil perusahaan (corporate website) yang modern, profesional, dan responsif untuk **XQL TECH**, sebuah perusahaan konsultan IT. Website ini bertujuan untuk membangun kredibilitas digital, menampilkan keahlian perusahaan, serta berfungsi sebagai kanal utama untuk konversi *lead* (calon klien bisnis/B2B).

### 1.2 Target Audience
*   **Pemilik Bisnis & Eksekutif (CEO, CTO, CIO):** Mencari solusi transformasi digital atau outsourcing IT.
*   **Manajer Proyek / Operasional:** Mencari vendor IT yang andal untuk kebutuhan spesifik.
*   **Calon Karyawan:** Menilai kultur dan reputasi perusahaan untuk peluang karir.

---

## 2. Scope of Work & Features

### 2.1 MVP Features (Minimum Viable Product)
Website akan diluncurkan dengan fitur-fitur esensial berikut:

*   **Content Management System (CMS):** Menggunakan WordPress atau Headless CMS agar tim internal dapat memperbarui konten dengan mudah.
*   **Responsive Design:** Optimasi penuh untuk perangkat Mobile, Tablet, dan Desktop.
*   **Multi-language Support:** Bahasa Indonesia dan Bahasa Inggris (English).
*   **Lead Generation Form:** Formulir kontak interaktif yang terintegrasi dengan email perusahaan.

### 2.2 Sitemaps & Page Structure
1.  **Homepage (Beranda):** 
    *   Hero section dengan value proposition yang kuat.
    *   Sekilas tentang layanan utama.
    *   *Social proof* (Klien terdahulu / Logo mitra).
    *   CTA (Call to Action) utama ke halaman kontak.
2.  **About Us (Tentang Kami):**
    *   Visi, misi, dan nilai-nilai perusahaan.
    *   Profil singkat manajemen atau tim inti (opsional).
3.  **Services (Layanan):**
    *   Detail layanan IT (misal: *Software Development, Cloud Solutions, IT Security, IT Consulting*).
4.  **Portfolio / Case Studies:**
    *   Daftar proyek yang berhasil diselesaikan beserta dampaknya bagi bisnis klien.
5.  **Insights / Blog:**
    *   Artikel edukatif seputar tren teknologi untuk meningkatkan SEO organik.
6.  **Contact Us (Hubungi Kami):**
    *   Formulir konsultasi, peta lokasi kantor, nomor telepon, dan email.

---

## 3. Non-Functional Requirements

### 3.1 Performance & Security
*   **Loading Time:** Halaman utama harus memuat dalam waktu kurang dari 2.5 detik (skor Core Web Vitals hijau).
*   **Security:** Wajib menggunakan SSL/HTTPS, proteksi dasar dari DDoS, dan enkripsi data formulir.
*   **SEO Optimization:** Struktur URL yang bersih, pengisian meta tags (title & description), serta sitemap XML otomatis.

### 3.2 Analytics & Tracking
*   Integrasi **Google Analytics 4 (GA4)** untuk memantau trafik.
*   Integrasi **Google Search Console** untuk indeks Google.

---

## 4. User Personas & User Stories

### 4.1 User Persona
> **Nama:** Budi, 42 tahun  
> **Peran:** Direktur Operasional Perusahaan Retail  
> **Kebutuhan:** Mencari konsultan IT untuk memodernisasi sistem inventaris perusahaannya yang mulai usang.  
> **Goal di Website:** Menemukan layanan yang sesuai, melihat portofolio proyek serupa, dan menjadwalkan diskusi awal dengan cepat.

### 4.2 User Stories
*   Sebagai **Pengunjung**, saya ingin melihat daftar layanan dengan jelas di halaman utama agar saya tahu apakah XQL TECH bisa menyelesaikan masalah bisnis saya.
*   Sebagai **Calon Klien**, saya ingin mengisi formulir kontak dan mendapatkan konfirmasi bahwa pesan saya telah terkirim agar saya tahu kapan harus mengharapkan balasan.

---

## 5. Timeline & Milestones

| Tahapan Proyek | Deskripsi | Estimasi Durasi |
| :--- | :--- | :--- |
| **Phase 1: Discovery & Wireframing** | Penentuan konsep, UI/UX Wireframe, dan Copywriting konten awal. | 2 Minggu |
| **Phase 2: UI/UX High-Fidelity Design** | Pembuatan desain visual final (Desktop & Mobile). | 2 Minggu |
| **Phase 3: Development** | Coding, integrasi CMS, dan konfigurasi database. | 4 Minggu |
| **Phase 4: QA & Testing** | Pengujian bug, performa kecepatan, dan kecocokan browser. | 1 Minggu |
| **Phase 5: Deployment & Launch** | Pemindahan ke server produksi dan *Go-Live*. | 3 Hari |

---

## 6. Success Metrics (KPI)
*   **Trafik Bulanan:** Mencapai 1.000+ *unique visitors* dalam 3 bulan pertama setelah peluncuran.
*   **Conversion Rate:** Minimal 2% dari total pengunjung mengisi formulir "Contact Us".
*   **Bounce Rate:** Di bawah 45% untuk memastikan konten yang disajikan relevan.