document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // หยุดสังเกตเมื่อแสดงแล้ว
            }
        });
    }, {
        threshold: 0.2 // แสดงเมื่อเห็น 20% ขององค์ประกอบ
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

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
        sskills: "My Skills",
        sportfolio: "Portfolio",
        pro1: "Project 1",
        sexperience: "Experience",
        internship: "Web Developer (Internship)",
        scontact: "Contact Me",
        mail: "Email: teeratchoktaweesad@gmail.com",
        tel: "Tel: 0909318505 or 0910272212",
        line: "LineID: theerat3624",
        address: "",
        currentAddress: "",
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
        a1: "",
        a2: "",
        a3: "",
        sskills: "ทักษะ",
        sportfolio: "แฟ้มสะสมผลงาน",
        pro1: "โปรเจค 1",
        sexperience: "ประสบการณ์",
        internship: "Web Developer (สหกิจศึกษา)",
        scontact: "ติดต่อ",
        mail: "อีเมล: teeratchoktaweesad@gmail.com",
        tel: "โทร: 0909318505 หรือ 0910272212",
        line: "ไลน์ไอดี: theerat3624",
        address: "",
        currentAddress: "",
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
    document.getElementById('a1').textContent = translations[language].a1;
    document.getElementById('a2').textContent = translations[language].a2;
    document.getElementById('a3').textContent = translations[language].a3;
    document.getElementById('sskills').textContent = translations[language].sskills;
    document.getElementById('sportfolio').textContent = translations[language].sportfolio;
    document.getElementById('pro1').textContent = translations[language].pro1;
    document.getElementById('sexperience').textContent = translations[language].sexperience;
    document.getElementById('internship').textContent = translations[language].internship;
    document.getElementById('scontact').textContent = translations[language].scontact;
    document.getElementById('mail').textContent = translations[language].mail;
    document.getElementById('tel').textContent = translations[language].tel;
    document.getElementById('line').textContent = translations[language].line;
    document.getElementById('address').textContent = translations[language].address;
    document.getElementById('currentAddress').textContent = translations[language].currentAddress;
   
}
