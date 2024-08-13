/*
    Author: Michael Harhay

    Date created: 16/07/2024
    Date modified: 09/08/2024

    Functionality: Contains JS scripts for personal website
*/

// --- Typewriter Effect --- //
var app = document.getElementById('paragraph');

var Typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

Typewriter
    .pauseFor(1000)
    .typeString('A driven, goal-oriented computer engineering student with a love for all things software, and a growing interest in artificial intelligence and data. A diligent, creative problem-solver with a dedication to excellence and a love for learning and self-improvement. A confident, accountable leader who brings out the best in others.')
    .pauseFor(2000)
    .start()

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

/*
// --- Scroll Fade In Effect --- //
window.addEventListener('scroll', function() {
    console.log("SCROLLING!");
    fadeIn();
});

function fadeIn() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fadein");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } 
        else {
            $(tag).removeClass("visible");
        }
    }
}
*/


// // --- Particles Background Effect --- //
// var w = window.innerWidth,
//     h = window.innerHeight,
//     canvas = document.getElementById('background'),
//     ctx = canvas.getContext('2d'),
//     rate = 20,
//     numParts,
//     time,
//     count,
//     size = 7,
//     speed = 20,
//     parts = new Array,
//     colors = ['#ffffff','#E0E0E0','#757575'],
//     mouse = {x: 0, y: 0};

// canvas.setAttribute('width', w);
// canvas.setAttribute('height', h);
// create();
// particles();
// window.addEventListener('resize', resizeWindow, false);

// // Initialize particle array //
// function create() {
//     time = 0;
//     count = 0;
//     numParts = w / 20;

//     for (var i = 0; i < numParts; i++) {
//         parts[i] = {
//             x: Math.ceil(Math.random() * w),
//             y: Math.ceil(Math.random() * h),
//             toX: Math.random() * 5 - 1,
//             toY: Math.random() * 2 - 1,
//             c: colors[Math.floor(Math.random() * colors.length)],
//             size: (Math.random() / 3 + 0.25) * size
//         }
//     }
// }

// // Customize particle movement //
// function particles() {
//     ctx.clearRect(0, 0, w, h);
//     canvas.addEventListener('mousemove', MouseMove, false);
    
//     for (var i = 0; i < numParts; i++) {
//         var li = parts[i];
//         var distanceFactor = DistanceBetween(mouse, parts[i]); 
//         var distanceFactor = Math.max(Math.min(15 - (distanceFactor / 5), 5), 1);
        
//         ctx.beginPath();
//         ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
//         ctx.fillStyle = li.c;
//         ctx.strokeStyle = li.c;
//         ctx.fill()
        
//         li.x = li.x + li.toX * (time * 0.05);
//         li.y = li.y + li.toY * (time * 0.05);
        
//         if (li.x > w){
//             li.x = 0; 
//         }
//         if (li.y > h) {
//             li.y = 0; 
//         }
//         if (li.x < 0) {
//             li.x = w; 
//         }
//         if (li.y < 0) {
//             li.y = h; 
//         }
//     }

//     if (time < speed) {
//         time++;
//     }

//     setTimeout(particles, 1000 / rate);
// }

// // Respond to mouse movement //
// function MouseMove(e) {
//    mouse.x = e.layerX;
//    mouse.y = e.layerY;
// }

// // Get distance between two points //
// function DistanceBetween(p1, p2) {
//    var dx = p2.x - p1.x;
//    var dy = p2.y - p1.y;
//    return Math.sqrt(dx * dx + dy * dy);
// }

// // Handle window resize //
// function resizeWindow() {
//     w = window.innerWidth;
//     h = window.innerHeight;
//     canvas.setAttribute('width', w);
//     canvas.setAttribute('height', h);
//     create();
// }
