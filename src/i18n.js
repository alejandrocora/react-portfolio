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
          title: 'I am Alejandro Zapico.',
          p1: "When I was 13 I discovered coding and I haven't stopped learning since.",
          p2: "In addition to coding, I am knowledgeable in <b>cybersecurity</b>, <b>networks</b>, and <b>Operating Systems</b>, but my greatest skill is my ability to learn whatever comes my way.",
          p3: 'Head over to my <image /> <O>GitHub</O> account to see my projects!'
        },
        about: {
          p1: "I was born on February 6, 2002 in Seville.",
          p2: "From an early age, I have been captivated by engineering and the intricate interactions between various elements within systems. As a curious 11-year-old, I ventured beyond <i>mainstream</i> platforms like Instagram and Facebook, immersing myself in online forums about technology as well as other topics",
          p3: "At the age of 13, my curiosity led me to delve into web protocols, the TOR router, and the fundamentals of HTML. This journey ignited a strong fascination with programming, networks, and Operating Systems, which naturally extended to the realm of cybersecurity.",
          p4: "Since then, I have been actively involved in numerous personal projects, continually expanding my skills and knowledge in practical ways. These projects have allowed me to apply my learning, experiment with different technologies, and deepen my understanding of IT and programming.",
          p5: "After completing my High School education, I decided to pursue a formal study path in IT.",
          p6: "However, the vast majority of what I have learned has been on my own.",
          quote: "The answers are all out there, we just need to ask the right questions.",
          title1: "Professional Skillset",
          title2: "Tools I use",
          title3: "Operating Systems I use",
        },
        projects: {
          title: "Some of my projects ",
          bizleaker: '<O>Bizleaker</O> is a tool that automatically extracts names (usually first name and last name initials) from telephone numbers, using an <i>infoleak</i> from the "Bizum" tool. This can be used to automate and/or speed up scam detection, prevent harassment, or simpler tasks like identifying customers or friends.',
          youploader: '<O>Youploader</O> is a command-line tool designed to automate YouTube video uploads and video reporting. It allows users to upload videos with custom metadata or report YouTube videos by specifying URLs, all from the convenience of a terminal. This program supports headless mode for background operation and allows you to log the output for later review.',
          bcmn1: '<O>Better Call Me Now!</O> automates call requests, such as those found on insurance sites, clinics, or phone companies, to a phone number.',
          bcmn2: 'It can be used to measure the quality of customer service sites, expedite contact with various clients or services, or test the viability of a telephone line, among other uses.',
        },
        contact: 'Contact',
        footer: {
          p1: "Site made from scratch with Node.js + React in Debian. TLS and Domain configured manually.",
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
          p1: 'Cuando tenía 13 años descubrí la programación, y desde entonces no he parado de aprender.',
          p2: 'Además de la programación, tengo conocimientos en <b>ciberseguridad</b>, <b>redes</b> y <b>Sistemas Operativos</b>, pero mi mayor virtud es la perseverancia y habilidad para aprender lo que tenga por delante.',
          p3: '¡Pásate por mi cuenta de <image /> <O>GitHub</O> para ver mis proyectos!'
        },
        about: {
          p1: "Nací el 6 de Febrero de 2002 en Sevilla.",
          p2: "Desde que era niño, me ha gustado ingeniar y entender sistemas donde sus diferentes componentes interaccionan entre ellos por sí solos. Con 11 años, me aventuré más allá de las plataformas <i>mainstream</i> como Instagram y Facebook, sumergiéndome en foros en línea sobre tecnología u otros temas.",
          p3: "A la edad de 13 años, mi curiosidad me llevó a profundizar en los protocolos web, el enrutador TOR y los fundamentos de HTML. Este viaje encendió una gran fascinación por la programación, las redes y los Sistemas Operativos, que naturalmente se extendió al ámbito de la ciberseguridad.",
          p4: "Desde entonces, he participado activamente en numerosos proyectos personales, ampliando continuamente mis habilidades y conocimientos de forma práctica. Estos proyectos me han permitido aplicar mi aprendizaje, experimentar con diferentes tecnologías y profundizar mi comprensión en la informática general y la programación.",
          p5: "Después de completar mi educación secundaria, decidí seguir un camino de estudio formal en la informática.",
          p6: "Sin embargo, la gran mayoría de lo que he aprendido ha sido por mi cuenta.",
          quote: "Todas las respuestas están ahí fuera, simplemente tenemos que hacer las preguntas adecuadas.",
          title1: "Habilidades Profesionales",
          title2: "Herramientas",
          title3: "Sistemas Operativos"
        },
        projects: {
          title: "Algunos de mis proyectos",
          bizleaker: '<O>Bizleaker</O> es una herramienta que extrae de manera automatizada nombres (normalmente nombre e iniciales de los apellidos) de números de teléfono, usando un <i>infoleak</i> de la herramienta "Bizum". Esto puede ser usado para automatizar y/o agilizar la detección de estafas, prevenir el acoso o tareas más simples como identificar a clientes o amigos.',
          youploader: '<O>Youploader</O> es una herramienta de línea de comandos diseñada para automatizar la subida de videos a YouTube y la denuncia de videos. Permite a los usuarios subir videos con metadatos personalizados o denunciar videos de YouTube especificando las URL, todo desde la conveniencia de un terminal. Este programa soporta el modo sin interfaz gráfica (headless) para operar en segundo plano y permite guardar el registro de salida para su posterior revisión.',
          bcmn1: '<O>Better Call Me Now!</O> automatiza las peticiones de llamada, como las que se encuentran en sitios de seguros, clínicas o compañías de telefonía, a un número de teléfono. ',
          bcmn2: 'Puede ser usado para medir la calidad de sitios de atención al cliente, agilizar el contacto con varios clientes o servicios, o probar la viabilidad de una línea telefónica, entre otros usos.',
        },
        contact: 'Contacto',
        footer: {
          p1: "Sitio hecho desde cero con Node.js + React en Debian. TLS y Dominio configurado manualmente.",
          p2: "<O>Código Fuente.</O>"
        }
      }
    }
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'b']  
  }
})
export default i18next;