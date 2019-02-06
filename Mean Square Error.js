var solution = function(firstArray, secondArray) {
    var i;
    var sum = 0; 
    
    for ( i = 0; i < firstArray.length; i++) {
     sum  += Math.pow((Math.abs(firstArray[i]-secondArray[i])),2);
     
    }
    
  return Math.floor(sum/firstArray.length);
    
  }