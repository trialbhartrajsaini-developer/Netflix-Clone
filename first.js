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

let languageSelects=document.querySelectorAll(".language-select");

function closeLanguageMenus(){
  languageSelects.forEach((languageSelect)=>{
    languageSelect.querySelector(".language-options").hidden=true;
    languageSelect.querySelector(".language-trigger").setAttribute("aria-expanded","false");
  });
}

languageSelects.forEach((languageSelect)=>{
  let trigger=languageSelect.querySelector(".language-trigger");
  let options=languageSelect.querySelector(".language-options");

  trigger.addEventListener("click",()=>{
    let shouldOpen=options.hidden;
    closeLanguageMenus();
    options.hidden=!shouldOpen;
    trigger.setAttribute("aria-expanded",String(shouldOpen));
  });

  options.addEventListener("click",(event)=>{
    let option=event.target.closest(".language-option");
    if(!option){
      return;
    }

    let selectedLanguage=option.innerText;
    languageSelects.forEach((select)=>{
      select.querySelector(".language-current").innerText=selectedLanguage;
      select.querySelectorAll(".language-option").forEach((languageOption)=>{
        languageOption.setAttribute("aria-selected",String(languageOption.innerText===selectedLanguage));
      });
    });

    closeLanguageMenus();
    trigger.focus();
  });
});

document.addEventListener("click",(event)=>{
  if(!event.target.closest(".language-select")){
    closeLanguageMenus();
  }
});

document.addEventListener("keydown",(event)=>{
  if(event.key==="Escape"){
    closeLanguageMenus();
  }
});

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













 