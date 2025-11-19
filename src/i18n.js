import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          navbar: {
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
            changeLanguage: '<spain /> Español',
          },
          home: {
            title: "Hello, I am Alejandro.",
            p1: "I am a cybersecurity technician and programmer.",
            viewWork: "View my work ↓"
          },
          about: {
            main_title: "About",
            p1: "I was born in Seville in 2002 and discovered my passion for programming and cybersecurity at age 13. Over the years, I have developed strong skills in programming, networks, and IT systems, and I am a certified pentester and SOC analyst. I enjoy working on personal projects to apply what I learn, explore new technologies, and continuously improve my skills.",
            quote: "The answers are all out there, we just need to ask the right questions.",
            title1: "Professional Skillset",
            title2: "Tools I use",
            title3: "Operating Systems I use",
          },
          projects: {
            title: "Some of my projects",
            bizleaker: 'Bizleaker extracts names from phone numbers using a Bizum <i>infoleak</i> to help detect scams or identify contacts.',
            youploader: 'Youploader automates YouTube uploads and reports via command-line with headless mode and logging.',
            bcmn1: 'Better Call Me Now! automates call requests for insurance, clinics, or service lines.',
            bcmn2: 'It helps measure service quality, contact clients faster, or test phone lines.',
            legitflip: 'Legit Flip lets multiple users flip a virtual coin online, ensuring transparent results.',
            ghostgram: 'Ghostgram is an efficient automation tool designed to delete all your Instagram comments quickly and safely, overcoming the platform’s limitations.'
},
          contact: 'Contact',
          footer: {
            p1: "Site built from scratch with Node.js + React on Debian. TLS and Domain configured manually.",
            p2: "<O>Source Code.</O>"
          }
        }
      },
      es: {
        translation: {
          navbar: {
            about: 'Sobre mí',
            projects: 'Proyectos',
            contact: 'Contacto',
            changeLanguage: '<uk /> English',
          },
          home: {
            title: 'Soy Alejandro Zapico.',
            p1: 'Soy técnico en ciberseguridad y programador.',
            viewWork: "Ver mi trabajo ↓"
          },
          about: {
            main_title: "Sobre mí",
            p1: "Nací en Sevilla en 2002 y descubrí mi pasión por la programación y la ciberseguridad a los 13 años. A lo largo de los años, he desarrollado habilidades sólidas en programación, redes y sistemas informáticos, y soy pentester certificado y analista SOC. Disfruto realizando proyectos personales para aplicar lo aprendido, explorar nuevas tecnologías y mejorar continuamente mis habilidades.",
            quote: "Todas las respuestas están ahí fuera, simplemente tenemos que hacer las preguntas adecuadas.",
            title1: "Habilidades Profesionales",
            title2: "Herramientas",
            title3: "Sistemas Operativos"
          },
          projects: {
            title: "Algunos de mis proyectos",
            bizleaker: 'Bizleaker extrae nombres de números de teléfono usando un <i>infoleak</i> de Bizum para detectar estafas o identificar contactos.',
            youploader: 'Youploader automatiza la subida y denuncia de videos en YouTube vía línea de comandos, con modo headless y registros.',
            bcmn1: 'Better Call Me Now! automatiza solicitudes de llamada para seguros, clínicas o líneas de servicio.',
            bcmn2: 'Ayuda a medir la calidad del servicio, contactar clientes más rápido o probar líneas telefónicas.',
            legitflip: 'Legit Flip permite lanzar una moneda virtual entre varios usuarios, asegurando resultados transparentes.',
            ghostgram: 'Ghostgram es una herramienta de automatización eficiente diseñada para eliminar todos tus comentarios de Instagram de manera rápida y segura, superando las limitaciones de la plataforma.'
},
          contact: 'Contacto',
          footer: {
            p1: "Sitio hecho desde cero con Node.js + React en Debian. TLS y dominio configurado manualmente.",
            p2: "<O>Código Fuente.</O>"
          }
        }
      }
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'b', 'O', 'a']
    }
  });

export default i18next;
