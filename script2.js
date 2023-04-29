// Get the input and output elements
var refVoltageInput = document.getElementById("ref-voltage");
var numBitsInput = document.getElementById("num-bits");
var analogDisplay = document.getElementById("analog-value");

// Function to calculate the analog voltage
function calculate() {
    // Get the input values
    var refVoltage = document.getElementById("ref-voltage").value;
    var numBits = document.getElementById("num-bits").value;
    var anaVoltage = document.getElementById("analog-voltage").value;
    // Calculate the output voltage
    

     
        // Calculate 2^n
        var twoToTheN = Math.pow(2, numBits);
        
        // Calculate the digital output using the formula
       
        var outputVoltage = (twoToTheN * anaVoltage) / refVoltage;
        // Round the digital output to the nearest integer
        outputVoltage = Math.round(outputVoltage);
        
        // Return the digital output
        
      
  
    // Display the output voltage

    var BinaryVolatge = outputVoltage.toString(2).padStart(numBits, '0');
    document.getElementById("Binary-output").innerHTML = BinaryVolatge;
    document.getElementById("output-voltage").innerHTML = outputVoltage.toFixed(2);


}
  
// function displayFormula() {
//     var formulaContainer = document.getElementById("formula-container");
//     formulaContainer.innerHTML = "Vr = V / (2^n - 1)";
//   }
  
//   function displaySteps() {
//     var stepsContainer = document.getElementById("steps-container");
//       stepsContainer.innerHTML = "1. Divide the reference voltage by the total number of possible output levels.\n"
//       "2. Round the quotient down to the nearest integer.\n"
//       "3.Add 1 to the result of step 2.\n"
//       "4.Multiply the result of step 3 by the output level.\n"
//       "5.Subtract the output level from the result of step 4.";
//   }
  
/*Digital to Analog Converter Resolution = Reference Voltage/(2^Number of Bits-1)
                                           Vr = V/(2^n-1)
This formula uses 3 Variables
Variables Used
Digital to Analog Converter Resolution - (Measured in Volt) - Digital to analog converter resolution it refers to the change in analog voltage corresponding to LSB bit increment at the input.
Reference Voltage - (Measured in Volt) - Reference voltage corresponding to logic 1.
Number of Bits - Number of bits is a basic unit of information in digital communications which is represented as logical state*/

