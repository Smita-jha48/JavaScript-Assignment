function replaceNextCharacter(input){
    let output_string = "";
    for(let i=0;i<input.length;i++){
        if(input[i]=='z')
        output_string += 'a'
        else if(input[i] == 'Z')
        output_string += 'A'
        else
        output_string += String.fromCharCode(input.charCodeAt(i) +1);
    }
    return output_string;

}

let replaceNextCharacter_Arrow = (input)=>{
    let output_string = "";
    for(let i=0;i<input.length;i++){
        if(input[i]=='z')
        output_string += 'a'
        else if(input[i] == 'Z')
        output_string += 'A'
        else
        output_string += String.fromCharCode(input.charCodeAt(i) +1);
    }
    return output_string;
}

console.log(replaceNextCharacter("codeacademy"))
console.log(replaceNextCharacter_Arrow("codeacademy"))