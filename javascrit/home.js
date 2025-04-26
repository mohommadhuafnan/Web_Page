function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
}

// Update date and time every second
setInterval(updateDateTime, 1000);
// Initial call to display immediately on load
updateDateTime();

alert("Welcome to our juice bar We are open and ready to serve you the freshest most delicious juices today Come on in and fuel your day with us");

