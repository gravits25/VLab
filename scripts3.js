// Get the input and output elements
var refVoltageInput = document.getElementById("ref-voltage");
var numBitsInput = document.getElementById("num-bits");
var analogDisplay = document.getElementById("analog-value");

// Function to calculate the analog voltage
function calculate() {
    // Get the input values
    var refVoltage = document.getElementById("ref-voltage").value;
    var numBits = document.getElementById("num-bits").value;
  
    // Calculate the output voltage
    var outputVoltage = refVoltage / (Math.pow(2, numBits) - 1);
  
    // Display the output voltage
    document.getElementById("output-voltage").innerHTML = outputVoltage.toFixed(2);
  }
  