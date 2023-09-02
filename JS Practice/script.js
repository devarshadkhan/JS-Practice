//  document.querySelector('button').addEventListener('click',function(){
//         document.querySelector('button').style.background='red'
//         document.querySelector('button').style.color='white'
//         document.querySelector('button').style.border='1px solid'
//         document.querySelector('button').style.padding='10px'
//         document.querySelector('.black')
//             document.body.style.color='black'
//         })
//     function black(){
// document.body.style.backgroundColor='lightpink'
// document.body.style.Color='red'
//     }


// function change(AK){
//     document.body.style.backgroundColor='Ak';
//     document.querySelector('.changeBackGround').forEach(function(A){
//             A.addEventlistener('click',function(){
//                 change(this.textcontent);
//             })
//     });
// }

// // calculate number
//  document.querySelector('button').addEventListener('click',function(){
//      var value2 = parseInt(document.getElementById("val1").value);
//      var value1 = parseInt(document.getElementById("val2").value);
//      let value3 = parseInt(document.getElementById('val3').value);
//      var ans = document.getElementById('ans');
//      ans.value=value1+value2+value3;
//  });


// 2 table print

// for(var i=2; i<=21; i=i+2){
//     console.log(i);
// }

// function arsh(a){
//     return a
// }
// let test=arsh(50)
// console.log(test);



 // This is normal Function
// function Add(a,b,c){
//     return a+b+c
// }
// let result = Add(10,10,10)
// console.log(result);



// This closure function

function Add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
// let result = Add(5);
// let data=result(5);
// let collect=data(5);

let res = Add(5)(5)(5)
console.log(res);