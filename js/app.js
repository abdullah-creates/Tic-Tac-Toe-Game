var box_0 = document.getElementById('0');
var box_1 = document.getElementById('1');
var box_2 = document.getElementById('2');
var box_3 = document.getElementById('3');
var box_4 = document.getElementById('4');
var box_5 = document.getElementById('5');
var box_6 = document.getElementById('6');
var box_7 = document.getElementById('7');
var box_8 = document.getElementById('8');

count = 0;

function textshow(){
    if(count % 2 === 0){
        return 'O';
    }

    else{
        return 'X';
    }
}

function reset(){
    box_0.innerHTML = "";
    box_1.innerHTML = "";
    box_2.innerHTML = "";
    box_3.innerHTML = "";
    box_4.innerHTML = "";
    box_5.innerHTML = "";
    box_6.innerHTML = "";
    box_7.innerHTML = "";
    box_8.innerHTML = "";
    count = 0;
}


function game(number){
    var text = textshow();

    if(number === 0 && box_0.innerHTML === ""){
        box_0.innerHTML = text;
        count++;
        console.log(box_0.innerHTML);
        
    }
    else if(number === 1 && box_1.innerHTML === ""){
        box_1.innerHTML = text;
        count++;
        console.log(box_1.innerHTML);
    }
    else if(number === 2 && box_2.innerHTML === ''){
        box_2.innerHTML = text;
        count++;
    }
    else if(number === 3 && box_3.innerHTML === ''){
        box_3.innerHTML = text;
        count++;
    }
    else if(number === 4 && box_4.innerHTML === ''){
        box_4.innerHTML = text;
        count++;
    }
    else if(number === 5 && box_5.innerHTML === ''){
        box_5.innerHTML = text;
        count++;
    }
    else if(number === 6 && box_6.innerHTML === ''){
        box_6.innerHTML = text;
        count++;
    }
    else if(number === 7 && box_7.innerHTML === ''){
        box_7.innerHTML = text;
        count++;
    }
    else if(number === 8 && box_8.innerHTML === ''){
        box_8.innerHTML = text;
        count++;
    }

    winO();
    winX();

    if(count === 9){
        alert('Draw!');
        reset();
    }
}


function winO(){
    var container0 = box_0.innerHTML;
    var container1 = box_1.innerHTML; 
    var container2 = box_2.innerHTML;
    var container3 = box_3.innerHTML;
    var container4 = box_4.innerHTML;
    var container5 = box_5.innerHTML;
    var container6 = box_6.innerHTML;
    var container7 = box_7.innerHTML;
    var container8 = box_8.innerHTML;

    if(container0 === 'O' && container1 === 'O' && container2 === 'O'){
        alert('\'O\' Win!');
        reset();
    }
    else if(container3 === 'O' && container4 === 'O' && container5 === 'O'){
        alert('\'O\' Win!');
        reset();
    }
    else if(container6 === 'O' && container7 === 'O' && container8 === 'O'){
        alert('\'O\' Win!');
        reset();
    }
    else if(container0 === 'O' && container3 === 'O' && container6 === 'O'){
        alert('\'O\' Win!');
        reset();
    }
    else if(container1 === 'O' && container4 === 'O' && container7 === 'O'){
        alert('\'O\' Win!');
        reset();
    }
    else if(container2 === 'O' && container5 === 'O' && container8 === 'O'){
        alert('\'O\' Win!');
        reset();
    }
    else if(container0 === 'O' && container4 === 'O' && container8 === 'O'){
        alert('\'O\' Win!');
        reset();
    }
    else if(container2 === 'O' && container4 === 'O' && container6 === 'O'){
        alert('\'O\' Win!');
        reset();
    }

   
}

function winX(){
    var container0 = box_0.innerHTML;
    var container1 = box_1.innerHTML; 
    var container2 = box_2.innerHTML;
    var container3 = box_3.innerHTML;
    var container4 = box_4.innerHTML;
    var container5 = box_5.innerHTML;
    var container6 = box_6.innerHTML;
    var container7 = box_7.innerHTML;
    var container8 = box_8.innerHTML;

    if(container0 === 'X' && container1 === 'X' && container2 === 'X'){
        alert('\'X\' Win!');
        reset();
    }
    else if(container3 === 'X' && container4 === 'X' && container5 === 'X'){
        alert('\'X\' Win!');
        reset();
    }
    else if(container6 === 'X' && container7 === 'X' && container8 === 'X'){
        alert('\'X\' Win!');
        reset();
    }
    else if(container0 === 'X' && container3 === 'X' && container6 === 'X'){
        alert('\'X\' Win!');
        reset();
    }
    else if(container1 === 'X' && container4 === 'X' && container7 === 'X'){
        alert('\'X\' Win!');
        reset();
    }
    else if(container2 === 'X' && container5 === 'X' && container8 === 'X'){
        alert('\'X\' Win!');
        reset();
    }
    else if(container0 === 'X' && container4 === 'X' && container8 === 'X'){
        alert('\'X\' Win!');
        reset();
    }
    else if(container2 === 'X' && container4 === 'X' && container6 === 'X'){
        alert('\'X\' Win!');
        reset();
    }



}

