/*
    Author: Michael Harhay

    Date created: 13/08/2024
    Date modified: 13/08/2024

    Functionality: Contains ThreeJS code for personal website background
*/

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// --- Set up renderer --- //
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#background'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);
camera.position.z = 50;

// --- Set Style --- //
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.width = '100%';
renderer.domElement.style.height = '100%';
renderer.domElement.style.zIndex = '-1';

// --- Create stars --- //
const stars = [];
const numStars = 75;
const boundary = 50;
const rate = 0.0001;
const zrate = 25;
const colors = ['#ffffff', '#E0E0E0'];

for (let i = 0; i < numStars; i++) {
    stars.push(addStar());
}

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    const material = new THREE.MeshBasicMaterial({color: randColor});
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    const [dx, dy, dz] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(10));

    star.position.set(x, y, z);
    star.userData = {dx, dy, dz};

    scene.add(star);
    return star;
}

// --- Animation function --- //
function animate() {
    requestAnimationFrame(animate); 

    stars.forEach(star => {
        // Update star positions
        star.position.x += star.userData.dx * rate;
        star.position.y += star.userData.dy * rate;
        star.position.z -= zrate * rate;
        
        // Prevent stars from escaping boundary
        if (star.position.x > boundary) star.position.x = -boundary;
        if (star.position.x < -boundary) star.position.x = boundary;
        if (star.position.y > boundary) star.position.y = -boundary;
        if (star.position.y < -boundary) star.position.y = boundary;
        if (star.position.z > boundary) star.position.z = -boundary;
        if (star.position.z < -boundary) star.position.z = boundary;
    });

    renderer.render(scene, camera);
}

// --- Handle window resizing --- //
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
