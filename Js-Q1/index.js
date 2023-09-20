/*When user clicks button, obtain the string of numbers user has keyed in, then convert the entire string into an array */
/*
*@Dev Adding an event listener to the button
*/
document.getElementById('calculate').addEventListener('click', function() {
  /**@Dev obtaining the list of items the users have typed into the input elem */
  var list = document.getElementById('main-input').value;
  list = list.replaceAll(' ', '');
  list = list.split(',');

  list = list.map((item, index) => {
    return parseInt(item);
  })

  var operator = document.getElementById('operator').value;

  switch (operator) {
    case 'sum':
      /* code for working out the sum */
      var sum = 0;
      for (var i = 0; i < list.length; i++) {
        sum += parseInt(list([i]));
      }
      document.getElementById('output').innerHTML(sum);
      break;
    case 'average':
      for (var i = 0; i < list.length; i++) {
        sum += parseInt(list([i]));
      }
      document.getElementById('output').innerHTML = sum / list.length;
      break;
    case 'min':
      var min = list[0];
      for (var i = 0; i < list.length; i++) {
        if (list[i] < min) {
          min = list[i];
        }
      }
      document.getElementById('output').innerHTML = min;
      break;
    case 'max':
      var max = list[0];
      for (var i = 0; i < list.length; i++) {
        if (list[i] > max) {
          max = list[i];
        }
      }
      document.getElementById('output').innerHTML = max;
      break;
    case 'median':
      //sort the list
      for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list.length; j++) {
          if (list[i] < list[j]) {
            var temp = list[i]; //temp has now elem at ith idx
            list[i] = list[j]; //elem at ith idx is now the elem at the jth idx
            list[j] = temp;  //temp elem is now the elem at jth idx
          }
        }
      }
      //get median
      var median = 0;
      if (list.length % 2 == 0) {
        median = (list[list.length / 2] + list[(list.length / 2) - 1]) / 2;
      } else {
        median = list[Math.floor(list.length / 2)];
      }
      document.getElementById('output').innerHTML = median;
      break;
    case 'mode':
      /* very experimental code is going to go here */
      var modeMap = {};
      var maxCount = 0;
      var modes = [];

      for (var i = 0; i < list.length; i++) {
        var num = list[i];
        modeMap[num] = (modeMap[num] || 0) + 1;

        if (modeMap[num] > maxCount) {
          maxCount = modeMap[num];
          modes = [num]; // Reset modes array with the current mode
        } else if (modeMap[num] === maxCount && modes.indexOf(num) === -1) {
          modes.push(num); // Add this number to the modes array if it's not already present
        }
      }

      document.getElementById('output').innerHTML = modes.join(', ');
    case 'range':
      var min = list[0];
      var max = list[0];
      for (var i = 0; i < list.length; i++) {
        if (list[i] < min) {
          min = list[i];
        }
        if (list[i] > max) {
          max = list[i];
        }
      }
      document.getElementById('output').innerHTML = max - min;
      break;
    default:
      document.getElementById('output').innerHTML = 'Invalid operator';
      break;
  }
})
