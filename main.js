/* Created By Mohamed Gamal - mohamed--gamal.vercel.app */
/*  ==================== Opening & closing eyes ====================  */
/* ==================== Section1 ==================== */
/* Yellow_watch */
var myElement = document.getElementById('Yellow_watch'),
  imgList = [
    "imgs/2022-01-16-15-00-47-\(C\,Smoothing4\)+\ \(1\).png",
    "imgs/open1.png",
  ];
function changeImage1(myElement, imgList) {
  setInterval(function () {
    randomImage = Math.floor(Math.random() * imgList.length);
    myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
  }, 1000);
}
changeImage1(myElement, imgList);
/* // Yellow_watch // */
/* black_watch */
var myElement = document.getElementById('black_watch'),
  imgList = [
    "imgs/2022-01-16-15-00-47-\(C\,Smoothing4\)+.png",
    "imgs/open2.png",
  ];
function changeImage2(myElement, imgList) {
  setInterval(function () {
    randomImage = Math.floor(Math.random() * imgList.length);
    myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
  }, 1000);
}
changeImage2(myElement, imgList);
/* // black_watch // */
/* ==================== Section1 ==================== */
/* ==================== menu ==================== */
var myElement = document.getElementById('menu'),
  imgList = [
    "imgs/Property 1=Default1.png",
    "imgs/Property 1=Variant2.png",
  ];
function changeMenu(myElement, imgList) {
  setInterval(function () {
    randomImage = Math.floor(Math.random() * imgList.length);
    myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
  }, 3000);
}
changeImage2(myElement, imgList);
/* // ==================== menu ==================== // */
/* // ==================== Opening & closing eyes ==================== // */
/*  ==================== Gallery ====================  */
let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

// Open the lightbox
function openLightbox(event) {
  if (event.target.tagName === 'IMG') {
    const clickedIndex = Array.from(images).indexOf(event.target);
    currentIndex = clickedIndex;
    updateLightboxImage();
    document.getElementById('lightbox').style.display = 'flex';
  }
}
// Close the lightbox
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
// Change the lightbox image based on direction (1 for next, -1 for prev)
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }
  updateLightboxImage();
}
// Update the lightbox image and thumbnails
function updateLightboxImage() {
  const lightboxImg = document.getElementById('lightbox-img');
  // Update the main lightbox image
  lightboxImg.src = images[currentIndex].src;
  // Add new thumbnails
  images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.alt = `Thumbnail ${index + 1}`;
    thumbnail.classList.add('thumbnail');
  });
}
// Update the main lightbox image when a thumbnail is clicked
function updateMainImage(index) {
  currentIndex = index;
  updateLightboxImage();
}
// Add initial thumbnails
updateLightboxImage();
// To add keyboard navigation (left/right arrow keys)
document.addEventListener('keydown', function (e) {
  if (document.getElementById('lightbox').style.display === 'flex') {
    if (e.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (e.key === 'ArrowRight') {
      changeImage(1);
    }
  }
});
/* // ==================== Gallery ==================== // */