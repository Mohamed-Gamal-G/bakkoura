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
  }, 2000);
}
changeImage1(myElement, imgList);
/* // Yellow_watch // */
/* black_watch */
var myElement = document.getElementById('black_watch'),
  imgList = [
    "imgs/12.png",
    "imgs/11.png",
  ];
function changeImage2(myElement, imgList) {
  setInterval(function () {
    randomImage = Math.floor(Math.random() * imgList.length);
    myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
  }, 1000);
}
changeImage2(myElement, imgList);
/* // black_watch // */

/* Yellow_watch_mob */
var myElement = document.getElementById('Yellow_watch_mob'),
  imgList = [
    "imgs/2022-01-16-15-00-47-\(C\,Smoothing4\)+\ \(1\).png",
    "imgs/open_Yellow_watch_mob.png",
  ];
function changeImage1(myElement, imgList) {
  setInterval(function () {
    randomImage = Math.floor(Math.random() * imgList.length);
    myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
  }, 3000);
}
changeImage1(myElement, imgList);
/* // Yellow_watch_mob // */
/* black_watch_mob */
var myElement = document.getElementById('black_watch_mob'),
  imgList = [
    "imgs/black_watch_mob.png",
    "imgs/open_black_watch_mob.png",
  ];
function changeImage2(myElement, imgList) {
  setInterval(function () {
    randomImage = Math.floor(Math.random() * imgList.length);
    myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
  }, 3000);
}
changeImage2(myElement, imgList);
/* // black_watch_mob // */
/* ==================== Section1 ==================== */
/* // ==================== Opening & closing eyes ==================== // */
/* ==================== menu ==================== */
const link = document.getElementById('link');
const addBtn = document.getElementById('primary-navigation');
const removeBtn = document.getElementById('primary-toggle');
link.addEventListener('click',()=>{
  addBtn.classList.add('none');
})
removeBtn.addEventListener('click',()=>{
  addBtn.classList.remove('none');
})
/* // ==================== menu ==================== // */
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
/* // ==================== cookies ==================== // */
function cookies() {
  var x = document.getElementById("cookies");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
/* // ==================== cookies ==================== // */