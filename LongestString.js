
function longest_string(string_array){
    let longest_length_string="";
    for(let i=0;i<string_array.length;i++){
         if(string_array[i].length>longest_length_string.length){
         longest_length_string = string_array[i]
         }

    }
    return longest_length_string;
}
let longest_string_arrow =(string_array)=>{
    let longest_length_string="";
    for(let i=0;i<string_array.length;i++){
         if(string_array[i].length>longest_length_string.length){
         longest_length_string = string_array[i]
         }

    }
    return longest_length_string;
    
}

console.log(longest_string(["we", "love", "code", "academy"]))
console.log(longest_string_arrowrefre(["we", "love", "code", "academy"]))