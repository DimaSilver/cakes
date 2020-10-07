$(function(){
    $('.individual-order__slider').slick({
        prevArrow: '<button type="button" class="individual-order__slider-prev individual-order__slider-arrows"><img src="images/arrow-left__slider.svg" alt=""></button>',
        nextArrow: '<button type="button" class="individual-order__slider-next individual-order__slider-arrows"><img src="images/arrow-right__slider.svg" alt=""></button>'
    });
    $('.individual-order__item-design__slider').slick({
        slidesToShow: 2,
        prevArrow: '<button type="button" class="individual-order__item-design__slider-prev individual-order__item-design__slider-arrows"><img src="images/arrow-left__slider.svg" alt=""></button>',
        nextArrow: '<button type="button" class="individual-order__item-design__slider-next individual-order__item-design__slider-arrows"><img src="images/arrow-right__slider.svg" alt=""></button>'
    });
    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="reviews__slider-prev reviews__slider-arrows"><img src="images/arrow-left__slider.svg" alt=""></button>',
        nextArrow: '<button type="button" class="reviews__slider-next reviews__slider-arrows"><img src="images/arrow-right__slider.svg" alt=""></button>'
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list-active');
    });
});