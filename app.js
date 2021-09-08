// let abc = 'このページは大切です';

// const aiu ='私は動かせる存在ではありません。';


// let index = 0;
// while(index < 5){
// //繰り返したい命令
// index++;//←これは絶対必要
// };


// console.document='abc'

// const konnichiha = (arg) => {
// if (abc > arg) {

//     console.log('これはサンプル１');
// } else {
//     console.log('これはサンプル４４')
// }
// };

// konnichiha(4);

// const sample4 ={
//     color:'pink',
//     size:'large',
//     aisatsu: () =>{
//             console.log('aisatsu');


// console.log(sample4.color);

// //オブジェクト

//     }
// };

// console.log(window)

// console.log(document)

// console.log(document.getElementsByName('buttton')[0])

// document-getElementsByName('button')[0]-addEventListener('click', ()=> {

//     window.alert('これは作動していますか？');
// });


window.onload = function(){
    var dateObj = new Date();
    var y = dateObj.getFullYear();
    var m = dateObj.getMonth() + 1;
    var d = dateObj.getDate();
    var yb = "日月火水木金土".charAt(dateObj.getDay());
    document.getElementById("currentDate").innerHTML = y+"年"+m+"月"+d+"日("+yb+")";
    }



    $(function() {
        $('html,body').animate({ scrollTop: 0 }, '1');
    });
// window.onload = function(){
// var jikan = new Date();
// var h = jikan.gethours();
// var mi = jikan.getminutes();
// var se = jikan.getsecond();

// document.getElementById("currenttime").innerHTML=h+mi+se;

// }

// window.onload = function(){
// alert("ページの更新が完了しました");
// }
