const toggle = document.getElementById("menu-toggle");
console.log(toggle);

const navbar = document.getElementById('navbar');

toggle.addEventListener('click',()=>{
    navbar.classList.add('othman')
})