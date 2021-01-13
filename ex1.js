const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {

    var digits = data.toString().split(' ');
    var array = digits.map(Number);

        function bruteForceTwoSum(array, sum){
            let nums = []            
            let prevNums = []

            for(let x in array){
                for(let y in array){
                    if (array[x] + array[y] === sum){
                        if(!!nums.length){ 
                            if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
                                prevNums.push(array[x])
                                nums.push([array[x], array[y]])
                            } 
                        } else {
                            nums.push([array[x], array[y]])
                            prevNums.push(array[x])
                        }
                    }

                }

                return nums

            }

        };

        let sum = 17;
        console.log(bruteForceTwoSum(array, sum));

});



// class Document {

//     constructor(file, countComparison = 0){
//         this.file = file;
//         this.countComparison = countComparison;
//     }
//         //All your sorting method 
//          bruteForceTwoSum (file, sum) {
//             let nums = []
            
//             let prevNums = []
//             this.countComparison = 0 
        
//             for(let x in file){
//                 for(let y in file){
//                     if (file[x] + file[y] === sum){
//                         if(!!nums.length){ 
//                             if (!prevNums.includes(file[x]) && !prevNums.includes(file[y])) {
//                                 prevNums.push(file[x])
//                                 nums.push([file[x], file[y]])
//                             } 
//                         } else {
//                             nums.push([file[x], file[y]])
//                             prevNums.push(file[x])
//                         }
//                         this.countComparison += 1 

//                     }
//                 }            return nums

//             }
//             console.log(nums);

//         };



// };


// readFile = (file) => {
//     const fs = require('fs');
//     fs.readFile(file, 'utf8', (error, data) => {
//         if (error) {
//             console.error(error.message);
//             return ;
//         }
//         console.log(data);
//         myDocument.bruteForceTwoSum(data)
//         console.log(`Tri à bulles: ${myDocument.countComparison} comparisons - [${myDocument.bruteForceTwoSum(data)}]`);
//        // myDocument.insertionSort(data)
//         //console.log(`Tri par insertion: ${myDocument.countComparison} comparisons - [${myDocument.insertionSort(data)}]`);
//     });
// }


// const myDocument = new Document(process.argv[2])
// readFile(myDocument.file)


