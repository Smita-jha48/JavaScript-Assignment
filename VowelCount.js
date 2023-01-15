function CountVowels(input){
    let count =0;
    for(let i=0;i<input.length;i++){
       if(input[i] == 'a' || input[i]== 'e' || input[i]=='i' || input[i]=='o' || input[i]=='u'){
           count++;
       }
    }
    return count;
}

let CountVowels_arrow = (input)=>{
    let count =0;
    for(let i=0;i<input.length;i++){
       if(input[i] == 'a' || input[i]== 'e' || input[i]=='i' || input[i]=='o' || input[i]=='u'){
           count++;
       }
    }
    return count;
}

console.log(CountVowels("codeacademy"))
console.log(CountVowels_arrow("codeacademy"))