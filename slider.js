// Select all images and buttons
var sliderImages = document.querySelectorAll(".slide");
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
var current = 0; // Track the current image index

// Function to hide all images
function hideAllImages() {
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Function to show the current image
function showImage(index) {
  hideAllImages();
  sliderImages[index].style.display = "block";
}

// Function to show the previous image
function showPrevious() {
  current--; // Move to the previous image
  if (current < 0) {
    current = sliderImages.length - 1; // Loop back to the last image
  }
  showImage(current);
}

// Function to show the next image
function showNext() {
  current++; // Move to the next image
  if (current >= sliderImages.length) {
    current = 0; // Loop back to the first image
  }
  showImage(current);
}

// Add event listeners for the buttons
arrowLeft.addEventListener("click", showPrevious);
arrowRight.addEventListener("click", showNext);

// Start by showing the first image
showImage(current);
