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

    // Check if we are on a project view page and have a valid ID
    if (id && window.projectRegistry[id]) {
        try {
            const projectData = await Utils.fetchJson(`data/${window.projectRegistry[id].dataFile}`);
            ProjectService.renderProject(projectData);
        } catch (err) {
            console.error(`Failed to render project ${id}:`, err);
        }
    }
});
