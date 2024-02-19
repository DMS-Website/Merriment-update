document.addEventListener('DOMContentLoaded', function () {
    const imageHolders = document.querySelectorAll('.img-holder');
    
    // Add click event listener to each idle image
    imageHolders.forEach(function (imgHolder) {
      if (!imgHolder.classList.contains('active')) {
        imgHolder.addEventListener('click', function () {
          // Remove 'active' class from all images
          imageHolders.forEach(function (imgHolder) {
            imgHolder.classList.remove('active');
          });

          // Add 'active' class to the clicked image
          imgHolder.classList.add('active');
          
          // Update the main image source
          const mainImage = document.querySelector('.img-holder.active img');
          const clickedImageSrc = imgHolder.querySelector('img').src;
          mainImage.src = clickedImageSrc;
        });
      }
    });
  });