function toggleNav() {
    var x = document.getElementById("links-dropdown");
    x.classList.toggle("hidden");
}

document.querySelector('#dropdown').addEventListener('click', toggleNav);