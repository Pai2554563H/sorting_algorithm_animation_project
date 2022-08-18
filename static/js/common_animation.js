// PAI HUANG
// var canvas_weith=document.getElementById("algorithm_demo_frame").clientWidth-50;
// 600

//BarDiv class
function BarDiv(height,left,width){
    this.dom = null
    this.height = height
    // position
    this.left = left
    this.width=width
    if (height<0){
        this.bottom=height
    } else{
        this.bottom=0
    }
    this.createBarDiv()
}

BarDiv.prototype = {
    // create point
    createBarDiv: function(){
        var algorithm_demo = document.getElementById('algorithm_demo')
        //ele=element
        var ele = document.createElement('div')
        // div settings
        ele.style.left = this.left + 'px'
        ele.style.width = this.width +'px'
        ele.style.bottom = this.bottom+'%'

        if (this.height<0){
            ele.style.height = -this.height + "%"
        }else{
            ele.style.height = this.height + "%"
        }

        // display to 'algorithm_demo'
        var user_arr=document.getElementById("user_input").value
        var n_element=0
        if (user_arr!=""){
            n_element=(user_arr.split(",")).length
        } else{
            n_element=document.getElementById('n_bars').value
        }

        if(n_element<=30){
            ele.innerHTML = `<span>${this.height}</span>`
        }
        algorithm_demo.appendChild(ele)
        this.dom = ele
        return this
    },
    // change status
    addClass: function(name){
        this.dom.classList.add(name)
        return this
    },
    // remove status
    removeClass: function(name){
        this.dom.classList.remove(name)
        return this
    },
    move(position,dis){
        this.dom.style[position] = dis + 'px'
        this[position] = dis
        return this
    },
    move_bottom(dis){
        this.dom.style.bottom = dis + '%'
        this.bottom = dis
        return this
    },
}

// exchange element of array
Array.prototype.arrExchange = function(p1, p2){
    let v =  this[p1]
    this[p1] = this[p2]
    this[p2] = v
    return this
}

function UserInputDemo(){
    // generate bar chart by array  
    var user_arr=document.getElementById("user_input").value

    if (user_arr!=""){
        // change string to number
        let numArr=user_arr.split(",").map(Number)
        for (var i=0;i<numArr.length;i++){
            if(isNaN(numArr[i])){
                alert("Please enter an array of numbers without special symbols!")
                return
            }
            if(numArr[i]>100 || numArr[i]<-100){
                alert("Please enter an array of numbers in [-100, 100]!")
                return
            }
        }
        playDemo(numArr)
    } else{
        alert("Please enter array first. There is no user input!")
        return
    }
}
function RandomDemo(){
    // clear user's input
    document.getElementById('user_input').value= ""

    // check input
    if(document.getElementById('n_bars').value<3){
        alert("Please enter a number >= 3 for number of bars!")
        return
    }
    if(document.getElementById('n_bars').value%1!=0){
        alert("Please enter an integer for number of bars!")
        return
    }

    playDemo(RandomArr())
}
function NearlyDemo(){
    document.getElementById('user_input').value= ""

    // check input
    if(document.getElementById('n_bars').value<3){
        alert("Please enter a number >= 3 for number of bars!")
        return
    }
    if(document.getElementById('n_bars').value%1!=0){
        alert("Please enter an integer for number of bars!")
        return
    }

    playDemo(NearlyArr())
}
function ReversedDemo(){
    document.getElementById('user_input').value= ""

    // check input
    if(document.getElementById('n_bars').value<3){
        alert("Please enter a number >= 3 for number of bars!")
        return
    }
    if(document.getElementById('n_bars').value%1!=0){
        alert("Please enter an integer for number of bars!")
        return
    }

    playDemo(ReversedArr())
}
function UniqueDemo(){
    document.getElementById('user_input').value= ""

    // check input
    if(document.getElementById('n_bars').value<3){
        alert("Please enter a number >= 3 for number of bars!")
        return
    }
    if(document.getElementById('n_bars').value%1!=0){
        alert("Please enter an integer for number of bars!")
        return
    }

    playDemo(UniqueArr())
}

function activeCode(code_part){
    // get 'pre' element in 'algorithm_code' as list
    var temp=document.getElementById("algorithm_code")
    var code_part_set=temp.getElementsByTagName("p")
    var len=code_part_set.length
    
    for (var i =0; i<len; i++){
        code_part_set[i].classList.remove('active')
    }

    code_part_set[code_part].classList.add('active')
}
