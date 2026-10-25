function toggleMenu() {
    const menu = document.getElementById('nav-list');
    menu.classList.toggle('show');
}

const VACATION_NOTICE = {
    enabled: true,
    title: "Upozornění",
    text: "Ve dnech 24. 10. – 28. 10. 2026 máme dovolenou. Objednávky budeme vyřizovat po návratu."
};

function renderVacationNotice() {
    if (!VACATION_NOTICE.enabled) {
        return;
    }

    const pageHeader = document.querySelector("header");
    if (!pageHeader || !pageHeader.parentNode) {
        return;
    }

    const notice = document.createElement("section");
    notice.className = "vacation-notice";
    notice.innerHTML = `<strong>${VACATION_NOTICE.title}:</strong> ${VACATION_NOTICE.text}`;
    pageHeader.parentNode.insertBefore(notice, pageHeader);
}

renderVacationNotice();
document.getElementById("year").textContent = new Date().getFullYear();

/*
Návod na jednoduché odstranění a návrat do původního stavu:
1) Pro okamžité skrytí změňte VACATION_NOTICE.enabled na false.
2) Pro úplné odstranění smažte objekt VACATION_NOTICE, funkci renderVacationNotice()
   i její volání a v styles.css odeberte blok .vacation-notice.
*/
