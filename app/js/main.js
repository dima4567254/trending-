$(function name(params) {

    const swiper = new Swiper('.swiper1', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "fraction",
        //   },

        // Navigation arrows
        // navigation: {
        //     nextEl: '.custom-next',
        //     prevEl: '.swiper-button-prev',
        // },
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

    });

    var mySwiper = new Swiper(".swiper2", {
        // loop: true,
        slidesPerView: 2,
        initialSlide: 0,
        spaceBetween: 50,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });


    $(' select,categories__input').styler({

        onSelectOpened: function () {
            // к открытому селекту добавляется красная обводка
            // $(this).css('outline', '1px solid red');
            $(this).css('border-color', '1px solid red');
            // $(this).css('outline-color', ' red');
            // $(this).css('outline', ' red');
            // $(this).css('background-color', ' red');

        }
    });

    var mixer = mixitup('.trending-filter__items');

    //   $('select').styler();

    //   $('select').css('outline', '3px solid red');

    //   onSelectOpened: function() {
    // 	// к открытому селекту добавляется красная обводка
    // 	$('select').css('outline', '3px solid red');
    // }



    /*	$(".menu a").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        });

        /*для закрыть меню*/
    /*
              $('.menu__btn').on('click', function () {
                  $('.menu__items').toggleClass('menu__items--active');
              });
              $('.menu__btn').on('click', function () {
                  $('.menu__btn').toggleClass('active');
              });
           
            $('.home__slider').slick({
                dots: true,
                arrows: false,
                 responsive: [


                     {
                         breakpoint: 1150,
                         settings: {
                             slidesToShow: 4,
                         }
                     },
                     {
                         breakpoint: 1000,
                         settings: {
                             slidesToShow: 3,
                         }
                     },
                     {
                         breakpoint: 620,
                         settings: {
                             slidesToShow: 2,
                             slidesToScroll: 2,
                         }
                     },
                 ]
            });
           
           
           */


});