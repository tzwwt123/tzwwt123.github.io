document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.guides-filter-tab');
    const cards = document.querySelectorAll('.guide-card[data-tags]');
    let activeFilter = 'all';

    function updateCards() {
        cards.forEach((card) => {
            const tags = (card.dataset.tags || '').split(/\s+/).filter(Boolean);
            const show = activeFilter === 'all' || tags.includes(activeFilter);
            card.classList.toggle('hidden', !show);
        });
    }

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((item) => item.classList.remove('active'));
            tab.classList.add('active');
            activeFilter = tab.dataset.filter || 'all';
            updateCards();
        });
    });
});
