/**
 * Utility functions for the portfolio website.
 */

const Utils = {
    /**
     * Resolve the base path for fetching assets.
     * @returns {string} The base path string.
     */
    getBasePath: () => {
        return window.basePath || '';
    },

    /**
     * Fetch data from a JSON endpoint.
     * @param {string} endpoint - The relative path to the JSON file.
     * @returns {Promise<Object>} The fetched JSON data.
     */
    fetchJson: async function(endpoint) {
        const url = this.getBasePath() + endpoint;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
            }
            return await response.json();
        } catch (err) {
            console.error(`Error fetching JSON from ${url}:`, err);
            throw err;
        }
    },

/**
     * Fetch content from an HTML endpoint.
     * @param {string} endpoint - The relative path to the HTML file.
     * @returns {Promise<string>} The fetched HTML content as a string.
     */
    fetchHtml: async function(endpoint) {
        const url = this.getBasePath() + endpoint;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
            }
            return await response.text();
        } catch (err) {
            console.error(`Error fetching HTML from ${url}:`, err);
            throw err;
        }
    }
};

// Export for use in other modules if using ES modules (though we might use script tags)
if (typeof module !== 'undefined') {
    module.exports = Utils;
}

// Attach to window for availability across scripts
window.Utils = Utils;
