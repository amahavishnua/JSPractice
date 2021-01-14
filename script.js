

$(
    console.log("hey"),
    N=Date.now(),
    console.log(N),
    document.getElementById("stopP").onclick=function(){
        NT=Date.now();
        console.log((NT-N)/1000)
        
    }

)