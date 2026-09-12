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
            p1: "Penetration tester · SOC analyst · security researcher",
            viewWork: "View my work ↓"
          },
          about: {
            main_title: "About",
            p1: "I'm a cybersecurity professional and certified penetration tester (INE eJPT) with a SOC analyst background, specializing in offensive security, OSINT, and vulnerability research. Over a decade of self-driven learning has given me a track record of hands-on work — from OSINT tooling to proof-of-concept research and white-papers documenting real-world platform weaknesses. I work fluently across Python and JavaScript/Node.js on Linux, and I'm comfortable on both the offensive and defensive sides of security. I'm always looking to apply my skills to meaningful problems and keep sharpening them.",
            quote: "The purpose of a system is what it does. There is after all no point in claiming that the purpose of a system is to do what it constantly fails to do.",
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
            wame: 'A proof-of-concept and white-paper documenting a media enumeration technique in WhatsApp, focused on the research and its privacy implications rather than a ready-to-use tool.'
},
          contact: 'Contact',
          footer: {
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
            p1: "Pentester · Analista SOC · Investigador de seguridad",
            viewWork: "Ver mi trabajo ↓"
          },
          about: {
            main_title: "Sobre mí",
            p1: "Soy un profesional de la ciberseguridad y pentester certificado (INE eJPT) con experiencia como analista SOC, especializado en seguridad ofensiva, OSINT e investigación de vulnerabilidades. Más de una década de aprendizaje autodidacta me ha dado un historial de trabajo práctico: desde herramientas de OSINT hasta pruebas de concepto y white-papers que documentan debilidades reales de plataformas. Trabajo con fluidez en Python y JavaScript/Node.js sobre Linux, y me manejo con soltura tanto en el lado ofensivo como defensivo de la seguridad. Siempre busco aplicar mis habilidades a problemas relevantes y seguir mejorándolas.",
            quote: "El propósito de un sistema es lo que hace. No tiene sentido, después de todo, afirmar que el propósito de un sistema es hacer lo que constantemente no logra hacer.",
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
            wame: 'Una prueba de concepto y white-paper que documenta una técnica de enumeración de medios en WhatsApp, centrada en la investigación y sus implicaciones de privacidad más que en una herramienta lista para usar.'
},
          contact: 'Contacto',
          footer: {
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
