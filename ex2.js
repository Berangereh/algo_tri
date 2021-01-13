const { count } = require('console');
const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    var digits = data.toString().split(' ');
    var array = digits.map(Number)

    let view = (array) => {
        let count = 1;
        let i = 0;        

        if (array[i] < array[i + 1]){

                 count+=1;
                 i ++;

         }
         else {
            console.log(count);

         }
         console.log(array);
    }


});
