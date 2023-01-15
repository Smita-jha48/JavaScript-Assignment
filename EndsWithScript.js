function check_Ends_With_Script(input_string){
    if(input_string.length<6)return false
    else{
        let end_string= input_string.substring(input_string.length-6)
        if(end_string==="Script")
        return true;
        else
        return false;
    }
    
}
let check_Ends_With_Script_Arrow = (input_string)=>{
    if(input_string.length<6)return false
    else{
        let end_string= input_string.substring(input_string.length-6)
        if(end_string==="Script")
        return true;
        else
        return false;
    }
    
}

console.log(check_Ends_With_Script("javaScript"))
console.log(check_Ends_With_Script_Arrow("javaScript"))
