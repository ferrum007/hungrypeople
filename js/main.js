/*------Сролл до нужного места-------*/
$(".link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 800);
});

// Бургер-меню

function burger() {
    let bur = document.querySelector('.sticky-menu');
    bur.classList.toggle('d-block');
}

$('.link').click(function() {
    document.querySelector('.mobile-menu__checkbox').checked = false;
});

$(document).ready(function(){
    $(window).scroll(function(){
        document.querySelector('.mobile-menu__checkbox').checked = false;
    });
});

// Крутить штурвал
$('.wheel').click(function(){
    $(".wheel").toggleClass('wheel-rotate');
});


// Выбор меню block5
$('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');
    
    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');
    
    $('.js-tab-content.active').removeClass('active');
    content.addClass('active');
 });
 

//  Липкое меню

$(window).scroll(function(){
    if ($(this).scrollTop() > 770 && $('body').width() >= 576) {
        $('.sticky-menu').addClass('d-block');
    } else {
        $('.sticky-menu').removeClass('d-block');
    }
});

// Слайдеры
$('.single-slide').slick({
    dots: true,
    arrows: false,
    fade: true,
});
$('.single-slide2').slick({
    dots: false,
    arrows: false,
    fade: false,
    slidesToShow: 8,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});