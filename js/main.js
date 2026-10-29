/**
 * Entry point for the website.
 * Initializes core services and loads structural components.
 */

document.addEventListener('DOMContentLoaded', async () => {
    // Load structural components via CoreService
    CoreService.loadComponent('header-placeholder', 'components/header.html');
    CoreService.loadComponent('footer-placeholder', 'components/footer.html');

    // Handle Project Rendering
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id && window.projectRegistry[id]) {
        const projectData = await Utils.fetchJson(`data/${window.projectRegistry[id].dataFile}`);
        ProjectService.renderProject(projectData);
    }
});