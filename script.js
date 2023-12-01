document.addEventListener("DOMContentLoaded", function() {
    const scheduleTabs = document.querySelectorAll('.schedule-tabs button');
    const sponsorTabs = document.querySelectorAll('.sponsor-tabs button');
    const allTabs = document.querySelectorAll('.schedule-tabs button, .sponsor-tabs button');
    const allTabContents = document.querySelectorAll('.tab-content, .sponsor-tab-content');

    const handleTabClick = (tabs, clickedTab) => {
        tabs.forEach(tab => {
            tab.classList.toggle('active', tab === clickedTab);
        });

        const dataTarget = clickedTab.getAttribute('data-target');
        allTabContents.forEach(content => {
            content.style.display = content.id === dataTarget ? 'block' : 'none';
        });

        console.log(`Clicked tab: ${dataTarget}`);
    };

    const setInitialState = (tabs, initialTab) => {
        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-target') === initialTab);
        });

        allTabContents.forEach(content => {
            content.style.display = content.id === initialTab ? 'block' : 'none';
        });

        console.log(`Initial tab: ${initialTab}`);
    };

    // Handle all tabs with initial state set to 'day1' for schedule and 'primary' for sponsors
    allTabs.forEach(tab => {
        tab.addEventListener('click', () => handleTabClick(allTabs, tab));
    });

    setInitialState(allTabs, 'day1'); // Set initial state for schedule tabs
    setInitialState(allTabs, 'primary'); // Set initial state for sponsor tabs
});
