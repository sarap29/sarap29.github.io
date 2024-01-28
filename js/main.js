(function ($) {
    "use strict";

    var burgerMenu = function () {
        $('.burger').click(function (e) {
            $(window).scrollTop(0);
            if (!$('.burger').hasClass('active'))
                $('.burger').addClass('active');
            else
                $('.burger').removeClass('active');
        });
    }
    burgerMenu();

    var siteIstotope = function () {
        var $container = $('#portfolio-grid').isotope({
            itemSelector: '.item',
            isFitWidth: true
        });

        $(window).resize(function () {
            $container.isotope({
                columnWidth: '.col-sm-3'
            });
        });

        $container.isotope({ filter: '*' });

        $('#filters').on('click', 'a', function (e) {
            e.preventDefault();
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
            $('#filters a').removeClass('active');
            $(this).addClass('active');
        });
    }
    $(window).on('load', function () {
        siteIstotope();
    });


    var siteOwlCarousel = function () {
        $('.testimonial-carousel').owlCarousel({
            center: true,
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            smartSpeed: 1000,
        });
    };
    siteOwlCarousel();


})(jQuery);

AOS.init({
    easing: 'ease',
    duration: 1000,
    once: true
});




var content = 'Full Stack Developer ';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('#multipleStrings').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0,
        backgroundColor: 'black',
        color: 'white',
        paddingLeft: '2px', // Agregar padding-left de 2px
        paddingRight: '2px' // Agregar padding-right de 2px
    }).animate({
        opacity: 1
    }, 100);
});


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
