
let n = document.querySelectorAll(".drum").length
var audio = new Audio("sounds/tom-1.mp3")
var audio1 = new Audio("sounds/tom-2.mp3")
var audio2 = new Audio("sounds/tom-3.mp3")
var audio3 = new Audio("sounds/tom-4.mp3")
var audio4 = new Audio("sounds/snare.mp3")
var audio5 = new Audio("sounds/crash.mp3")
var audio6 = new Audio("sounds/kick-bass.mp3")
for(let i = 0; i < n ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
         btnHTML = this.innerHTML 
         makesound(btnHTML)
         buttonAnimation(btnHTML)
    })
}

document.addEventListener("keydown", function(event){
    makesound(event.key)
    buttonAnimation(event.key)
})

function makesound(key){
    switch (key) {
        case "w":
            audio.play();
            break;
        case "a":
            audio1.play();
            break;
        case "s":
            audio2.play();
            break;
        case "d":
            audio3.play();
            break;
        case "j":
            audio4.play();
            break;
        case "k":
            audio5.play();
            break;
        case "l":
            audio6.play();
            break;
    
        default:
            console.log(btnHTML)
    }
}

function buttonAnimation(currKey){
   var now = document.querySelector("." + currKey)
    now.classList.add("pressed")
    setTimeout(function(){
        now.classList.remove("pressed")
    }, 100)
}


























// // For all 7 buttons:-
// for(var i = 0 ; i<document.querySelectorAll("button"))
// // All buttons or buttons that will be made w
// // for(var i = 0 ; i<document.querySelectorAll("button"))
// document.querySelectorAll("button")[].addEventListener("click", function(){
//     alert("I am The Honored One");
// });

// // For one button:-
// // document.querySelector("button").addEventListener("click", function(){
// //     alert("I am The Honored One");
// // });
// // Another way to write above listener 
// // document.querySelector("button").addEventListener("click", handleclick); 
// // function handleclick() {
// //     alert("I am The Honored One");
// // }