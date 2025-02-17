function changeLanguage(language) {
    const translations = {
        nl: {
            welcome: 'Erdem Soy',
            name: 'Full Stack Web-Developer',
            aboutme: 'Over Mij',
            projects: 'Projecten',
            contact: 'Contact',
            language: 'Taal',
            about: 'Over Mij',
            aboutText: 'Van <span style="color: orange;">concept</span> tot <span style="color: #6f6ff5;">code</span> – Ik bouw dynamische en responsieve websites.',
            project1: 'Project 1 - [Beschrijving]',
            project2: 'Project 2 - [Beschrijving]',
            project3: 'Project 3 - [Beschrijving]',
            contactText: 'Je kunt me bereiken via: <a href="mailto:erdem@example.com">erdem@example.com</a>',
            flagText: 'Nederlands'
        },
        en: {
            welcome: 'Erdem Soy',
            name: 'Full Stack Web-Developer',
            aboutme: 'About Me',
            projects: 'Projects',
            contact: 'Contact',
            language: 'Language',
            about: 'About Me',
            aboutText: 'From <span style="color: orange;">concept</span> to <span style="color: #6f6ff5;">code</span> – I build dynamic and responsive websites.',
            project1: 'Project 1 - [Description]',
            project2: 'Project 2 - [Description]',
            project3: 'Project 3 - [Description]',
            contactText: 'You can reach me via: <a href="mailto:erdem@example.com">erdem@example.com</a>',
            flagText: 'English'
        }
    };

    const currentTranslations = translations[language];

    // Update de About Me sectie tekst (vervang de inhoud zonder duplicatie van <p>)
    const aboutTextElement = document.getElementById('aboutText');
    if (aboutTextElement) {
        aboutTextElement.textContent = currentTranslations.aboutText;  // Alleen de tekst vervangen, geen HTML
    }

    // Update andere vertalingen
    document.querySelectorAll('[data-translate]').forEach(function(element) {
        const key = element.getAttribute('data-translate');
        if (currentTranslations[key]) {
            element.innerHTML = currentTranslations[key];  // Update de andere vertaalbare elementen
        }
    });

    // Update de taal bij de dropdown en de vlag
    document.getElementById('selected-language').textContent = currentTranslations.flagText;

    const selectedFlag = language === 'nl' ? 'nederland.png' : 'england.png';
    document.getElementById('selected-flag').src = selectedFlag;

    // Sluit de dropdown na selectie
    document.querySelector('.options-container').classList.remove('show');
}

// Functie voor het openen en sluiten van de dropdown
function toggleOptions() {
    document.querySelector('.options-container').classList.toggle('show');
}

// Sluit de dropdown als er buiten wordt geklikt
window.addEventListener('click', function(event) {
    if (!event.target.closest('.custom-select')) {
        document.querySelector('.options-container').classList.remove('show');
    }
});

// Klikken op een optie in de dropdown
document.querySelectorAll('.option').forEach(function(option) {
    option.addEventListener('click', function() {
        const selectedLanguage = option.getAttribute('data-value');
        changeLanguage(selectedLanguage);
    });
});

// Bij het laden van de pagina, de About Me sectie zichtbaar maken
window.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    aboutSection.classList.add('visible');  // Zorgt ervoor dat "About Me" zichtbaar is bij het laden
});

// Scroll-animaties voor fade-in effect bij secties
window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // Fade-in voor About Me sectie wanneer het in beeld is
    if (aboutSectionPosition < screenHeight * 0.8) {
        aboutSection.classList.add('visible');
    } else {
        aboutSection.classList.remove('visible');
    }

    // Fade-in voor Projects sectie wanneer je verder scrolt
    const projectsSectionPosition = projectsSection.getBoundingClientRect().top;
    if (projectsSectionPosition < screenHeight * 0.8) {
        projectsSection.classList.add('visible');
    } else {
        projectsSection.classList.remove('visible');
    }
});
