/**
 * XQL TECH Corporate Website
 * Main JavaScript File
 */

// ===================================
// Multi-language Support (i18n)
// ===================================
var currentLang = 'id';

var translations = {
    id: {
        // Navigation
        nav_home: 'Beranda',
        nav_about: 'Tentang Kami',
        nav_services: 'Layanan',
        nav_portfolio: 'Portfolio',
        nav_contact: 'Kontak',

        // Hero
        hero_badge: '🚀 Partner Transformasi Digital Anda',
        hero_title: 'Solusi IT Inovatif untuk <span class="highlight">Pertumbuhan Bisnis</span> Anda',
        hero_desc: 'XQL TECH membantu perusahaan Anda bertransformasi melalui teknologi terkini. Dari pengembangan software hingga cloud solutions, kami siap menjadi partner strategis Anda.',
        hero_cta1: 'Konsultasi Gratis',
        hero_cta2: 'Lihat Layanan',

        // Stats
        stat_projects: 'Proyek Selesai',
        stat_clients: 'Klien Puas',
        stat_years: 'Tahun Pengalaman',

        // Cards
        card_cloud: 'Cloud Solutions',
        card_security: 'IT Security',
        card_dev: 'Software Dev',

        // About
        about_subtitle: 'Tentang Kami',
        about_title: 'Membangun Masa Depan Digital yang Lebih Baik',
        about_desc1: 'XQL TECH adalah perusahaan konsultan IT yang berdedikasi untuk membantu bisnis di Indonesia melakukan transformasi digital. Dengan pengalaman lebih dari 10 tahun, kami telah membantu berbagai perusahaan dari startup hingga enterprise.',
        about_desc2: 'Tim kami terdiri dari para ahli teknologi yang passionate dan berpengalaman di bidangnya. Kami percaya bahwa teknologi yang tepat dapat menjadi katalis pertumbuhan bisnis yang luar biasa.',
        value_innovation_title: 'Inovasi',
        value_innovation_desc: 'Kami selalu mencari cara baru dan lebih baik untuk memecahkan masalah teknologi.',
        value_quality_title: 'Kualitas',
        value_quality_desc: 'Setiap solusi yang kami berikan memenuhi standar kualitas tertinggi.',
        value_vision_title: 'Visi',
        value_vision_desc: 'Kami membantu Anda melihat masa depan digital bisnis Anda dengan jelas.',

        // Services
        services_subtitle: 'Layanan Kami',
        services_title: 'Solusi IT Lengkap untuk Bisnis Anda',
        services_desc: 'Kami menyediakan berbagai layanan IT yang dirancang untuk membantu bisnis Anda berkembang di era digital.',
        service1_title: 'Software Development',
        service1_desc: 'Pengembangan software custom yang disesuaikan dengan kebutuhan bisnis Anda. Dari web app hingga mobile app.',
        service1_f1: 'Web Application',
        service1_f2: 'Mobile Application',
        service1_f3: 'API Development',
        service1_f4: 'System Integration',
        service2_title: 'Cloud Solutions',
        service2_desc: 'Migrasi dan manajemen cloud infrastructure untuk meningkatkan skalabilitas dan efisiensi bisnis.',
        service2_f1: 'Cloud Migration',
        service2_f2: 'Infrastructure Setup',
        service2_f3: 'Cloud Monitoring',
        service2_f4: 'Cost Optimization',
        service3_title: 'IT Security',
        service3_desc: 'Perlindungan komprehensif untuk aset digital bisnis Anda dari ancaman siber.',
        service3_f1: 'Security Audit',
        service3_f2: 'Penetration Testing',
        service3_f3: 'Compliance Management',
        service3_f4: 'Incident Response',
        service4_title: 'IT Consulting',
        service4_desc: 'Konsultasi strategis untuk membantu Anda membuat keputusan teknologi yang tepat.',
        service4_f1: 'Digital Strategy',
        service4_f2: 'IT Roadmap Planning',
        service4_f3: 'Process Automation',
        service4_f4: 'Technology Assessment',

        // Portfolio
        portfolio_subtitle: 'Portfolio Kami',
        portfolio_title: 'Proyek yang Telah Kami Selesaikan',
        portfolio_desc: 'Beberapa studi kasus dari proyek-proyek terbaik kami yang telah memberikan dampak nyata bagi bisnis klien.',
        portfolio1_cat: 'Travel',
        portfolio1_title: 'Travel Agent Bali Best Holiday',
        portfolio1_desc: 'Mengembangkan platform travel yang memudahkan reservasi dan perencanaan liburan di Bali.',
        portfolio2_cat: 'E-Commerce',
        portfolio2_title: 'Inventory Management System',
        portfolio2_desc: 'Sistem manajemen inventaris terintegrasi yang mengurangi biaya operasional hingga 40%.',
        portfolio3_cat: 'Healthcare',
        portfolio3_title: 'Telemedicine Platform',
        portfolio3_desc: 'Platform telemedicine yang menghubungkan 1000+ dokter dengan pasien di seluruh Indonesia.',
        portfolio4_cat: 'Education',
        portfolio4_title: 'E-Learning Platform',
        portfolio4_desc: 'Platform pembelajaran online yang menghubungkan 500+ instruktur dengan 50.000+ siswa di seluruh Indonesia.',
        portfolio5_cat: 'Fintech',
        portfolio5_title: 'Digital Payment Gateway',
        portfolio5_desc: 'Gateway pembayaran digital yang memproses jutaan transaksi dengan keamanan tingkat tinggi dan integrasi multi-bank.',
        portfolio_users: 'Pengguna',
        portfolio_cost: 'Penghematan Biaya',
        portfolio_faster: 'Lebih Cepat',
        portfolio_doctors: 'Dokter',
        portfolio_available: 'Tersedia',
        portfolio_students: 'Siswa',
        portfolio_instructors: 'Instruktur',
        portfolio_transactions: 'Transaksi',
        portfolio_uptime: 'Uptime',

        // Contact
        contact_subtitle: 'Hubungi Kami',
        contact_title: 'Siap Memulai Transformasi Digital?',
        contact_desc: 'Konsultasikan kebutuhan IT Anda dengan tim ahli kami. Dapatkan solusi yang tepat untuk bisnis Anda.',
        contact_address_title: 'Alamat',
        contact_address: 'Jl. kamboja 1 no.38, RT 011, RW 011, Kalideres, Kota Administrasi Jakarta Barat, Daerah Khusus Ibukota DKI Jakarta 11840',
        contact_phone_title: 'Telepon',
        contact_email_title: 'Email',
        contact_hours_title: 'Jam Operasional',
        contact_hours: 'Senin - Jumat: 09:00 - 18:00 WIB',
        contact_form_name: 'Nama Lengkap',
        contact_form_email: 'Email',
        contact_form_phone: 'No. Telepon',
        contact_form_message: 'Pesan',
        contact_form_submit: 'Kirim Pesan',
        contact_form_name_ph: 'Masukkan nama Anda',
        contact_form_email_ph: 'Masukkan email Anda',
        contact_form_phone_ph: 'Masukkan nomor telepon',
        contact_form_message_ph: 'Ceritakan kebutuhan IT Anda...',

        // Footer
        footer_desc: 'Partner transformasi digital terpercaya untuk bisnis Anda. Kami membantu perusahaan berkembang melalui solusi IT inovatif.',
        footer_services: 'Layanan',
        footer_company: 'Perusahaan',
        footer_legal: 'Legal',
        footer_privacy: 'Kebijakan Privasi',
        footer_terms: 'Syarat & Ketentuan'
    },
    en: {
        // Navigation
        nav_home: 'Home',
        nav_about: 'About Us',
        nav_services: 'Services',
        nav_portfolio: 'Portfolio',
        nav_contact: 'Contact',

        // Hero
        hero_badge: '🚀 Your Digital Transformation Partner',
        hero_title: 'Innovative IT Solutions for Your <span class="highlight">Business Growth</span>',
        hero_desc: 'XQL TECH helps your company transform through cutting-edge technology. From software development to cloud solutions, we are ready to be your strategic partner.',
        hero_cta1: 'Free Consultation',
        hero_cta2: 'View Services',

        // Stats
        stat_projects: 'Projects Completed',
        stat_clients: 'Happy Clients',
        stat_years: 'Years Experience',

        // Cards
        card_cloud: 'Cloud Solutions',
        card_security: 'IT Security',
        card_dev: 'Software Dev',

        // About
        about_subtitle: 'About Us',
        about_title: 'Building a Better Digital Future',
        about_desc1: 'XQL TECH is an IT consulting company dedicated to helping businesses in Indonesia undergo digital transformation. With over 10 years of experience, we have helped various companies from startups to enterprises.',
        about_desc2: 'Our team consists of passionate and experienced technology experts. We believe that the right technology can be a catalyst for extraordinary business growth.',
        value_innovation_title: 'Innovation',
        value_innovation_desc: 'We always look for new and better ways to solve technology problems.',
        value_quality_title: 'Quality',
        value_quality_desc: 'Every solution we deliver meets the highest quality standards.',
        value_vision_title: 'Vision',
        value_vision_desc: 'We help you see the digital future of your business clearly.',

        // Services
        services_subtitle: 'Our Services',
        services_title: 'Complete IT Solutions for Your Business',
        services_desc: 'We provide various IT services designed to help your business thrive in the digital era.',
        service1_title: 'Software Development',
        service1_desc: 'Custom software development tailored to your business needs. From web apps to mobile apps.',
        service1_f1: 'Web Application',
        service1_f2: 'Mobile Application',
        service1_f3: 'API Development',
        service1_f4: 'System Integration',
        service2_title: 'Cloud Solutions',
        service2_desc: 'Cloud infrastructure migration and management to improve business scalability and efficiency.',
        service2_f1: 'Cloud Migration',
        service2_f2: 'Infrastructure Setup',
        service2_f3: 'Cloud Monitoring',
        service2_f4: 'Cost Optimization',
        service3_title: 'IT Security',
        service3_desc: 'Comprehensive protection for your business digital assets from cyber threats.',
        service3_f1: 'Security Audit',
        service3_f2: 'Penetration Testing',
        service3_f3: 'Compliance Management',
        service3_f4: 'Incident Response',
        service4_title: 'IT Consulting',
        service4_desc: 'Strategic consulting to help you make the right technology decisions.',
        service4_f1: 'Digital Strategy',
        service4_f2: 'IT Roadmap Planning',
        service4_f3: 'Process Automation',
        service4_f4: 'Technology Assessment',

        // Portfolio
        portfolio_subtitle: 'Our Portfolio',
        portfolio_title: 'Projects We Have Completed',
        portfolio_desc: 'Some case studies from our best projects that have delivered real impact to client businesses.',
        portfolio1_cat: 'Travel',
        portfolio1_title: 'Travel Agent Bali Best Holiday',
        portfolio1_desc: 'Developed a travel platform that simplifies reservation and vacation planning in Bali.',
        portfolio2_cat: 'E-Commerce',
        portfolio2_title: 'Inventory Management System',
        portfolio2_desc: 'Integrated inventory management system that reduces operational costs by up to 40%.',
        portfolio3_cat: 'Healthcare',
        portfolio3_title: 'Telemedicine Platform',
        portfolio3_desc: 'Telemedicine platform connecting 1000+ doctors with patients across Indonesia.',
        portfolio4_cat: 'Education',
        portfolio4_title: 'E-Learning Platform',
        portfolio4_desc: 'Online learning platform connecting 500+ instructors with 50,000+ students across Indonesia.',
        portfolio5_cat: 'Fintech',
        portfolio5_title: 'Digital Payment Gateway',
        portfolio5_desc: 'Digital payment gateway processing millions of transactions with high-level security and multi-bank integration.',
        portfolio_users: 'Users',
        portfolio_cost: 'Cost Savings',
        portfolio_faster: 'Faster',
        portfolio_doctors: 'Doctors',
        portfolio_available: 'Available',
        portfolio_students: 'Students',
        portfolio_instructors: 'Instructors',
        portfolio_transactions: 'Transactions',
        portfolio_uptime: 'Uptime',

        // Contact
        contact_subtitle: 'Contact Us',
        contact_title: 'Ready to Start Digital Transformation?',
        contact_desc: 'Consult your IT needs with our expert team. Get the right solution for your business.',
        contact_address_title: 'Address',
        contact_address: 'Jl. kamboja 1 no.38, RT 011, RW 011, Kalideres, West Jakarta, DKI Jakarta 11840',
        contact_phone_title: 'Phone',
        contact_email_title: 'Email',
        contact_hours_title: 'Operating Hours',
        contact_hours: 'Monday - Friday: 09:00 - 18:00 WIB',
        contact_form_name: 'Full Name',
        contact_form_email: 'Email',
        contact_form_phone: 'Phone Number',
        contact_form_message: 'Message',
        contact_form_submit: 'Send Message',
        contact_form_name_ph: 'Enter your name',
        contact_form_email_ph: 'Enter your email',
        contact_form_phone_ph: 'Enter phone number',
        contact_form_message_ph: 'Tell us about your IT needs...',

        // Footer
        footer_desc: 'Your trusted digital transformation partner. We help companies grow through innovative IT solutions.',
        footer_services: 'Services',
        footer_company: 'Company',
        footer_legal: 'Legal',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms & Conditions'
    }
};

function updateLanguage() {
    var t = translations[currentLang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.type === 'submit' || el.tagName === 'BUTTON') {
                    el.value = t[key];
                } else {
                    el.placeholder = t[key];
                }
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    document.documentElement.lang = currentLang;
}

function updateLangSwitcher() {
    var switcher = document.getElementById('langSwitcher');
    if (!switcher) return;
    var current = switcher.querySelector('.lang-current');
    var alt = switcher.querySelector('.lang-alt');
    if (currentLang === 'id') {
        if (current) current.textContent = 'ID';
        if (alt) alt.textContent = 'EN';
    } else {
        if (current) current.textContent = 'EN';
        if (alt) alt.textContent = 'ID';
    }
}

function switchLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('preferredLang', currentLang);
    updateLanguage();
    updateLangSwitcher();
}

// ===================================
// Navigation
// ===================================
function initNavigation() {
    var header = document.querySelector('.header');
    var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    var navMenu = document.querySelector('.nav-menu');
    var navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active nav link based on scroll position
        var sections = document.querySelectorAll('section[id]');
        var scrollPos = window.scrollY + 100;

        sections.forEach(function(section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Mobile menu toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// ===================================
// Contact Form
// ===================================
function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var formData = new FormData(form);
        var name = formData.get('name');
        var email = formData.get('email');
        var message = formData.get('message');

        if (!name || !email || !message) {
            alert(currentLang === 'id' ? 'Mohon lengkapi semua field yang wajib diisi.' : 'Please fill in all required fields.');
            return;
        }

        // Simulate form submission
        var submitBtn = form.querySelector('button[type="submit"]');
        var originalText = submitBtn ? submitBtn.textContent : '';
        if (submitBtn) {
            submitBtn.textContent = currentLang === 'id' ? 'Mengirim...' : 'Sending...';
            submitBtn.disabled = true;
        }

        setTimeout(function() {
            alert(currentLang === 'id' ? 'Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.' : 'Your message has been sent! We will contact you soon.');
            form.reset();
            if (submitBtn) {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }, 1500);
    });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    var animateElements = document.querySelectorAll('.service-card, .portfolio-card, .value-card, .stat-item, .info-item, .section-header');
    animateElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add CSS for animation
    var style = document.createElement('style');
    style.textContent = '.animate-in { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
}

// ===================================
// Smooth Scroll
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                var headerHeight = document.querySelector('.header').offsetHeight;
                var targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Portfolio Data Loading
// ===================================

/**
 * loadPortfolioFromStorage()
 * Memuat data portfolio dari localStorage (xql_site_data)
 * yang disimpan oleh admin dashboard.
 */
function loadPortfolioFromStorage() {
    var stored = localStorage.getItem('xql_site_data');
    if (!stored) return;

    try {
        var data = JSON.parse(stored);
        console.log('📂 Memuat data portfolio dari localStorage:', Object.keys(data));
        applyPortfolioData(data);
    } catch (e) {
        console.error('❌ Gagal memuat data dari localStorage:', e);
    }
}

/**
 * applyPortfolioData(data)
 * Menerapkan data portfolio ke halaman website.
 * Digunakan oleh loadPortfolioFromStorage dan loadFromDataJson.
 *
 * Struktur HTML index.html:
 * - Gambar: <img id="portfolioImg1"> ... <img id="portfolioImg5">
 * - Ikon:   <span id="portfolioIcon1"> ... <span id="portfolioIcon5">
 * - Card:   .portfolio-card (urutan ke-1 sampai ke-5 di dalam .portfolio-grid)
 * - Teks:   elemen dengan atribut data-i18n="portfolio1_title", dll.
 */
function applyPortfolioData(data) {
    // Helper: update semua elemen dengan data-i18n tertentu (innerHTML)
    function updateByI18n(key, value) {
        if (!value) return;
        document.querySelectorAll('[data-i18n="' + key + '"]').forEach(function(el) {
            el.innerHTML = value;
        });
    }

    // Helper: update semua elemen dengan data-i18n tertentu (textContent)
    function updateTextByI18n(key, value) {
        if (!value) return;
        document.querySelectorAll('[data-i18n="' + key + '"]').forEach(function(el) {
            el.textContent = value;
        });
    }

    // Ambil semua portfolio card dari grid
    var cards = document.querySelectorAll('.portfolio-grid .portfolio-card');

    // === PORTFOLIO 1 - 5 ===
    for (var i = 1; i <= 5; i++) {
        var prefix = 'portfolio' + i;

        // Update teks via data-i18n
        updateByI18n(prefix + '_title', data[prefix + '_title']);
        updateTextByI18n(prefix + '_cat', data[prefix + '_cat']);
        updateTextByI18n(prefix + '_desc', data[prefix + '_desc']);

        // Update gambar banner (img#portfolioImgN)
        var imgEl = document.getElementById('portfolioImg' + i);
        var iconEl = document.getElementById('portfolioIcon' + i);
        var imageKey = prefix + '_image';

        if (data[imageKey]) {
            if (imgEl) {
                imgEl.src = data[imageKey];
                imgEl.style.display = 'block';
            }
            // Sembunyikan emoji icon jika ada gambar
            if (iconEl) {
                iconEl.style.display = 'none';
            }
        }

        // Update result values (result-item ke-1 dan ke-2 di setiap card)
        var card = cards[i - 1];
        if (card) {
            var resultItems = card.querySelectorAll('.result-item');

            // Result 1 value
            if (resultItems[0] && data[prefix + '_result1_value']) {
                var valEl = resultItems[0].querySelector('.result-value');
                if (valEl) valEl.textContent = data[prefix + '_result1_value'];
            }
            // Result 1 label
            if (resultItems[0] && data[prefix + '_result1_label']) {
                var lblEl = resultItems[0].querySelector('.result-label');
                if (lblEl) lblEl.textContent = data[prefix + '_result1_label'];
            }
            // Result 2 value
            if (resultItems[1] && data[prefix + '_result2_value']) {
                var valEl2 = resultItems[1].querySelector('.result-value');
                if (valEl2) valEl2.textContent = data[prefix + '_result2_value'];
            }
            // Result 2 label
            if (resultItems[1] && data[prefix + '_result2_label']) {
                var lblEl2 = resultItems[1].querySelector('.result-label');
                if (lblEl2) lblEl2.textContent = data[prefix + '_result2_label'];
            }

            // Update icon/emoji jika diberikan dari admin
            if (data[prefix + '_icon'] && iconEl) {
                iconEl.textContent = data[prefix + '_icon'];
            }
        }

        // === PORTFOLIO ACTIVE/INACTIVE ===
        // Jika portfolio{i}_active === 'off', sembunyikan card
        var activeKey = prefix + '_active';
        if (data[activeKey] === 'off') {
            if (card) {
                card.style.display = 'none';
                console.log('🚫 Portfolio ' + i + ' disembunyikan (nonaktif dari admin)');
            }
        } else if (card) {
            // Pastikan card terlihat jika aktif
            card.style.display = '';
        }
    }

    // === HERO ===
    updateByI18n('hero_badge', data.hero_badge);
    updateByI18n('hero_title', data.hero_title);
    updateByI18n('hero_desc', data.hero_desc);

    // === STATISTIK ===
    if (data.stat_projects) { var el = document.querySelector('[data-i18n="stat_projects"]'); if (el) el.textContent = data.stat_projects; }
    if (data.stat_clients)  { var el = document.querySelector('[data-i18n="stat_clients"]');  if (el) el.textContent = data.stat_clients; }
    if (data.stat_years)    { var el = document.querySelector('[data-i18n="stat_years"]');    if (el) el.textContent = data.stat_years; }

    // === ABOUT ===
    updateByI18n('about_desc1', data.about_desc1);
    updateByI18n('value_vision_desc', data.value_vision_desc);

    // === LOGO ===
    if (data.logo_image) {
        document.querySelectorAll('.logo-image').forEach(function(img) { img.src = data.logo_image; });
    }

    console.log('✅ Data portfolio berhasil diterapkan ke halaman');
}

/**
 * loadFromDataJson()
 * Mencoba memuat data.json dari server (hosting).
 * Jika berhasil, data diterapkan ke halaman.
 * Jika gagal (file tidak ada), fallback ke localStorage.
 */
function loadFromDataJson() {
    fetch('data.json')
        .then(function(response) {
            if (!response.ok) throw new Error('data.json tidak ditemukan');
            return response.json();
        })
        .then(function(data) {
            console.log('📂 Memuat data dari data.json (hosting):', Object.keys(data));
            applyPortfolioData(data);
            // Simpan juga ke localStorage agar tetap sinkron
            localStorage.setItem('xql_site_data', JSON.stringify(data));
        })
        .catch(function(err) {
            console.log('ℹ️ data.json tidak ditemukan, menggunakan localStorage:', err.message);
            loadPortfolioFromStorage();
        });
}

// ===================================
// Initialize Everything on DOM Ready
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    var savedLang = localStorage.getItem('preferredLang');
    if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
        currentLang = savedLang;
    }
    updateLanguage();
    updateLangSwitcher();

    // Language switcher event
    var langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', switchLanguage);
    }

    // Initialize other features
    initNavigation();
    initContactForm();
    initScrollAnimations();
    initSmoothScroll();

    // Load portfolio: coba data.json dulu (hosting), fallback ke localStorage
    loadFromDataJson();
});