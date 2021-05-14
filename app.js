let valueInEuro = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){
  
    let valueInDollar = valueInEuro * 1.2;
   
    return valueInDollar;
}
module.exports = { fromEuroToDollar };

const fromDollarToYen = function(valueInDollar){
 
    let valueInYen = valueInDollar * 109.36;
 
    return valueInYen;
}
module.exports = { fromDollarToYen };

const fromYenToPound = function(valueInYen){
   
    let valueInPound = valueInYen * 0.0065;
  
    return valueInPound;
}
module.exports = {fromYenToPound };