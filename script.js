// Starts Here
var countDownDate = new Date("jul 11, 2024 00:00:00").getTime();
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



// Starts Here E
window.addEventListener('scroll', function () {
    const navs = document.getElementById('navs');
    if (window.scrollY > 70) {
        navs.classList.add('active');
    } else {
        navs.classList.remove('active');
    }
})
// Ends Here

// Starts Here
let iconpasswordone = document.getElementById("iconpasswordone");
let iconpasswordtwo = document.getElementById("iconpasswordtwo");
var passsword = document.getElementById("mypassword");
function show() {
    passsword.setAttribute("type", 'text')
    iconpasswordone.style.display = 'none';
    iconpasswordtwo.style.display = 'block';
}
function hide() {
    passsword.setAttribute("type", 'password')
    iconpasswordone.style.display = 'block';
    iconpasswordtwo.style.display = 'none';
}
// Ends Here




// search product starts here
function toggleIcons(clickedIcon) {
    const iconContainer = clickedIcon.parentElement;
    const iconheartone = iconContainer.querySelector('.iconheartone');
    const iconhearttwo = iconContainer.querySelector('.iconhearttwo');

    if (iconheartone.style.display === 'none') {
        iconheartone.style.display = 'block';
        iconhearttwo.style.display = 'none';
    } else {
        iconheartone.style.display = 'none';
        iconhearttwo.style.display = 'block';
    }
}
