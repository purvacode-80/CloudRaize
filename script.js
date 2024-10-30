document.addEventListener("DOMContentLoaded", () => {
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

    function updateTimer() {
        const now = new Date().getTime();
        const distance = endTime - now;
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;

        if (distance < 0) {
            document.getElementById("timer").textContent = "EXPIRED";
        }
    }

    setInterval(updateTimer, 1000);
});

document.querySelectorAll('.faq-item .question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentNode;
        faqItem.classList.toggle('active');
    });
});

document.querySelectorAll('.week').forEach(week => {
    week.addEventListener('click', () => {
        const topics = week.nextElementSibling;
        topics.style.display = topics.style.display === 'block' ? 'none' : 'block';
        week.classList.toggle('expanded');
    });
});