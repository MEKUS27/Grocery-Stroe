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


// let form = document.getElementById('form')
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let username = document.getElementById("username").value;
//     let usernameerror = document.getElementById('usernameerror');
//     let name = /^[a-zA-Z]{1}[a-zA-Z\s\-]{2,40}$/;

//     let email = document.getElementById('email').value;
//     let emailerror = document.getElementById('emailerror');
//     let mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


//     if (username.value.trim() === "") {
//         usernameerror.innerHTML = 'Please enter username';
//         usernameerror.style.color = 'red';
//         usernameerror.style.fontSize = '12px';
//         usernameerror.style.transition = '0.5s';
//         username.style.border = '1px solid red';
//         return 
//     } else if (!name.test(username.value)) {
//         usernameerror.innerHTML = 'invalid name';
//         usernameerror.style.color = 'red';
//         usernameerror.style.fontSize = '12px';
//         usernameerror.style.transition = '0.5s';
//         username.style.border = '1px solid red';
//         return
//     }
//     else if (email.trim() === "") {
//         emailerror.innerHTML = "Please enter email"
//         emailerror.style.color = 'red';
//         emailerror.style.fontSize = '12px';
//         emailerror.style.transition = '0.5s';
//         emailerror.style.border = '1px solid red';
//         return 
//     }
//     else if (!mail.test(email)) {
//         emailerror.innerHTML = 'invalid Email';
//         emailerror.style.color = 'red';
//         emailerror.style.fontSize = '12px';
//         emailerror.style.transition = '0.5s';
//         emailerror.style.border = '1px solid red';
//         return 
//     }

//     else {
//         usernameerror.innerHTML = ''
//         username.style.border = 'none';
//         return true;
//     }
// })


// search product starts here
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pname  = document.getElementsByTagName("h1")

    for(var i=0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h1')[0];

        if(match) {
           let textvalue =  match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
               product[i].style.display = "";
           }else {
            product[i].style.display = "none";
           }
        }
    }
}
