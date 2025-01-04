// b1

function findsmallest(small){
return Math.min(...small);
} 
console.log(findsmallest([30 , 45 , 60 , 7]));

// b2

function alpha (str){
return Array.from(str) .sort().join('');
}
console.log(alpha("hello"));

// b3
function maybee(num){
    return  num % 2  === 0 ? "even" : "odd";
}
console.log(maybee(9));
// b4
function maybe(num){
    return  num.filter( num => num % 2 === 0);
}
document.write(maybe([1, 2,3 ,4 ,5 ,5 ,6 ,7 ,8, 9,]));
// b5

function getabs (arr){
    return arr.reduce((sum,num)=>sum + Math.abs(num),0);
}
console.log(getabs([-1 ,-3,-5,-4,-10,0]));

// m1
function factorial (n){
if (n ===0) return 1;
return n * factorial( n - 1 );
}
console.log(factorial(8));

// m2

function num (arr){
    return arr.filter(item => typeof item !=="string");
}
console.log(num(['Ayham', 3, 7, 'Alaa', 13, 'coding']));
// m3

function addup (n) {
  
    return (n * (n + 1)) /2;
}
console.log(addup(8))

// m4
function MinMaxLengthAverage(arr){

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    const average = arr.reduce((sum,num) => sum +num,0)/length;
return [max , min , length , average];
}
console.log(MinMaxLengthAverage([7, 13, 3, 77, 100]));

// a1

function countwords(str) {
    const word = str.trim().split(/\s+/);
    return word.length;
}
console.log(countwords('hello from CodingAcademy!'));

// a2

function MultiplyByLength(arr) {
    const length = arr.length; 
    return arr.map(element => element * length);  
}

console.log(MultiplyByLength([4, 2, 5]));  

// a3
function checkEnding(str1, str2) {
    return str1.endsWith(str2);  
}

console.log(checkEnding("CodingSchool", "Ac")); 
// a4
 



function doubleChar(str) {
    let result = '';  
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];  
    }
    return result;  
}

console.log(doubleChar('Coding'));  




// a5

function findIndex(arr, element) {
    return arr.indexOf(element);  }

console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));  
