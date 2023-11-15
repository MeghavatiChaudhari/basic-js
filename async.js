// var ans = new Promise((res,rej)=>{
//     if(true){
//         return res();
//     }else{
//         return rej();
//     }
// })

// ans.then(function(){
//     console.log("resolve hogaya tha")
// }).catch(function(){
//     console.log("reject hua tha ")
// })


// var ans = new Promise((res,rej)=>{
//     return res("sabse pahile ghar aao");
// })

// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise((res,req)=>{
//         return res("gate kholo aur gate lagao");
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise((res,rej)=>{
//         return res("khana pakao aur so jao");
//     })
// })

// var p4 = p3.then(function(data){
//     console.log(data)
// })



// function abcd(){
//     fetch('https://randomuser.me/api/')
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }
// abcd()

async function abcd(){
    let raw = await fetch('https://randomuser.me/api/')
    let ans = await raw.json();
    console.log(ans);
    // console.log('hb')
}
abcd()