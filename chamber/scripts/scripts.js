function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

const datefield = document.querySelector("time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.textContent = fulldate;