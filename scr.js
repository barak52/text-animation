function breaktextbro(){
    var h1 =document.querySelector("h1")
    var h1text = h1.textContent
    var splitted= h1text.split("");
    var half =splitted.length/2
   //  console.log(splitted)
    
    var clutt =""
   splitted.forEach(function(elem,index){
     if(index<half){
       clutt += `<span class ="a">${elem}</span>`
     }else{
        clutt += `<span class ="b">${elem}</span>`
     }
   })
   // console.log(clutt)
   
   h1.innerHTML = clutt
   
}

breaktextbro()

gsap.from("h1 .a",{
    y:100,
    opacity:0 ,
    duration:0.7,
    scrub:2,
    stagger:0.15,
    delay:0.2,
})

gsap.from("h1 .b",{
    y:100,
    opacity:0 ,
    duration:0.7,
    scrub:2,
    stagger:-0.15,
    delay:0.2,
})

