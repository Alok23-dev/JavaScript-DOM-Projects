let button = document.querySelector("button");
let main = document.querySelector("main");


button.addEventListener("click",function(){
    let div= document.createElement("div");
    div.style.width="200px";
    div.style.height="100px";
    div.style.backgroundColor="red";

    let x= Math.random()*100;
     let y= Math.random()*100;
     let r = Math.floor(Math.random()*256);
     let g = Math.floor(Math.random()*256);
     let b =Math.floor(Math.random()*256);

     div.style.position="absolute";
     div.style.top= y+"%";
     div.style.left= x +"%";
     div.style.backgroundColor= `rgb( ${r}, ${g},${b})`;
    
    

    main.appendChild(div);

});
