

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Jab 'Sign Up' button click ho, tab slide karke registration dikhao
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Jab 'Sign In' button click ho, tab wapas login form dikhao
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
