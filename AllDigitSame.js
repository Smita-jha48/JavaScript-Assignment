

function CheckSameDigit(num){
    var digit = parseInt(num%10) //finding last digit

    while(num!=0){
        var CurrentDigit = parseInt(num%10);
        num=parseInt(num/10);
        if(CurrentDigit != digit)
        return false;

    }
    return true;
}

let CheckSameDigitArrow = (num) =>{
    var digit = parseInt(num%10)
    while(num!=0){
        var CurrentDigit = parseInt(num%10)
        num=parseInt(num/10);
        if(CurrentDigit != digit)
        return false;

    }
    return true;
}

module.exports = { CheckSameDigit, CheckSameDigitArrow };

// console.log(CheckSameDigit(22233))
// console.log(CheckSameDigitArrow(544555))

