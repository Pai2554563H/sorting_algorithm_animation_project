// PAI HUANG
// create and play sort animation
function playDemo(InputArr)
{
	document.getElementById('algorithm_demo').innerText = ""
    var array=InputArr
    var len = array.length
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var bar_weith=(document.getElementById("algorithm_demo_frame").clientWidth-20)/len
    activeCode(1)

    //save div element with array
    var ele_set = []

    // get speed
    speed=Number(document.getElementById("speed").value)/5
    stand_time=500 //ms

    let n = 1

    // operation function
    let operation = {
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

        // wait Proinuse progress
        waitTime(time){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, time);
            } )
        },

        // timestamp for exchange bars
        exchangeBar(key, compare_key, delay){
            setTimeout(() => {
                activeCode(4)
                operation.changePosition(compare_key, bar_weith) 
                operation.changeStyle(compare_key, 'compare')
                operation.changePosition(key, -bar_weith)
                operation.changeStyle(key, 'active')
                array[ compare_key + 1] = array[compare_key]
            }, delay);
        },

        insertionSort(key){
            new Promise(async (resolve) =>{

                if(key!=1){
                    activeCode(5)
                    await operation.waitTime(2*stand_time/speed)
                }
                activeCode(3)
                temp = array[key]
                let compare_key = key - 1
                operation.changeStyle(key, 'active')
                operation.changeStyle(key-1, 'compare')
    
                // move bar down
                let bottom_dis = ele_set[key].bottom
                ele_set[key].move_bottom(bottom_dis-100)
                await operation.waitTime(2*stand_time/speed)

                let time = 0
                for (; array[compare_key] > temp && compare_key >= 0;compare_key--) {
                    
                    let delay = ( key - compare_key - 1)*stand_time/speed
                    operation.exchangeBar(key, compare_key, delay)
                    time = delay + 2*stand_time/speed
                }

                setTimeout(() => {
                    // move bar back
                    activeCode(5)
                    let bottom_dis_back = ele_set[key].bottom
                    ele_set[key].move_bottom(bottom_dis_back+100)

                    for (let i = key; i > compare_key + 1; i--) {
                        ele_set.arrExchange(i,i-1)   
                    }
                    array[compare_key + 1] = temp
                    resolve()
                }, time);

            }).then(() => {
                if(n < len){
                    activeCode(2)
                    operation.insertionSort(n++)
                }else{
                    for (let j = 0; j < len; j++) {
                        ele_set[j].removeClass('active')
                        ele_set[j].removeClass('compare')
                        ele_set[j].addClass('sorted')
                        //alert(array)
                        activeCode(7)
                    }
                }
            })
        },
    }

    for (let index = 0; index < len; index++) {
        let ele = new BarDiv(array[index], index*bar_weith, bar_weith*0.8)
        ele_set.push(ele)
    }

    // insertion sort

    operation.insertionSort(1)

}

activeCode(0)
