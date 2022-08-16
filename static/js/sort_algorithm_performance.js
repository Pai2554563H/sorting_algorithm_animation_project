// PAI HUANG

// test each sort algorithms //
var serial_number=2
// document.getElementById("running_success").style.display="none";
// document.getElementById("running_wait").style.display="none";

// compute running time
function time2stamp(){
    var d = new Date();
    return Date.parse(d)+d.getMilliseconds();
}


// add log on table
function TableAddLog(logs,initial_condition){
    
    var temp_table=document.getElementById("performacne_logs_table").insertRow()
    var c0=temp_table.insertCell(0)
    var c1=temp_table.insertCell(1)
    var c2=temp_table.insertCell(2)
    var c3=temp_table.insertCell(3)
    var c4=temp_table.insertCell(4)

    c0.innerHTML=serial_number
    c1.innerHTML=document.getElementById("n_array").value
    c2.innerHTML=document.getElementById("n_bars").value
    c3.innerHTML=initial_condition

    serial_number+=1

    for (var i=0; i< logs.length;i++){
        c4.innerHTML= c4.innerHTML+logs[i].alg+' ['+logs[i].time+'] << '
        }
}

function ComputePerformance(arr_function, arr_condition){

    var n_array=document.getElementById("n_array").value

    var log=[]
    var timestamp_bubble=0
    var timestamp_insert=0
    var timestamp_select=0
    var timestamp_quick=0
    var timestamp_merge=0

    var time_start
    var time_end


    for (var i=0; i<n_array;i++){
        var temp_array_1=arr_function()
        var temp_array_2=temp_array_1.concat()
        var temp_array_3=temp_array_1.concat()
        var temp_array_4=temp_array_1.concat()
        var temp_array_5=temp_array_1.concat()

        //bubble
        time_start=time2stamp()
        bubbleSort(temp_array_1)
        time_end=time2stamp()
        timestamp_bubble+=time_end-time_start

        //insert
        time_start=time2stamp()
        insertionSort(temp_array_2,temp_array_2.length)
        time_end=time2stamp()
        timestamp_insert+=time_end-time_start

        //select
        time_start=time2stamp()
        selectionSort(temp_array_3)
        time_end=time2stamp()
        timestamp_select+=time_end-time_start

        //quick
        time_start=time2stamp()
        quickSort(temp_array_4,0,temp_array_4.length-1)
        time_end=time2stamp()
        timestamp_quick+=time_end-time_start

        //merge
        time_start=time2stamp()
        mergeSort(temp_array_5)
        time_end=time2stamp()
        timestamp_merge+=time_end-time_start
    }

    log.push({alg:'Bubble', time:timestamp_bubble/n_array});
    log.push({alg:'Insert', time:timestamp_insert/n_array});
    log.push({alg:'Select', time:timestamp_select/n_array});
    log.push({alg:'Quick', time:timestamp_quick/n_array});
    log.push({alg:'Merge', time:timestamp_merge/n_array});
    //alert('hello')


    //sorted logs
    log.sort(function(a,b){return a.time-b.time})
    // $("#running_success").show();
    // $("#running_wait").hide();

    TableAddLog(log, arr_condition)
}

function abledButtons(){
    // get 'pre' element in 'algorithm_code' as list
    var temp=document.getElementById("buttons")
    var buttons_set=temp.getElementsByTagName("button")
    var len=buttons_set.length
    
    for (var i =0; i<len; i++){
        buttons_set[i].classList.remove('disabled')
    }
}

function disabledButtons(){
    // get 'pre' element in 'algorithm_code' as list
    var temp=document.getElementById("buttons")
    var buttons_set=temp.getElementsByTagName("button")
    var len=buttons_set.length
    
    for (var i =0; i<len; i++){
        buttons_set[i].classList.add('disabled')
    }

}
// call performance by condition
function RandomPerformance(){

    // check input
    if(document.getElementById('n_array').value<1){
        alert("Please enter a number >= 1 for number of arrays!")
        return
    }
    if(document.getElementById('n_array').value%1!=0){
        alert("Please enter an integer for number of arrays!")
        return
    }
    if(document.getElementById('n_bars').value<3){
        alert("Please enter a number >= 3 for number of bars!")
        return
    }
    if(document.getElementById('n_bars').value%1!=0){
        alert("Please enter an integer for number of bars!")
        return
    }

    document.getElementById("running_success").style.display="none";
    document.getElementById("running_wait").style.display="block";
    disabledButtons()

    setTimeout(() => {
        ComputePerformance(RandomArr, 'Random')
        document.getElementById("running_success").style.display="block";
        document.getElementById("running_wait").style.display="none";
        abledButtons()
    }, 100);

}
function NearlyPerformance(){
    if(document.getElementById('n_array').value<1){
        alert("Please enter a number >= 1 for number of arrays!")
        return
    }
    if(document.getElementById('n_array').value%1!=0){
        alert("Please enter an integer for number of arrays!")
        return
    }
    if(document.getElementById('n_bars').value<3){
        alert("Please enter a number >= 3 for number of bars!")
        return
    }
    if(document.getElementById('n_bars').value%1!=0){
        alert("Please enter an integer for number of bars!")
        return
    }

    document.getElementById("running_success").style.display="none";
    document.getElementById("running_wait").style.display="block";
    disabledButtons()

    setTimeout(() => {
        ComputePerformance(NearlyArr, 'Nearly Sorted')
        document.getElementById("running_success").style.display="block";
        document.getElementById("running_wait").style.display="none";
        abledButtons()
    }, 100);

}
function ReversedPerformance(){
    if(document.getElementById('n_array').value<1){
        alert("Please enter a number >= 1 for number of arrays!")
        return
    }
    if(document.getElementById('n_array').value%1!=0){
        alert("Please enter an integer for number of arrays!")
        return
    }
    if(document.getElementById('n_bars').value<3){
        alert("Please enter a number >= 3 for number of bars!")
        return
    }
    if(document.getElementById('n_bars').value%1!=0){
        alert("Please enter an integer for number of bars!")
        return
    }

    document.getElementById("running_success").style.display="none";
    document.getElementById("running_wait").style.display="block";
    disabledButtons()

    setTimeout(() => {
        ComputePerformance(ReversedArr, 'Reversed')
        document.getElementById("running_success").style.display="block";
        document.getElementById("running_wait").style.display="none";
        abledButtons()
    }, 100);

}
function UniquePerformance(){
    if(document.getElementById('n_array').value<1){
        alert("Please enter a number >= 1 for number of arrays!")
        return
    }
    if(document.getElementById('n_array').value%1!=0){
        alert("Please enter an integer for number of arrays!")
        return
    }
    if(document.getElementById('n_bars').value<3){
        alert("Please enter a number >= 3 for number of bars!")
        return
    }
    if(document.getElementById('n_bars').value%1!=0){
        alert("Please enter an integer for number of bars!")
        return
    }

    document.getElementById("running_success").style.display="none";
    document.getElementById("running_wait").style.display="block";
    disabledButtons()

    setTimeout(() => {
        ComputePerformance(UniqueArr, 'Few Unique')
        document.getElementById("running_success").style.display="block";
        document.getElementById("running_wait").style.display="none";
        abledButtons()
    }, 100);

}