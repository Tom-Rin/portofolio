/**
 * Service for managing UI interactions and animations.
 */
const UI = {
    /**
     * Initializes the accordion behavior for project layers.
     * @param {string} projectId - The ID of the project being rendered.
     */
    initAccordion: function() {
        const buttons = document.querySelectorAll('.layer-btn');
        buttons.forEach(btn => {
            btn.onclick = () => {
                const targetId = btn.getAttribute('data-target');
                const target = document.getElementById(targetId);
                if (target) {
                    const contentEl = target.querySelector('.project-layer-content');
                    if (contentEl) {
                        const isOpen = contentEl.classList.toggle('is-open');
                        // Update button style based on state
                        btn.parentElement.classList.toggle('is-open', isOpen);
                    }
                }
            };
        });
    },

    /**
     * Shows a loading state for a component.
     * @param {HTMLElement} element
     */
    showLoading: function(element) {
        if (element) {
            element.innerHTML = '<div class="loading">Loading...</div>';
        }
    },

    /**
     * Displays a success message or content.
     * @param {HTMLElement} element
     * @param {string} content
     */
    showContent: function(element, content) {
        if (element) {
            element.innerHTML = content;
        }
    }
};

if (typeof module !== 'undefined') {
    module.exports = UI;
}

window.UI = UI;
