/**
 * Entry point for the website.
 * Initializes core services and loads structural components.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Load core components
    CoreService.loadComponent('header-placeholder', 'components/header.html');
    CoreService.loadComponent('footer-placeholder', 'components/footer.html');
});

