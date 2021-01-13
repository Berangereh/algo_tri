const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    var digits = data.toString().split(' ');
    var array = digits.map(Number)

    let binarySearch = (array, target, start=0, end=array.length-1) => {

        let midPoint = ~~(start + (end - start)/2)
    
        switch(true){
            case array[start] === target:
                return array[start]
            case array[midPoint] === target:
                return array[midPoint]
            case array[end] === target:
                return array[end]
            case end - start === 0:
                return false
            case array[midPoint] > target:
                return binarySearch(array, target, start+1, midPoint-1)
            case array[midPoint] < target:
                return binarySearch(array, target, midPoint+1, end-1)    
        }
        return false
    }


    let binarySearchTwoSum = (array, sum) => {
        let sortedArray = array.sort()

        let nums = []
        let prevNums = []
        
        for (let i in sortedArray){
            let addend = binarySearch(sortedArray, sum-sortedArray[i])
            if (!!addend && !prevNums.includes(array[i]) && !prevNums.includes(addend)){
                nums.push([sortedArray[i], addend])
                prevNums.push(addend)
            }
        }
        return nums
    }
    let sum = 17;

    console.log(binarySearchTwoSum(array, sum));

}); 