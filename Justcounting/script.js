$(
    console.log("hey"),
    N=Date.now(),
    console.log(N),
    document.getElementById("tryAgain").onclick=function(){
        N=Date.now();
        console.log("In try again")
        console.log(N)  
    },
    document.getElementById("stopP").onclick=function(){
        NT=Date.now();
        diffE=(NT-N)/1000;
        if (diffE>60){
            diffE=diffE/60;
            var minN=1;
        }
        console.log(diffE);
        document.getElementById("resUlt").innerHTML = "You only lasted "+diffE+" Sec";
        if (diffE>60 && minN==1){
            document.getElementById("resUlt").innerHTML = "You only lasted "+diffE+" min";
        }
    }
)