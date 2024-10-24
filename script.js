document.getElementById('soilForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    let pH = document.getElementById('pH').value;
    let moisture = document.getElementById('moisture').value;

    let response = await fetch('https://4b86-34-82-201-233.ngrok-free.app/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pH: pH, moisture: moisture })
    });

    let result = await response.json();
    document.getElementById('results').innerText = JSON.stringify(result);
});
