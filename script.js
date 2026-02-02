let bulb = document.querySelector("#bulb");
let button = document.querySelector("button");
    
let flag =0;

button.addEventListener("click", function() {
    if(flag==0){ bulb.style.backgroundColor = "yellow";
    
    button.innerText = "Off";
    flag=1;}
    else{ bulb.style.backgroundColor = "rgb(248, 248, 248)";
   flag=0;}
    button.innerText = flag==0?"On":"Off";
    
})
