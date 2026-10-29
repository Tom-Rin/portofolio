/**
 * Entry point for the website.
 * Initializes core services and loads structural components.
 */

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Load structural components via CoreService
    CoreService.loadComponent('header-placeholder', 'components/header.html');
    CoreService.loadComponent('footer-placeholder', 'components/footer.html');

    // 2. Initialize UI behaviors
    UI.initAccordion();

    // 3. Handle Project Rendering
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id && window.projectRegistry[id]) {
        try {
            const projectData = await Utils.fetchJson(`data/${window.projectRegistry[id].dataFile}`);
            ProjectService.renderProject(projectData);
        } catch (err) {
            console.error(`Failed to render project ${id}:`, err);
        }
    } else if (document.body.classList.contains('hero-page')) {
        ProjectService.renderProjectGrid('home-project-grid', window.HOME_PROJECT_IDS);
    } else if (document.body.classList.contains('project-page')) {
        ProjectService.renderProjectGrid('overview-project-grid', window.OVERVIEW_PROJECT_IDS);
    }
});
