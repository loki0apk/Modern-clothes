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
        // Hero & Page Content
        heroTitle: 'Discover Your Style',
        heroSubtitle: 'Explore our latest collection of premium fashion for everyone',
        heroButton: 'Shop Now',
        menHeroTitle: "Men's Collection",
        menHeroSubtitle: "Discover stylish and comfortable clothing for men",
        // Footer Sections
        footerShop: 'Shop',
        footerHelp: 'Help',
        footerCompany: 'Company',
        footerCategories: 'Category',
        footerCustomerService: 'Customer Service',
        footerShipping: 'Shipping Info',
        footerReturns: 'Returns',
        footerFAQ: 'FAQ',
        tagSale: 'Sale',
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
        // Hero & Page Content
        heroTitle: 'ស្វែងរកស្ទីលផ្ទាល់ខ្លួនរបស់អ្នក',
        heroSubtitle: 'ស្វែងរកការប្រមូលផ្តុំម៉ូដសម្លៀកបំពាក់ថ្មីៗបំផុតសម្រាប់មនុស្សគ្រប់គ្នា',
        heroButton: 'ទិញឥឡូវនេះ',
        menHeroTitle: "ការប្រមូលសម្លៀកបំពាក់បុរស",
        menHeroSubtitle: "ស្វែងរកសម្លៀកបំពាក់ទាន់សម័យ និងមានផាសុកភាពសម្រាប់បុរស",
        // Footer Sections
        footerShop: 'ហាង',
        footerHelp: 'ជំនួយ',
        footerCompany: 'ក្រុមហ៊ុន',
        footerCategories: 'ប្រភេទផលិតផល',
        footerCustomerService: 'សេវាកម្មអតិថិជន',
        footerShipping: 'ព័ត៌មានដឹកជញ្ជូន',
        footerReturns: 'ការប្តូរទំនិញវិញ',
        footerFAQ: 'សំណួរដែលសួរញឹកញាប់',
        tagSale: 'បញ្ចុះតម្លៃ',
        footerCopyright: '© ២០២៥ Modern Clothes។ រក្សាសិទ្ធិគ្រប់យ៉ាង។'
    }
};

let currentLang = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    const t = translations[lang];
    
    Object.keys(t).forEach(key => {
        const elements = document.querySelectorAll(`[data-translate="${key}"]`);
        elements.forEach(el => {
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
