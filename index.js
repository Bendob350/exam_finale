const toggle = document.getElementById("toggle");
console.log(toggle);

const navbar = document.getElementById('navbar');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('othman');
})