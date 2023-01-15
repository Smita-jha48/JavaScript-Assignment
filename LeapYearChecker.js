function isLeapYear(year){
   return ( (year%4 ==0 && year%100!=0) ? true : (year%100 == 0) ? true: false ); 
}
console.log(isLeapYear(2003));