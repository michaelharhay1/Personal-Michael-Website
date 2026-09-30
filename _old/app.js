/*
    Author: Michael Harhay

    Date created: 16/07/2024
    Date modified: 29/09/2024

    Functionality: Contains JS scripts for personal website
*/

// --- Footer Appear on Scroll --- //
document.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    // If at bottom of page, show footer
    if (scrollPosition >= documentHeight) {
        footer.style.opacity = '1';
    } 
    else {
        footer.style.opacity = '0';
    }
});    

// --- Scroll Fade Effect --- //
document.addEventListener('scroll', () => {
    var pageTop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageBottom = pageTop + window.innerHeight;
    var tags = document.querySelectorAll('.fade');

    tags.forEach(tag => {
        var tagTop = tag.getBoundingClientRect().top + pageTop + 70;
        var tagBottom = tag.getBoundingClientRect().bottom + pageTop - 70;

        if (tagTop > pageTop && tagTop < pageBottom && tagBottom > pageTop && tagBottom < pageBottom) { 
            tag.style.transition = 'opacity 0.5s';
            tag.style.opacity = '1';
        } 
        else {
            tag.style.transition = 'opacity 0.5s';
            tag.style.opacity = '0';
        }
    });
});

// --- Page Transition Effect --- //
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

window.addEventListener('beforeunload', () => {
    document.body.classList.remove('fade-in');
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        
        // Allow usual behaviour if opening in new tab
        if (this.target === '_blank' || this.href === window.location.href) {
            return;
        }
        
        e.preventDefault();
        document.body.classList.remove('fade-in');
        setTimeout(() => {
            window.location.href = this.href;
        }, 300); // Matches fade out duration
    });
});