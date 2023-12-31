/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const guide = new Map([['I', 1],['V', 5],['X', 10],['L', 50],['C', 100],['D', 500],['M', 1000]]);
  var last = 0;
  var curr = 0;
  var total= 0;
  for (var i=0; i<s.length; i++){
    curr = guide.get(s.charAt(i));
    if (total > 0){
      if (curr > last) total = total + curr - 2 * last;
      else total = total + curr;
    } else {
      total = curr;
    }
    last = curr;
  }
  return total;
};

// console.log(romanToInt('III')); //3
// console.log(romanToInt('LVIII')); //58
console.log(romanToInt('MCMXCIV')); //1994
