// JavaScript for the image slider
let currentIndex = 0;
const slides = document.querySelectorAll('.hero .slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.hero .slider');
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-change slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 3000);
