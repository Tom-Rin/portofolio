/**
 * Service for loading and managing core site components.
 */
const CoreService = {
    /**
     * Loads a component (header, footer, etc.) into a placeholder element.
     * @param {string} id - The ID of the placeholder element.
     * @param {string} file - The relative path to the component file.
     */
    loadComponent: async function(id, file) {
        const url = window.Utils.getBasePath() + file;
        console.log(`Fetching Component: ${url}`);
        try {
            const response = await fetch(url);
            if (response.ok) {
                const content = await response.text();
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = content;
                }
            } else {
                console.error(`Failed to fetch component ${url}: ${response.status} ${response.statusText}`);
            }
        } catch (err) {
            console.error(`Error loading component ${file}:`, err);
        }
    }
};

if (typeof module !== 'undefined') {
    module.exports = CoreService;
}

window.CoreService = CoreService;
