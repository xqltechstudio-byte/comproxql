/**
 * ============================================================
 *  XQL TECH — Admin Dashboard Script
 *  File: admin-script.js
 *  Deskripsi: Logika tab navigasi, image preview, drag & drop,
 *             toast notification, dan form submission.
 * ============================================================
 */

// ============================================================
// 1. TAB NAVIGATION
//    Mengatur perpindahan antar tab (Hero, About, Portfolio)
// ============================================================

/**
 * switchTab(tabName)
 * Menampilkan konten tab yang dipilih dan menyembunyikan yang lain.
 * Juga memperbarui judul & subtitle di top bar.
 *
 * @param {string} tabName - Nama tab: 'hero' | 'about' | 'portfolio'
 */
function switchTab(tabName) {
    // Sembunyikan semua konten tab
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.add('hidden');
    });

    // Tampilkan tab yang dipilih
    const targetTab = document.getElementById('tab-' + tabName);
    if (targetTab) {
        targetTab.classList.remove('hidden');
    }

    // Perbarui status aktif pada sidebar nav-item
    document.querySelectorAll('.nav-item[data-tab]').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector('.nav-item[data-tab="' + tabName + '"]');
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Perbarui judul & subtitle di top bar
    const titles = {
        hero:      { title: '🚀 Konten Utama (Hero)',       subtitle: 'Kelola konten hero, statistik, dan logo website' },
        about:     { title: '🎯 Tentang & Layanan',          subtitle: 'Kelola deskripsi tentang kami dan visi perusahaan' },
        portfolio: { title: '💼 Kelola Portfolio',           subtitle: 'Kelola informasi dan banner portfolio utama' },
        messages:  { title: '💬 Kelola Pesan',               subtitle: 'Lihat, baca, dan kelola pesan dari kontak website' }
    };

    const info = titles[tabName];
    if (info) {
        document.getElementById('pageTitle').textContent    = info.title;
        document.getElementById('pageSubtitle').textContent = info.subtitle;
    }

    // Tutup sidebar di mobile setelah memilih tab
    closeSidebarMobile();
}


// ============================================================
// 2. SIDEBAR TOGGLE (Mobile)
//    Membuka / menutup sidebar pada layar kecil
// ============================================================

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    const isOpen = !sidebar.classList.contains('-translate-x-full');

    if (isOpen) {
        // Tutup sidebar
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    } else {
        // Buka sidebar
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    }
}

function closeSidebarMobile() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    // Hanya tutup di layar mobile (< lg)
    if (window.innerWidth < 1024) {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}


// ============================================================
// 3. IMAGE PREVIEW
//    Menampilkan pratinjau gambar segera setelah user memilih file
// ============================================================

/**
 * previewImage(inputElement, previewId)
 * Membaca file gambar yang dipilih user dan menampilkannya
 * di elemen <img> target sebagai pratinjau (live preview).
 *
 * @param {HTMLInputElement} inputElement - Input file yang berubah
 * @param {string} previewId - ID elemen <img> untuk menampilkan preview
 */
function previewImage(inputElement, previewId) {
    const file = inputElement.files[0];
    if (!file) return;

    // Validasi tipe file (hanya gambar)
    if (!file.type.startsWith('image/')) {
        showToast('File harus berupa gambar!', 'error');
        inputElement.value = ''; // Reset input
        return;
    }

    // Validasi ukuran file (maks 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        showToast('Ukuran file melebihi 5MB!', 'error');
        inputElement.value = '';
        return;
    }

    // Baca file dan tampilkan sebagai preview
    const reader = new FileReader();
    reader.onload = function(e) {
        const previewImg = document.getElementById(previewId);
        if (previewImg) {
            previewImg.src = e.target.result;
            // Hapus class 'hidden' agar gambar terlihat
            previewImg.classList.remove('hidden');
        }
    };
    reader.readAsDataURL(file);
}


// ============================================================
// 4. DRAG & DROP (Banner Portfolio)
//    Mendukung drag & drop gambar ke area upload
// ============================================================

/**
 * setupDropZone(dropZoneId, fileInputId, previewId)
 * Menginisialisasi drag & drop pada sebuah zona upload.
 * Mendukung multiple drop zone (untuk beberapa portfolio).
 *
 * @param {string} dropZoneId   - ID elemen drop zone
 * @param {string} fileInputId  - ID elemen input file
 * @param {string} previewId    - ID elemen img untuk preview
 */
function setupDropZone(dropZoneId, fileInputId, previewId) {
    const dropZone  = document.getElementById(dropZoneId);
    const fileInput = document.getElementById(fileInputId);

    if (!dropZone || !fileInput) return;

    // Highlight area saat file di-drag ke atasnya
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.add('dragover');
        });
    });

    // Hilangkan highlight saat file keluar dari area
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('dragover');
        });
    });

    // Handle file yang di-drop
    dropZone.addEventListener('drop', function(e) {
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            previewImage(fileInput, previewId);
        }
    });
}

// Cegah default drag behavior di seluruh dokumen
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    document.addEventListener(eventName, function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
});


// ============================================================
// 5. TOAST NOTIFICATION
//    Menampilkan feedback visual setelah aksi berhasil/gagal
// ============================================================

/**
 * showToast(message, type)
 * Menampilkan toast notification di pojok kanan atas.
 *
 * @param {string} message - Pesan yang ditampilkan
 * @param {string} type    - Tipe toast: 'success' | 'error' | 'info'
 */
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');

    // Konfigurasi ikon & warna berdasarkan tipe
    const config = {
        success: {
            icon: '✅',
            bg: 'bg-emerald-500/10 border-emerald-500/30',
            text: 'text-emerald-400',
            bar: 'bg-emerald-500'
        },
        error: {
            icon: '❌',
            bg: 'bg-red-500/10 border-red-500/30',
            text: 'text-red-400',
            bar: 'bg-red-500'
        },
        info: {
            icon: 'ℹ️',
            bg: 'bg-blue-500/10 border-blue-500/30',
            text: 'text-blue-400',
            bar: 'bg-blue-500'
        }
    };

    const c = config[type] || config.success;

    // Buat elemen toast
    const toast = document.createElement('div');
    toast.className = 'toast-enter pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border ' + c.bg + ' backdrop-blur-xl shadow-2xl min-w-[300px] max-w-[420px]';
    toast.innerHTML =
        '<span class="text-lg flex-shrink-0">' + c.icon + '</span>' +
        '<p class="text-sm font-medium ' + c.text + ' flex-1">' + message + '</p>' +
        '<button onclick="dismissToast(this.parentElement)" class="flex-shrink-0 p-1 rounded-lg hover:bg-white/10 transition text-dark-400 hover:text-white">' +
            '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>' +
        '</button>' +
        '<div class="absolute bottom-0 left-0 right-0 h-0.5 ' + c.bar + ' rounded-b-xl opacity-60"></div>';
    toast.style.position = 'relative';
    toast.style.overflow = 'hidden';

    container.appendChild(toast);

    // Auto-dismiss setelah 4 detik
    setTimeout(function() {
        dismissToast(toast);
    }, 4000);
}

/**
 * dismissToast(toastElement)
 * Menghilangkan toast dengan animasi slide-out.
 *
 * @param {HTMLElement} toastElement - Elemen toast yang akan dihapus
 */
function dismissToast(toastElement) {
    if (!toastElement || toastElement.classList.contains('toast-exit')) return;

    toastElement.classList.remove('toast-enter');
    toastElement.classList.add('toast-exit');

    // Hapus dari DOM setelah animasi selesai
    setTimeout(function() {
        if (toastElement.parentElement) {
            toastElement.parentElement.removeChild(toastElement);
        }
    }, 300);
}


// ============================================================
// 6. LOCALSTORAGE PERSISTENCE
//    Menyimpan dan memuat data form dari localStorage
//    agar perubahan tetap ada setelah halaman di-refresh.
// ============================================================

/**
 * saveFormDataToStorage(formType, formData)
 * Menyimpan data form ke localStorage agar persisten.
 *
 * @param {string} formType - Tipe form: 'hero' | 'about' | 'portfolio'
 * @param {FormData} formData - Data dari form
 */
function saveFormDataToStorage(formType, formData) {
    const data = {};

    // Helper: convert File ke base64
    function fileToBase64(file) {
        return new Promise(function(resolve, reject) {
            const reader = new FileReader();
            reader.onload = function() { resolve(reader.result); };
            reader.onerror = function() { reject(reader.error); };
            reader.readAsDataURL(file);
        });
    }

    // Kumpulkan semua entry, handle file secara async
    const promises = [];
    for (const [key, value] of formData.entries()) {
        if (value instanceof File && value.size > 0) {
            // Simpan file sebagai base64
            const p = fileToBase64(value).then(function(base64) {
                data[key] = base64;
            });
            promises.push(p);
        } else if (!(value instanceof File)) {
            data[key] = value;
        }
    }

    // Tunggu semua file selesai di-convert, lalu simpan
    return Promise.all(promises).then(function() {
        // Simpan ke key admin (untuk memuat ulang form admin)
        localStorage.setItem('xql_admin_data_' + formType, JSON.stringify(data));
        console.log('💾 Data ' + formType + ' disimpan ke localStorage (admin):', Object.keys(data));

        // Simpan juga ke key 'xql_site_data' agar halaman utama (index.html) bisa membaca perubahan
        // Gabungkan dengan data yang sudah ada di xql_site_data (jika ada) agar tidak menimpa data dari form lain
        let siteData = {};
        const existingSiteData = localStorage.getItem('xql_site_data');
        if (existingSiteData) {
            try { siteData = JSON.parse(existingSiteData); } catch(e) { /* abaikan */ }
        }
        // Salin semua field teks (bukan file base64) ke siteData
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === 'string' && !value.startsWith('data:image/')) {
                siteData[key] = value;
            }
        }
        localStorage.setItem('xql_site_data', JSON.stringify(siteData));
        console.log('💾 Data ' + formType + ' juga disimpan ke xql_site_data untuk halaman utama:', Object.keys(data).filter(k => typeof data[k] === 'string' && !data[k].startsWith('data:image/')));
    }).catch(function(err) {
        console.error('❌ Gagal menyimpan file:', err);
        throw err;
    });
}

/**
 * loadFormDataFromStorage(formType, form)
 * Memuat data yang tersimpan dari localStorage dan mengisi form.
 *
 * @param {string} formType - Tipe form: 'hero' | 'about' | 'portfolio'
 * @param {HTMLFormElement} form - Elemen form yang akan diisi
 */
function loadFormDataFromStorage(formType, form) {
    const stored = localStorage.getItem('xql_admin_data_' + formType);
    if (!stored) return; // Tidak ada data tersimpan, biarkan default HTML

    try {
        const data = JSON.parse(stored);
        console.log(' Memuat data ' + formType + ' dari localStorage:', Object.keys(data));

        // Isi setiap field form dengan data yang tersimpan
        for (const [key, value] of Object.entries(data)) {
            // Handle file inputs yang disimpan sebagai base64
            if (key.startsWith('banner_file') || key.endsWith('_file')) {
                // Cek apakah value adalah base64 image
                if (typeof value === 'string' && value.startsWith('data:image/')) {
                    // Tentukan preview image ID berdasarkan key
                    let previewId = null;
                    if (key === 'banner_file_1' || key === 'banner_file') {
                        previewId = 'previewBanner1';
                    } else if (key === 'banner_file_2') {
                        previewId = 'previewBanner2';
                    } else if (key === 'banner_file_3') {
                        previewId = 'previewBanner3';
                    }

                    if (key === 'banner_file_4') {
                        previewId = 'previewBanner4';
                    }

                    if (key === 'banner_file_5') {
                        previewId = 'previewBanner5';
                    }
                    if (previewId) {
                        const previewImg = document.getElementById(previewId);
                        if (previewImg) {
                            previewImg.src = value;
                            previewImg.classList.remove('hidden');
                            console.log('✅ Image "' + key + '" dipulihkan ke ' + previewId);
                        }
                    }
                }
                continue;
            }

            // Cari field menggunakan form.elements (paling andal)
            let field = null;

            // Metode 1: form.elements[name]
            if (form.elements[key]) {
                field = form.elements[key];
            }

            // Metode 2: querySelector dengan escaping yang benar
            if (!field) {
                const escapedKey = key.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                field = form.querySelector('[name="' + escapedKey + '"]');
            }

            // Metode 3: iterasi semua elemen form
            if (!field) {
                const allFields = form.querySelectorAll('[name]');
                for (let i = 0; i < allFields.length; i++) {
                    if (allFields[i].name === key) {
                        field = allFields[i];
                        break;
                    }
                }
            }

            if (field) {
                // Handle textarea dan input text
                if (field.tagName === 'TEXTAREA' || field.type === 'text' || field.type === 'number') {
                    field.value = value;
                } else {
                    field.value = value;
                }
                console.log('✅ Field "' + key + '" diisi dengan: ' + value);
            } else {
                console.warn('️ Field "' + key + '" tidak ditemukan di form');
            }
        }
    } catch (e) {
        console.error('❌ Gagal memuat data ' + formType + ' dari localStorage:', e);
    }
}


// ============================================================
// 7. FORM SUBMISSION (handleFormSubmit)
//    Menggunakan FormData untuk mengumpulkan data teks & file,
//    lalu menyimpannya ke localStorage agar persisten.
// ============================================================

/**
 * handleFormSubmit(event, formType)
 * Fungsi utama yang menangani submit pada semua form.
 * Menggunakan FormData untuk mengumpulkan data input teks
 * dan file gambar, lalu menyimpannya ke localStorage.
 *
 * CATATAN BACKEND:
 * ─────────────────────────────────────────────────────────────
 * Saat ini data disimpan ke localStorage browser.
 * Untuk menghubungkan ke backend API yang sebenarnya, ganti
 * bagian saveFormDataToStorage() dengan fetch() ke endpoint API.
 *
 * Contoh integrasi backend:
 *
 * const API_ENDPOINT = '/api/admin/update-' + formType;
 *
 * fetch(API_ENDPOINT, {
 *     method: 'POST',
 *     headers: {
 *         'Authorization': 'Bearer ' + getToken()
 *     },
 *     body: formData
 * })
 * .then(response => {
 *     if (!response.ok) throw new Error('Server error: ' + response.status);
 *     return response.json();
 * })
 * .then(data => {
 *     showToast('Data berhasil disimpan!', 'success');
 * })
 * .catch(error => {
 *     showToast('Gagal menyimpan data. Silakan coba lagi.', 'error');
 *     console.error(' Error:', error);
 * });
 * ─────────────────────────────────────────────────────────────
 *
 * @param {Event} event - Event submit dari form
 * @param {string} formType - Tipe form: 'hero' | 'about' | 'portfolio'
 */
function handleFormSubmit(event, formType) {
    // Cegah reload halaman
    event.preventDefault();

    // Dapatkan elemen form yang di-submit
    const form = event.target;

    // Buat objek FormData untuk mengumpulkan semua data (teks + file)
    const formData = new FormData(form);

    // ──────────────────────────────────────────────────────
    // HOTFIX: Checkbox yang TIDAK diceklis tidak termasuk
    // dalam FormData. Kita perlu menambahkannya secara manual
    // dengan nilai 'off' agar status nonaktif tersimpan.
    // ──────────────────────────────────────────────────────
    const allCheckboxes = form.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(function(cb) {
        if (!cb.checked && cb.name) {
            // Hanya tambahkan jika belum ada di FormData (karena unchecked tidak akan ada)
            formData.set(cb.name, 'off');
        }
    });

    // ──────────────────────────────────────────────────────
    // LOG: Tampilkan data yang akan disimpan (untuk debugging)
    // ──────────────────────────────────────────────────────
    console.log('═══════════════════════════════════════');
    console.log(' Form Submit — Tipe:', formType);
    console.log('═══════════════════════════════════════');

    // Iterasi semua field teks
    for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
            console.log('📎 ' + key + ': [File] ' + value.name + ' (' + (value.size / 1024).toFixed(1) + ' KB)');
        } else {
            console.log('📝 ' + key + ': ' + value);
        }
    }

    // Tampilkan toast loading
    showToast('Menyimpan data...', 'info');

    // Simpan data ke localStorage (async karena mungkin ada file base64)
    saveFormDataToStorage(formType, formData).then(function() {
        // Tampilkan toast sukses setelah data benar-benar tersimpan
        const labels = {
            hero:      'Konten Hero berhasil disimpan!',
            about:     'Data About berhasil disimpan!',
            portfolio: 'Data Portfolio berhasil disimpan!'
        };
        showToast(labels[formType] || 'Data berhasil disimpan!', 'success');
    }).catch(function(err) {
        showToast('Gagal menyimpan data. Silakan coba lagi.', 'error');
        console.error(' Error menyimpan data:', err);
    });
}


// ============================================================
// 8. LOGOUT
//    Menghapus session dan mengarahkan ke halaman login
// ============================================================

/**
 * handleLogout()
 * Menghapus data session dari localStorage dan sessionStorage,
 * lalu mengarahkan user ke halaman login.
 *
 * CATATAN BACKEND:
 * Jika menggunakan JWT token, tambahkan API call untuk
 * invalidate token di server (blacklist/revoke):
 *
 * await fetch('/api/auth/logout', {
 *     method: 'POST',
 *     headers: { 'Authorization': 'Bearer ' + getToken() }
 * });
 */
function handleLogout() {
    // Konfirmasi sebelum logout
    if (!confirm('Apakah Anda yakin ingin keluar dari dashboard?')) return;

    // Hapus session dari kedua storage
    localStorage.removeItem('xql_admin_session');
    sessionStorage.removeItem('xql_admin_session');

    // ─────────────────────────────────────────────────────
    // BACKEND: Jika menggunakan JWT, hapus juga token:
    // localStorage.removeItem('auth_token');
    // ──────────────────────────────────────────────────────

    console.log('🔒 Session dihapus. Mengalihkan ke halaman login...');

    // Redirect ke halaman login
    window.location.replace('admin-login.html');
}


// ============================================================
// 9. PORTFOLIO TOGGLE (Aktif / Nonaktif Slide)
//    Mengaktifkan/menonaktifkan slide portfolio di website utama
// ============================================================

/**
 * updateToggleUI(checkbox)
 * Memperbarui tampilan toggle dan label berdasarkan status checkbox.
 *
 * @param {HTMLInputElement} checkbox - Checkbox portfolio-toggle
 */
function updateToggleUI(checkbox) {
    const label = checkbox.closest('label');
    if (!label) return;

    const labelText = label.querySelector('.toggle-label');
    const card = document.getElementById('portfolioCard' + checkbox.dataset.portfolio);

    if (checkbox.checked) {
        if (labelText) {
            labelText.textContent = 'Aktif';
            labelText.classList.remove('text-red-400');
            labelText.classList.add('text-emerald-400');
        }
        if (card) card.classList.remove('portfolio-card-inactive');
    } else {
        if (labelText) {
            labelText.textContent = 'Nonaktif';
            labelText.classList.remove('text-emerald-400');
            labelText.classList.add('text-red-400');
        }
        if (card) card.classList.add('portfolio-card-inactive');
    }
}

/**
 * initPortfolioToggles()
 * Menyiapkan event listener untuk setiap toggle slide portfolio.
 */
function initPortfolioToggles() {
    document.querySelectorAll('.portfolio-toggle').forEach(function(toggle) {
        // Perbarui tampilan awal saat halaman dimuat
        updateToggleUI(toggle);

        // Saat toggle berubah, perbarui UI dan simpan status
        toggle.addEventListener('change', function() {
            updateToggleUI(toggle);
            savePortfolioToggleState(toggle);
        });
    });
}

/**
 * savePortfolioToggleState(toggle)
 * Menyimpan status aktif/nonaktif portfolio ke localStorage
 * dan memperbarui xql_site_data agar website utama bisa membaca.
 *
 * @param {HTMLInputElement} toggle - Checkbox portfolio-toggle
 */
function savePortfolioToggleState(toggle) {
    const key = toggle.name; // portfolio1_active, portfolio2_active, ...
    const value = toggle.checked ? 'on' : 'off';
    const portfolioIndex = toggle.dataset.portfolio;

    // Simpan ke key admin
    const adminDataRaw = localStorage.getItem('xql_admin_data_portfolio');
    let adminData = {};
    if (adminDataRaw) {
        try { adminData = JSON.parse(adminDataRaw); } catch(e) { /* abaikan */ }
    }
    adminData[key] = value;
    localStorage.setItem('xql_admin_data_portfolio', JSON.stringify(adminData));

    // Simpan juga ke xql_site_data agar website utama membaca
    let siteData = {};
    const existingSiteData = localStorage.getItem('xql_site_data');
    if (existingSiteData) {
        try { siteData = JSON.parse(existingSiteData); } catch(e) { /* abaikan */ }
    }
    siteData[key] = value;
    localStorage.setItem('xql_site_data', JSON.stringify(siteData));

    console.log('💾 Portfolio ' + portfolioIndex + ' status:', value);
    showToast('Slide Portfolio ' + portfolioIndex + (toggle.checked ? ' diaktifkan' : ' dinonaktifkan'), toggle.checked ? 'success' : 'info');
}

/**
 * loadPortfolioToggleState()
 * Memuat status aktif/nonaktif portfolio dari localStorage dan mengisi toggle.
 */
function loadPortfolioToggleState() {
    const stored = localStorage.getItem('xql_admin_data_portfolio');
    if (!stored) return;

    try {
        const data = JSON.parse(stored);
        document.querySelectorAll('.portfolio-toggle').forEach(function(toggle) {
            if (typeof data[toggle.name] !== 'undefined') {
                toggle.checked = data[toggle.name] === 'on';
                updateToggleUI(toggle);
            }
        });
    } catch (e) {
        console.error('❌ Gagal memuat status toggle portfolio:', e);
    }
}


// ============================================================
// 11. MESSAGE MANAGEMENT (Kelola Pesan)
//    CRUD operations untuk pesan dari kontak website
// ============================================================

/**
 * getMessages()
 * Mengambil semua pesan dari localStorage.
 * @returns {Array} Array pesan
 */
function getMessages() {
    const stored = localStorage.getItem('xql_contact_messages');
    if (!stored) return [];
    try {
        return JSON.parse(stored);
    } catch (e) {
        console.error('❌ Gagal memuat pesan:', e);
        return [];
    }
}

/**
 * saveMessages(messages)
 * Menyimpan array pesan ke localStorage.
 * @param {Array} messages - Array pesan
 */
function saveMessages(messages) {
    localStorage.setItem('xql_contact_messages', JSON.stringify(messages));
}

/**
 * formatDate(dateString)
 * Memformat tanggal pesan ke format yang mudah dibaca.
 * @param {string} dateString - ISO date string
 * @returns {string} Tanggal terformat
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('id-ID', options);
}

/**
 * getUnreadCount()
 * Menghitung jumlah pesan yang belum dibaca.
 * @returns {number} Jumlah pesan belum dibaca
 */
function getUnreadCount() {
    const messages = getMessages();
    return messages.filter(m => !m.read).length;
}

/**
 * updateMessageBadge()
 * Memperbarui badge jumlah pesan belum dibaca di sidebar.
 */
function updateMessageBadge() {
    const badge = document.getElementById('messageBadge');
    if (!badge) return;
    const count = getUnreadCount();
    if (count > 0) {
        badge.textContent = count;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

/**
 * renderMessages(filter)
 * Merender daftar pesan ke dalam tabel.
 * @param {string} filter - Filter: 'all' | 'unread' | 'read' | 'deleted'
 */
function renderMessages(filter) {
    const tbody = document.getElementById('messageTableBody');
    const emptyState = document.getElementById('messagesEmptyState');
    if (!tbody) return;

    let messages = getMessages();

    // Terapkan filter
    if (filter === 'unread') {
        messages = messages.filter(m => !m.read && !m.deleted);
    } else if (filter === 'read') {
        messages = messages.filter(m => m.read && !m.deleted);
    } else if (filter === 'deleted') {
        messages = messages.filter(m => m.deleted);
    } else {
        // 'all' - tampilkan semua kecuali yang dihapus
        messages = messages.filter(m => !m.deleted);
    }

    // Urutkan dari yang terbaru
    messages.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Kosongkan tabel
    tbody.innerHTML = '';

    // Tampilkan/sembunyikan empty state
    if (emptyState) {
        if (messages.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }
    }

    if (messages.length === 0) {
        return;
    }

    messages.forEach(function(msg) {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-dark-700/30 hover:bg-dark-800/50 transition';
        tr.innerHTML =
            '<td class="px-4 py-3 whitespace-nowrap">' +
                '<div class="flex items-center gap-2">' +
                    '<input type="checkbox" class="msg-checkbox w-4 h-4 rounded border-dark-600 bg-dark-800 text-accent focus:ring-accent/20" value="' + msg.id + '" onchange="updateBulkActionBar()">' +
                    (msg.read ? '<span class="w-2 h-2 rounded-full bg-dark-500"></span>' : '<span class="w-2 h-2 rounded-full bg-emerald-400 pulse-dot"></span>') +
                    '<span class="text-sm text-dark-200 font-medium">' + escapeHtml(msg.name) + '</span>' +
                '</div>' +
            '</td>' +
            '<td class="px-4 py-3 text-sm text-dark-300 hidden sm:table-cell">' + escapeHtml(msg.email) + '</td>' +
            '<td class="px-4 py-3 text-sm text-dark-300 hidden md:table-cell">' + escapeHtml(msg.service || '-') + '</td>' +
            '<td class="px-4 py-3 text-sm text-dark-400 max-w-[200px] truncate">' + escapeHtml(msg.message) + '</td>' +
            '<td class="px-4 py-3 text-sm text-dark-400 whitespace-nowrap hidden lg:table-cell">' + formatDate(msg.date) + '</td>' +
            '<td class="px-4 py-3 whitespace-nowrap">' +
                '<div class="flex items-center gap-1">' +
                    '<button onclick="openMessageModal(' + msg.id + ')" class="p-1.5 rounded-lg hover:bg-accent/20 text-accent transition" title="Lihat Detail">' +
                        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>' +
                    '</button>' +
                    (msg.deleted
                        ? '<button onclick="restoreMessage(' + msg.id + ')" class="p-1.5 rounded-lg hover:bg-emerald-500/20 text-emerald-400 transition" title="Pulihkan">' +
                            '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>' +
                          '</button>'
                        : (msg.read
                            ? '<button onclick="markAsUnread(' + msg.id + ')" class="p-1.5 rounded-lg hover:bg-amber-500/20 text-amber-400 transition" title="Tandai Belum Dibaca">' +
                                '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' +
                              '</button>'
                            : '<button onclick="markAsRead(' + msg.id + ')" class="p-1.5 rounded-lg hover:bg-emerald-500/20 text-emerald-400 transition" title="Tandai Sudah Dibaca">' +
                                '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' +
                              '</button>'
                        )
                    ) +
                    '<button onclick="permanentDelete(' + msg.id + ')" class="p-1.5 rounded-lg hover:bg-red-500/20 text-red-400 transition" title="Hapus Permanen">' +
                        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>' +
                    '</button>' +
                '</div>' +
            '</td>';
        tbody.appendChild(tr);
    });

    // Perbarui badge & stats
    updateMessageBadge();
    updateMessageStats();
}

/**
 * escapeHtml(text)
 * Mencegah XSS dengan meng-escape karakter HTML.
 * @param {string} text - Teks yang akan di-escape
 * @returns {string} Teks yang sudah di-escape
 */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * viewMessage(id)
 * Menampilkan detail pesan dalam modal.
 * @param {number} id - ID pesan
 */
function viewMessage(id) {
    const messages = getMessages();
    const msg = messages.find(m => m.id === id);
    if (!msg) return;

    // Tandai sebagai sudah dibaca
    if (!msg.read) {
        msg.read = true;
        saveMessages(messages);
    }

    // Isi modal dengan detail pesan
    const modal = document.getElementById('messageModal');
    if (modal) {
        document.getElementById('modalSenderName').textContent = msg.name || '-';
        document.getElementById('modalSenderEmail').textContent = msg.email || '-';
        document.getElementById('modalSenderPhone').textContent = msg.phone || '-';
        document.getElementById('modalSenderService').textContent = msg.service || '-';
        document.getElementById('modalSenderDate').textContent = formatDate(msg.date);
        document.getElementById('modalMessageContent').textContent = msg.message || '-';
        modal.classList.remove('hidden');
    }

    // Perbarui tabel
    renderMessages(getCurrentFilter());
}

/**
 * closeMessageModal()
 * Menutup modal detail pesan.
 */
function closeMessageModal() {
    const modal = document.getElementById('messageModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

/**
 * markAsRead(id)
 * Menandai pesan sebagai sudah dibaca.
 * @param {number} id - ID pesan
 */
function markAsRead(id) {
    const messages = getMessages();
    const msg = messages.find(m => m.id === id);
    if (msg) {
        msg.read = true;
        saveMessages(messages);
        renderMessages(getCurrentFilter());
        showToast('Pesan ditandai sudah dibaca.', 'success');
    }
}

/**
 * markAsUnread(id)
 * Menandai pesan sebagai belum dibaca.
 * @param {number} id - ID pesan
 */
function markAsUnread(id) {
    const messages = getMessages();
    const msg = messages.find(m => m.id === id);
    if (msg) {
        msg.read = false;
        saveMessages(messages);
        renderMessages(getCurrentFilter());
        showToast('Pesan ditandai belum dibaca.', 'info');
    }
}

/**
 * deleteMessage(id)
 * Menghapus pesan dari daftar.
 * @param {number} id - ID pesan
 */
function deleteMessage(id) {
    if (!confirm('Apakah Anda yakin ingin menghapus pesan ini?')) return;

    let messages = getMessages();
    messages = messages.filter(m => m.id !== id);
    saveMessages(messages);
    renderMessages(getCurrentFilter());
    showToast('Pesan berhasil dihapus.', 'success');
}

/**
 * deleteAllMessages()
 * Menghapus semua pesan.
 */
function deleteAllMessages() {
    const messages = getMessages();
    if (messages.length === 0) {
        showToast('Tidak ada pesan untuk dihapus.', 'info');
        return;
    }
    if (!confirm('Apakah Anda yakin ingin menghapus SEMUA pesan? Tindakan ini tidak dapat dibatalkan.')) return;

    saveMessages([]);
    renderMessages(getCurrentFilter());
    showToast('Semua pesan berhasil dihapus.', 'success');
}

/**
 * getCurrentFilter()
 * Mendapatkan filter yang sedang aktif.
 * @returns {string} Filter saat ini
 */
function getCurrentFilter() {
    const activeBtn = document.querySelector('.filter-btn.active');
    if (activeBtn) {
        return activeBtn.dataset.filter || 'all';
    }
    return 'all';
}

/**
 * filterMessages(filter)
 * Mengubah filter tampilan pesan.
 * @param {string} filter - Filter: 'all' | 'unread' | 'read'
 */
function filterMessages(filter) {
    // Perbarui status aktif tombol filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector('.filter-btn[data-filter="' + filter + '"]');
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    renderMessages(filter);
}

/**
 * updateMessageStats()
 * Memperbarui statistik pesan di dashboard.
 */
function updateMessageStats() {
    const messages = getMessages();
    const total = messages.length;
    const unread = messages.filter(m => !m.read && !m.deleted).length;
    const read = messages.filter(m => m.read && !m.deleted).length;
    const deleted = messages.filter(m => m.deleted).length;

    const totalEl = document.getElementById('msgTotalCount');
    const unreadEl = document.getElementById('msgUnreadCount');
    const readEl = document.getElementById('msgReadCount');
    const deletedEl = document.getElementById('msgDeletedCount');

    if (totalEl) totalEl.textContent = total;
    if (unreadEl) unreadEl.textContent = unread;
    if (readEl) readEl.textContent = read;
    if (deletedEl) deletedEl.textContent = deleted;

    // Update badge
    updateMessageBadge();
}

/**
 * markAllAsRead()
 * Menandai semua pesan sebagai sudah dibaca.
 */
function markAllAsRead() {
    const messages = getMessages();
    if (messages.length === 0) {
        showToast('Tidak ada pesan untuk ditandai.', 'info');
        return;
    }
    messages.forEach(m => { m.read = true; });
    saveMessages(messages);
    renderMessages(getCurrentFilter());
    updateMessageStats();
    showToast('Semua pesan ditandai sudah dibaca.', 'success');
}

/**
 * clearAllMessages()
 * Menghapus semua pesan di folder sampah.
 */
function clearAllMessages() {
    let messages = getMessages();
    const deletedCount = messages.filter(m => m.deleted).length;
    if (deletedCount === 0) {
        showToast('Sampah sudah kosong.', 'info');
        return;
    }
    if (!confirm('Hapus semua pesan di sampah secara permanen?')) return;
    messages = messages.filter(m => !m.deleted);
    saveMessages(messages);
    renderMessages(getCurrentFilter());
    updateMessageStats();
    showToast('Sampah berhasil dikosongkan.', 'success');
}

/**
 * toggleSelectAllMessages(checkbox)
 * Toggle select all checkboxes di tabel pesan.
 * @param {HTMLInputElement} checkbox - Checkbox select all
 */
function toggleSelectAllMessages(checkbox) {
    const checkboxes = document.querySelectorAll('.msg-checkbox');
    checkboxes.forEach(cb => { cb.checked = checkbox.checked; });
    updateBulkActionBar();
}

/**
 * updateBulkActionBar()
 * Memperbarui visibility bulk action bar berdasarkan jumlah yang dipilih.
 */
function updateBulkActionBar() {
    const selected = document.querySelectorAll('.msg-checkbox:checked');
    const bar = document.getElementById('bulkActionBar');
    const countEl = document.getElementById('bulkSelectedCount');
    const restoreBtn = document.getElementById('btnRestoreBulk');

    if (selected.length > 0) {
        if (bar) bar.classList.remove('hidden');
        if (countEl) countEl.textContent = selected.length + ' dipilih';
        // Tampilkan tombol restore jika filter adalah 'deleted'
        if (getCurrentFilter() === 'deleted') {
            if (restoreBtn) restoreBtn.classList.remove('hidden');
        } else {
            if (restoreBtn) restoreBtn.classList.add('hidden');
        }
    } else {
        if (bar) bar.classList.add('hidden');
    }
}

/**
 * getSelectedMessageIds()
 * Mendapatkan array ID dari pesan yang dipilih.
 * @returns {Array<number>} Array ID pesan
 */
function getSelectedMessageIds() {
    const checkboxes = document.querySelectorAll('.msg-checkbox:checked');
    return Array.from(checkboxes).map(cb => parseInt(cb.value));
}

/**
 * bulkMarkAsRead()
 * Menandai semua pesan yang dipilih sebagai sudah dibaca.
 */
function bulkMarkAsRead() {
    const ids = getSelectedMessageIds();
    if (ids.length === 0) return;
    const messages = getMessages();
    ids.forEach(id => {
        const msg = messages.find(m => m.id === id);
        if (msg) msg.read = true;
    });
    saveMessages(messages);
    renderMessages(getCurrentFilter());
    updateMessageStats();
    showToast(ids.length + ' pesan ditandai sudah dibaca.', 'success');
}

/**
 * bulkDelete()
 * Menghapus (memindahkan ke sampah) semua pesan yang dipilih.
 */
function bulkDelete() {
    const ids = getSelectedMessageIds();
    if (ids.length === 0) return;
    if (!confirm('Hapus ' + ids.length + ' pesan yang dipilih?')) return;
    const messages = getMessages();
    ids.forEach(id => {
        const msg = messages.find(m => m.id === id);
        if (msg) msg.deleted = true;
    });
    saveMessages(messages);
    renderMessages(getCurrentFilter());
    updateMessageStats();
    showToast(ids.length + ' pesan dipindahkan ke sampah.', 'success');
}

/**
 * restoreSelected()
 * Memulihkan pesan yang dipilih dari sampah.
 */
function restoreSelected() {
    const ids = getSelectedMessageIds();
    if (ids.length === 0) return;
    const messages = getMessages();
    ids.forEach(id => {
        const msg = messages.find(m => m.id === id);
        if (msg) msg.deleted = false;
    });
    saveMessages(messages);
    renderMessages(getCurrentFilter());
    updateMessageStats();
    showToast(ids.length + ' pesan dipulihkan.', 'success');
}

/**
 * openMessageModal(id)
 * Membuka modal detail pesan.
 * @param {number} id - ID pesan
 */
function openMessageModal(id) {
    const messages = getMessages();
    const msg = messages.find(m => m.id === id);
    if (!msg) return;

    // Tandai sebagai sudah dibaca
    if (!msg.read) {
        msg.read = true;
        saveMessages(messages);
    }

    const modal = document.getElementById('messageModal');
    const content = document.getElementById('messageModalContent');
    if (modal && content) {
        content.innerHTML =
            '<div class="space-y-4">' +
                '<div class="grid grid-cols-2 gap-4">' +
                    '<div><p class="text-[10px] text-dark-500 uppercase tracking-wide mb-1">Nama</p><p class="text-sm text-dark-200 font-medium">' + escapeHtml(msg.name || '-') + '</p></div>' +
                    '<div><p class="text-[10px] text-dark-500 uppercase tracking-wide mb-1">Email</p><p class="text-sm text-dark-200 font-medium">' + escapeHtml(msg.email || '-') + '</p></div>' +
                    '<div><p class="text-[10px] text-dark-500 uppercase tracking-wide mb-1">Telepon</p><p class="text-sm text-dark-200 font-medium">' + escapeHtml(msg.phone || '-') + '</p></div>' +
                    '<div><p class="text-[10px] text-dark-500 uppercase tracking-wide mb-1">Layanan</p><p class="text-sm text-dark-200 font-medium">' + escapeHtml(msg.service || '-') + '</p></div>' +
                '</div>' +
                '<div><p class="text-[10px] text-dark-500 uppercase tracking-wide mb-1">Tanggal</p><p class="text-sm text-dark-200">' + formatDate(msg.date) + '</p></div>' +
                '<div><p class="text-[10px] text-dark-500 uppercase tracking-wide mb-1">Pesan</p><div class="bg-dark-800 rounded-xl p-4 text-sm text-dark-200 leading-relaxed whitespace-pre-wrap">' + escapeHtml(msg.message || '-') + '</div></div>' +
            '</div>';
        modal.classList.remove('hidden');
    }

    renderMessages(getCurrentFilter());
    updateMessageStats();
}

/**
 * restoreMessage(id)
 * Memulihkan pesan yang dihapus (soft delete).
 * @param {number} id - ID pesan
 */
function restoreMessage(id) {
    const messages = getMessages();
    const msg = messages.find(m => m.id === id);
    if (msg) {
        msg.deleted = false;
        saveMessages(messages);
        renderMessages(getCurrentFilter());
        updateMessageStats();
        showToast('Pesan berhasil dipulihkan.', 'success');
    }
}

/**
 * permanentDelete(id)
 * Menghapus pesan secara permanen dari storage.
 * @param {number} id - ID pesan
 */
function permanentDelete(id) {
    if (!confirm('Hapus pesan ini secara permanen? Tindakan ini tidak dapat dibatalkan.')) return;
    let messages = getMessages();
    messages = messages.filter(m => m.id !== id);
    saveMessages(messages);
    renderMessages(getCurrentFilter());
    updateMessageStats();
    showToast('Pesan berhasil dihapus permanen.', 'success');
}

/**
 * searchMessages(query)
 * Mencari pesan berdasarkan kata kunci.
 * @param {string} query - Kata kunci pencarian
 */
function searchMessages(query) {
    const tbody = document.getElementById('messageTableBody');
    if (!tbody) return;

    const q = query.toLowerCase().trim();
    let messages = getMessages();

    // Terapkan filter aktif (termasuk deleted)
    const currentFilter = getCurrentFilter();
    if (currentFilter === 'unread') {
        messages = messages.filter(m => !m.read && !m.deleted);
    } else if (currentFilter === 'read') {
        messages = messages.filter(m => m.read && !m.deleted);
    } else if (currentFilter === 'deleted') {
        messages = messages.filter(m => m.deleted);
    } else {
        // 'all' - jangan tampilkan yang dihapus
        messages = messages.filter(m => !m.deleted);
    }

    // Terapkan pencarian
    if (q) {
        messages = messages.filter(m =>
            (m.name && m.name.toLowerCase().includes(q)) ||
            (m.email && m.email.toLowerCase().includes(q)) ||
            (m.phone && m.phone.toLowerCase().includes(q)) ||
            (m.service && m.service.toLowerCase().includes(q)) ||
            (m.message && m.message.toLowerCase().includes(q))
        );
    }

    // Urutkan dari yang terbaru
    messages.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Kosongkan tabel
    tbody.innerHTML = '';

    if (messages.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-dark-400">' + (q ? 'Tidak ada pesan yang cocok dengan pencarian "' + escapeHtml(q) + '".' : 'Tidak ada pesan untuk ditampilkan.') + '</td></tr>';
        return;
    }

    messages.forEach(function(msg) {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-dark-700/30 hover:bg-dark-800/50 transition';
        tr.innerHTML =
            '<td class="px-4 py-3 whitespace-nowrap">' +
                '<div class="flex items-center gap-2">' +
                    '<input type="checkbox" class="msg-checkbox w-4 h-4 rounded border-dark-600 bg-dark-800 text-accent focus:ring-accent/20" value="' + msg.id + '" onchange="updateBulkActionBar()">' +
                    (msg.read ? '<span class="w-2 h-2 rounded-full bg-dark-500"></span>' : '<span class="w-2 h-2 rounded-full bg-emerald-400 pulse-dot"></span>') +
                    '<span class="text-sm text-dark-200 font-medium">' + escapeHtml(msg.name) + '</span>' +
                '</div>' +
            '</td>' +
            '<td class="px-4 py-3 text-sm text-dark-300 hidden sm:table-cell">' + escapeHtml(msg.email) + '</td>' +
            '<td class="px-4 py-3 text-sm text-dark-300 hidden md:table-cell">' + escapeHtml(msg.service || '-') + '</td>' +
            '<td class="px-4 py-3 text-sm text-dark-400 max-w-[200px] truncate">' + escapeHtml(msg.message) + '</td>' +
            '<td class="px-4 py-3 text-sm text-dark-400 whitespace-nowrap hidden lg:table-cell">' + formatDate(msg.date) + '</td>' +
            '<td class="px-4 py-3 whitespace-nowrap">' +
                '<div class="flex items-center gap-1">' +
                    '<button onclick="openMessageModal(' + msg.id + ')" class="p-1.5 rounded-lg hover:bg-accent/20 text-accent transition" title="Lihat Detail">' +
                        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>' +
                    '</button>' +
                    (msg.deleted
                        ? '<button onclick="restoreMessage(' + msg.id + ')" class="p-1.5 rounded-lg hover:bg-emerald-500/20 text-emerald-400 transition" title="Pulihkan">' +
                            '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>' +
                          '</button>'
                        : (msg.read
                            ? '<button onclick="markAsUnread(' + msg.id + ')" class="p-1.5 rounded-lg hover:bg-amber-500/20 text-amber-400 transition" title="Tandai Belum Dibaca">' +
                                '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' +
                              '</button>'
                            : '<button onclick="markAsRead(' + msg.id + ')" class="p-1.5 rounded-lg hover:bg-emerald-500/20 text-emerald-400 transition" title="Tandai Sudah Dibaca">' +
                                '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>' +
                              '</button>'
                        )
                    ) +
                    '<button onclick="permanentDelete(' + msg.id + ')" class="p-1.5 rounded-lg hover:bg-red-500/20 text-red-400 transition" title="Hapus Permanen">' +
                        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>' +
                    '</button>' +
                '</div>' +
            '</td>';
        tbody.appendChild(tr);
    });
}


// ============================================================
// 12. INISIALISASI
//    Setup awal saat halaman dashboard dimuat
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // Set tab default (Hero)
    switchTab('hero');

    // Muat data tersimpan dari localStorage untuk setiap form
    const formHero = document.getElementById('formHero');
    const formAbout = document.getElementById('formAbout');
    const formPortfolio = document.getElementById('formPortfolio');

    if (formHero) loadFormDataFromStorage('hero', formHero);
    if (formAbout) loadFormDataFromStorage('about', formAbout);
    if (formPortfolio) loadFormDataFromStorage('portfolio', formPortfolio);

    // Muat status toggle portfolio (aktif/nonaktif)
    loadPortfolioToggleState();
    initPortfolioToggles();

    // Inisialisasi drop zone untuk semua portfolio
    setupDropZone('dropZone1', 'bannerFileInput1', 'previewBanner1');
    setupDropZone('dropZone2', 'bannerFileInput2', 'previewBanner2');
    setupDropZone('dropZone3', 'bannerFileInput3', 'previewBanner3');
    setupDropZone('dropZone4', 'bannerFileInput4', 'previewBanner4');
    setupDropZone('dropZone5', 'bannerFileInput5', 'previewBanner5');

            // Render pesan untuk tab messages (default filter: all)
            renderMessages('all');
            updateMessageBadge();

            // Log informasi dashboard
            console.log('%c XQL TECH Admin Dashboard ', 'background: linear-gradient(135deg, #667eea, #764ba2); color: white; font-size: 14px; padding: 8px 16px; border-radius: 8px; font-weight: bold;');
            console.log('Dashboard siap digunakan. Data form disimpan ke localStorage.');
        });
