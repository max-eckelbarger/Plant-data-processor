document.getElementById('soilForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    let pH = document.getElementById('pH').value;
    let moisture = document.getElementById('moisture').value;

    let response = await fetch('https://your-ngrok-url/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pH: pH, moisture: moisture })
    });

    let result = await response.json();
    document.getElementById('results').innerText = JSON.stringify(result);
});
