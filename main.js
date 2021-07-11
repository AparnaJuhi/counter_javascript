var add = document.getElementById('add');
var sub = document.getElementById('sub');

var int = document.getElementById('number');
var integer = 0;
add.addEventListener('click',function(){
    integer+=1
    if (integer>=50){
        integer=50;
    }
    int.innerHTML=integer;
})
sub.addEventListener('click',function(){
    integer-=1
    if (integer<=0){
        integer=0;
    }
    int.innerHTML=integer;
})
