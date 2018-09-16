module.exports = function longestConsecutiveLength(array) {
  // your solution here
  var foundSet = new Set(array);
    var sequenceLength = 0;
    for (var i = 0; i < array.length; i++) {
        var startVal = array[i]; 
        if (!foundSet.has(startVal-1)){    
           var endVal = startVal;  
            while(foundSet.has(endVal)){
                endVal++;      
            }
            sequenceLength = (sequenceLength > endVal - startVal)? 
            sequenceLength: endVal - startVal;
        }   
    }        
    return sequenceLength;
}