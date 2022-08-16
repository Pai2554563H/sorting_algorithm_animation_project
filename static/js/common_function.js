// PAI HUANG
// initial conditions ++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getRndomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

// random
function RandomArr(){

    var n_bars=document.getElementById('n_bars').value
    var temp_arr=[]
    for(var i=0;i<n_bars;i++){
        temp_arr.push(getRndomInteger(-100, 100))
    }

    return temp_arr
}

//nearly sorted
function NearlyArr(){

    var n_bars=document.getElementById('n_bars').value
    // near 3 elements
    var temp_bars=Math.trunc(n_bars/3)
    var temp_element=[]
    // extend 3 elements to n_bars elements
    var temp_arr=[]
    for(var i=0;i<temp_bars;i++){
        temp_element.push(getRndomInteger(-100, 100))
    }

    // sorted arr
    temp_element=temp_element.sort(function(a,b){return a-b;}).concat()
    //alert(n_bars%3)

    // generate nearly sorted array
    switch(n_bars%3) {
        case 1:
            for(var i=0;i<temp_bars;i++){
                temp_arr.push(getRndomInteger(temp_element[i]-10, temp_element[i]+20))
                temp_arr.push(temp_element[i])
                temp_arr.push(getRndomInteger(temp_element[i]-20, temp_element[i]+10))
            }
            temp_arr.push(getRndomInteger(temp_element[temp_bars-1]-10, temp_element[temp_bars-1]+10))
            break;
        case 2:
            temp_arr.push(getRndomInteger(temp_element[0]-10, temp_element[0]+10))
            for(var i=0;i<temp_bars;i++){
                temp_arr.push(getRndomInteger(temp_element[i]-10, temp_element[i]+20))
                temp_arr.push(temp_element[i])
                temp_arr.push(getRndomInteger(temp_element[i]-20, temp_element[i]+10))
            }
            temp_arr.push(getRndomInteger(temp_element[temp_bars-1]-10, temp_element[temp_bars-1]+10))
            break;
        default:
            for(var i=0;i<temp_bars;i++){
                temp_arr.push(getRndomInteger(temp_element[i]-10, temp_element[i]+20))
                temp_arr.push(temp_element[i])
                temp_arr.push(getRndomInteger(temp_element[i]-20, temp_element[i]+10))
            };
   } 

   return temp_arr
}

//reversed sorted
function ReversedArr(){

    var n_bars=document.getElementById('n_bars').value
    var temp_arr=[]
    for(var i=0;i<n_bars;i++){
        temp_arr.push(getRndomInteger(-100, 100))
    }
    
    return temp_arr.sort(function(a,b){return b-a;}).concat()
}

//few unique sorted
function UniqueArr(){

    var n_bars=document.getElementById('n_bars').value
    var temp_arr=[]
    for(var i=0;i<n_bars;i++){
        temp_arr.push(getRndomInteger(-3, 3)*20)
    }

    return temp_arr
}

// show speed
function displaySpeed(){
    document.getElementById('display_speed').innerText = "x"+Number(document.getElementById("speed").value)/5
}

// show tips
$(document).ready(function(){
    $("[data-toggle='tooltip']").tooltip(); 
    $('[data-toggle="popover"]').popover();   
});