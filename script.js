// TRANSLATION DATA DICTIONARY
const translations = {
  EN: {
    nav_home: "Home", nav_about: "About", nav_exp: "Experience", nav_projects: "Projects", nav_skills: "Skills", nav_contact: "Contact",
    hero_badge: "Welcome to my portfolio",
    hero_desc: "English Literature graduate with hands-on experience in Customer Support, Client Relations, and Operational Administration. Actively exploring Web Development & AI Workflow integrations.",
    btn_cv: "Download CV", btn_contact: "Get in Touch",
    stat_customers: "Customers Served / Shift", stat_gpa: "GPA at Unpas", stat_team: "Team Members Led (CCU Event)",
    about_title: "A Journey of Continuous Learning", about_subtitle: "From English Literature to Tech Support and Beyond.",
    about_p1: "I didn't start this journey with a completely clear goal. I was just trying to find a place where I could grow. My journey began with English Literature at Universitas Pasundan. For years, I studied literature, communication, writing, analysis, and various perspectives on humanity and culture. At the time, I might not have realized it, but much of what I learned eventually became an important part of my professional journey.",
    about_p2: "After graduating, my journey took me through various work environments. I worked in hospitality, served customers as a barista, supported operational and administrative activities, until finally working in customer support at a tech company. Each experience gave me a different perspective.",
    about_p3: "Hospitality taught me to understand people. Customer service taught me to listen and respond. Administration taught me to be organized and detail-oriented. Technical support taught me to look at a problem from a different angle.",
    about_p4: "In the midst of this journey, I became interested in technology. Not because I suddenly wanted to become a programmer, but because I wanted to understand how things behind the scenes could be used to make work easier and more effective. That curiosity led me to start learning Web, UI/UX, and Artificial Intelligence. I am still learning, still experimenting, and there is still much I want to understand. I don't consider myself an expert in these fields yet, and to me, that's okay. Learning is part of the journey.",
    about_p5: "Currently, I continue to develop my experience in Customer Service, Administration, Marketing, and Hospitality, while expanding my capabilities in technology as an additional skill set. I might still be figuring out where this journey will take me. But I know one thing: I enjoy the process of learning, working with others, solving problems, and turning what I've learned into something useful. And perhaps, this portfolio is just one chapter of that journey.",
    fact_bg: "Background", fact_focus: "Current Focus", fact_strength: "Core Strength", fact_strength_val: "Empathy + Tech Troubleshooting", fact_location: "Location",
    exp_title: "Professional & Organizational Experience", exp_subtitle: "A proven track record in technical support, hospitality, operations, and leadership.",
    sda_role: "Customer & Operational Support",
    sda_p1: "Maintained a strict <strong>under 1-minute initial response time</strong> for client tickets and communications, ensuring high SLA compliance.",
    sda_p2: "Conducted systematic troubleshooting using WHMCS, accurately logging issues and monitoring ticket progress.",
    sda_p3: "Coordinated with internal technical teams for prompt server and hosting problem resolutions.",
    sda_sop_title: "Interactive SOP Ticket Handling Workflow",
    sop_s1: "Ticket Received", sop_s2: "Diagnosis / WHMCS", sop_s3: "Resolution / Escalation",
    sop_click_hint: "Click any step above to view operational detail.",
    prof_role: "Barista & Operational Support",
    prof_p1: "Served <strong>80–100 customers per shift</strong> in high-volume environments while maintaining top-tier hospitality and order accuracy.",
    prof_p2: "Operated POS systems, conducted accurate daily sales recapitulations, and monitored inventory.",
    prof_p3: "Actively contributed promotional ideas and event concepts to boost customer engagement and retention.",
    btn_view_photo: "View Operational Photo", btn_view_cert: "View Internship Certificate",
    hotel_role: "F&B Banquet Intern",
    hotel_p1: "Provided high-standard guest services during corporate meetings and wedding events.",
    hotel_p2: "Maintained smooth coordination across international hospitality standards.",
    org_role: "Project Lead (CCU) & Admin Staff (Covid-19 Vaccination)",
    org_p1: "Led and coordinated a <strong>15-member team</strong> to successfully execute the Cross Cultural Understanding (CCU) cultural event.",
    org_p2: "Managed participant administration, task delegation, and on-site problem-solving to ensure the event met its objectives.",
    proj_title: "Projects & Portfolio Case Studies", proj_subtitle: "Featured technical web development, academic writing, and digital documentation.",
    proj1_desc: "A customized website built to archive operational memories, menu highlights, and community moments of Prof Coffee.",
    proj2_desc: "Undergraduate research paper focusing on English Literature analysis, structured reporting, and formal academic writing.",
    proj3_desc: "Digital documentation standardizing the ticket handling workflow, response times, and escalation matrices.",
    proj4_desc: "Automated Excel template for recapitulating daily POS sales, inventory logging, and revenue reporting.",
    btn_details: "View Details / Abstract",
    skills_title: "Competencies, Tech & AI Learning", skills_subtitle: "Combining soft-skills excellence with modern tech tools and AI workflows.",
    ai_learning_text: "Actively learning to integrate AI tools for daily productivity, workflow optimization, and exploring entry-level Marketing & Client Success strategies.",
    contact_title: "Get In Touch", contact_subtitle: "Feel free to connect for opportunities or collaborations.",
    modal_p1_text: "Designed and coded using HTML, CSS, and GitHub Pages to capture operational memory and showcase coffee shop offerings.",
    modal_p2_text: "Focusing on literary analysis, critical thinking, and academic presentation prepared during studies at Universitas Pasundan.",
    modal_p3_text: "Digital workflow standardizing ticket handling, ensuring sub-1-minute response times and proper escalation matrices.",
    modal_p4_text: "Automated Excel template for recapitulating daily POS sales, inventory logging, and revenue reporting used during operational shifts."
  },
  ID: {
    nav_home: "Beranda", nav_about: "Tentang", nav_exp: "Pengalaman", nav_projects: "Proyek", nav_skills: "Keahlian", nav_contact: "Kontak",
    hero_badge: "Selamat datang di portofolio saya",
    hero_desc: "Lulusan S1 Sastra Inggris dengan pengalaman di bidang Layanan Pelanggan, Hubungan Klien, dan Administrasi Operasional. Adaptif, teliti, serta aktif mempelajari Web Development & integrasi Workflow AI.",
    btn_cv: "Unduh CV", btn_contact: "Hubungi Saya",
    stat_customers: "Pelanggan Dilayani / Shift", stat_gpa: "IPK Universitas Pasundan", stat_team: "Anggota Tim Dipimpin (CCU)",
    about_title: "Perjalanan Pembelajaran Tanpa Henti", about_subtitle: "Dari Sastra Inggris menuju Tech Support dan seterusnya.",
    about_p1: "Saya tidak memulai perjalanan ini dengan tujuan yang benar-benar jelas. Saya hanya sedang berusaha menemukan tempat di mana saya bisa berkembang. Perjalanan saya dimulai dari Sastra Inggris di Universitas Pasundan. Selama bertahun-tahun, saya mempelajari kesusastraan, komunikasi, penulisan, analisis, serta berbagai perspektif tentang manusia dan budaya. Saat itu saya mungkin belum menyadari, tetapi banyak hal yang saya pelajari akhirnya menjadi bagian penting dalam perjalanan profesional saya.",
    about_p2: "Setelah lulus, perjalanan saya membawa saya ke berbagai lingkungan kerja. Saya pernah bekerja di bidang hospitality, melayani pelanggan sebagai barista, mendukung kegiatan operasional dan administrasi, hingga akhirnya bekerja di bidang customer support pada perusahaan teknologi. Setiap pengalaman memberikan saya sudut pandang yang berbeda.",
    about_p3: "Hospitality mengajarkan saya untuk memahami orang. Customer service mengajarkan saya untuk mendengarkan dan merespons. Administrasi mengajarkan saya untuk terorganisir dan memperhatikan detail. Technical support mengajarkan saya untuk melihat sebuah masalah dari sudut pandang yang berbeda.",
    about_p4: "Di tengah perjalanan tersebut, saya mulai tertarik pada teknologi. Bukan karena saya tiba-tiba ingin menjadi programmer, tetapi karena saya ingin memahami bagaimana sesuatu di balik layar dapat digunakan untuk membuat pekerjaan menjadi lebih mudah dan efektif. Rasa penasaran itu membawa saya untuk mulai mempelajari Web, UI/UX, dan Artificial Intelligence. Saya masih belajar, masih mencoba berbagai hal, dan masih banyak yang ingin saya pahami. Saya belum menganggap diri saya sebagai seorang ahli di bidang tersebut, dan bagi saya itu bukan masalah. Belajar adalah bagian dari perjalanan.",
    about_p5: "Saat ini, saya terus mengembangkan pengalaman di bidang Customer Service, Administrasi, Marketing, dan Hospitality, sembari memperluas kemampuan saya di bidang teknologi sebagai keahlian tambahan. Saya mungkin masih mencari tahu ke mana perjalanan ini akan membawa saya. Tetapi saya tahu satu hal: saya menikmati proses belajar, bekerja dengan orang lain, memecahkan masalah, dan mengubah apa yang saya pelajari menjadi sesuatu yang bermanfaat. Dan mungkin, portfolio ini hanyalah salah satu bab dari perjalanan tersebut.",
    fact_bg: "Latar Belakang", fact_focus: "Fokus Saat Ini", fact_strength: "Kekuatan Utama", fact_strength_val: "Empati + Troubleshooting Teknis", fact_location: "Lokasi",
    exp_title: "Pengalaman Kerja & Organisasi", exp_subtitle: "Rekam jejak terbukti dalam dukungan teknis, hospitality, operasional, dan kepemimpinan.",
    sda_role: "Customer & Operational Support",
    sda_p1: "Menjaga <strong>waktu respons awal di bawah 1 menit</strong> untuk tiket dan komunikasi klien, memastikan kepatuhan SLA yang tinggi.",
    sda_p2: "Melakukan troubleshooting sistematis menggunakan WHMCS, mencatat kendala secara akurat, dan memantau progres tiket.",
    sda_p3: "Berkoordinasi dengan tim teknis internal untuk penyelesaian masalah server dan hosting secara cepat.",
    sda_sop_title: "Simulasi Alur SOP Penanganan Tiket",
    sop_s1: "Tiket Diterima", sop_s2: "Diagnosis / WHMCS", sop_s3: "Resolusi / Eskalasi",
    sop_click_hint: "Klik salah satu langkah di atas untuk melihat detail operasional.",
    prof_role: "Barista & Operational Support",
    prof_p1: "Melayani <strong>80–100 pelanggan per shift</strong> di lingkungan yang padat sambil menjaga kualitas layanan dan akurasi pesanan.",
    prof_p2: "Mengoperasikan sistem POS, melakukan rekapitulasi penjualan harian secara akurat, dan memantau persediaan stok.",
    prof_p3: "Aktif memberikan ide promosi dan konsep acara untuk meningkatkan keterikatan dan retensi pelanggan.",
    btn_view_photo: "Lihat Foto Operasional", btn_view_cert: "Lihat Sertifikat Magang",
    hotel_role: "F&B Banquet Intern",
    hotel_p1: "Melayani tamu pada kegiatan acara corporate dan pernikahan berstandar internasional.",
    hotel_p2: "Menjaga koordinasi dan kualitas pelayanan sesuai standar hospitality hotel bintang 4.",
    org_role: "Ketua Pelaksana (CCU) & Staf Admin (Vaksinasi Covid-19)",
    org_p1: "Memimpin dan mengkoordinasikan <strong>tim beranggotakan 15 orang</strong> untuk mengeksekusi acara Cross Cultural Understanding (CCU).",
    org_p2: "Mengelola administrasi peserta, pembagian tugas, dan penyelesaian masalah lapangan agar acara berjalan sesuai tujuan.",
    proj_title: "Proyek & Studi Kasus", proj_subtitle: "Proyek pengembangan web teknis, penulisan akademis, dan dokumentasi digital.",
    proj1_desc: "Website kustom yang dibangun untuk mengarsipkan kenangan operasional dan menu Prof Coffee.",
    proj2_desc: "Draft riset akademis berfokus pada analisis Sastra Inggris dan penyusunan laporan terstruktur.",
    proj3_desc: "Dokumentasi digital yang menstandarisasi alur penanganan tiket, waktu respons, dan matriks eskalasi.",
    proj4_desc: "Template Excel otomatis untuk rekapitulasi penjualan POS harian, pencatatan stok, dan laporan pendapatan.",
    btn_details: "Lihat Detail / Abstrak",
    skills_title: "Kompetensi, Teknologi & Pembelajaran AI", skills_subtitle: "Menggabungkan keunggulan soft-skills dengan tools teknologi modern.",
    ai_learning_text: "Aktif mempelajari pemanfaatan tools AI untuk efisiensi kerja harian, optimasi alur kerja, serta mengeksplorasi strategi Marketing & Client Success.",
    contact_title: "Hubungi Saya", contact_subtitle: "Silakan terhubung untuk peluang kerja sama atau diskusi.",
    modal_p1_text: "Didesain dan dikodekan menggunakan HTML, CSS, dan GitHub Pages untuk mengarsipkan kenangan operasional dan menampilkan menu coffee shop.",
    modal_p2_text: "Fokus pada analisis sastra, pemikiran kritis, dan presentasi akademis yang disusun selama studi di Universitas Pasundan.",
    modal_p3_text: "Alur kerja digital yang menstandarisasi penanganan tiket, memastikan waktu respons di bawah 1 menit dan matriks eskalasi yang tepat.",
    modal_p4_text: "Template Excel otomatis untuk rekapitulasi penjualan POS harian, pencatatan stok, dan laporan pendapatan yang digunakan selama shift operasional."
  }
};

let currentLang = 'EN';

// TAB NAVIGATION SYSTEM
document.querySelectorAll('.nav-item, .nav-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const targetTab = trigger.getAttribute('data-tab') || trigger.getAttribute('data-target');
    
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    
    document.getElementById(targetTab).classList.add('active');
    const activeNav = document.querySelector(`.nav-item[data-tab="${targetTab}"]`);
    if(activeNav) activeNav.classList.add('active');

    // Reset counter when going back to home
    if (targetTab === 'home') {
      countersStarted = false;
      startCounters();
    }

    // Re-trigger scroll reveal on tab change
    setTimeout(() => {
      revealOnScroll();
      initTilt(); // Re-init tilt for newly visible cards
    }, 100);
  });
});

// BILINGUAL LANGUAGE SWITCHER
const langBtn = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'EN' ? 'ID' : 'EN';
  langText.textContent = currentLang === 'EN' ? 'ID' : 'EN';
  updateLanguage();
});

function updateLanguage() {
  document.querySelectorAll('[data-key]').forEach(elem => {
    const key = elem.getAttribute('data-key');
    if (translations[currentLang][key]) {
      elem.innerHTML = translations[currentLang][key];
    }
  });
}

// TYPING EFFECT
const words = ["Customer Support Specialist", "Client Relations Associate", "Operational Support Specialist"];
let i = 0; let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      document.getElementById('typing-text').innerHTML += word.shift();
    } else {
      setTimeout(deletingEffect, 2000);
      return false;
    }
    timer = setTimeout(loopTyping, 100);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById('typing-text').innerHTML = word.join("");
    } else {
      if (words.length > (i + 1)) { i++; } else { i = 0; }
      setTimeout(typingEffect, 500);
      return false;
    }
    timer = setTimeout(loopDeleting, 50);
  };
  loopDeleting();
}
typingEffect();

// COUNTER ANIMATION
let countersStarted = false;

function startCounters() {
  if (countersStarted) return;
  countersStarted = true;
  
  document.querySelectorAll('.counter').forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / 50;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}
window.addEventListener('load', startCounters);

// INTERACTIVE WHMCS SOP DETAIL
function showSopDetail(step) {
  const detailBox = document.getElementById('sop-detail');
  const sopDetails = {
    step1: {
      EN: "Step 1 (Ticket Received): Verify user identity, read customer problem description, and check SLA priority.",
      ID: "Langkah 1 (Tiket Diterima): Verifikasi identitas pengguna, baca deskripsi kendala pelanggan, dan cek prioritas SLA."
    },
    step2: {
      EN: "Step 2 (Diagnosis/WHMCS): Check domain/hosting status on WHMCS dashboard, inspect error logs or server responses.",
      ID: "Langkah 2 (Diagnosis/WHMCS): Cek status domain/hosting pada dashboard WHMCS, periksa log error atau respon server."
    },
    step3: {
      EN: "Step 3 (Resolution): Provide clear solution steps to client or escalate complex server bugs to internal L2 engineers.",
      ID: "Langkah 3 (Resolusi): Berikan panduan solusi yang jelas ke pelanggan atau eskalasi kendala ke tim teknis L2."
    }
  };
  detailBox.textContent = sopDetails[step][currentLang];
}

// MODALS
document.querySelectorAll('.modal-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';
  });
});

document.querySelectorAll('.close-modal').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

// SCROLL REVEAL
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 3D TILT MICRO-INTERACTION
function initTilt() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    // Avoid re-adding listener if already initialized
    if (card.dataset.tiltInit === 'true') return;
    card.dataset.tiltInit = 'true';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15; // Sensitivity
      const rotateY = (centerX - x) / 15;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

// Initialize tilt on load
window.addEventListener('load', initTilt);