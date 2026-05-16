function toggleMenu() {
    const menu = document.getElementById('nav-list');
    menu.classList.toggle('show');
}
document.getElementById("year").textContent = new Date().getFullYear();

// Cookie Consent Logic
function initGTM() {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5J9CVFLF');
}

const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('cookie-accept');
const rejectBtn = document.getElementById('cookie-reject');

if (cookieBanner) {
    const consent = localStorage.getItem('cookieConsent');

    if (consent === 'accepted') {
        initGTM();
    } else if (consent !== 'rejected') {
        cookieBanner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.style.display = 'none';
        initGTM();
    });

    rejectBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieBanner.style.display = 'none';
    });
}
