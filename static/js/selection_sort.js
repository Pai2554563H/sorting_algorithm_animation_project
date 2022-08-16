// PAI HUANG
// create and play sort animation
function playDemo(InputArr)
{
	document.getElementById('algorithm_demo').innerText = ""
    var array=InputArr
    var len = array.length
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var bar_weith=(document.getElementById("algorithm_demo_frame").clientWidth-20)/len

    //save div element with array
    var ele_set = []

    // get speed
    speed=Number(document.getElementById("speed").value)/5
    stand_time=500 //ms

    // operation function
    let operation = {
        // compare points
        changeStyle(n, name){
            for (let l = 0; l < len; l++) {
                ele_set[l].removeClass(name)
            }
            ele_set[n].addClass(name)
        },

        changePosition(n,dis){
            let left_position = ele_set[n].left
            ele_set[n].move('left',left_position + dis)            
        },

        selectionSort(){
            // selection sort
            let time = 0
            let minIndex

            for (let i = 0; i < len; i++) {
                activeCode(1)
                    setTimeout(() => {
                        
                        minIndex = i
                        operation.changeStyle(minIndex, 'minimum')
                        activeCode(2)
                        for (let j = i+1; j < len; j++) {
                                setTimeout(() => {

                                    activeCode(3)
                                    operation.changeStyle(j, 'active')
                                    operation.changeStyle(minIndex, 'minimum')
                                    if (array[j] < array[minIndex]) {
                                        minIndex=j
                                        activeCode(4)
                                    }

                                }, (j-i-1)*stand_time/speed);
                        }

                        setTimeout(() => {

                            activeCode(6)
                            array = array.arrExchange(i, minIndex)
                            operation.changePosition(i, bar_weith*(minIndex - i)   )
                            operation.changePosition(minIndex, -(bar_weith*(minIndex - i)))
                            ele_set.arrExchange(i, minIndex)
                            ele_set[i].addClass('sorted')

                            if(i==len-1){
                                ele_set[minIndex].removeClass('minimum')
                                ele_set[minIndex].addClass('sorted')
                                activeCode(8)
                            }

                        }, (len - i)*stand_time/speed);

                    }, time);
                    
                time += (len - i+1)*stand_time/speed+200/speed;
            }
        },
    }

    //create BarDiv elements
    //ele->element
    for (let index = 0; index < len; index++) {
        let ele = new BarDiv(array[index], index*bar_weith, bar_weith*0.8)
        ele_set.push(ele)
    }

    // Select sort
    operation.selectionSort()

}

// prepare for sort
activeCode(0)