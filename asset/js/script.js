const translations = {
    en: {
        tabout: "About",
        tskills: "Skills",
        tport: "Portfolio",
        tcontact: "Contact",
        et: "English / Thai",
        me: "I'm",
        name: "Mr. Teerat Choktaweesed (Teerat)",
        sabout: "About",
        a1: "",
        a2: "",
        a3: "",
        sskills: "",
    },
    th: {
        tabout: "เกี่ยวกับ",
        tskills: "ทักษะ",
        tport: "ผลงาน",
        tcontact: "ติดต่อ",
        et: "อังกฤษ / ไทย",
        me: "ผม",
        name: "นายธีรัตม์ โชคทวีเศรษฐ์ (ธีรัตม์)",
        sabout: "เกี่ยวกับ",
    }
};

// ฟังก์ชันสำหรับเปลี่ยนภาษาเมื่อมีการ toggle
document.getElementById('languageToggle').addEventListener('change', function() {
    if (this.checked) {
        switchLanguage('th');
    } else {
        switchLanguage('en');
    }
});

function switchLanguage(language) {
    document.getElementById('tabout').textContent = translations[language].tabout;
    document.getElementById('tskills').textContent = translations[language].tskills;
    document.getElementById('tport').textContent = translations[language].tport;
    document.getElementById('tcontact').textContent = translations[language].tcontact;
    document.getElementById('et').textContent = translations[language].et;
    document.getElementById('me').textContent = translations[language].me;
    document.getElementById('name').textContent = translations[language].name;
    document.getElementById('sabout').textContent = translations[language].sabout;
   
}
