document.addEventListener('DOMContentLoaded', function() {
    let pullbarActive = false; // Track whether the pullbar is active

    // Get all elements with the class 'color'
    document.querySelectorAll('.color').forEach(function(element) {
        // Add a click event listener to each 'color' element
        element.addEventListener('click', function() {
            // Get the value of the 'data-img-path' attribute
            let imgPath = this.getAttribute('data-img-path');
            
            // If pullbar is active, modify the image path to include 'Pullbar'
            if (pullbarActive) {
                imgPath = imgPath.replace('.png', 'Pullbar.png');
            }

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

    // Function to toggle the pullbar
    function pullbar() {
        // Get the first element with the class 'car'
        let carElement = document.querySelector('.car');
        
        if (carElement) {
            // Get the current src attribute value of the car element
            let currentSrc = carElement.getAttribute('src');
            
            if (pullbarActive) {
                // If pullbar is active, remove it by resetting the src
                currentSrc = currentSrc.replace('Pullbar.png', '.png');
                pullbarActive = false;
            } else {
                // If pullbar is not active, add it
                currentSrc = currentSrc.replace('.png', 'Pullbar.png');
                pullbarActive = true;
            }
            
            // Fade out effect
            carElement.style.transition = 'opacity 0.3s';
            carElement.style.opacity = 0;

            setTimeout(function() {
                // Set the new image source with or without 'Pullbar'
                carElement.setAttribute('src', currentSrc);
                
                // Fade in effect
                carElement.style.opacity = 1;
            }, 300);
        }

        console.log("Pullbar function executed with new image source.");
    }

    // Expose pullbar function globally
    window.pullbar = pullbar;
});
