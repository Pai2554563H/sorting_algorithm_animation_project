// PAI HUANG
// Bubble Sort
function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < ( arr.length - i -1 ); j++) {
            if(arr[j] > arr[j+1]) {
              var temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j+1] = temp
            }
        }
    }
}

// Insertion Sort
function insertionSort(arr, n)
{
    let i, key, j;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// Selection Sort
function selectionSort(arr){
    for (var i = 0; i < arr.length; i++) {
        let min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i != min) {
            [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
        }
    }
    return arr
}


// Quick Sort
function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          quickSort(items, index, right);
      }
  }
  return items;
}

function partition(items, left, right) {
  var pivot   = items[getRndomInteger(left, right) ], //middle element
      i       = left, //left pointer
      j       = right; //right pointer
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          var temp = items[i];
          items[i] = items[j];
          items[j] = temp;

          i++;
          j--;
      }
  }
  return i;
}


  // Merge Sort
  function mergeSort(array) {
    const half = array.length / 2
  
    if (array.length < 2){
      return array
    }
  
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }
  
  function merge(left, right) {
      let arr = []
  
      while (left.length && right.length) {
          if (left[0] < right[0]) {
              arr.push(left.shift())
          } else {
              arr.push(right.shift())
          }
      }
  
      return [ ...arr, ...left, ...right ]
  }