//Write a function to find the average value of numbers in an array. Sum the elements and divide by the length of the array.
function calculateAverage(numbers: number[]):number{
 if (numbers.length === 0) {
    return 0;//to handle an empty array and avoid division by zero
 }
 const sum:number= numbers.reduce((acc,num) => acc + num,0);
 return sum/ numbers.length;
}
//example usage:
const numberArray: number[] =[10,20,30,40,50];
const average: number = calculateAverage(numberArray);
console.log("Average:",average);