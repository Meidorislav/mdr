import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cvData = {
  en: {
    name: 'Vladislav Bakin',
    title: 'Go Backend Developer',
    location: 'Perm, Russia',
    email: 'meidorislav@gmail.com',
    website: 'meidori.tech',
    github: 'github.com/Meidorislav',
    linkedin: 'linkedin.com/in/meidorislav',

    about: 'I\'m a 3rd-year student at PNRPU, majoring in Informatics and Computer Science. Deeply passionate about Go Backend Development and a dedicated Arch Linux user. Currently actively looking for an Internship as Go Backend Developer. I focus on high-performance systems and clean architecture, with a goal to build robust infrastructures within the Fintech industry. Hackathon participant, team leader, and advocate for open-source software.',

    experience: [
      {
        company: 'LLC "Information Service Center"',
        position: 'SQL Developer',
        date: 'May 2026 - July 2026',
        description: 'Specialized in database optimization, complex SQL queries, and efficient data management. Worked with PostgreSQL and relational database design.'
      }
    ],

    education: [
      {
        school: 'Perm National Research Polytechnic University (PNRPU)',
        degree: 'B.S. in Informatics and Computer Science',
        period: 'September 2023 - June 2027 (Expected)'
      },
      {
        school: 'Professional Retraining Program in Data Mining and Machine Learning (PNRPU)',
        degree: 'Data Mining and Machine Learning Implementation Specialist',
        period: 'October 2024 - June 2025'
      },
      {
        school: 'Xsolla School',
        degree: 'Software Engineering',
        period: 'February 2026 - May 2026'
      }
    ],

    skills: {
      'Languages': ['Go', 'Python', 'C++', 'TypeScript', 'SQL'],
      'Web': ['React', 'Vanilla CSS', 'Vite'],
      'Desktop / GUI': ['Qt6 + QML'],
      'Infrastructure / Ops': ['Linux', 'Docker', 'Caddy', 'Git'],
      'Databases': ['PostgreSQL', 'Relational Design'],
      'Docs': ['Typst', 'Markdown', 'LaTeX'],
      'Languages (Human)': ['English (B2)', 'Russian (Native)']
    },

    projects: [
      {
        name: 'Purr Case',
        description: 'Cat-themed loot case marketplace. Xsolla payments integration.'
      },
      {
        name: 'Storefront Sales',
        description: 'E-commerce solution with dynamic pricing and product recommendations.'
      },
      {
        name: 'Who Among You',
        description: 'Real-time multiplayer party game with WebSockets. Cozy vibes & interactive rounds.'
      },
      {
        name: 'MDR Portfolio',
        description: 'Linux-inspired terminal portfolio with sequenced animations.'
      }
    ]
  },
  ru: {
    name: 'Владислав Бакин',
    title: 'Go Backend разработчик',
    location: 'Пермь, Россия',
    email: 'meidorislav@gmail.com',
    website: 'meidori.tech',
    github: 'github.com/Meidorislav',
    linkedin: 'linkedin.com/in/meidorislav',

    about: 'Я студент 3-го курса ПНИПУ, обучаюсь по специальности «Информатика и вычислительная техника». Глубоко увлечен Go Backend разработкой и являюсь преданным пользователем Arch Linux (основная ОС). В настоящее время активно ищу стажировку в качестве Go Backend разработчика. Я фокусируюсь на высокопроизводительных системах и чистой архитектуре с целью создания надежных инфраструктур в сфере Финтех. Участник хакатонов, тимлид и сторонник программного обеспечения с открытым исходным кодом.',

    experience: [
      {
        company: 'ООО «Информационно-сервисный центр»',
        position: 'SQL Разработчик',
        date: 'Май 2026 — Июль 2026',
        description: 'Специализировался на оптимизации баз данных, сложных SQL-запросах и эффективном управлении данными. Проектировал и поддерживал реляционные базы данных на PostgreSQL.'
      }
    ],

    education: [
      {
        school: 'Пермский национальный исследовательский политехнический университет (ПНИПУ)',
        degree: '09.03.01 Информатика и вычислительная техника',
        period: 'Сентябрь 2023 - Июнь 2027'
      },
      {
        school: 'Программа профессиональной переподготовки по анализу данных и машинному обучению (ПНИПУ)',
        degree: 'Специалист по реализации методов анализа данных и машинного обучения',
        period: 'Октябрь 2024 - Июнь 2025'
      },
      {
        school: 'Школа Xsolla',
        degree: 'Программная инженерия',
        period: 'Февраль 2026 - Май 2026'
      }
    ],

    skills: {
      'Языки программирования': ['Go', 'Python', 'C++', 'TypeScript', 'SQL'],
      'Веб': ['React', 'Vanilla CSS', 'Vite'],
      'Desktop / GUI': ['Qt6 + QML'],
      'Инфра / Ops': ['Linux', 'Docker', 'Caddy', 'Git'],
      'Базы данных': ['PostgreSQL', 'Проектирование БД'],
      'Документация': ['Typst', 'Markdown', 'LaTeX'],
      'Языки (человеческие)': ['English (B2)', 'Русский (родной)']
    },

    projects: [
      {
        name: 'Purr Case',
        description: 'Маркетплейс лутбоксов в кошачьей тематике с интеграцией платежной системы Xsolla.'
      },
      {
        name: 'Storefront Sales',
        description: 'E-commerce решение с динамическим ценообразованием и рекомендациями товаров.'
      },
      {
        name: 'Who Among You',
        description: 'Многопользовательская party-игра в реальном времени на базе WebSockets.'
      },
      {
        name: 'MDR Portfolio',
        description: 'Портфолио в стиле Linux-терминала с анимациями и интерактивным интерфейсом.'
      }
    ]
  }
};

function createCV(lang) {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 40,
    bufferPages: true
  });

  // Register font that supports Cyrillic
  const fontPath = '/usr/share/fonts/TTF/NotoSansMNerdFont-Regular.ttf';
  const fontPathBold = '/usr/share/fonts/TTF/NotoSansMNerdFont-Bold.ttf';

  if (fs.existsSync(fontPath)) {
    doc.registerFont('NotoSans', fontPath);
    doc.registerFont('NotoSans-Bold', fontPathBold);
  }

  const data = cvData[lang];
  const isRU = lang === 'ru';
  const font = fs.existsSync(fontPath) ? 'NotoSans' : 'Helvetica';
  const boldFont = fs.existsSync(fontPathBold) ? 'NotoSans-Bold' : 'Helvetica-Bold';

  // Header
  doc.fontSize(24).font(boldFont).text(data.name);
  doc.fontSize(12).font(font).text(data.title);
  doc.fontSize(10).text(`${data.email} | ${data.website} | ${data.github}`);
  doc.fontSize(10).text(data.location);

  doc.moveDown();

  // About
  doc.fontSize(11).font(boldFont).text(isRU ? 'ОБО МНЕ' : 'ABOUT ME');
  doc.fontSize(10).font(font).text(data.about, { align: 'justify' });

  doc.moveDown();

  // Experience
  doc.fontSize(11).font(boldFont).text(isRU ? 'ОПЫТ РАБОТЫ' : 'EXPERIENCE');

  data.experience.forEach((exp) => {
    doc.moveDown(0.2);
    doc.fontSize(10).font(boldFont).text(exp.company);
    doc.fontSize(9).font(font).text(exp.position + ' | ' + exp.date);
    doc.fontSize(10).text(exp.description);
  });

  doc.moveDown();

  // Education
  doc.fontSize(11).font(boldFont).text(isRU ? 'ОБРАЗОВАНИЕ' : 'EDUCATION');

  data.education.forEach((edu) => {
    doc.moveDown(0.2);
    doc.fontSize(10).font(boldFont).text(edu.school);
    doc.fontSize(10).font(font).text(edu.degree);
    doc.fontSize(9).text(edu.period);
  });

  doc.moveDown();

  // Skills
  doc.fontSize(11).font(boldFont).text(isRU ? 'НАВЫКИ' : 'SKILLS');

  Object.entries(data.skills).forEach(([category, skills]) => {
    doc.moveDown(0.1);
    doc.fontSize(10).font(boldFont).text(category + ':', { continued: true });
    doc.font(font).text(' ' + skills.join(', '), { fontSize: 10 });
  });

  doc.moveDown();

  // Projects
  doc.fontSize(11).font(boldFont).text(isRU ? 'ПРОЕКТЫ' : 'PROJECTS');

  data.projects.forEach((project) => {
    doc.moveDown(0.2);
    doc.fontSize(10).font(boldFont).text(project.name);
    doc.fontSize(10).font(font).text(project.description);
  });

  return doc;
}

// Generate PDFs
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const cvEN = createCV('en');
cvEN.pipe(fs.createWriteStream(path.join(publicDir, 'cv_en.pdf')));
cvEN.end();

const cvRU = createCV('ru');
cvRU.pipe(fs.createWriteStream(path.join(publicDir, 'cv_ru.pdf')));
cvRU.end();

console.log('CVs generated successfully!');
