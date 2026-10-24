let summarybutton=document.querySelectorAll(".summarybutton");
let div=document.querySelectorAll(".div");
let para=document.querySelectorAll(".p")
summarybutton.forEach((buttonval,index)=>{
   let btn=index;
    buttonval.addEventListener("click",()=>{
        if(btn===0){
          div[index].setAttribute("class","div1");
          para.forEach((val)=>{
            val.setAttribute("class","p1")
          })
          btn=1;
          div[index].style.display="block"
        }
        else{
            btn=0;
            div[index].style.display="none"
        }
})});


let image=document.querySelectorAll("#movie");
let rightbutton=document.querySelector(".rightbutton");
let leftbutton=document.querySelector(".leftbutton")
let num=document.querySelectorAll(".one")
let img1=document.querySelectorAll(".movie1")
let num1=document.querySelectorAll(".two")


rightbutton.addEventListener("click",(e)=>{
  image.forEach((imgval)=>{
    imgval.style.visibility="hidden"
    num.forEach((numval)=>{
       numval.style.visibility="hidden";
       img1.forEach((img1val)=>{
        img1val.style.visibility="visible"
        num1.forEach((num1val)=>{
         num1val.style.visibility="visible"
        })
       })
    })
  })
})

leftbutton.addEventListener("click",(e)=>{
  image.forEach((imgval)=>{
    imgval.style.visibility="visible"
    num.forEach((numval)=>{
       numval.style.visibility="visible";
       img1.forEach((img1val)=>{
        img1val.style.visibility="hidden"
        num1.forEach((num1val)=>{
          num1val.style.visibility="hidden"
        })
       })
    })
  })
})













 