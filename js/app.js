document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('workflow-search');
    const tabs = document.querySelectorAll('.tab');
    const rows = document.querySelectorAll('.workflow-row');
    let activeFilter = 'all';

    function updateRows() {
        const query = (search?.value || '').trim().toLowerCase();

        rows.forEach((row) => {
            const category = row.dataset.category || '';
            const keywords = `${row.textContent} ${row.dataset.keywords || ''}`.toLowerCase();
            const matchesFilter = activeFilter === 'all' || category === activeFilter;
            const matchesSearch = !query || keywords.includes(query);
            row.classList.toggle('hidden', !(matchesFilter && matchesSearch));
        });
    }

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((item) => item.classList.remove('active'));
            tab.classList.add('active');
            activeFilter = tab.dataset.filter || 'all';
            updateRows();
        });
    });

    search?.addEventListener('input', updateRows);
});
