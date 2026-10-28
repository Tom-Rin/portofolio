async function loadComponent(id, file) {
    const url = (window.basePath || '') + file;
    console.log(`Fetching: ${url}`); // Debugging log
    try {
        const response = await fetch(url);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(id).innerHTML = content;
        } else {
            console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.error(`Error fetching ${url}:`, err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});
