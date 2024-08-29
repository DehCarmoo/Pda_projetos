$(function(){
    let index = 0;
    const $slides = $('.nasaSlides img');
    const totalSlides = $slides.length;

    const showSlide = () => {
        const offset = -index * 100;
        $('.nasaSlides').css({
            'transform': `translateX(${offset}%)`,
            'transition': 'transform 1s ease-in-out' 
        });
    };

    $('.next').click(() => {
        index = (index + 1) % totalSlides;
        showSlide();
    });

    $('.prev').click(() => {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide();
    });
});
