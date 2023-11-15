var main = document.querySelector("#main");
var crsr = document.querySelector('.cursor');

main.addEventListener("mousemove",function(dets){
    // console.log("hry");
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})