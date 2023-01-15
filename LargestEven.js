
var largest=-1
// Regular function to get largest even number

function GetLargestEven(inputArray){
    let newEvenArray = [];
  for(let i=0; i<inputArray.length; ++i) {
    if(inputArray[i] % 2 === 0)
        newEvenArray.push(inputArray[i]);
  }
  return Math.max(...newEvenArray);
}

// Arrow function to get largest even number
 
let GetLargestEvenArrow = (inputArray)=>{
    let newEvenArray = [];
  for(let i=0; i<inputArray.length; ++i) {
    if(inputArray[i] % 2 === 0)
        newEvenArray.push(inputArray[i]);
  }
  return Math.max(...newEvenArray);
}

console.log(GetLargestEven([1,2,3,4,5]));
console.log(GetLargestEvenArrow([1,2,3,4,5]));



