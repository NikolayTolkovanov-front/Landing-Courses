$(function(){
    const testimonicalSwiper = new Swiper('.testimonicals__slider-content', {

        loop: true,
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 43,
        
        navigation: {
          nextEl: '.testimonicals__slider-btn--next',
          prevEl: '.testimonicals__slider-btn--prev',
        },
        
        breakpoints: {
            
            1240: {
                slidesPerView: 4,
            },

            960: {
                slidesPerView: 3,
            },

            768: {
                slidesPerView: 2,
            },

            320: {
                slidesPerView: 1,
            }
        },

      })

    const blogSwiper = new Swiper('.blog__slider', {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        setWrapperSize: true,

        pagination: {
            el: '.blog__slider-pagination',
            bulletActiveClass: 'blog__slider-bullet--active',
            bulletClass: 'blog__slider-bullet',
            clickable: true,
            
        },

        breakpoints: {
            
            1240: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 70,
            },

            960: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },

            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 100,
            },

        },
    })

    const optionsStars = {
        max_value: 5,
        step_size: 0.5,
        initial_value: 3.5,
        readonly: true,
    }

    $('.cards__rate').rate(optionsStars)
    $('.cards__rate--burgundy').rate(optionsStars)

    let videoBtn = $('.testimonicals__video-start')
    let video = $('.testimonicals__video-item')
    let videoWrap = $('.testimonicals__video')

    // $('.cards__functions-like > .cards__functions-like--icon').on('click', function() {
        
    // })

    $('.google-img').hover(function () {
        $('.google-img:hover').attr('src', '/assets/testimonicals/slider/google.webp')
        
        }, function () {
            $('.google-img').attr('src', '/assets/testimonicals/slider/google-grey.webp')
        })

    

    videoBtn.on('click', function() {
        videoBtn.css({'display':'none'})
        videoWrap.css({'border':'none'})
        video.attr('controls', 'controls')
        video.trigger('play')
    })

  });