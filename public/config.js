document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the class 'color'
  document.querySelectorAll('.color').forEach(function(element) {
      // Add a click event listener to each 'color' element
      element.addEventListener('click', function() {
          // Get the value of the 'data-img-path' attribute
          let imgPath = this.getAttribute('data-img-path');
          // Get the first element with the class 'car'
          let carElement = document.querySelector('.car');
          
          if (carElement) {
              // Fade out effect
              carElement.style.transition = 'opacity 0.3s';
              carElement.style.opacity = 0;

              setTimeout(function() {
                  // Change the image source after fading out
                  carElement.setAttribute('src', imgPath);
                  
                  // Fade in effect
                  carElement.style.opacity = 1;
              }, 300);
          }
      });
  });
});

function pullbar() {
  // Get the first element with the class 'car'
  let carElement = document.querySelector('.car');
  
  if (carElement) {
      // Fade out effect
      carElement.style.transition = 'opacity 0.3s';
      carElement.style.opacity = 0;

      setTimeout(function() {
          // Change the image source after fading out
          carElement.setAttribute('src', "/images/toyotaPullbar.png");
          
          // Fade in effect
          carElement.style.opacity = 1;
      }, 300);
  }

  console.log("Pullbar function executed");
}
