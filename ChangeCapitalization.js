
function change_case(text) {
    let output_string= "";
    for (let i = 0; i < text.length; i++) {
        let character = text.charAt(i);
        if(character === character.toLowerCase()){
            output_string += text.charAt(i).toUpperCase()

        }
        else{
            output_string += text.charAt(i).toLowerCase()
        }
    }
    return output_string;
}

let change_case_arrow = (text)=>{
    let output_string= "";
    for (let i = 0; i < text.length; i++) {
        let character = text.charAt(i);
        if(character === character.toLowerCase()){
            output_string += text.charAt(i).toUpperCase()

        }
        else{
            output_string += text.charAt(i).toLowerCase()
        }
    }
    return output_string;

}

console.log(change_case("MeRRy hAD a LITTle lAMp"));
console.log(change_case_arrow("mErrY Had A littLE LamP"));
