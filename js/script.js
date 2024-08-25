var swiper = new Swiper('.swiper', {
    // Enable pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Makes the pagination bullets clickable
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Optional parameters
    loop: true, // Enable looping
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


var countDownDate = new Date("oct 11, 2024 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelectorAll('.days').forEach((day) =>{
        day.innerHTML = days;
    })
    document.querySelectorAll('.hours').forEach((hour) =>{
        hour.innerHTML = hours;
    })
    document.querySelectorAll('.minutes').forEach((minute) =>{
        minute.innerHTML = minutes;
    })
    document.querySelectorAll('.seconds').forEach((second) =>{
        second.innerHTML = seconds;
    })
    document.querySelectorAll('.textt').forEach((text) =>{
        text.innerHTML = textt;
    })

}, 1000)
// Ends Here
document.querySelectorAll('.days').forEach((day) =>{
    console.log(day)
})