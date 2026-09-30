// Update config vars
document.getElementById("copyrightYear").textContent =
    new Date().getFullYear();

document.getElementById("siteVersion").textContent =
    SITE.version;

// Email reveal
document.getElementById("email-reveal").addEventListener("click", function (event) {
    event.preventDefault();

    const email = SITE.email;

    document.getElementById("email").textContent = email;
    document.getElementById("email").hidden = false;
    this.hidden = true;
});