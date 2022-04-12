const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 2000;
let currentImageCounter = 0; //  to keep track of the current image

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
}
