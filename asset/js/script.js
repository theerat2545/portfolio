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
        tedu: "Education",
        tport: "Portfolio",
        tcer: "Certificate",
        tcontact: "Contact",
        et: "English / Thai",
        im: "I'm",
        name: "Mr. Teerat Choktaweesed (Teerat)",
        ijp: "Interested job positions",
        sabout: "About",
        a1: "Name: Teerat Choktaweeset  |  Nickname: Teerat",
        a2: "Date of Birth: April 9, 2002  |  Age: 22 years’ old",
        a3: "Nationality: Thai  |  Ethnicity: Thai",
        a4: "Religion: Buddhism  |  Blood Type: A",
        a5: "Medical Condition: Thalassemia",
        a6: "I recently graduated with a Bachelor's degree and",
        a7: "have no professional work experience.",
        a8: "I have completed an internship of 3 months and 16 days.",
        a9: "I have completed military conscription.",
        sskills: "My Skills",
        socailSkills: "Social Skills",
        s1: "* Problem-solving",
        s2: "* Quick-wittedness",
        s3: "* Adaptability to new social environments",
        s4: "* Time management",
        s5: "* Decision-making",
        s6: "* Teamwork",
        s7: "* Willingness to learn new things",
        typeingSkills: "Typing Skills",
        t1: "Thai : 19 words per minute",
        t2: "English : 20 words per minute",
        languageSkills: "Language Skills",
        l1: "Thai : ",
        l2: "English : ",
        sedu: "Educations",
        e1: "B. Sc",
        e2: "Bachelor of Science (2020-2024)",
        e3: "Buriram Rajabhat University",
        e4: "Faculty of Science, Computer Science",
        e5: "Final Project: Answer Checking and Quality Processing System",
        e6: "Languages and frameworks used: PHP, HTML5, JavaScript, CSS",
        e7: "Bootstrap 5, SQL, MySQL database",
        e8: "GPA 2.93",
        e9: "HSC",
        e10: "High School Certificate (2017-2020)",
        e11: "Muangkae Pittayakom School (Science-Math)",
        e12: "",
        e13: "",
        e14: "",
        e15: "GPA 3.39",
        sportfolio: "Portfolio",
        pro1: "Final Project: Answer Checking and Quality Processing System",
        git: "GitHub",
        doc: "Documents",
        sexperience: "Experience",
        internship: "Mango Consultant Co., Ltd. (November 1, 2023 - February 16, 2024)",
        ex1: "Web Developer (Internship)",
        ex2: "Worked as part of an intern team with a mentor to oversee and assign tasks.",
        ex3: "Languages, tools, and frameworks used: C#, Vue.js, HTML, CSS, Bootstrap",
        ex4: "IIS, Node.js, Postman. Responsibilities included improving display efficiency,",
        ex5: "adding and modifying programs as per client requirements.",
        ex6: "View",
        scertificate: "Certificate",
        c1: "IC3 Digital Literacy Certification (November 29, 2020)",
        c2: "* Computing Fundamentals",
        c3: "* Key Application",
        c4: "* Living Online",
        scontact: "Contact Me",
        mail: "Email: teeratchoktaweesad@gmail.com",
        github: "GitHub: https://github.com/theerat2545",
        line: "LineID: theerat3624",
        tel1: "Tel: 0909318505 ",
        tel2: "Tel: 0910272212",
        raddress: "Registered Address",  
        r1: "78, Village No. 8, Ban Agean,",                          
        r2: "Nong Yai Sub-district, Satuek",                          
        r3: "District, Buriram Province,",                          
        r4: "31150",                                 
        currentAddress: "Current Address",
        ca1: "340/3, KT Apartment, Soi",
        ca2: "Thongprasert, Rama 9 Road,",
        ca3: "Huamark Sub-district, Bangkapi",
        ca4: "District, Bangkok, 10240",
        thankYou: "Thank You",
    },
    th: {
        tabout: "เกี่ยวกับ",
        tskills: "ทักษะ",
        tedu: "การศึกษา",
        tport: "แฟ้มสะสมผลงาน",
        tcer: "ใบรับรอง",
        tcontact: "ติดต่อ",
        et: "อังกฤษ / ไทย",
        im: "ผม",
        name: "นายธีรัตม์ โชคทวีเศรษฐ์ (ธีรัตม์)",
        ijp: "ตำแหน่งงานที่สนใจ",
        sabout: "เกี่ยวกับ",
        a1: "ชื่อ: ธีรัตม์ โชคทวีเศรษฐ์  |  ชื่อเล่น: ธีรัตม์",
        a2: "วันเกิด: 9 เมษายน 2545  |  อายุ: 22 ปี",
        a3: "สัญชาติ: ไทย  |  เชื้อชาติ: ไทย",
        a4: "ศาสนา: พุทธ  |  กรุ๊ปเลือด: A",
        a5: "โรคประจำตัว: ธาลัสซีเมีย",
        a6: "ผมเพิ่งจบปริญญาตรีและ",
        a7: "ยังไม่มีประสบการณ์ทำงานมืออาชีพ",
        a8: "ผมได้ฝึกงานเป็นระยะเวลา 3 เดือน 16 วัน",
        a9: "ผมได้ทำการเกณฑ์ทหารเรียบร้อยแล้ว",
        sskills: "ทักษะของผม",
        socailSkills: "ทักษะทางสังคม",
        s1: "* การแก้ปัญหา",
        s2: "* ความฉับไว",
        s3: "* ความสามารถในการปรับตัวในสภาพแวดล้อมใหม่ ๆ",
        s4: "* การจัดการเวลา",
        s5: "* การตัดสินใจ",
        s6: "* การทำงานเป็นทีม",
        s7: "* ความพร้อมที่จะเรียนรู้สิ่งใหม่ ๆ",
        typeingSkills: "ทักษะการพิมพ์",
        t1: "ภาษาไทย: 19 คำต่อนาที",
        t2: "ภาษาอังกฤษ: 20 คำต่อนาที",
        languageSkills: "ทักษะภาษา",
        l1: "ภาษาไทย: ",
        l2: "ภาษาอังกฤษ: ",
        sedu: "การศึกษา",
        e1: "วท.บ.",
        e2: "วิทยาศาสตรบัณฑิต (2563-2567)",
        e3: "มหาวิทยาลัยราชภัฏบุรีรัมย์",
        e4: "คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์",
        e5: "โปรเจคจบ: ระบบตรวจคำตอบและวิเคราะห์คุณภาพ",
        e6: "ภาษาและเฟรมเวิร์กที่ใช้: PHP, HTML5, JavaScript, CSS",
        e7: "Bootstrap 5, SQL, ฐานข้อมูล MySQL",
        e8: "เกรดเฉลี่ย 2.93",
        e9: "ม.ปลาย",
        e10: "ประกาศนียบัตรมัธยมศึกษา (2560-2563)",
        e11: "โรงเรียนเมืองแกพิทยาคม (วิทย์-คณิต)",
        e12: "",
        e13: "",
        e14: "",
        e15: "เกรดเฉลี่ย 3.39",
        sportfolio: "แฟ้มสะสมผลงาน",
        pro1: "โปรเจคจบ: ระบบตรวจสอบคำตอบและประมวลผลคุณภาพข้อสอบ",
        git: "กิตฮับ",
        doc: "เอกสาร",
        sexperience: "ประสบการณ์",
        internship: "บริษัท แมงโก้ คอนซัลแตนท์ จำกัด (1 พฤศจิกายน 2566 - 16 กุมภาพันธ์ 2567)",
        ex1: "นักพัฒนาเว็บไซต์ (ฝึกงาน)",
        ex2: "ทำงานเป็นทีมร่วมกับพี่เลี้ยงในการดูแลและมอบหมายงาน",
        ex3: "ภาษา, เครื่องมือ, และเฟรมเวิร์กที่ใช้: C#, Vue.js, HTML, CSS, Bootstrap",
        ex4: "IIS, Node.js, Postman. ความรับผิดชอบรวมถึงการปรับปรุงประสิทธิภาพการแสดงผล",
        ex5: "เพิ่มและแก้ไขโปรแกรมตามข้อกำหนดของลูกค้า",
        ex6: "ดู",
        scertificate: "ใบรับรอง",
        c1: "ใบรับรอง IC3 Digital Literacy (29 พฤศจิกายน 2563)",
        c2: "* ความรู้พื้นฐานการใช้งานคอมพิวเตอร์",
        c3: "* การใช้งานโปรแกรมสำนักงาน",
        c4: "* การใช้งานอินเทอร์เน็ต และการสื่อสารสังคมออนไลน์",
        scontact: "ติดต่อ",
        mail: "อีเมล: teeratchoktaweesad@gmail.com",
        github: "กิตฮับ: https://github.com/theerat2545",
        line: "ไลน์ไอดี: theerat3624",
        tel1: "โทร: 0909318505",
        tel2: "โทร: 0910272212",
        raddress: "ที่อยู่ตามทะเบียนบ้าน",  
        r1: "78 หมู่ 8 บ้านอาเจียน,",                          
        r2: "ตำบลหนองใหญ่ อำเภอสตึก",                          
        r3: "จังหวัดบุรีรัมย์,",                          
        r4: "31150",                                 
        currentAddress: "ที่อยู่ปัจจุบัน",
        ca1: "340/3, KT อพาร์ทเมนท์, ซอย",
        ca2: "ทองประเสริฐ, ถนนพระราม 9,",
        ca3: "แขวงหัวหมาก, เขตบางกะปิ",
        ca4: "กรุงเทพฯ, 10240",
        thankYou: "ขอบคุณครับ",
    },
    
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
    document.getElementById('tedu').textContent = translations[language].tedu;
    document.getElementById('tport').textContent = translations[language].tport;
    document.getElementById('tcer').textContent = translations[language].tcer;
    document.getElementById('tcontact').textContent = translations[language].tcontact;
    document.getElementById('et').textContent = translations[language].et;
    document.getElementById('im').textContent = translations[language].im;
    document.getElementById('name').textContent = translations[language].name;
    document.getElementById('ijp').textContent = translations[language].ijp;
    document.getElementById('sabout').textContent = translations[language].sabout;
    document.getElementById('a1').textContent = translations[language].a1;
    document.getElementById('a2').textContent = translations[language].a2;
    document.getElementById('a3').textContent = translations[language].a3;
    document.getElementById('a4').textContent = translations[language].a4;
    document.getElementById('a5').textContent = translations[language].a5;
    document.getElementById('a6').textContent = translations[language].a6;
    document.getElementById('a7').textContent = translations[language].a7;
    document.getElementById('a8').textContent = translations[language].a8;
    document.getElementById('a9').textContent = translations[language].a9;
    document.getElementById('sskills').textContent = translations[language].sskills;
    document.getElementById('socailSkills').textContent = translations[language].socailSkills;
    document.getElementById('s1').textContent = translations[language].s1;
    document.getElementById('s2').textContent = translations[language].s2;
    document.getElementById('s3').textContent = translations[language].s3;
    document.getElementById('s4').textContent = translations[language].s4;
    document.getElementById('s5').textContent = translations[language].s5;
    document.getElementById('s6').textContent = translations[language].s6;
    document.getElementById('s7').textContent = translations[language].s7;
    document.getElementById('typeingSkills').textContent = translations[language].typeingSkills;
    document.getElementById('t1').textContent = translations[language].t1;
    document.getElementById('t2').textContent = translations[language].t2;
    document.getElementById('languageSkills').textContent = translations[language].languageSkills;
    document.getElementById('l1').textContent = translations[language].l1;
    document.getElementById('l2').textContent = translations[language].l2;
    document.getElementById('sedu').textContent = translations[language].sedu;
    document.getElementById('e1').textContent = translations[language].e1;
    document.getElementById('e2').textContent = translations[language].e2;
    document.getElementById('e3').textContent = translations[language].e3;
    document.getElementById('e4').textContent = translations[language].e4;
    document.getElementById('e5').textContent = translations[language].e5;
    document.getElementById('e6').textContent = translations[language].e6;
    document.getElementById('e7').textContent = translations[language].e7;
    document.getElementById('e8').textContent = translations[language].e8;
    document.getElementById('e9').textContent = translations[language].e9;
    document.getElementById('e10').textContent = translations[language].e10;
    document.getElementById('e11').textContent = translations[language].e11;
    document.getElementById('e12').textContent = translations[language].e12;
    document.getElementById('e13').textContent = translations[language].e13;
    document.getElementById('e14').textContent = translations[language].e14;
    document.getElementById('e15').textContent = translations[language].e15;
    document.getElementById('sportfolio').textContent = translations[language].sportfolio;
    document.getElementById('pro1').textContent = translations[language].pro1;
    document.getElementById('git').textContent = translations[language].git;
    document.getElementById('doc').textContent = translations[language].doc;
    document.getElementById('sexperience').textContent = translations[language].sexperience;
    document.getElementById('internship').textContent = translations[language].internship;
    document.getElementById('ex1').textContent = translations[language].ex1;
    document.getElementById('ex2').textContent = translations[language].ex2;
    document.getElementById('ex3').textContent = translations[language].ex3;
    document.getElementById('ex4').textContent = translations[language].ex4;
    document.getElementById('ex5').textContent = translations[language].ex5;
    document.getElementById('ex6').textContent = translations[language].ex6;
    document.getElementById('scertificate').textContent = translations[language].scertificate;
    document.getElementById('c1').textContent = translations[language].c1;
    document.getElementById('c2').textContent = translations[language].c2;
    document.getElementById('c3').textContent = translations[language].c3;
    document.getElementById('c4').textContent = translations[language].c4;
    document.getElementById('scontact').textContent = translations[language].scontact;
    document.getElementById('mail').textContent = translations[language].mail;
    document.getElementById('github').textContent = translations[language].github;
    document.getElementById('tel1').textContent = translations[language].tel1;
    document.getElementById('tel2').textContent = translations[language].tel2;
    document.getElementById('line').textContent = translations[language].line;
    document.getElementById('raddress').textContent = translations[language].raddress;
    document.getElementById('r1').textContent = translations[language].r1;
    document.getElementById('r2').textContent = translations[language].r2;
    document.getElementById('r3').textContent = translations[language].r3;
    document.getElementById('r4').textContent = translations[language].r4;
    document.getElementById('currentAddress').textContent = translations[language].currentAddress;
    document.getElementById('ca1').textContent = translations[language].ca1;
    document.getElementById('ca2').textContent = translations[language].ca2;
    document.getElementById('ca3').textContent = translations[language].ca3;
    document.getElementById('ca4').textContent = translations[language].ca4;
    document.getElementById('thankYou').textContent = translations[language].thankYou;
}

