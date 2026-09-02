// for creating custom cursor
let crsr = document.querySelector("#cursor");
let crsrBlr = document.querySelector("#cursor-blur");
let h1All = document.querySelectorAll("#nav h1");

h1All.forEach((ele)=>{
    ele.addEventListener(("mouseenter"),()=>{
        crsr.style.display = 'block';
        crsr.style.scale = 4;
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "1px solid white";
        crsr.style.zIndex = "999";
    })
    ele.addEventListener(("mouseleave"),()=>{
        // crsr.style.display = 'none';
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "0px solid white";
        crsr.style.zIndex = "0";
    })
});


document.addEventListener(("mousemove"),(dets)=>{
    // console.log(dets.x);//this is the current x (left) value of mouse
    // console.log(dets.y);// this is the current y (top) value of mouse.
    crsr.style.left = (dets.clientX -15) + "px";
    crsr.style.top = (dets.clientY -15) + "px";
    // crsr.style.display = 'block';

});
document.addEventListener(("mousemove"),(dets)=>{
    // console.log(dets.x);//this is the current x (left) value of mouse
    // console.log(dets.y);// this is the current y (top) value of mouse.
    crsrBlr.style.left = (dets.clientX -300) + "px";
    crsrBlr.style.top = (dets.clientY -500) + "px";
});


gsap.to("#nav",{
    backgroundColor : "rgba(0, 0, 0, 0.96)",
    duration : .5,
    height : "120px",
    scrollTrigger:{
        trigger :"#nav",
        scroller : "body",
        // markers : true,
        start : "top 0", //it means nav bina viewport par aaye transittion start kar dega.
        end : "top -20%", // jaise hi scroll karte time 20% nav section ke andar tak viewport aa jayega to animation complete ho jayega.
        scrub :1
    }
});
gsap.to("#main",{
    backgroundColor : "black",    
    scrollTrigger:{
        trigger : "#main",
        scroller : "body",
        start :"top -40%",
        end : "top -80%",
        scrub : 5,
    }
})


//when we will enter the about us section then we want to trigger this sec.
gsap.from("#about-us, #about-us .img-div",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start: "top 130%",
        end : "top 100%",
        scrub:2
    }
})

gsap.from("#page3 .green-box",{
    scale:0.8,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".green-box",
        scroller:"body",
        start: "top 80%",
        end:"top 60%",
        scrub : 1,
    }
})
// now we will trigger page 3
gsap.from("#page3 #image-container",{
    scale:0.8,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start: "top 80%",
        end:"top 25%",
        scrub : 1,
    }
})
// page 4 trigger
gsap.from("#page4 #food-container",{
    scale:0.8,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#food-container",
        scroller:"body",
        start: "top 50%",
        end:"top 40%",
        scrub : 1,
    }
})
// left & right qoute trigger 
gsap.from("#quote-left",{
    y:-70,
    x:-70,
    // opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#quote-left",
        scroller:"body",
        start: "top 50%",
        end:"top 40%",
        scrub : 2,
    }
})
gsap.from("#quote-right",{
    y:70,
    x:70,
    // opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#quote-left",
        scroller:"body",
        start: "top 50%",
        end:"top 40%",
        scrub : 2,
    }
})
// #three-div-container > h2 for gsap
gsap.from("#three-div-container #text",{
    y:70,
    duration:2,
    scrollTrigger:{
        trigger:"#three-div-container #text",
        scroller:"body",
        start: "top 90%",
        end:"top 80%",
        scrub: 2,
    }
})