// Form submission with animation
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! We have received your message.`);
        document.getElementById('form').reset(); // Reset form
    } else {
        alert("Please fill out all fields.");
    }
});

// ETA Feature (mockup)
document.getElementById('get-eta').addEventListener('click', function () {
    const destination = document.getElementById('destination').value;
    const etaResult = document.getElementById('eta-result');
    
    if (destination) {
        // For demo purposes, we are using a hardcoded ETA
        const eta = "15 minutes"; // Mock ETA, ideally, you'd use an API to calculate ETA
        etaResult.innerHTML = `<p>Estimated Time of Arrival: <strong>${eta}</strong> from ${destination}.</p>`;
    } else {
        etaResult.innerHTML = "<p>Please enter a destination.</p>";
    }
});


document.getElementById("contactIcon").addEventListener("click", function() {
    // Open a WhatsApp chat window or add functionality here.
    window.open("https://wa.me/1234567890", "_blank"); // Replace with the contact number
});