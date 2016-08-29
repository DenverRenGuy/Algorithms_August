/*
Insert At
Given array, index, and one additional value, insert the value into array at given index.
You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).

Remove At
Given array and an index in the array, remove and return the array value for that index.
Do this without using built-in array methods except pop(). Think of PopFront(arr) as
equivalent to RemoveAt(arr,0).

Swap Array Pairs
Swap positions of successive pairs of values of given array. If length is odd, do not
change final element. For [1,2,3,4], return [2,1,4,3]. For [false,true,42], return [true,false,42].

Array Remove Duplicates
Sara is looking to hire an awesome web developer and has received applications from various
sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array,
remove duplicate values. Because array elements are already in order, all duplicate values will
be grouped together.

*/

//Insert At
function insertAt(arr, index, newVal){
    var newArr = [];

    for(i=0;i<index;i++){
        newArr[i]=arr[i];
    }
    newArr[index] = newVal;

    for(j=index;j<arr.length; j++ ){
        newArr[j+1]=arr[j]
    }

    return newArr;
}

//Function Test

var arr = [1,2,3,4,5,6,7,8,9];
var index = 4;
var newVal = 10;

console.log(insertAt(arr, index, newVal));

///////////////////////////////////////////////////////////

//RemoveAt
function removeAt(arr, index){
    var returnVal = arr[index];

    for(i=index;i<arr.length-1;i++)
    {
        arr[i] = arr[i+1];
    }

    arr.length = arr.length-1;

    return returnVal;
}

//Function Test
var arr = [1,2,3,4,5,6,7,8,9];
var index = 4;

console.log("Value: " + removeAt(arr, index) + ", Array: " + arr);

////////////////////////////////////////////////////////////

//Swap Array pairs
function swapPairs(arr){
    var tempFront;
    var tempBack;

    if(arr.length % 2 ==0)
    {
        for(i=0;i<arr.length/2;i+=2)
        {
            tempFront = arr[i];
            tempBack = arr[arr.length-i-2];
            arr[i] = arr[i+1]
            arr[i+1] = tempFront;
            arr[arr.length-i-2] = arr[arr.length-i-1];
            arr[arr.length-i-1] = tempBack;
        }
    }

    if(arr.length % 2 !=0)
    {
        for(i=0;i<arr.length/2-1;i+=2)
        {
            tempFront = arr[i];
            tempBack = arr[arr.length-i-3];
            arr[i] = arr[i+1]
            arr[i+1] = tempFront;
            arr[arr.length-i-3] = arr[arr.length-i-2];
            arr[arr.length-i-2] = tempBack;
        }
    }

    return arr;
}

//Function Test
var arrOdd = [1,2,3,4,5,6,7,8,9];
var arrEven = [10,9,8,7,6,5,4,3];

console.log("Odd array test: " + swapPairs(arrOdd) + ", Even Array test: " + swapPairs(arrEven));

//////////////////////////////////////////////////////////////

//Array Remove Duplicates (Arr pre sorted);
function removeDuplicates(sortedArr){
    if(sortedArr.length == 1)
    {
        console.log("Arr is length 1");
        return sortedArr;
    }

    else if(sortedArr.length == 2 && sortedArr[0] == sortedArr[1])
    {
        sortedArr.length = 1;
        console.log("Arr is NOW length 1");
        return sortedArr;
    }

    else
    {
        var current = 1;
        var i = 0;
        var iterate = 1;
        while(i+iterate<sortedArr.length-1)
        {
        
            if(sortedArr[current] == sortedArr[i])
            {
                sortedArr[current] = sortedArr[current+iterate];
                iterate++;
                console.log("IF Component: " + sortedArr);
            }
            else{
                sortedArr[current+1] = sortedArr[current+iterate];
                current++;
                i++;
                console.log("Else Component: " + sortedArr);
            }

            console.log("Current Arr: " + sortedArr);
        }

        sortedArr.length = current;
        return sortedArr;
    }
}

//Test Function

var arr = [1,1,2,2,3,4,5,6,7,7,8,9,10,10];

console.log("Dups removed: " + removeDuplicates(arr));
