var add = document.querySelector('#add');
var isstatus = document.querySelector('h5');

var flag =0 ;
add.addEventListener('click',function(){
    if(flag==0){
        add.innerHTML='friends';
        isstatus.style.color='green';
        flag = 1;
    }else{
        add.innerHTML='add friend';
        isstatus.style.color='red';
        flag=0;
    }
})

