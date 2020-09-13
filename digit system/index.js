'use strict'


/**
 * Making prototype function for String obj
 *
 * @return {string} returning reverse string
*/

String.prototype.reverse = function(){
    return this.split("").reverse().join("");
}



/**
 * Converting your digit into any digit system (without sign checking.)
 * For example: convertTo(10,2) returns 101
 * For example: conrtTo(-10,2) returns -101
 * @param {number} digit Your digit
 * @param {number} system Your digit system
 * @return {string} returning reverse string
*/

function convertTo(digit, system){
    let sign = "", result = "";
    if (digit === 0) return 0;
    if(digit < 0){
        digit = -digit;
        sign = "-";
    }
    if(checkParams(digit, system) !== false){
        while(digit > 0){
            result = result + digit % system;
            digit = Math.floor(digit / system);
        }
        return sign + (result.reverse());
    } else return "Error: Check your params";

}

function checkParams(digit,system){
    if (typeof(digit) !== "number" || 
        typeof(system) !== "number" || system === 1) return false;
}


console.log(convertTo(105,2));