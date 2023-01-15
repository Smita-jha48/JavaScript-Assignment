function concatenate(string_array){
    let string1 = string_array[0].substring(1);
    let string2 = string_array[1].substring(1);
    return string1+string2;
}

let concatenate_arrow = (string_array)=>{
    let string1 = string_array[0].substring(1);
    let string2 = string_array[1].substring(1);
    return string1+string2;
}
console.log(concatenate(["code", "academy"]));
console.log(concatenate_arrow(["code", "academy"]));