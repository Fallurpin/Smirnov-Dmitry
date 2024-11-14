const sun = document.getElementById('Oblako');
var positionX = -150;
var positionXend = 1700;
function posX() {
    if (positionX < positionXend) {
        positionX++;
        sun.style.transform = 'translate(' + positionX + '%,0%)';
        setTimeout(posX, 10);
        console.log(2);
    }
}