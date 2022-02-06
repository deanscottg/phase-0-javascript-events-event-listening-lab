
// function addingEventListener(){
//     const input =document.getElementById('input');
//    input.addEventListener('click',function(){
//        alert('You are tearing me apart,Lisa!');
//    });
// }

const input = document.querySelector('input');
function addAlert(){
    alert('You are tearing me apart, Lisa!')
}
function addingEventListener(){
    input.addEventListener('click',addAlert)
}
