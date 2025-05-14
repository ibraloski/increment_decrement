let numberbox = document.querySelector("#numberbox");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let reset = document.querySelector("#reset");

let my_number = 0;

plus.addEventListener('click',function(){
    let exist_number = numberbox.value;
    my_number = exist_number;
    my_number++;
    numberbox.value = my_number;
});

minus.addEventListener('click',function(){
    let exist_number = numberbox.value;
    my_number = exist_number;
    my_number--;
    numberbox.value = my_number;
});

reset.addEventListener('click',function(){
    my_number = 0;
    numberbox.value = my_number;
});
