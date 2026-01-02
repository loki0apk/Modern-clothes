// Language Translation System for Modern Clothes
const translations = {
    en: {
        // Navbar
        navHome: 'Home',
        navWomen: 'Women',
        navMen: 'Men',
        navKids: 'Kids',
        navAbout: 'About Us',
        navContact: 'Contact',
        navLanguage: 'English',
        navLogin: 'Login',
        // Hero Section
        heroTitle: 'Discover Your Style',
        heroSubtitle: 'Explore our latest collection of premium fashion for everyone',
        heroButton: 'Shop Now',
        // ... (Keep all your existing product and about keys here)
        // Contact Page
        contactHeroTitle: 'Get in Touch',
        contactMapTitle: 'Our Location',
        contactFormTitle: 'Send Us a Message',
        // ...
        footerCopyright: '© 2025 Modern Clothes. All rights reserved.'
    },
    kh: {
        // Navbar
        navHome: 'ទំព័រដើម',
        navWomen: 'នារី',
        navMen: 'បុរស',
        navKids: 'កុមារ',
        navAbout: 'អំពីយើង',
        navContact: 'ទំនាក់ទំនង',
        navLanguage: 'ភាសាខ្មែរ',
        navLogin: 'ចូលប្រើ',
        // Hero Section
        heroTitle: 'ស្វែងរកស្ទីលផ្ទាល់ខ្លួនរបស់អ្នក',
        heroSubtitle: 'ស្វែងរកការប្រមូលផ្តុំម៉ូដសម្លៀកបំពាក់ថ្មីៗបំផុតសម្រាប់មនុស្សគ្រប់គ្នា',
        heroButton: 'ទិញឥឡូវនេះ',
        // ... (Keep all your existing product and about keys here)
        // Contact Page
        contactHeroTitle: 'ទំនាក់ទំនងមកយើង',
        contactMapTitle: 'ទីតាំងរបស់យើង',
        contactFormTitle: 'ផ្ញើសារមកកាន់យើង',
        // ...
        footerCopyright: '© ២០២៥ Modern Clothes។ រក្សាសិទ្ធិគ្រប់យ៉ាង។'
    }
};

let currentLang = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    const t = translations[lang];
    
    // Update all elements with data-translate attribute
    Object.keys(t).forEach(key => {
        const elements = document.querySelectorAll(`[data-translate="${key}"]`);
        elements.forEach(el => {
            // Handle placeholders for inputs
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateLanguage(currentLang);
    
    // Khmer Switcher
    document.querySelectorAll('.dropdown-item.kh').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            updateLanguage('kh');
        });
    });
    
    // English Switcher
    document.querySelectorAll('.dropdown-item.us').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            updateLanguage('en');
        });
    });
});
