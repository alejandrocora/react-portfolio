import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
  lng: 'es',
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
          p1: "When I was 13 I discovered coding and I haven't stopped learning since then.",
          p2: "In addition to coding, I have knowledge in cybersecurity, networks, and operating systems, but my greatest virtue is perseverance and the ability to learn whatever comes my way.",
          p3: 'Head over to my <image /> <O>GitHub</O> account to see my projects!'
        },
        about: {
          p1: "I was born on February 6, 2002 in Seville.",
          p2: "Since I was a child I have always liked engineering and understanding systems in which different elements interact with each other dynamically or automatically. I could spend hours observing and analyzing these types of systems, whether they are in nature, architecture, machinery or human beings.",
          p3: "In 2013, when I was 11, I started surfing forums, becoming familiar with the Internet beyond the <i>mainstream</i> platforms (such as Instagram, Facebook or Youtube).",
          p4: "At the age of 13 I became curious about web protocols, the TOR router and HTML, and with this I began to delve deeper into the world of programming, networks, operating Systems, and by inertia, cybersecurity.",
          p5: "After this it was clear to me that these four paradigms were made to be my vocation.",
          p6: "The vast majority of what I have learned has been on my own.",
          quote: "The answers are all out there, we just need to ask the right questions.",
          title1: "Skills",
          title2: "Operating Systems"
        },
        projects: {
          title: "Some of my projects ",
          bizleaker: '<O>Bizleaker</O> is a tool that automatically extracts names (usually first name and last name initials) from telephone numbers, using an <i>infoleak</i> from the "Bizum" tool. This can be used to automate and/or speed up scam detection, prevent harassment, or simpler tasks like identifying customers or friends.',
          bcmn1: '<O>Better Call Me Now!</O> automates call requests, such as those found on insurance sites, clinics, or phone companies, to a phone number.',
          bcmn2: 'It can be used to measure the quality of customer service sites, expedite contact with various clients or services, or test the viability of a telephone line, among other uses.',
        },
        contact: 'Contact',
        footer: {
          p1: "Site made from scratch with Node-js + React in Debian. TLS and Domain configured manually.",
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
          changeLanguage: '<uk />  English',
        },
        home: {
          title: 'Soy Alejandro Zapico,',
          p1: 'Cuando tenía 13 años descubrí la programación, y desde entonces no he parado de aprender.',
          p2: 'Además de la programación, tengo conocimientos en Ciberseguridad, Redes y Sistemas Operativos, pero mi mayor virtud es la perseverancia y habilidad para aprender lo que tenga por delante.',
          p3: '¡Pásate por mi cuenta de <image /> <O>GitHub</O> para ver mis proyectos!'
        },
        about: {
          p1: "Nací el 6 de Febrero de 2002 en Sevilla.",
          p2: "Desde que era niño siempre me ha gustado ingeniar y entender los sistemas en los que diferentes elementos interaccionan entre sí de manera dinámica o automática. Me podía pasar horas observando y analizando este tipo de sistemas, ya sean en la naturaleza, la arquitectura, la maquinaria o en los seres humanos.",
          p3: "En 2013, cuando tenía 11 años, empecé a surfear foros empezando a familiarizarme con el Internet más allá de las plataformas <i>mainstream</i> (Instagram, Facebook, Youtube).",
          p4: "A los 13 años, empecé a tener curiosidad sobre los protocolos web, el enrutador TOR y HTML, y con esto empecé a adentrarme más profundo en el mundo de la programación, las redes, los sistemas Operativos, y por inercia, la ciberseguridad.",
          p5: "Trás esto tuve claro que estos cuatro paradigmas estaban hechos para ser mi vocación.",
          p6: "En la práctica, la gran mayoría de lo que he aprendido ha sido por mi cuenta.",
          quote: "Todas las respuestas están ahí fuera, simplemente tenemos que hacer las preguntas adecuadas.",
          title1: "Habilidades",
          title2: "Sistemas Operativos"
        },
        projects: {
          title: "Algunos de mis proyectos",
          bizleaker: '<O>Bizleaker</O> es una herramienta que extrae de manera automatizada nombres (normalmente nombre e iniciales de los apellidos) de números de teléfono, usando un <i>infoleak</i> de la herramienta "Bizum". Esto puede ser usado para automatizar y/o agilizar la detección de estafas, prevenir el acoso o tareas más simples como identificar a clientes o amigos.',
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