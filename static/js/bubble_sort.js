// PAI HUANG
// create and play sort animation
function playDemo(InputArr)
{
	document.getElementById('algorithm_demo').innerText = ""
    activeCode(1)
    var array=InputArr
    var len = array.length
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var bar_weith=(document.getElementById("algorithm_demo_frame").clientWidth-20)/len

    //save div element with array
    var ele_set = []

    // get speed
    speed=Number(document.getElementById("speed").value)/5
    stand_time=500 //ms

    // operation function for element
    let operation = {
        // compare element adding status
        compare(x,y){
            for (let l = 0; l < len; l++) {
                ele_set[l].removeClass('active')
            }
            ele_set[x].addClass('active')
            ele_set[y].addClass('active')
        },
        // exchange position
        changePosition(x,y){
            let left_dis_1 = ele_set[x].left
            let left_dis_2 = ele_set[y].left
            // update position(left)
            ele_set[x].move('left',left_dis_1 + bar_weith)
            ele_set[y].move('left',left_dis_2 - bar_weith)
            ele_set = ele_set.arrExchange(x, y)
        },
        // Bubble sort
        bubbleSort(){
            let time = 0;

            for (let j = 0; j < len; j++) {
                    setTimeout(() => {

                        activeCode(2)
                        for (let i = 0; i < len - 1 -j; i++) {
                                setTimeout(() => {

                                    activeCode(3)
                                    operation.compare(i,i + 1)

                                    activeCode(4)
                                    if (array[i] > array[i + 1]) {
                                        array = array.arrExchange( i, i + 1)
                                        setTimeout(() => {
                                            operation.changePosition(i,i + 1)

                                            activeCode(5)
                                        }, 200/speed);
                                    }
                                    setTimeout(() => {
                                        if(i == len - 2 - j){
                                            ele_set[len - 1 - j].addClass('sorted')

                                            activeCode(7)
                                        }
                                    }, 300/speed);
                                }, i*stand_time/speed);    
                        }
                        if(j==len - 1){
                            ele_set[0].addClass('sorted')

                            activeCode(9)
                        }
                    }, time);
                    
                time += (len - j)*stand_time/speed;
            }
        },
    }

    //create BarDiv elements
    //ele->element
    for (let index = 0; index < len; index++) {
        let ele = new BarDiv(array[index], index*bar_weith, bar_weith*0.8)
        ele_set.push(ele)
    }

    // Bubble sort
    
    operation.bubbleSort()
}
// prepare for sort
activeCode(0)