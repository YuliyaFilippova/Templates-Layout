
     $(document).on('ready', function() {
      
      $(".slider-main").slick({
        dots: false,
        dotsClass: 'dots-main',
        vertical: false,
        centerMode: true,
        prevArrow: '<button type="button" class="left"></button>',
        nextArrow: '<button type="button" class="right"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: true, 
              prevArrow: '',
              nextArrow: '',
            }
          },
        ]
      });
    
      $(".slider-gallery").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: true, 
              dotsClass: 'dots-gallery',
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              infinite: true,
              cssEase: 'linear',
              variableWidth: true,
              variableHeight: true,
            }
          },  
          {
            breakpoint: 480,
            settings: {
              variableWidth: false,
              variableHeight: false,
            }
          },
        ]
      });

    });