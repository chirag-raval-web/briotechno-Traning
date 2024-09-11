  $(document).ready(function(){
        $('.slider').slick({
            slidesToShow: 5,                // Show 5 logos at a time
            slidesToScroll: 1,              // Scroll one at a time
            infinite: true,                 // Infinite loop
            autoplay: true,                 // Enable auto-slide
            autoplaySpeed: 0,               // Set to 0 for continuous slide
            speed: 3000,                    // Adjust for smoothness, higher is slower
            cssEase: 'linear',              // Smooth linear transition
            arrows: false,                  // No navigation arrows
            draggable: true,                // Enable mouse dragging
            swipeToSlide: true,             // Enable swipe
            pauseOnHover: false,            // No pause on hover
            variableWidth: true,            // Adjust the width automatically
        });
    });