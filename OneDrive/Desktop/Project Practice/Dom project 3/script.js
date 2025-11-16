let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

let check = 0;

btn.addEventListener("click",function(){
    if(check==0){
          h2.innerHTML="Freinds";
       h2.style.color='green';
       btn.innerHTML="Rmove freinds"
       check = 1;
    }else{
          h2.innerHTML="Strangers";
       h2.style.color='red';
       btn.innerHTML="Add Freinds"
       check=0;
       
    }
      
       
});