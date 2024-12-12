const imgBoxes = document.querySelectorAll('.img-box');

// Function to remove the 'active' class from all images
function removeActiveClasses() {
  imgBoxes.forEach((box) => box.classList.remove('active'));
}

// Add hover event to each image
imgBoxes.forEach((box) => {
  box.addEventListener('mouseenter', () => {
    removeActiveClasses();
    box.classList.add('active');
  });
});
