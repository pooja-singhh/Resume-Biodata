document.addEventListener('DOMContentLoaded', () => {
    alert("Welcome to my website!");
});
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
