$('.game-slider').slick({
    className: "center",
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: false
            }
        }
    ]
});
