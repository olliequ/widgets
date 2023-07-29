const allLoadings = document.querySelectorAll('.loading');
const toggler = document.getElementById('toggle');

let sun = document.createElement("i");
sun.className = "bx bx-sun bx-spin";
sun.style.color = '#f0e7e7';

let moon = document.createElement("i");
moon.className = "bx bx-moon bx-tada";

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Save the theme preference to localstorage
    const isDarkModeEnabled = document.body.classList.contains('dark-mode');
    if (isDarkModeEnabled) {
        toggler.removeChild(moon);
        toggler.appendChild(sun);
        sun.style.animationIterationCount = "1";
    } else {
        toggler.removeChild(sun);
        toggler.appendChild(moon);
        moon.style.animationIterationCount = 1;

    }
    localStorage.setItem('darkmode', isDarkModeEnabled);
}

toggler.addEventListener('click', toggleDarkMode);

window.addEventListener('load', () => {
    // Retrieve the theme preference from localstorage
    const isDarkModeEnabled = localStorage.getItem('darkmode');

    // Set the theme based on the saved preference
    if (isDarkModeEnabled === 'true') {
        document.body.classList.add('dark-mode');
        toggler.appendChild(sun);
        sun.style.animationIterationCount = "2";
    } else {
        document.body.classList.remove('dark-mode');
        toggler.appendChild(moon);
        moon.style.animationIterationCount = 2;

    }

    setInterval(() => {
        allLoadings.forEach(item => {
            item.classList.remove('loading');
        });
    }, 2000);
});