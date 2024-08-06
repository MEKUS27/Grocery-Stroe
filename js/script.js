const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // Enable autoplay
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Autoplay will not stop after user interactions like swiping or clicking arrows
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
