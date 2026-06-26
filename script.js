/**
 * XQL TECH Corporate Website
 * Main JavaScript File
 */

// ===================================
// Multi-language Support (i18n)
// ===================================
const translations = {
    id: {
        // Navigation
        nav_home: 'Beranda',
        nav_about: 'Tentang Kami',
        nav_services: 'Layanan',
        nav_portfolio: 'Portfolio',
        nav_blog: 'Insights',
        nav_contact: 'Kontak',
        
        // Hero Section
        hero_badge: '🚀 Partner Transformasi Digital Anda',
        hero_title: 'Solusi IT Inovatif untuk <span class="highlight">Pertumbuhan Bisnis</span> Anda',
        hero_desc: 'XQL TECH membantu perusahaan Anda bertransformasi melalui teknologi terkini. Dari pengembangan software hingga cloud solutions, kami siap menjadi partner strategis Anda.',
        hero_cta1: 'Konsultasi Gratis',
        hero_cta2: 'Lihat Layanan',
        stat_projects: 'Proyek Selesai',
        stat_clients: 'Klien Puas',
        stat_years: 'Tahun Pengalaman',
        card_cloud: 'Cloud Solutions',
        card_security: 'IT Security',
        card_dev: 'Software Dev',
        
        // Clients
        clients_title: 'Dipercaya oleh perusahaan terkemuka',
        
        // About Section
        about_subtitle: 'Tentang Kami',
        about_title: 'Membangun Masa Depan Digital yang Lebih Baik',
        about_desc1: 'XQL TECH adalah perusahaan konsultan IT yang berdedikasi untuk membantu bisnis di Indonesia melakukan transformasi digital. Didirikan pada tahun 2015, kami telah membantu lebih dari 50 perusahaan dari berbagai industri.',
        about_desc2: 'Dengan tim ahli yang berpengalaman dan sertifikasi internasional, kami memberikan solusi IT yang tidak hanya canggih secara teknologi, tetapi juga selaras dengan tujuan bisnis Anda.',
        value_vision_title: 'Visi',
        value_vision_desc: 'Menjadi partner transformasi digital terdepan di Asia Tenggara',
        value_mission_title: 'Misi',
        value_mission_desc: 'Memberikan solusi IT inovatif yang mendorong pertumbuhan bisnis klien',
        value_values_title: 'Nilai',
        value_values_desc: 'Integritas, Inovasi, Kolaborasi, dan Keunggulan dalam setiap proyek',
        
        // Services Section
        services_subtitle: 'Layanan Kami',
        services_title: 'Solusi IT Lengkap untuk Bisnis Anda',
        services_desc: 'Kami menawarkan berbagai layanan IT yang dirancang untuk membantu bisnis Anda berkembang di era digital',
        service1_title: 'Software Development',
        service1_desc: 'Pengembangan aplikasi web dan mobile custom yang sesuai dengan kebutuhan bisnis Anda. Menggunakan teknologi terkini seperti React, Node.js, dan cloud-native architecture.',
        service1_f1: 'Web Application Development',
        service1_f2: 'Mobile App Development',
        service1_f3: 'API Integration',
        service1_f4: 'Legacy System Modernization',
        service2_title: 'Cloud Solutions',
        service2_desc: 'Migrasi dan optimasi infrastruktur cloud untuk meningkatkan skalabilitas dan efisiensi biaya. Partner resmi AWS, Azure, dan Google Cloud.',
        service2_f1: 'Cloud Migration',
        service2_f2: 'Infrastructure as Code',
        service2_f3: 'DevOps Implementation',
        service2_f4: 'Cost Optimization',
        service3_title: 'IT Security',
        service3_desc: 'Proteksi menyeluruh untuk aset digital Anda. Dari penetration testing hingga security audit, kami memastikan bisnis Anda aman dari ancaman siber.',
        service3_f1: 'Security Audit & Assessment',
        service3_f2: 'Penetration Testing',
        service3_f3: 'Compliance Consulting',
        service3_f4: 'Incident Response',
        service4_title: 'IT Consulting',
        service4_desc: 'Konsultasi strategis untuk transformasi digital dan optimasi proses bisnis. Kami membantu Anda membuat roadmap teknologi yang tepat.',
        service4_f1: 'Digital Transformation Strategy',
        service4_f2: 'IT Roadmap Planning',
        service4_f3: 'Process Automation',
        service4_f4: 'Technology Assessment',
        
        // Portfolio Section
        portfolio_subtitle: 'Portfolio Kami',
        portfolio_title: 'Proyek yang Telah Kami Selesaikan',
        portfolio_desc: 'Beberapa studi kasus dari proyek-proyek terbaik kami yang telah memberikan dampak nyata bagi bisnis klien',
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
        
        // Blog Section
        blog_subtitle: 'Insights & Blog',
        blog_title: 'Artikel Terbaru Seputar Teknologi',
        blog_desc: 'Tetap update dengan tren teknologi terbaru dan insights dari para ahli kami',
        blog1_title: 'Bagaimana AI Mengubah Lanskap Bisnis di 2026',
        blog1_desc: 'Pelajari bagaimana artificial intelligence dapat meningkatkan efisiensi operasional dan menciptakan peluang baru bagi bisnis Anda.',
        blog2_title: 'Panduan Lengkap Migrasi ke Cloud untuk Enterprise',
        blog2_desc: 'Strategi dan best practices untuk migrasi infrastruktur legacy ke cloud tanpa mengganggu operasional bisnis.',
        blog3_title: '5 Ancaman Keamanan Siber yang Perlu Diwaspadai',
        blog3_desc: 'Kenali ancaman keamanan siber terbaru dan langkah-langkah pencegahan yang dapat Anda terapkan.',
        blog_readmore: 'Baca Selengkapnya →',
        
        // Contact Section
        contact_subtitle: 'Hubungi Kami',
        contact_title: 'Siap Memulai Transformasi Digital?',
        contact_desc: 'Konsultasikan kebutuhan IT Anda dengan tim ahli kami. Dapatkan solusi yang tepat untuk bisnis Anda.',
        contact_address_title: 'Alamat',
        contact_address: 'Jl. kamboja 1 no.38, RT 011, RW 011, Kalideres, Kota Administrasi Jakarta Barat, Daerah Khusus Ibukota DKI Jakarta 11840',
        contact_phone_title: 'Telepon',
        contact_hours_title: 'Jam Operasional',
        contact_hours: 'Senin - Jumat: 09:00 - 18:00 WIB',
        form_name: 'Nama Lengkap',
        form_company: 'Perusahaan',
        form_email: 'Email',
        form_phone: 'No. Telepon',
        form_service: 'Layanan yang Diminati',
        form_select: 'Pilih Layanan',
        form_opt1: 'Software Development',
        form_opt2: 'Cloud Solutions',
        form_opt3: 'IT Security',
        form_opt4: 'IT Consulting',
        form_message: 'Pesan',
        form_submit: 'Kirim Pesan',
        form_success: 'Pesan Anda telah terkirim! Tim kami akan menghubungi Anda dalam 1x24 jam.',
        
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
        nav_blog: 'Insights',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_badge: '🚀 Your Digital Transformation Partner',
        hero_title: 'Innovative IT Solutions for Your <span class="highlight">Business Growth</span>',
        hero_desc: 'XQL TECH helps your company transform through cutting-edge technology. From software development to cloud solutions, we are ready to be your strategic partner.',
        hero_cta1: 'Free Consultation',
        hero_cta2: 'View Services',
        stat_projects: 'Projects Completed',
        stat_clients: 'Happy Clients',
        stat_years: 'Years Experience',
        card_cloud: 'Cloud Solutions',
        card_security: 'IT Security',
        card_dev: 'Software Dev',
        
        // Clients
        clients_title: 'Trusted by leading companies',
        
        // About Section
        about_subtitle: 'About Us',
        about_title: 'Building a Better Digital Future',
        about_desc1: 'XQL TECH is an IT consulting company dedicated to helping businesses in Indonesia undergo digital transformation. Founded in 2015, we have helped more than 50 companies from various industries.',
        about_desc2: 'With an experienced team of experts and international certifications, we provide IT solutions that are not only technologically advanced, but also aligned with your business goals.',
        value_vision_title: 'Vision',
        value_vision_desc: 'To be the leading digital transformation partner in Southeast Asia',
        value_mission_title: 'Mission',
        value_mission_desc: 'Delivering innovative IT solutions that drive client business growth',
        value_values_title: 'Values',
        value_values_desc: 'Integrity, Innovation, Collaboration, and Excellence in every project',
        
        // Services Section
        services_subtitle: 'Our Services',
        services_title: 'Complete IT Solutions for Your Business',
        services_desc: 'We offer a range of IT services designed to help your business thrive in the digital era',
        service1_title: 'Software Development',
        service1_desc: 'Custom web and mobile application development tailored to your business needs. Using the latest technologies like React, Node.js, and cloud-native architecture.',
        service1_f1: 'Web Application Development',
        service1_f2: 'Mobile App Development',
        service1_f3: 'API Integration',
        service1_f4: 'Legacy System Modernization',
        service2_title: 'Cloud Solutions',
        service2_desc: 'Cloud infrastructure migration and optimization to improve scalability and cost efficiency. Official partner of AWS, Azure, and Google Cloud.',
        service2_f1: 'Cloud Migration',
        service2_f2: 'Infrastructure as Code',
        service2_f3: 'DevOps Implementation',
        service2_f4: 'Cost Optimization',
        service3_title: 'IT Security',
        service3_desc: 'Comprehensive protection for your digital assets. From penetration testing to security audit, we ensure your business is safe from cyber threats.',
        service3_f1: 'Security Audit & Assessment',
        service3_f2: 'Penetration Testing',
        service3_f3: 'Compliance Consulting',
        service3_f4: 'Incident Response',
        service4_title: 'IT Consulting',
        service4_desc: 'Strategic consulting for digital transformation and business process optimization. We help you create the right technology roadmap.',
        service4_f1: 'Digital Transformation Strategy',
        service4_f2: 'IT Roadmap Planning',
        service4_f3: 'Process Automation',
        service4_f4: 'Technology Assessment',
        
        // Portfolio Section
        portfolio_subtitle: 'Our Portfolio',
        portfolio_title: 'Projects We Have Completed',
        portfolio_desc: 'Some case studies from our best projects that have delivered real impact to client businesses',
        portfolio1_cat: 'Fintech',
        portfolio1_title: 'Digital Banking Platform',
        portfolio1_desc: 'Developed a digital banking platform serving 500,000+ users with 99.9% uptime.',
        portfolio2_cat: 'E-Commerce',
        portfolio2_title: 'Inventory Management System',
        portfolio2_desc: 'Integrated inventory management system that reduced operational costs by up to 40%.',
        portfolio3_cat: 'Healthcare',
        portfolio3_title: 'Telemedicine Platform',
        portfolio3_desc: 'Telemedicine platform connecting 1000+ doctors with patients across Indonesia.',
        portfolio4_cat: 'Education',
        portfolio4_title: 'E-Learning Platform',
        portfolio4_desc: 'An online learning platform connecting 500+ instructors with 50,000+ students across Indonesia.',
        portfolio5_cat: 'Fintech',
        portfolio5_title: 'Digital Payment Gateway',
        portfolio5_desc: 'A digital payment gateway processing millions of transactions with high-level security and multi-bank integration.',
        portfolio_users: 'Users',
        portfolio_cost: 'Cost Savings',
        portfolio_faster: 'Faster',
        portfolio_doctors: 'Doctors',
        portfolio_available: 'Available',
        portfolio_students: 'Students',
        portfolio_instructors: 'Instructors',
        
        // Blog Section
        blog_subtitle: 'Insights & Blog',
        blog_title: 'Latest Technology Articles',
        blog_desc: 'Stay updated with the latest technology trends and insights from our experts',
        blog1_title: 'How AI is Transforming the Business Landscape in 2026',
        blog1_desc: 'Learn how artificial intelligence can improve operational efficiency and create new opportunities for your business.',
        blog2_title: 'Complete Guide to Cloud Migration for Enterprise',
        blog2_desc: 'Strategies and best practices for migrating legacy infrastructure to the cloud without disrupting business operations.',
        blog3_title: '5 Cyber Security Threats to Watch Out For',
        blog3_desc: 'Recognize the latest cyber security threats and prevention measures you can implement.',
        blog_readmore: 'Read More →',
        
        // Contact Section
        contact_subtitle: 'Contact Us',
        contact_title: 'Ready to Start Digital Transformation?',
        contact_desc: 'Consult your IT needs with our expert team. Get the right solution for your business.',
        contact_address_title: 'Address',
        contact_address: 'Jl. kamboja 1 no.38, RT 011, RW 011, Kalideres, Kota Administrasi Jakarta Barat, Daerah Khusus Ibukota DKI Jakarta 11840',
        contact_phone_title: 'Phone',
        contact_hours_title: 'Business Hours',
        contact_hours: 'Monday - Friday: 09:00 - 18:00 WIB',
        form_name: 'Full Name',
        form_company: 'Company',
        form_email: 'Email',
        form_phone: 'Phone Number',
        form_service: 'Service of Interest',
        form_select: 'Select Service',
        form_opt1: 'Software Development',
        form_opt2: 'Cloud Solutions',
        form_opt3: 'IT Security',
        form_opt4: 'IT Consulting',
        form_message: 'Message',
        form_submit: 'Send Message',
        form_success: 'Your message has been sent! Our team will contact you within 24 hours.',
        
        // Footer
        footer_desc: 'Your trusted digital transformation partner. We help companies grow through innovative IT solutions.',
        footer_services: 'Services',
        footer_company: 'Company',
        footer_legal: 'Legal',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms & Conditions'
    }
};

// Current language state
let currentLang = 'id';

// Function to switch language
function switchLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    updateLanguage();
    updateLangSwitcher();
    localStorage.setItem('preferredLang', currentLang);
}

// Function to update all translatable elements
function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.type === 'submit' || el.type === 'button') {
                    el.value = translations[currentLang][key];
                } else {
                    el.placeholder = translations[currentLang][key];
                }
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

// Function to update language switcher display
function updateLangSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    if (switcher) {
        const currentSpan = switcher.querySelector('.lang-current');
        const altSpan = switcher.querySelector('.lang-alt');
        if (currentLang === 'id') {
            currentSpan.textContent = 'ID';
            altSpan.textContent = 'EN';
        } else {
            currentSpan.textContent = 'EN';
            altSpan.textContent = 'ID';
        }
    }
}

// ===================================
// Navigation & Mobile Menu
// ===================================
function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===================================
// Contact Form Handler
// ===================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Log form data (in production, this would be sent to a server)
            console.log('Form submitted:', data);

            // Simpan pesan ke localStorage agar bisa dibaca di admin dashboard
            const messages = JSON.parse(localStorage.getItem('xql_contact_messages') || '[]');
            messages.push({
                id: Date.now(),
                name: data.name || '',
                email: data.email || '',
                phone: data.phone || '',
                service: data.service || '',
                message: data.message || '',
                date: new Date().toISOString(),
                read: false
            });
            localStorage.setItem('xql_contact_messages', JSON.stringify(messages));
            console.log('💾 Pesan disimpan ke localStorage. Total pesan:', messages.length);
            
            // Show success message
            if (successMessage) {
                successMessage.classList.add('show');
            }
            
            // Reset form
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                if (successMessage) {
                    successMessage.classList.remove('show');
                }
            }, 5000);
        });
    }
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-card, .blog-card, .team-card, .value-item');
    
    // Add animation class to elements
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===================================
// Load Portfolio Data from localStorage
// ===================================
function loadPortfolioFromStorage() {
    for (let i = 1; i <= 5; i++) {
        const stored = localStorage.getItem('xql_admin_data_portfolio');
        if (!stored) continue;

        try {
            const data = JSON.parse(stored);
            const card = document.querySelectorAll('.portfolio-card')[i - 1];
            if (!card) continue;

            // Admin form field names: portfolio1_title, portfolio1_cat, portfolio1_desc, etc.
            const prefix = 'portfolio' + i;

            // Cek status aktif/nonaktif slide (toggle dari admin dashboard)
            // Jika portfolio{i}_active === 'off', sembunyikan slide portfolio ini
            const activeKey = prefix + '_active';
            if (typeof data[activeKey] !== 'undefined' && data[activeKey] === 'off') {
                card.style.display = 'none';
                console.log('🚫 Portfolio ' + i + ' dinonaktifkan (slide disembunyikan)');
                continue; // Lewati pembaruan data lain karena slide tidak ditampilkan
            } else {
                card.style.display = ''; // Pastikan terlihat jika aktif
            }

            // Update category
            if (data[prefix + '_cat']) {
                const catEl = card.querySelector('.portfolio-category');
                if (catEl) catEl.textContent = data[prefix + '_cat'];
            }

            // Update title
            if (data[prefix + '_title']) {
                const titleEl = card.querySelector('.portfolio-content h3');
                if (titleEl) titleEl.textContent = data[prefix + '_title'];
            }

            // Update description
            if (data[prefix + '_desc']) {
                const descEl = card.querySelector('.portfolio-content p');
                if (descEl) descEl.textContent = data[prefix + '_desc'];
            }

            // Update result values and labels
            // Admin form field names: portfolio1_result1_value, portfolio1_result1_label, etc.
            const resultItems = card.querySelectorAll('.result-item');
            if (resultItems[0] && data[prefix + '_result1_value']) {
                const valEl = resultItems[0].querySelector('.result-value');
                if (valEl) valEl.textContent = data[prefix + '_result1_value'];
            }
            if (resultItems[0] && data[prefix + '_result1_label']) {
                const lblEl = resultItems[0].querySelector('.result-label');
                if (lblEl) lblEl.textContent = data[prefix + '_result1_label'];
            }
            if (resultItems[1] && data[prefix + '_result2_value']) {
                const valEl = resultItems[1].querySelector('.result-value');
                if (valEl) valEl.textContent = data[prefix + '_result2_value'];
            }
            if (resultItems[1] && data[prefix + '_result2_label']) {
                const lblEl = resultItems[1].querySelector('.result-label');
                if (lblEl) lblEl.textContent = data[prefix + '_result2_label'];
            }

            // Update icon/emoji if provided
            if (data[prefix + '_icon']) {
                const iconEl = card.querySelector('.portfolio-icon');
                if (iconEl) iconEl.textContent = data[prefix + '_icon'];
            }

            // Update image if provided (as data URL)
            // Admin saves images as banner_file_1, banner_file_2, banner_file_3
            const imageKey = 'banner_file_' + i;
            if (data[prefix + '_image'] || data[imageKey]) {
                const imgEl = card.querySelector('.portfolio-img');
                if (imgEl) {
                    imgEl.src = data[prefix + '_image'] || data[imageKey];
                    imgEl.style.display = 'block';
                    // Hide the emoji icon if image exists
                    const emojiEl = card.querySelector('.portfolio-icon');
                    if (emojiEl) emojiEl.style.display = 'none';
                }
            }

            console.log('📂 Portfolio ' + i + ' loaded from localStorage');
        } catch (e) {
            console.error('Error loading portfolio ' + i + ' from localStorage:', e);
        }
    }
}

// ===================================
// Initialize Everything on DOM Ready
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
        currentLang = savedLang;
    }
    updateLanguage();
    updateLangSwitcher();
    
    // Language switcher event
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', switchLanguage);
    }
    
    // Initialize other features
    initNavigation();
    initContactForm();
    initScrollAnimations();
    initSmoothScroll();
    
    // Load portfolio data from localStorage (saved by admin dashboard)
    loadPortfolioFromStorage();
    
    console.log('XQL TECH Website initialized! 🚀');
});
