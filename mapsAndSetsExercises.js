//Quick Question #1
//What does the following code return?

new Set([1,1,2,2,3,4]) // {1,2,3,4}




//Quick Question #2
//What does the following code return?

[...new Set("referee")].join("")
//"ref"




//Quick Questions #3
//What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//because it is a different reference, it will create 2 objects inside the map, 
//the keys will look the same [1,2,3] but each one will have a different value
//either true or false. 
//0: {Array(3) => true}
//1: {Array(3) => false}



//hasDuplicate
//Write a function called hasDuplicate which accepts an array 
//and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false


function hasDuplicate(arr){
    return (new Set(arr)).size !== arr.length;
}
//OR//
const hasDuplicate = (arr) => (new Set(arr)).size !== arr.length;


//vowelCount
//Write a function called vowelCount which accepts a string and 
//returns a map where the keys are numbers and the values are the 
//count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str){
    const newMap = new Map();
    const lowerCaseString = str.toLowerCase();
    const vowelsArray = ["a", "e", "i", "o", "u"];
    for (let letter of lowerCaseString){
        if (vowelsArray.includes(letter)){
            if (newMap.has(letter)){
                let val = newMap.get(letter)
                newMap.set(letter, (val + 1))  
            } else {
                newMap.set(letter, 1)
            }
        }
    }
    return newMap;
}