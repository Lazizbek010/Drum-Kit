let drums = document.querySelectorAll(".drum");

drums.forEach(function(drum){
    drum.addEventListener("click", function(){
       let button = drum.textContent 
    playing(button)
    animation(button)   
    })
})

document.addEventListener("keypress", function(e){
    playing(e.key)
    animation(e.key)   

})


function playing(key){
    if(key == "w"){
        let audio = new Audio("sounds/crash.mp3")
        audio.play()
       }else if( key == "a"){
        let audio = new Audio("sounds/kick-bass.mp3")
        audio.play()
       }else if( key == "s"){
        let audio = new Audio("sounds/snare.mp3")
        audio.play()
       }else if( key == "d"){
        let audio = new Audio("sounds/tom-1.mp3")
        audio.play()
       }else if( key == "j"){
        let audio = new Audio("sounds/tom-2.mp3")
        audio.play()
       }else if( key == "k"){
        let audio = new Audio("sounds/tom-3.mp3")
        audio.play()
       }else if( key == "l"){
        let audio = new Audio("sounds/tom-4.mp3")
        audio.play()
       }else{
           console.log("salom")
       }
}

function animation(key){
    let pressedKey = document.querySelector(`.${key}`)
    pressedKey.classList.add("pressed")
    setTimeout(function(){
        pressedKey.classList.remove("pressed")
    }, 100)
}






