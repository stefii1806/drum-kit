/*document.querySelector("button").addEventListener("click", handleClick);//si pusiera el parántesis en la función, el método correría inmediatamente después de refrescar la página, porque lo llamo con eso

function handleClick(){
    alert("I got clicked!");
}*/


//Es lo mismo que poner 
//document.querySelector("button").addEventListener("click", function(){
    //alert("I got clicked!");
//}); esto se llama "función anónima"



//detecting button clicked 


var numOfDrums = document.querySelectorAll(".drum").length;

for (var i=0; i<numOfDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //establezco que los botones son del archivo html
        var buttonInnerHTML = this.innerHTML;
        //llamo a la función de hacer el sonido cada vez que el botón es tocado
        makeSound(buttonInnerHTML);
        //llamo a la función de animación cuando clickeo
        buttonAnimation(buttonInnerHTML);
    });
}

//detecting keyboard press

document.addEventListener("keypress", function(event){
    //llamo a la función de hacer sonido cada vez que presiono una de las teclas establecidas
    makeSound(event.key);
    //llamo a la función de animación cada vez que presiono una de las teclas establecidas
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");//creo un elemento de audio HTML
            tom1.play();
            break;

        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");//creo un elemento de audio HTML
            tom2.play();
            break;

        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");//creo un elemento de audio HTML
            tom3.play();
            break;

        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");//creo un elemento de audio HTML
            tom4.play();
            break;

        case "j":
            var snare= new Audio("sounds/snare.mp3");//creo un elemento de audio HTML
            snare.play();
            break;

        case "k":
            var kickBass= new Audio("sounds/kick-bass.mp3");//creo un elemento de audio HTML
            kickBass.play();
            break;

        case "l":
            var crash= new Audio("sounds/crash.mp3");//creo un elemento de audio HTML
            crash.play();
            break;

        default: console.log(buttonInnerHTML);
}
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
/*var audio= new Audio("sounds/tom-1.mp3");//creo un elemento de audio HTML
        audio.play();*/

        //HIGHER ORDER FUNCTION: takes functions as input.