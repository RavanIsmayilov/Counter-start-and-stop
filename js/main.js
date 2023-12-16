var c = document.querySelector(".square")
var btnStart = document.querySelector(".start")
var btnStop = document.querySelector(".stop")


var i = 0; 
btnStart.addEventListener("click", function(){
    
    var running = true;
    
setInterval(function(){

    if(running){

        c.textContent = i ++;

        btnStop.addEventListener("click", function(){

            running = false 
        
        })
        }

    },15);
    })




// btnStop.addEventListener("click", function(){

//     running = false 

// })








    // for( i = 1; i <= 5 ; i ++){

    //     c.textContent = i;

    // }



// while(running ){
//     c = 0
//     c.textContent = running;
// }
