// script.js

let rotateX = 0;
let rotateY = 0;

function rotateCube(axis) {
    if (axis === 'x') {
        rotateX += 90;
    } else if (axis === 'y') {
        rotateY += 90;
    }

    document.getElementById('cube').style.transform = 
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}