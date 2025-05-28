// Function to toggle accordion item visibility
function toggleItem(id) {
    // Get the specific accordion item that was clicked
    const item = document.getElementById(id);
    
    // Get all elements with the class 'accordion-content' (all accordion items)
    const allItems = document.querySelectorAll('.accordion-content');

    // Loop through all accordion content items
    allItems.forEach((element) => {
        // If the current element in the loop is NOT the clicked item, hide it
        if (element !== item) {
            element.style.display = 'none';
        }
    });

    // Toggle the clicked item:
    // If the clicked item's display is 'none' or an empty string (meaning it's currently hidden),
    // then show it by setting display to 'block'.
    // Otherwise, hide it by setting display to 'none'.
    if (item.style.display === 'none' || item.style.display === '') {
        item.style.display = 'block'; // Show the clicked item
    } else {
        item.style.display = 'none'; // Hide the clicked item
    }
}


//slider action starts here


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


//slider action ends here