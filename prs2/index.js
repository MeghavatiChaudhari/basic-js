var ans = document.querySelector('#container');
var icon = document.querySelector('i');

ans.addEventListener("dblclick", function(){
    icon.style.transform='translate(-50%,-50%) scale(1)';
    icon.style.opacity=0.8;
    setTimeout(function(){
    icon.style.opacity=0;
    },2000)
})
 
 

