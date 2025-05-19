// Menu Mobile Moderno
const menuMobile = document.querySelector('.menu-mobile');
const navList = document.querySelector('.nav-list');

menuMobile.addEventListener('click', () => {
    navList.classList.toggle('open');
    menuMobile.classList.toggle('active');
});

// Fecha menu mobile ao clicar em link
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navList.classList.remove('open');
            menuMobile.classList.remove('active');
        }
    });
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.servico-card, .produto-card, .diferencial-card, .depoimento-card');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('reveal', 'active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Formulário de Contato
const contatoForm = document.getElementById('contato-form');

contatoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btnEnviar = contatoForm.querySelector('.btn-enviar');
    const originalText = btnEnviar.textContent;
    btnEnviar.textContent = 'Enviando...';
    btnEnviar.disabled = true;
    setTimeout(() => {
        btnEnviar.textContent = 'Mensagem Enviada!';
        btnEnviar.style.backgroundColor = '#4CAF50';
        contatoForm.reset();
        setTimeout(() => {
            btnEnviar.textContent = originalText;
            btnEnviar.disabled = false;
            btnEnviar.style.backgroundColor = '';
        }, 3000);
    }, 1500);
});

// Animação do Header no Scroll
const header = document.querySelector('.header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Links ativos no menu
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-list a');
const highlightNavLink = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};
window.addEventListener('scroll', highlightNavLink);

// Estilo para links ativos e header animado
const style = document.createElement('style');
style.textContent = `
    .nav-list a.active {
        color: var(--primary-color);
        font-weight: 700;
    }
    .header.scroll-down {
        transform: translateY(-100%);
    }
    .header.scroll-up {
        transform: translateY(0);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(style); 