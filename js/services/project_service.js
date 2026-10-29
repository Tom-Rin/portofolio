/**
 * Service for handling project rendering and data interaction.
 */
const ProjectService = {
    /**
     * Renders a project based on its ID.
     * @param {Object} data - The data object for the project.
     */
    renderProject: function(data) {
        if (!data) return;

        const categoryEl = document.querySelector('.category');
        const titleEl = document.querySelector('h1');

        if (categoryEl) categoryEl.textContent = data.category;
        if (titleEl) titleEl.textContent = data.title;

        const layers = ['overzicht', 'expertise', 'diepgang'];

        layers.forEach((layerKey, index) => {
            const layerData = data.layers[layerKey];
            const btn = document.querySelector(`.layer-btn[data-target="${layerKey}"]`);
            const content = document.getElementById(layerKey);

            if (btn && content) {
                // Update titles and hints
                const btnTitle = btn.querySelector('.btn-title');
                const btnHint = btn.querySelector('.btn-hint');
                if (btnTitle) btnTitle.textContent = layerData.title;
                if (btnHint) btnHint.textContent = `(${layerData.hint})`;

                // Inject content
                const contentEl = content.querySelector('.project-layer-content');
                if (contentEl) {
                    contentEl.innerHTML = layerData.content;
                }

                // Initial state: first layer always open, others can be toggled
                if (index === 0) {
                    contentEl.classList.add('is-open');
                } else {
                    contentEl.classList.remove('is-open');
                }
            }
        });

        // Add click listeners for the accordion toggle
        document.querySelectorAll('.layer-btn').forEach(btn => {
            btn.onclick = () => {
                const targetId = btn.getAttribute('data-target');
                const target = document.getElementById(targetId);
                if (target) {
                    const contentEl = target.querySelector('.project-layer-content');
                    if (contentEl) {
                        contentEl.classList.toggle('is-open');
                    }
                }
            };
        });
    }
};

if (typeof module !== 'undefined') {
    module.exports = ProjectService;
}

window.ProjectService = ProjectService;
