let adviceCount = 0; // Counter for keeping track of advice count

// Function to get a random advice from the API
function get_random_advice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = `"${data.slip.advice}"`; // Add quotation marks to the advice
      adviceCount++;
      document.getElementById('adviceNumber').innerHTML = `Advice #${adviceCount}`;
      document.getElementById('advice').innerHTML = advice;
    })
    .catch(error => console.error('Error:', error));
}

// Add event listener to generate button
document.getElementById('generateBtn').addEventListener('click', get_random_advice);
