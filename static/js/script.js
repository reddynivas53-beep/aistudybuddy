// ==========================================
// 1. MULTI-LANGUAGE (i18n) SYSTEM
// ==========================================
const translations = {
    en: {
        brand_name: "AI Study Buddy", nav_home: "Home", nav_features: "Features", nav_ai_tutor: "AI Tutor", btn_get_started: "Get Started",
        hero_badge: "🚀 AI-Powered Learning", hero_title_1: "Master Any Subject", hero_title_2: "With AI Intelligence",
        hero_desc: "Experience the future of education with personalized AI tutoring, interactive 3D visualizations, and adaptive learning paths.",
        btn_start_learning: "Start Learning", btn_watch_demo: "Watch Demo", stat_students: "Active Students", stat_tutors: "AI Tutors", stat_success: "Success Rate %",
        card_notes: "Smart Notes", card_goals: "Goal Tracking", card_achievements: "Achievements", card_quiz: "Quick Quiz",
        features_title: "Powerful Features", features_subtitle: "Everything you need to excel in your studies",
        feat_ai_title: "AI Tutor", feat_ai_desc: "24/7 intelligent tutoring with personalized explanations and instant feedback.",
        feat_analytics_title: "Analytics Dashboard", feat_analytics_desc: "Track your progress with beautiful visualizations and detailed insights.",
        feat_gamified_title: "Gamified Learning", feat_gamified_desc: "Earn badges, climb leaderboards, and make learning fun and engaging.",
        feat_quizzes_title: "Smart Quizzes", feat_quizzes_desc: "AI-generated quizzes adapted to your learning level and progress.",
        feat_pomodoro_title: "Pomodoro Timer", feat_pomodoro_desc: "Boost productivity with built-in focus timers and break reminders.",
        feat_spaced_title: "Spaced Repetition", feat_spaced_desc: "Optimize memory retention with intelligent review scheduling.",
        chat_ai_title: "AI Study Assistant", chat_status_online: "● Online", chat_welcome: "Hi! I'm your AI study buddy. How can I help you learn today?",
        chat_placeholder: "Ask me anything or upload a file...", chat_send: "Send"
    },
    es: {
        brand_name: "Compañero de Estudio IA", nav_home: "Inicio", nav_features: "Características", nav_ai_tutor: "Tutor IA", btn_get_started: "Empezar",
        hero_badge: " Aprendizaje Impulsado por IA", hero_title_1: "Domina Cualquier Materia", hero_title_2: "Con Inteligencia Artificial",
        hero_desc: "Experimenta el futuro de la educación con tutoría personalizada de IA, visualizaciones 3D interactivas y rutas de aprendizaje adaptativas.",
        btn_start_learning: "Empezar a Aprender", btn_watch_demo: "Ver Demo", stat_students: "Estudiantes Activos", stat_tutors: "Tutores IA", stat_success: "Tasa de Éxito %",
        card_notes: "Notas Inteligentes", card_goals: "Seguimiento de Metas", card_achievements: "Logros", card_quiz: "Quiz Rápido",
        features_title: "Características Poderosas", features_subtitle: "Todo lo que necesitas para destacar en tus estudios",
        feat_ai_title: "Tutor IA", feat_ai_desc: "Tutoría inteligente 24/7 con explicaciones personalizadas y retroalimentación instantánea.",
        feat_analytics_title: "Panel de Análisis", feat_analytics_desc: "Rastrea tu progreso con hermosas visualizaciones e información detallada.",
        feat_gamified_title: "Aprendizaje Gamificado", feat_gamified_desc: "Gana insignias, sube en las tablas de clasificación y haz que aprender sea divertido.",
        feat_quizzes_title: "Quizzes Inteligentes", feat_quizzes_desc: "Quizzes generados por IA adaptados a tu nivel de aprendizaje y progreso.",
        feat_pomodoro_title: "Temporizador Pomodoro", feat_pomodoro_desc: "Aumenta la productividad con temporizadores de enfoque integrados y recordatorios de descanso.",
        feat_spaced_title: "Repetición Espaciada", feat_spaced_desc: "Optimiza la retención de memoria con programación inteligente de revisiones.",
        chat_ai_title: "Asistente de Estudio IA", chat_status_online: "● En línea", chat_welcome: "¡Hola! Soy tu compañero de estudio IA. ¿Cómo puedo ayudarte a aprender hoy?",
        chat_placeholder: "Pregúntame lo que sea o sube un archivo...", chat_send: "Enviar"
    },
    fr: {
        brand_name: "Partenaire d'Étude IA", nav_home: "Accueil", nav_features: "Fonctionnalités", nav_ai_tutor: "Tuteur IA", btn_get_started: "Commencer",
        hero_badge: "🚀 Apprentissage par IA", hero_title_1: "Maîtrisez Tout Sujet", hero_title_2: "Avec l'Intelligence Artificielle",
        hero_desc: "Découvrez l'avenir de l'éducation avec un tutorat IA personnalisé, des visualisations 3D interactives et des parcours d'apprentissage adaptatifs.",
        btn_start_learning: "Commencer à Apprendre", btn_watch_demo: "Voir la Démo", stat_students: "Étudiants Actifs", stat_tutors: "Tuteurs IA", stat_success: "Taux de Réussite %",
        card_notes: "Notes Intelligentes", card_goals: "Suivi des Objectifs", card_achievements: "Réalisations", card_quiz: "Quiz Rapide",
        features_title: "Fonctionnalités Puissantes", features_subtitle: "Tout ce dont vous avez besoin pour exceller dans vos études",
        feat_ai_title: "Tuteur IA", feat_ai_desc: "Tutorat intelligent 24/7 avec des explications personnalisées et un retour instantané.",
        feat_analytics_title: "Tableau de Bord Analytique", feat_analytics_desc: "Suivez vos progrès avec de belles visualisations et des informations détaillées.",
        feat_gamified_title: "Apprentissage Ludique", feat_gamified_desc: "Gagnez des badges, grimpez dans les classements et rendez l'apprentissage amusant.",
        feat_quizzes_title: "Quiz Intelligents", feat_quizzes_desc: "Quiz générés par IA adaptés à votre niveau d'apprentissage et à vos progrès.",
        feat_pomodoro_title: "Minuterie Pomodoro", feat_pomodoro_desc: "Boostez votre productivité avec des minuteurs de concentration intégrés et des rappels de pause.",
        feat_spaced_title: "Répétition Espacée", feat_spaced_desc: "Optimisez la rétention de mémoire avec une planification intelligente des révisions.",
        chat_ai_title: "Assistant d'Étude IA", chat_status_online: "● En ligne", chat_welcome: "Bonjour ! Je suis votre partenaire d'étude IA. Comment puis-je vous aider à apprendre aujourd'hui ?",
        chat_placeholder: "Posez-moi n'importe quelle question ou téléchargez un fichier...", chat_send: "Envoyer"
    },
    hi: {
        brand_name: "AI स्टडी बडी", nav_home: "होम", nav_features: "विशेषताएं", nav_ai_tutor: "AI ट्यूटर", btn_get_started: "शुरू करें",
        hero_badge: "🚀 AI-संचालित शिक्षा", hero_title_1: "कोई भी विषय सीखें", hero_title_2: "AI इंटेलिजेंस के साथ",
        hero_desc: "व्यक्तिगत AI ट्यूटरिंग, इंटरैक्टिव 3D विज़ुअलाइज़ेशन और अनुकूली शिक्षा पथों के साथ शिक्षा के भविष्य का अनुभव करें।",
        btn_start_learning: "सीखना शुरू करें", btn_watch_demo: "डेमो देखें", stat_students: "सक्रिय छात्र", stat_tutors: "AI ट्यूटर्स", stat_success: "सफलता दर %",
        card_notes: "स्मार्ट नोट्स", card_goals: "लक्ष्य ट्रैकिंग", card_achievements: "उपलब्धियां", card_quiz: "त्वरित क्विज़",
        features_title: "शक्तिशाली विशेषताएं", features_subtitle: "अपनी पढ़ाई में उत्कृष्टता प्राप्त करने के लिए आपको जो कुछ भी चाहिए",
        feat_ai_title: "AI ट्यूटर", feat_ai_desc: "व्यक्तिगत स्पष्टीकरण और तत्काल प्रतिक्रिया के साथ 24/7 बुद्धिमान ट्यूटरिंग।",
        feat_analytics_title: "एनालिटिक्स डैशबोर्ड", feat_analytics_desc: "सुंदर विज़ुअलाइज़ेशन और विस्तृत अंतर्दृष्टि के साथ अपनी प्रगति को ट्रैक करें।",
        feat_gamified_title: "गेमिफाइड लर्निंग", feat_gamified_desc: "बैज अर्जित करें, लीडरबोर्ड पर चढ़ें और सीखने को मज़ेदार बनाएं।",
        feat_quizzes_title: "स्मार्ट क्विज़", feat_quizzes_desc: "आपके सीखने के स्तर और प्रगति के अनुकूल AI-जनरेटेड क्विज़।",
        feat_pomodoro_title: "पोमोडोरो टाइमर", feat_pomodoro_desc: "बिल्ट-इन फोकस टाइमर और ब्रेक रिमाइंडर के साथ उत्पादकता बढ़ाएं।",
        feat_spaced_title: "स्पेस्ड रिपीटीशन", feat_spaced_desc: "बुद्धिमान समीक्षा शेड्यूलिंग के साथ मेमोरी रिटेंशन को अनुकूलित करें।",
        chat_ai_title: "AI स्टडी असिस्टेंट", chat_status_online: "● ऑनलाइन", chat_welcome: "नमस्ते! मैं आपका AI स्टडी बडी हूँ। आज मैं आपकी पढ़ाई में कैसे मदद कर सकता हूँ?",
        chat_placeholder: "मुझसे कुछ भी पूछें या फ़ाइल अपलोड करें...", chat_send: "भेजें"
    },
    te: {
        brand_name: "AI స్టడీ బడీ", nav_home: "హోమ్", nav_features: "ఫీచర్లు", nav_ai_tutor: "AI ట్యూటర్", btn_get_started: "ప్రారంభించండి",
        hero_badge: "🚀 AI-ఆధారిత లర్నింగ్", hero_title_1: "ఏదైనా సబ్జెక్ట్ నేర్చుకోండి", hero_title_2: "AI ఇంటెలిజెన్స్ తో",
        hero_desc: "వ్యక్తిగతీకరించిన AI ట్యూటరింగ్, ఇంటరాక్టివ్ 3D విజువలైజేషన్లు మరియు అడాప్టివ్ లర్నింగ్ పాత్ లతో విద్య యొక్క భవిష్యత్తును అనుభవించండి.",
        btn_start_learning: "నేర్చుకోవడం ప్రారంభించండి", btn_watch_demo: "డెమో చూడండి", stat_students: "యాక్టివ్ విద్యార్థులు", stat_tutors: "AI ట్యూటర్లు", stat_success: "విజయవంతమయ్యే రేటు %",
        card_notes: "స్మార్ట్ నోట్స్", card_goals: "గోల్ ట్రాకింగ్", card_achievements: "సాధనలు", card_quiz: "క్విక్ క్విజ్",
        features_title: "పవర్ ఫుల్ ఫీచర్లు", features_subtitle: "మీ చదువులో రాణించడానికి మీకు అవసరమైనవన్నీ",
        feat_ai_title: "AI ట్యూటర్", feat_ai_desc: "వ్యక్తిగతీకరించిన వివరణలు మరియు తక్షణ ఫీడ్ బ్యాక్ తో 24/7 ఇంటెలిజెంట్ ట్యూటరింగ్.",
        feat_analytics_title: "అనలిటిక్స్ డాష్ బోర్డ్", feat_analytics_desc: "అందమైన విజువలైజేషన్లు మరియు వివరణాత్మక అంతర్దష్టులతో మీ ప్రగతిని ్రాక్ చేయండి.",
        feat_gamified_title: "గేమిఫైడ్ లర్నింగ్", feat_gamified_desc: "బ్యాడ్జ్ లు సంపాదించండి, లీడర్ బోర్డ్ లలో పైకి ఎక్కండి మరియు నేర్చుకోవడం ఆసక్తికరంగా చేయండి.",
        feat_quizzes_title: "స్మార్ట్ క్విజ్ లు", feat_quizzes_desc: "మీ లర్నింగ్ లెవెల్ మరియు ప్రగతికి అనుగుణంగా AI-జనరేటెడ్ క్విజ్ లు.",
        feat_pomodoro_title: "పొమొడోరో టైమర్", feat_pomodoro_desc: "బిల్ట్-ఇన్ ఫోకస్ టైమర్లు మరియు బ్రేక్ రిమైండర్లతో ఉత్పాదకతను పెంచండి.",
        feat_spaced_title: "స్పేస్డ్ రిపిటీషన్", feat_spaced_desc: "ఇంటెలిజెంట్ రివ్యూ షెడ్యూలింగ్ తో మెమరీ రిటెన్షన్ ను ఆప్టిమైజ్ చేయండి.",
        chat_ai_title: "AI స్టడీ అసిస్టెంట్", chat_status_online: "● ఆన్ లైన్", chat_welcome: "నమస్కారం! నేను మీ AI స్టడీ బడీని. ఈరోజు మీ చదువుకు నేను ఎలా సహాయపడగలను?",
        chat_placeholder: "నన్ను ఏదైనా అడగండి లేదా ఫైల్ అప్ లోడ్ చేయండి...", chat_send: "పంపు"
    }
};

let currentLanguage = 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) el.placeholder = translations[lang][key];
    });
    localStorage.setItem('preferred_language', lang);
}

// ==========================================
// 2. THREE.JS 3D BACKGROUND
// ==========================================
const canvas = document.getElementById('webgl-canvas');
if (canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const meshes = [];
    const shapes = [
        new THREE.IcosahedronGeometry(1, 0), new THREE.OctahedronGeometry(1, 0),
        new THREE.TetrahedronGeometry(1, 0), new THREE.TorusGeometry(0.7, 0.3, 16, 100),
    ];
    const colors = [0x6366f1, 0xec4899, 0x06b6d4, 0x8b5cf6];

    shapes.forEach((geometry, index) => {
        const material = new THREE.MeshPhongMaterial({ color: colors[index], wireframe: true, transparent: true, opacity: 0.3 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10 - 5);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        mesh.userData = {
            rotSpeed: { x: (Math.random() - 0.5) * 0.01, y: (Math.random() - 0.5) * 0.01 },
            floatOffset: Math.random() * Math.PI * 2,
        };
        scene.add(mesh);
        meshes.push(mesh);
    });

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pLight1 = new THREE.PointLight(0x6366f1, 2, 50); pLight1.position.set(5, 5, 5); scene.add(pLight1);
    const pLight2 = new THREE.PointLight(0xec4899, 2, 50); pLight2.position.set(-5, -5, 5); scene.add(pLight2);
    camera.position.z = 5;

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    function animate3D() {
        requestAnimationFrame(animate3D);
        const time = Date.now() * 0.001;
        meshes.forEach(mesh => {
            mesh.rotation.x += mesh.userData.rotSpeed.x;
            mesh.rotation.y += mesh.userData.rotSpeed.y;
            mesh.position.y += Math.sin(time + mesh.userData.floatOffset) * 0.002;
            mesh.position.x += (mouseX * 0.5 - mesh.position.x * 0.1) * 0.01;
            mesh.position.y += (mouseY * 0.5 - mesh.position.y * 0.1) * 0.01;
        });
        renderer.render(scene, camera);
    }
    animate3D();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ==========================================
// 3. GSAP ANIMATIONS & UI EFFECTS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Language Dropdown Toggle
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');
    const currentLang = document.getElementById('currentLang');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.style.display = languageDropdown.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', () => {
            if (languageDropdown) languageDropdown.style.display = 'none';
        });

        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = item.getAttribute('data-value');
                
                const flags = {
                    'en': '🇺🇸',
                    'es': '🇪🇸',
                    'fr': '🇫',
                    'hi': '🇮',
                    'te': '🇮🇳'
                };
                
                currentLang.textContent = flags[selectedLang] || '🇺';
                
                dropdownItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                setLanguage(selectedLang);
                languageDropdown.style.display = 'none';
            });
        });

        const savedLang = localStorage.getItem('preferred_language') || 'en';
        const flags = {
            'en': '🇺🇸',
            'es': '🇪',
            'fr': '🇫',
            'hi': '🇮🇳',
            'te': '🇳'
        };
        currentLang.textContent = flags[savedLang] || '🇺🇸';
        
        dropdownItems.forEach(item => {
            if (item.getAttribute('data-value') === savedLang) {
                item.classList.add('active');
            }
        });
    }

    // Check if user is already logged in
    const savedUsername = localStorage.getItem('studyBuddyUsername');
    if (savedUsername) {
        showUserProfile(savedUsername);
    }

    const tl = gsap.timeline();
    tl.to('.title-line', { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power4.out' })
      .to('.hero-description', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .to('.hero-stats', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');

    const stats = document.querySelectorAll('.stat-number');
    const animateStats = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const increment = target / 120;
            const update = () => {
                current += increment;
                if (current < target) { stat.innerText = Math.ceil(current).toLocaleString(); requestAnimationFrame(update); }
                else { stat.innerText = target.toLocaleString() + (target > 100 ? '+' : ''); }
            };
            update();
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { animateStats(); observer.unobserve(entry.target); } });
    });
    if (document.querySelector('.hero-stats')) observer.observe(document.querySelector('.hero-stats'));

    document.querySelectorAll('.card-3d, .feature-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const rotateX = (e.clientY - rect.top - rect.height / 2) / 10;
            const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)'; });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.pageYOffset > 50) { navbar.style.background = 'rgba(15, 23, 42, 0.8)'; navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)'; }
            else { navbar.style.background = 'rgba(255, 255, 255, 0.05)'; navbar.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)'; }
        }
    });

    createParticles();
});

function createParticles() {
    const container = document.getElementById('particles');
    if(!container) return;
    const style = document.createElement('style');
    style.textContent = `@keyframes particleFloat { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0; } 10%, 90% { opacity: 1; } 50% { transform: translateY(-100px) translateX(50px); } }`;
    document.head.appendChild(style);
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.style.cssText = `position: absolute; width: ${Math.random() * 4 + 2}px; height: ${Math.random() * 4 + 2}px; background: rgba(99, 102, 241, ${Math.random() * 0.5}); border-radius: 50%; left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation: particleFloat ${Math.random() * 20 + 10}s infinite; animation-delay: ${Math.random() * 5}s;`;
        container.appendChild(p);
    }
}

// ==========================================
// 4. AI CHAT FUNCTIONALITY
// ==========================================
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

function addMessage(text, isUser = false) {
    if (!chatMessages) return;
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.textContent = text;
    messageDiv.appendChild(bubble);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
}

async function sendToAI(userInput) {
    try {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = '<div class="message-bubble">Thinking...</div>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });

        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userInput })
        });
        
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) typingIndicator.remove();

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Server error: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.success) return data.response;
        else throw new Error(data.error || "Unknown error");
        
    } catch (error) {
        console.error('Chat Error:', error);
        return `⚠️ Error: ${error.message}`;
    }
}

async function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, true);
    chatInput.value = '';
    const aiResponse = await sendToAI(text);
    addMessage(aiResponse, false);
}

if(chatSend) chatSend.addEventListener('click', sendMessage);
if(chatInput) chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });

// ==========================================
// 5. NOTES SUMMARIZER LOGIC
// ==========================================
const summarizeBtn = document.getElementById('summarizeBtn');
const notesInput = document.getElementById('notesInput');
const summaryOutput = document.getElementById('summaryOutput');

if (summarizeBtn) {
    summarizeBtn.addEventListener('click', async () => {
        const text = notesInput.value.trim();
        if (!text) return alert("Please paste some notes first!");

        summarizeBtn.querySelector('span').textContent = "Summarizing...";
        summarizeBtn.disabled = true;

        try {
            const response = await fetch('/api/summarize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: text })
            });
            const data = await response.json();

            if (data.success) {
                summaryOutput.textContent = data.summary;
                summaryOutput.style.display = 'block';
            } else {
                alert("Error: " + data.error);
            }
        } catch (error) {
            alert("Connection error!");
        } finally {
            summarizeBtn.querySelector('span').textContent = "✨ Summarize Notes";
            summarizeBtn.disabled = false;
        }
    });
}

// ==========================================
// 6. 3D FLASHCARD GENERATOR LOGIC
// ==========================================
const generateCardsBtn = document.getElementById('generateCardsBtn');
const flashcardInput = document.getElementById('flashcardInput');
const flashcardsContainer = document.getElementById('flashcardsContainer');

if (generateCardsBtn) {
    generateCardsBtn.addEventListener('click', async () => {
        const text = flashcardInput.value.trim();
        if (!text) return alert("Please enter a topic or notes first!");

        generateCardsBtn.querySelector('span').textContent = "Generating...";
        generateCardsBtn.disabled = true;
        flashcardsContainer.innerHTML = '<p style="text-align:center; color: var(--gray);">Creating your 3D cards...</p>';

        try {
            const response = await fetch('/api/flashcards', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: text })
            });
            const data = await response.json();

            if (data.success) {
                flashcardsContainer.innerHTML = ''; 
                data.cards.forEach(card => {
                    const cardHTML = `
                        <div class="flashcard" onclick="this.classList.toggle('flipped')">
                            <div class="flashcard-inner">
                                <div class="flashcard-front">${card.question}</div>
                                <div class="flashcard-back">${card.answer}</div>
                            </div>
                        </div>
                    `;
                    flashcardsContainer.innerHTML += cardHTML;
                });
            } else {
                flashcardsContainer.innerHTML = `<p style="color: red;">Error: ${data.error}</p>`;
            }
        } catch (error) {
            flashcardsContainer.innerHTML = '<p style="color: red;">Connection error!</p>';
        } finally {
            generateCardsBtn.querySelector('span').textContent = "🎴 Generate Flashcards";
            generateCardsBtn.disabled = false;
        }
    });
}

// ==========================================
// 7. AI QUIZ GENERATOR LOGIC
// ==========================================
const generateQuizBtn = document.getElementById('generateQuizBtn');
const quizInput = document.getElementById('quizInput');
const quizContainer = document.getElementById('quizContainer');

if (generateQuizBtn) {
    generateQuizBtn.addEventListener('click', async () => {
        const text = quizInput.value.trim();
        if (!text) return alert("Please enter a topic or notes first!");

        generateQuizBtn.querySelector('span').textContent = "Generating Quiz...";
        generateQuizBtn.disabled = true;
        quizContainer.innerHTML = '<p style="text-align:center; color: var(--gray);">Creating your quiz...</p>';

        try {
            const response = await fetch('/api/quiz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: text })
            });
            const data = await response.json();

            if (data.success) {
                renderQuiz(data.quiz);
            } else {
                quizContainer.innerHTML = `<p style="color: red; text-align:center;">Error: ${data.error}</p>`;
            }
        } catch (error) {
            quizContainer.innerHTML = '<p style="color: red; text-align:center;">Connection error!</p>';
        } finally {
            generateQuizBtn.querySelector('span').textContent = "📝 Generate Quiz";
            generateQuizBtn.disabled = false;
        }
    });
}

function renderQuiz(quizData) {
    let html = '';
    quizData.forEach((q, index) => {
        html += `
            <div class="quiz-question-card" data-index="${index}">
                <div class="quiz-question-text">${index + 1}. ${q.question}</div>
                <div class="quiz-options">
                    ${q.options.map((opt, i) => `
                        <label class="quiz-option">
                            <input type="radio" name="q${index}" value="${opt}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });

    html += `<button id="submitQuizBtn" class="btn-3d btn-primary quiz-submit-btn"><span>Check Answers</span></button>`;
    quizContainer.innerHTML = html;

    document.getElementById('submitQuizBtn').addEventListener('click', () => gradeQuiz(quizData));
}

function gradeQuiz(quizData) {
    let score = 0;
    const total = quizData.length;

    quizData.forEach((q, index) => {
        const card = document.querySelector(`.quiz-question-card[data-index="${index}"]`);
        const selected = card.querySelector(`input[name="q${index}"]:checked`);
        const options = card.querySelectorAll('.quiz-option');

        options.forEach(opt => opt.classList.remove('correct', 'incorrect'));

        let userAnswer = selected ? selected.value : null;

        options.forEach(opt => {
            const optText = opt.querySelector('span').textContent;
            if (optText === q.correct_answer) {
                opt.classList.add('correct'); 
            }
            if (userAnswer === optText && userAnswer !== q.correct_answer) {
                opt.classList.add('incorrect'); 
            }
        });

        if (userAnswer === q.correct_answer) {
            score++;
        }
    });

    document.querySelectorAll('.quiz-option input').forEach(input => input.disabled = true);
    document.getElementById('submitQuizBtn').style.display = 'none';

    const resultDiv = document.createElement('div');
    resultDiv.className = 'quiz-result';
    const percentage = Math.round((score / total) * 100);
    let emoji = percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '📚';
    resultDiv.innerHTML = `${emoji} You scored ${score} / ${total} (${percentage}%)!`;
    quizContainer.appendChild(resultDiv);
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ==========================================
// 8. PDF UPLOAD & VOICE RECORDING LOGIC
// ==========================================
const pdfBtn = document.getElementById('pdf-btn');
const pdfUpload = document.getElementById('pdf-upload');
const micBtn = document.getElementById('mic-btn');
const chatStatusMsg = document.getElementById('chat-status-msg');

let isRecording = false;
let recognition = null;

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        chatInput.value = transcript;
        chatStatusMsg.textContent = 'Heard you! Sending...';
        chatStatusMsg.style.color = 'var(--success)';
        stopRecordingUI();
        setTimeout(() => sendMessage(), 500);
    };

    recognition.onerror = (event) => {
        console.error('Speech error:', event.error);
        chatStatusMsg.textContent = '❌ Mic error: ' + event.error;
        chatStatusMsg.style.color = '#ef4444';
        stopRecordingUI();
    };

    recognition.onend = () => {
        stopRecordingUI();
    };
} else {
    console.log('Speech Recognition not supported');
    if (micBtn) micBtn.style.display = 'none';
}

function stopRecordingUI() {
    isRecording = false;
    if (micBtn) micBtn.classList.remove('recording');
}

if (pdfBtn && pdfUpload) {
    pdfBtn.addEventListener('click', () => pdfUpload.click());
    pdfUpload.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        chatStatusMsg.textContent = `Uploading ${file.name}...`;
        chatStatusMsg.style.color = 'var(--accent)';
        const formData = new FormData();
        formData.append('pdf', file);
        try {
            const response = await fetch('/upload-pdf', { method: 'POST', body: formData });
            const data = await response.json();
            if (data.success) {
                chatStatusMsg.textContent = `✅ Processed ${data.filename}! Ask me about it.`;
                chatStatusMsg.style.color = 'var(--success)';
                addMessage(`I've uploaded "${data.filename}". Please summarize it.`, true);
                const aiResponse = await sendToAI(`Summarize the uploaded document named "${data.filename}".`);
                addMessage(aiResponse, false);
            } else {
                chatStatusMsg.textContent = `❌ Upload failed: ${data.error}`;
                chatStatusMsg.style.color = '#ef4444';
            }
        } catch (error) {
            chatStatusMsg.textContent = '❌ Connection error.';
            chatStatusMsg.style.color = '#ef4444';
        }
        pdfUpload.value = '';
    });
}

if (micBtn) {
    micBtn.addEventListener('click', () => {
        if (!recognition) {
            alert("Voice recording only works in Chrome or Edge!");
            return;
        }

        if (!isRecording) {
            try {
                try { recognition.stop(); } catch(e){} 
                recognition.start();
                isRecording = true;
                micBtn.classList.add('recording');
                chatStatusMsg.textContent = '🔴 Listening... Speak now.';
                chatStatusMsg.style.color = '#ef4444';
            } catch (e) {
                chatStatusMsg.textContent = '❌ Click the 🔒 Lock icon in the URL bar and Allow Microphone!';
                chatStatusMsg.style.color = '#ef4444';
            }
        } else {
            recognition.stop();
        }
    });
}

// ==========================================
// 9. LOGIN / LOGOUT FUNCTIONALITY
// ==========================================
const getStartedBtn = document.getElementById('getStartedBtn');
const loginModal = document.getElementById('loginModal');
const usernameInput = document.getElementById('usernameInput');
const loginBtn = document.getElementById('loginBtn');
const cancelLogin = document.getElementById('cancelLogin');
const userProfile = document.getElementById('userProfile');
const userName = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');

if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
        setTimeout(() => usernameInput.focus(), 100);
    });
}

if (cancelLogin) {
    cancelLogin.addEventListener('click', () => {
        loginModal.style.display = 'none';
        usernameInput.value = '';
    });
}

if (loginModal) {
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
            usernameInput.value = '';
        }
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        
        if (username === '') {
            usernameInput.style.borderColor = '#ef4444';
            usernameInput.placeholder = 'Please enter your name!';
            setTimeout(() => {
                usernameInput.style.borderColor = '';
                usernameInput.placeholder = 'Enter your name';
            }, 2000);
            return;
        }
        
        localStorage.setItem('studyBuddyUsername', username);
        showUserProfile(username);
        loginModal.style.display = 'none';
        usernameInput.value = '';
        
        addMessage(`Welcome, ${username}!  I'm excited to help you learn today!`, false);
    });
}

if (usernameInput) {
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('studyBuddyUsername');
        userProfile.style.display = 'none';
        if (getStartedBtn) {
            getStartedBtn.style.display = 'block';
        }
        if (chatMessages) {
            chatMessages.innerHTML = '';
            addMessage('Hi! I\'m your AI study buddy. How can I help you learn today?', false);
        }
    });
}

function showUserProfile(username) {
    if (getStartedBtn) {
        getStartedBtn.style.display = 'none';
    }
    
    userName.textContent = username;
    userProfile.style.display = 'flex';
    
    const avatars = ['', '👨‍🎓', '👩‍🎓', '‍🎓', '🎓'];
    const randomAvatar = avatars[username.length % avatars.length];
    document.getElementById('userAvatarIcon').textContent = randomAvatar;
}

console.log('✅ AI Study Buddy loaded with 3D animations, working chat, PDF upload, Voice recording, and Login system!');