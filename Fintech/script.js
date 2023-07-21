const cajas = document.querySelectorAll('#cajaMayor div');
let currentIndex = 0;

function showImage(index) {
    cajas.forEach((caja, i) => {
        if (i === index) {
            caja.classList.add('active');
        } else {
            caja.classList.remove('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % cajas.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + cajas.length) % cajas.length;
    showImage(currentIndex);
}

showImage(currentIndex);

setInterval(nextImage, 3000);
