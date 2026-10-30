/**
 * Service for handling project rendering and data interaction.
 */
const ProjectService = {
    /**
     * Renders a project based on its ID.
     * @param {Object} data - The data object for the project.
     */
    renderProject: async function(data) {
        if (!data) return;

        const categoryEl = document.querySelector('.category');
        const titleEl = document.querySelector('h1');

        if (categoryEl) categoryEl.textContent = data.category;
        if (titleEl) titleEl.textContent = data.title;

        const layerConfig = {
            overzicht: { title: 'Overzicht', hint: 'Niet-technisch' },
            expertise: { title: 'Expertise', hint: 'Engineering Manager' },
            diepgang: { title: 'Diepgang', hint: '' }
        };

        const layers = Object.keys(layerConfig);

        // Fetch all content fragments concurrently
        const promises = layers.map(async (layerKey) => {
            const contentPath = data.contentPaths[layerKey];
            const btn = document.querySelector(`.layer-btn[data-target="${layerKey}"]`);
            const content = document.getElementById(layerKey);

            if (btn && content) {
                try {
                    const contentData = await Utils.fetchHtml(contentPath);
                    
                    // Update titles and hints
                    const btnTitle = btn.querySelector('.btn-title');
                    const btnHint = btn.querySelector('.btn-hint');
                    if (btnTitle) btnTitle.textContent = layerConfig[layerKey].title;
                    if (btnHint) btnHint.textContent = layerConfig[layerKey].hint ? `(${layerConfig[layerKey].hint})` : '';
                    
                    // Inject content
                    const contentEl = content.querySelector('.project-layer-content');
                    if (contentEl) {
                        contentEl.innerHTML = contentData;
                    }
                    
                    // Initial state: first layer always open, others can be toggled
                    if (layerKey === 'overzicht') {
                        contentEl.classList.add('is-open');
                    } else {
                        contentEl.classList.remove('is-open');
                    }
                } catch (err) {
                    console.error(`Failed to fetch content for ${layerKey}:`, err);
                }
            }
        });

        await Promise.all(promises);

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
    },

    /**
     * Renders a grid of projects based on a list of IDs.
     * @param {string} containerId - The ID of the container element.
     * @param {string[]} projectIds - The list of project IDs to render.
     */
    renderProjectGrid: async function(containerId, projectIds) {
        const container = document.getElementById(containerId);
        if (!container) return;

        UI.showLoading(container);

        try {
            const projectPromises = projectIds.map(id => {
                const dataFile = window.projectRegistry[id]?.dataFile;
                if (!dataFile) {
                    console.error(`No data file found for project ID: ${id}`);
                    return Promise.resolve(null);
                }
                return Utils.fetchJson(`data/${dataFile}`).then(data => ({ id, data }));
            });

            const projects = await Promise.all(projectPromises);
            
            container.innerHTML = '';
            projects.forEach(project => {
                if (!project || !project.data) return;
                
                const data = project.data;
                const card = document.createElement('div');
                card.className = 'project-card';
                
                card.innerHTML = `
                    <span class="category">${data.category}</span>
                    <h3>${data.title}</h3>
                    <p>${data.summary}</p>
                    <a href="../projects/view.html?id=${project.id}" class="project-link">Bekijk project &rarr;</a>
                `;
                
                container.appendChild(card);
            });
        } catch (err) {
            console.error(`Failed to render project grid:`, err);
            UI.showContent(container, '<p class="error">Error loading projects.</p>');
        }
    }
};

if (typeof module !== 'undefined') {
    module.exports = ProjectService;
}

window.ProjectService = ProjectService;
