
const inputArray = [1,2,3,4,5]
var largest=-1
// Regular function to get largest even number

function GetLargestEven(element, index, array){
  if(element%2==0){
      if(element>largest)
      largest=element;
  }
}

// Arrow function to get largest even number
 
let GetLargestEvenArrow = (element, index, array)=>{
    if(element%2==0){
        if(element>largest)
        largest=element;
    }
}

inputArray.forEach(GetLargestEven)
inputArray.forEach(GetLargestEvenArrow)
console.log(`${largest} is the greatest even number in the array`)


